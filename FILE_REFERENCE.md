# 📁 File Reference Guide

## Overview

```
d:\send0moka/
├── 📱 Frontend Files
│   ├── index.html                    (Portfolio landing page)
│   ├── health-routine.html           (Health routine page)
│   ├── today-i-learned.html          (T.I.L journal page)
│   └── catatan-kekasih.html          (Love Notes + API integration) ⭐
│
├── 🔌 Backend API
│   └── api/
│       ├── auth.js                   (POST /api/auth - validate PIN)
│       └── notes.js                  (GET /api/notes - return data)
│
├── 🚀 Server & Config
│   ├── server.js                     (Local dev server)
│   ├── package.json                  (Dependencies + config)
│   ├── vercel.json                   (Vercel deployment config)
│   ├── .env.example                  (Environment template)
│   └── .gitignore                    (Git ignore rules)
│
├── 📖 Documentation
│   ├── README.md                     (Original project README)
│   ├── QUICK_START.md                (⭐ Start here!)
│   ├── BACKEND_SETUP.md              (Detailed backend guide)
│   ├── ARCHITECTURE.md               (System design & flow)
│   └── FILE_REFERENCE.md             (This file)
│
└── 🧪 Testing
    └── test-api.sh                   (cURL test script)
```

---

## 📄 File Details

### Frontend Files

#### `index.html` (No changes needed)

- **Purpose**: Portfolio landing page
- **Status**: ✅ Complete (footer links to Love Notes & T.I.L)
- **Lines**: ~500
- **Modified**: Footer redesigned, added i18n keys

#### `catatan-kekasih.html` (⭐ UPDATED FOR API)

- **Purpose**: Love Notes page with PIN protection
- **Status**: ✅ Now uses backend API
- **Key Changes**:
  - Removed hardcoded PIN hash
  - Added `checkExistingAuth()` function
  - POST request to `/api/auth` with PIN
  - GET request to `/api/notes` with JWT token
  - `displayNotes()` function renders from API response
- **localStorage Used**:
  - `love-notes-token` - JWT token storage
  - `preferred-language` - Language preference
  - `preferred-theme` - Theme preference
- **API Calls**:
  ```javascript
  POST ${API_BASE_URL}/api/auth
  GET ${API_BASE_URL}/api/notes
  ```

#### `health-routine.html` (No changes needed)

- **Purpose**: Weekly health/fitness routine
- **Status**: ✅ Complete

#### `today-i-learned.html` (No changes needed)

- **Purpose**: T.I.L journal page
- **Status**: ✅ Complete

---

### Backend API Files

#### `api/auth.js` (New)

- **Purpose**: PIN validation endpoint
- **Endpoint**: `POST /api/auth`
- **Input**: `{ "pin": "111025" }`
- **Process**:
  1. Receive PIN from frontend
  2. Hash with SHA-256
  3. Compare with `PIN_HASH`
  4. If match → generate JWT token
  5. Return token + success message
- **Output**:
  ```json
  { "success": true, "token": "eyJ...", "message": "..." }
  ```
- **Error Handling**:
  - 400: No PIN provided
  - 401: Invalid PIN
  - 500: Server error
- **Security**:
  - Plaintext PIN never logged
  - Hash comparison (not reverse-able)

#### `api/notes.js` (New)

- **Purpose**: Protected notes retrieval endpoint
- **Endpoint**: `GET /api/notes`
- **Requirement**: Bearer token authentication
- **Process**:
  1. Extract Bearer token from header
  2. Verify JWT signature (using SECRET_KEY)
  3. Check token expiration (24h)
  4. If valid → return notes
- **Output**:
  ```json
  { "success": true, "notes": {...}, "message": "Access granted" }
  ```
- **Error Handling**:
  - 401: No token, invalid token, expired token
  - 500: Server error
- **Notes Data Structure**:
  ```javascript
  {
    en: [...],
    id: [...],
    zh: [...],
    hi: [...],
    es: [...]
  }
  ```

---

### Server & Configuration Files

#### `server.js` (New - Local Development)

- **Purpose**: Local development server for testing
- **Usage**: `node server.js`
- **Port**: 3000 (or `process.env.PORT`)
- **Features**:
  - Simulates exact same API as production
  - CORS headers included
  - JSON parsing
  - Request logging
- **Endpoints**:
  - `POST /api/auth`
  - `GET /api/notes`
  - `OPTIONS/*` (CORS preflight)
- **No Database**: Uses in-memory notes storage
- **Perfect For**: Local testing, understanding flow

#### `package.json` (Updated)

- **Field**: `"type": "module"` (Enable ES6 imports)
- **Dependencies**:
  - `jsonwebtoken` - JWT generation & verification
- **DevDependencies**: (none yet)
- **Scripts**:
  - `npm install` - Install dependencies
  - `npm run dev` - Not yet configured
- **Engines**: Node.js 18.x

#### `vercel.json` (New)

