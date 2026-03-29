# 📊 Arsitektur & Flow Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User's Browser                           │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ catatan-kekasih.html                                   │ │
│  │ ┌──────────────────────────────────────────────────┐  │ │
│  │ │ 1. PIN Form (visible)                            │  │ │
│  │ │    [______] [Unlock]                             │  │ │
│  │ └──────────────────────────────────────────────────┘  │ │
│  │ ┌──────────────────────────────────────────────────┐  │ │
│  │ │ 2. Notes (hidden until authenticated)            │  │ │
│  │ │    • Letter 1                                    │  │ │
│  │ │    • Letter 2                                    │  │ │
│  │ │    • Letter 3                                    │  │ │
│  │ └──────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                           ↕ HTTP Requests
        ┌──────────────────────────────────────┐
        │     Vercel Serverless Backend        │
        │                                      │
        │  ┌──────────────────────────────┐   │
        │  │ POST /api/auth               │   │
        │  │ • Receive PIN from user      │   │
        │  │ • Hash & validate            │   │
        │  │ • Return JWT token           │   │
        │  └──────────────────────────────┘   │
        │                                      │
        │  ┌──────────────────────────────┐   │
        │  │ GET /api/notes               │   │
        │  │ • Verify JWT token           │   │
        │  │ • Return notes data          │   │
        │  │ (Notes never sent without    │   │
        │  │  valid token!)               │   │
        │  └──────────────────────────────┘   │
        └──────────────────────────────────────┘
                           ↕
        ┌──────────────────────────────────────┐
        │         Environment Variables        │
        │                                      │
        │ JWT_SECRET = "hidden-key"            │
        │ (Only on Vercel, not in source code) │
        └──────────────────────────────────────┘
```

## Authentication Flow

```
Browser                          Backend
  │                                │
  │  User enters PIN "111025"      │
  │                                │
  ├─────── POST /api/auth ────────→│
  │         { pin: "111025" }      │
  │                                │ sha256("111025")
  │                                │ = 6fe8ff7e770f...
  │                                │ ✓ Match!
  │                                │ jwt.sign({...})
  ├─── {token: "eyJ..."} ←─────────┤
  │                                │
  │ localStorage.token = "eyJ..."  │
  │                                │
  │  User clicks view notes        │
  │                                │
  ├─ GET /api/notes ───────────────→
  │  Authorization: Bearer eyJ...  │
  │                                │ jwt.verify()
  │                                │ ✓ Valid token!
  ├─ {notes: [...]} ←──────────────┤
  │                                │
  │ Display notes to user          │
  │ 🔓 Unlocked!                   │
  │                                │
```

## Security Layers

```
Layer 1: Frontend Validation
┌─────────────────────────────┐
│ PIN Form                    │
│ • Masked input (type=password)
│ • maxlength check           │
└─────────────────────────────┘
           ↓
Layer 2: Network Transport
┌─────────────────────────────┐
│ HTTPS (Production)          │
│ • Encrypted in transit      │
│ • CORS enabled for safety   │
└─────────────────────────────┘
           ↓
Layer 3: Backend Validation
┌─────────────────────────────┐
│ • SHA-256 Hash Comparison   │
│ • Plaintext PIN never logs  │
└─────────────────────────────┘
           ↓
Layer 4: Session Management
┌─────────────────────────────┐
│ • JWT Token signed with     │
│   SECRET_KEY (backend only) │
│ • 24-hour expiration        │
│ • Token stored in           │
│   localStorage (frontend)   │
└─────────────────────────────┘
           ↓
Layer 5: Resource Protection
┌─────────────────────────────┐
│ • Notes endpoint checks     │
│   Bearer token              │
│ • Only authenticated users  │
│   can access notes          │
│ • Invalid token = 401       │
└─────────────────────────────┘
```

## Data Flow: Step by Step

```
STEP 1: User opens catatan-kekasih.html
├─ Check localStorage for token
├─ If valid token exists → Skip to STEP 4
└─ If no token → Show PIN form

STEP 2: User enters PIN
├─ User types in PIN input
├─ Click "Unlock Notes"
└─ Form prevents submission if empty

