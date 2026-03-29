# Love Notes Backend API + Frontend Setup

Sistem Love Notes dengan PIN authentication berbasis backend. Content hanya dikirim ke frontend setelah autentikasi berhasil.

## Arsitektur

```
Frontend (catatan-kekasih.html)
    ↓ (POST /api/auth dengan PIN)
Backend API (Vercel Serverless)
    ↓ (validate PIN)
    ↓ (return JWT token)
Frontend (stored in localStorage)
    ↓ (GET /api/notes dengan JWT)
Backend
    ↓ (verify token)
    ↓ (return encrypted notes)
Frontend (display notes)
```

## Setup Lokal

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` dan ganti JWT_SECRET dengan nilai yang aman (minimal 32 karakter).

### 3. Development Server (Lokal)

Buat file `server.js` untuk testing lokal:

```bash
node server.js
```

Server akan berjalan di `http://localhost:3000`

## Deploy ke Vercel

### 1. Prepare Repository

```bash
git init
git add .
git commit -m "Initial commit: Love Notes with backend API"
```

### 2. Push ke GitHub

```bash
git remote add origin https://github.com/yourusername/love-notes-backend.git
git push -u origin main
```

### 3. Connect ke Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import dari GitHub repository
4. Configure Environment Variables:
   - Name: `JWT_SECRET`
   - Value: Generate strong secret (use: https://1password.com/password-generator/)
5. Deploy!

### 4. Update Frontend API_BASE_URL

Setelah deploy, update `catatan-kekasih.html`:

```javascript
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://your-vercel-domain.vercel.app"
```

## File Structure

```
project-root/
├── api/
│   ├── auth.js          # POST /api/auth - validate PIN, return JWT
│   └── notes.js         # GET /api/notes - return notes if token valid
├── catatan-kekasih.html # Frontend with API integration
├── package.json
├── vercel.json          # Vercel configuration
├── .env.example         # Environment template
└── README.md
```

## API Endpoints

### POST /api/auth

Validasi PIN dan dapatkan JWT token.

**Request:**

```json
{
  "pin": "111025"
}
```

**Response (Success - 200):**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "PIN correct, access granted"
}
```

**Response (Error - 401):**

```json
{
  "error": "Invalid PIN"
}
```

### GET /api/notes

Ambil love notes (memerlukan JWT token).

**Headers:**

```
Authorization: Bearer <token>
```

**Response (Success - 200):**

```json
{
  "success": true,
  "notes": {
    "en": [...],
    "id": [...]
  },
  "message": "Access granted"
}
```

**Response (Error - 401):**

```json
{
  "error": "Invalid token" atau "Token expired, please authenticate again"
}
```

## Security Notes

### Current Implementation

- ✅ PIN hashing pada backend (SHA-256)
- ✅ JWT token untuk session management
- ✅ 24-hour token expiration
- ✅ CORS enabled untuk development
- ✅ Environment variables untuk secrets

### Future Improvements

- [ ] Rate limiting pada /api/auth (prevent brute force)
- [ ] Database untuk persistent notes storage
- [ ] Refresh token mechanism
- [ ] HTTPS enforcement
- [ ] IP whitelist
- [ ] Add/edit notes endpoint
- [ ] Audit logging

## Troubleshooting

### "No token provided"

- Token sudah expired? Silakan re-authenticate dengan PIN.
- localStorage sudah di-clear? Try again.

### "Connection error"

- API_BASE_URL salah? Cek di DevTools → Console
- Vercel deployment belum selesai? Tunggu sampai deployment sukses.

### CORS Error

- Pastikan CORS headers sudah di-setup di API file
- Development lokal: Vercel CLI akan handle ini

## Next Steps

1. **Customize notes content** → Edit di `api/notes.js` bagian `LOVE_NOTES`
2. **Change PIN** → Edit hash di `api/auth.js` (generate SHA-256 dari PIN baru)
3. **Add database** → Replace in-memory `LOVE_NOTES` dengan database query
4. **Add brute force protection** → Implement retry counter dengan cooldown

---

PIN untuk testing: `111025`  
SHA-256 Hash: `6fe8ff7e770f50f872dd3d8fda5f4dce26056f96f7f8f72373dc53e97217386f`