- **Purpose**: Vercel deployment configuration
- **Highlights**:
  - Framework: `vanilla` (no Next.js/specific framework)
  - Functions: Points to `/api/*.js` files
  - Memory: 128MB per function
  - MaxDuration: 10 seconds per request
- **Automatic**: Vercel auto-detects and configures

#### `.env.example` (New)

- **Purpose**: Environment variable template
- **Contains**:
  ```
  JWT_SECRET=your-super-secret-key...
  ```
- **Usage**:
  1. Copy to `.env.local` (local machine)
  2. Generate strong secret
  3. Vercel: Create secret in dashboard
- **Never Commit**: Real `.env` file in `.gitignore`

#### `.gitignore` (New)

- **Purpose**: Prevent committing sensitive files
- **Files Ignored**:
  - `node_modules/`
  - `.env` (never commit secrets!)
  - `.vercel/` (Vercel cache)
  - `*.log` (log files)

---

### Documentation Files

#### `QUICK_START.md` (⭐ Start Here!)

- **Best For**: Getting running quickly
- **Contains**:
  - Installation steps
  - Local testing commands
  - Browser testing
  - Vercel deployment steps
  - Customization guide
- **Time to Setup**: ~15 minutes
- **Audience**: Beginners + Medium

#### `BACKEND_SETUP.md`

- **Best For**: Deep dive into architecture
- **Contains**:
  - System architecture explanation
  - Detailed setup guide
  - API endpoint documentation
  - Security considerations
  - Future improvements
- **Time to Read**: ~30 minutes
- **Audience**: Intermediate + Advanced

#### `ARCHITECTURE.md`

- **Best For**: Understanding system design
- **Contains**:
  - ASCII diagrams (flow, layers)
  - Security layers explanation
  - Step-by-step data flow
  - Technology stack
  - Deployment architecture
- **Visuals**: Heavy diagram-based
- **Audience**: Visual learners + Architects

#### `FILE_REFERENCE.md`

- **This file!**
- **Purpose**: Quick lookup of all files
- **Contains**: Purpose, status, key info for each file

#### `README.md` (Original)

- **Purpose**: Project overview
- **Status**: Unchanged from original
- **Contains**: Project info, tech stack, etc.

---

### Testing Files

#### `test-api.sh` (New)

- **Purpose**: Automated API testing script
- **Usage**:
  ```bash
  bash test-api.sh
  ```
- **Does**:
  1. POST to `/api/auth` with PIN `111025`
  2. Extract JWT token from response
  3. GET `/api/notes` with token
  4. Display responses (formatted JSON)
  5. Report success/failure
- **Requires**:
  - `curl` (usually pre-installed)
  - `python3 -m json.tool` (for pretty-printing)
  - Running server: `node server.js`
- **Output**: Pretty-printed JSON responses

---

## 🔄 File Dependencies

```
catatan-kekasih.html
        ↓
   (calls API)
        ↓
    api/auth.js  ←→  SECRET_KEY (from .env)
        ↓              │
    (returns token)     └─ vercel.json
        ↓
  api/notes.js  ←→  LOVE_NOTES data
        ↓
  (returns notes data)
        ↓
  catatan-kekasih.html displays


Development locally:
  server.js (simulates API) + catatan-kekasih.html (with localhost:3000)

Production:
  vercel.json → Vercel functions + .env SECRET_KEY
  catatan-kekasih.html (with production URL)
```

---

## ✅ Implementation Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `node server.js`
- [ ] Test in browser: open `catatan-kekasih.html`
- [ ] Enter PIN `111025`
- [ ] Verify notes load
- [ ] Review `QUICK_START.md`
- [ ] Setup GitHub repo
- [ ] Connect to Vercel
- [ ] Add `JWT_SECRET` environment variable
- [ ] Deploy backend
- [ ] Update API URL in HTML
- [ ] Upload HTML to hosting
- [ ] Test production

---

## 🔑 Key Concepts

| Concept              | Where                     | Purpose                      |
| -------------------- | ------------------------- | ---------------------------- |
| PIN                  | api/auth.js               | Proof of access              |
| SHA-256 Hash         | api/auth.js               | One-way PIN validation       |
| JWT Token            | api/auth.js, api/notes.js | Session identifier           |
| Bearer Token         | HTTP header               | Authenticated request marker |
| localStorage         | catatan-kekasih.html      | Client-side token storage    |
| CORS                 | Both API files            | Allow cross-origin requests  |
| Environment Variable | vercel.json, .env         | SECRET_KEY storage           |
| Expiration           | JWT payload               | 24-hour session limit        |

---

## 📞 Quick Reference

Need to...

- **Start development?** → `node server.js` then check browser
- **Test API?** → `bash test-api.sh`
- **Change PIN?** → Update SHA-256 hash in `api/auth.js`
- **Add notes?** → Edit `LOVE_NOTES` in `api/notes.js`
- **Deploy?** → Follow `QUICK_START.md` step 4
- **Understand flow?** → Read `ARCHITECTURE.md`

---

Last Updated: March 28, 2026  
Status: ✅ All files ready for deployment