STEP 3: Frontend sends to Backend
├─ POST http://localhost:3000/api/auth
│  ├─ Headers: { "Content-Type": "application/json" }
│  └─ Body: { "pin": "111025" }
│
└─── Backend receives ────────────────────→
     ├─ Extract PIN from request
     ├─ Hash it: sha256("111025")
     ├─ Compare with stored hash
     ├─ Match! ✓
     ├─ Generate JWT token
     │  ├─ Payload: { authenticated: true, timestamp: ... }
     │  ├─ Secret: JWT_SECRET (from env)
     │  └─ Expiry: 24 hours
     │
     └─ Send back token ───────────────────→

STEP 4: Frontend stores token
├─ localStorage["love-notes-token"] = "eyJ..."
├─ Remove PIN from input
├─ Hide PIN form
└─ Show "Loading notes..." message

STEP 5: Frontend requests notes
├─ GET http://localhost:3000/api/notes
│  ├─ Headers: {
│  │   "Authorization": "Bearer eyJ..."
│  │ }
│
└─── Backend receives ────────────────────→
     ├─ Extract token from Authorization header
     ├─ Verify JWT signature (using SECRET_KEY)
     ├─ Check expiration (24 hours)
     ├─ All checks pass! ✓
     ├─ Load notes data
     │  ├─ English version
     │  ├─ Indonesian version
     │  └─ etc.
     │
     └─ Send notes back ───────────────────→

STEP 6: Frontend displays notes
├─ Parse response
├─ Get language preference from localStorage
├─ Filter notes for selected language
├─ Render HTML
├─ Remove "Loading..." message
└─ Display notes! 🎉

STEP 7: Session expires
├─ After 24 hours, token becomes invalid
├─ Next request returns 401 error
├─ Frontend catches this
├─ localStorage["love-notes-token"] is cleared
├─ PIN form becomes visible again
└─ User must re-enter PIN
```

## Deployment Architecture

```
Local Development
─────────────────
┌─────────────────────┐
│   Your Computer     │
│   ┌─────────────┐   │
│   │server.js    │   │
│   │(port 3000)  │   │
│   └─────────────┘   │
│         ↑           │
│         │(API calls)
│   ┌─────────────┐   │
│   │ HTML File   │   │
│   │ (browser)   │   │
│   └─────────────┘   │
└─────────────────────┘


Production (Vercel)
───────────────────
┌──────────────────────────────┐
│     Vercel Infrastructure    │
│                              │
│ ┌────────────────────────┐   │
│ │ Serverless Functions   │   │
│ │ • /api/auth.js         │   │
│ │ • /api/notes.js        │   │
│ │ (Auto-scaled, CDN)     │   │
│ └────────────────────────┘   │
│           ↑                   │
│           │(API calls)        │
│ ┌────────────────────────┐   │
│ │   HTML Hosting         │   │
│ │ (GitHub Pages, Netlify)│   │
│ └────────────────────────┘   │
│           ↑                   │
│────────── Internet ──────────→ Users
└──────────────────────────────┘
```

## Technology Stack

```
Frontend
────────
• HTML5 (Semantic markup)
• CSS3 (Custom properties, Grid, Flexbox)
• JavaScript ES8+ (async/await)
• localStorage API (session persistence)
• Fetch API (HTTP requests)

Backend
───────
• Node.js 18.x (Runtime)
• jsonwebtoken (JWT generation & verification)
• crypto.subtle (SHA-256 hashing)

Deployment
──────────
• Vercel Serverless Functions
• Environment Variables (.env)
• CORS-enabled

Security
────────
• SHA-256 hashing (PIN validation)
• JWT tokens (session management)
• Bearer token authentication
• HTTPS (production only)
• Environment secrets (JWT_SECRET)
```

## Decision Tree: Single vs API

```
Should I use the API approach?

  ├─ "I want notes backend-stored"
  │  └─→ YES ✓ Use this API approach
  │
  ├─ "I want better security"
  │  ├─ "Casual inspection prevention"
  │  │  └─→ Both approaches work
  │  └─ "True security (backend auth)"
  │     └─→ YES ✓ Use this API approach
  │
  ├─ "I want to learn backend"
  │  └─→ YES ✓ Use this API approach
  │
  ├─ "I want simplicity"
  │  ├─ "Static hosting (no backend)"
  │  │  └─→ NO, use frontend-only hash
  │  └─ "Don't have backend knowledge"
  │     └─→ YES ✓ Start here (we provide all code)
  │
  └─ "I want scalability"
     └─→ YES ✓ API approach scales better
```

---

Diagram ini show gimana semua komponen bekerja together. Ada questions? Check QUICK_START.md atau BACKEND_SETUP.md!
