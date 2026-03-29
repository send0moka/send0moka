# ⚡ Quick Start Guide - Love Notes Backend

Solusi lengkap: Frontend + Backend API dengan PIN protection. Content disimpan di backend, hanya dikirim setelah autentikasi.

## 📋 Yang Sudah Siap

✅ `api/auth.js` - Endpoint untuk validasi PIN & generate JWT token  
✅ `api/notes.js` - Endpoint untuk ambil notes (hanya jika token valid)  
✅ `catatan-kekasih.html` - Frontend sudah integrate dengan API  
✅ `server.js` - Local development server  
✅ `package.json` - Dependencies

## 🚀 Langkah 1: Siapkan Lokal

### Install dependencies

```bash
npm install
```

### Run local server

```bash
node server.js
```

Output:

```
🔒 Love Notes API Server running at http://localhost:3000
🔑 Test PIN: 111025
```

## 🔌 Langkah 2: Test API

Buka terminal baru, test endpoint:

```bash
# Test /api/auth (POST dengan PIN)
curl -X POST http://localhost:3000/api/auth \
  -H "Content-Type: application/json" \
  -d '{"pin":"111025"}'
```

Response (sukses):

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "PIN correct, access granted"
}
```

```bash
# Test /api/notes (GET dengan Bearer token)
# Ganti TOKEN dengan value dari response di atas
curl -X GET http://localhost:3000/api/notes \
  -H "Authorization: Bearer <TOKEN>"
```

Response (sukses):

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

## 🌐 Langkah 3: Test Di Browser

1. Buka `catatan-kekasih.html` di browser
2. Masukkan PIN: `111025`
3. Seharusnya:
   - ✅ Form kirim PIN ke `http://localhost:3000/api/auth`
   - ✅ Backend return JWT token
   - ✅ Frontend store token di localStorage
   - ✅ Frontend fetch notes dari API dengan token
   - ✅ Notes ditampilkan!

## 🎯 Langkah 4: Deploy ke Vercel

### 4a. Initialize Git & Push

```bash
git init
git add .
git commit -m "Love Notes backend API"
git remote add origin https://github.com/USERNAME/love-notes-backend
git push -u origin main
```

### 4b. Connect ke Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select repository
4. Configure Environment Variable:
   - Key: `JWT_SECRET`
   - Value: Buat random string (minimal 32 char). Bisa generate di: https://1password.com/password-generator/

5. Click "Deploy"

### 4c. Update API URL di Frontend

Setelah Vercel deploy sukses:

1. Copy Deployment URL (contoh: `https://love-notes-backend.vercel.app`)
2. Edit `catatan-kekasih.html`, cari line ini:

```javascript
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : `${window.location.protocol}//${window.location.host}`
```

Ganti menjadi:

```javascript
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://love-notes-backend.vercel.app" // Ganti dengan URL Vercel kamu
```

3. Upload HTML ke hosting (GitHub Pages, Netlify, atau tempat lain)

## 🔒 Keamanan

✅ PIN di-hash dengan SHA-256 di backend  
✅ Frontend tidak pernah tahu PIN sebenarnya  
✅ JWT token untuk session (expire 24 jam)  
✅ Notes hanya dikirim jika token valid

⚠️ Setup ini secure dari casual inspection, tapi:

- PIN hash masih bisa di-brute force (tambah rate limit untuk production)
- Backend URL visible di browser (tapi sudah pakai HTTPS in production)

## 📝 Customize Content

### Ubah PIN

Di `api/auth.js`, cari:

```javascript
const PIN_HASH =
  "6fe8ff7e770f50f872dd3d8fda5f4dce26056f96f7f8f72373dc53e97217386f"
```

Ganti dengan:

1. Pilih PIN baru misalnya: `222333`
2. Generate SHA-256: https://www.online-convert.com/hash#sha-256
3. Copy hash baru, replace di kode

### Ubah Notes Content

Di `api/notes.js`, edit object `LOVE_NOTES`:

```javascript
const LOVE_NOTES = {
  en: [
    { id: 1, date: "2024-01-15", title: "Your Title", body: "..." },
    // tambah lebih banyak
  ],
  id: [
    { id: 1, date: "2024-01-15", title: "Judul Kamu", body: "..." },
    // tambah lebih banyak
  ],
}
```

## 🐛 Troubleshooting

| Masalah                             | Solusi                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| `Cannot find module 'jsonwebtoken'` | Run `npm install`                                                               |
| `ERR_MODULE_NOT_FOUND`              | Pastikan `"type": "module"` di package.json                                     |
| `Cannot POST /api/auth`             | Pastikan `server.js` sudah running                                              |
| "No token provided" error           | Token expired atau localStorage cleared, re-authenticate                        |
| CORS error di browser               | Development: solved secara otomatis. Production: check CORS headers di API file |

## 📚 File Reference

| File                   | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `api/auth.js`          | POST /api/auth - validate PIN, return JWT    |
| `api/notes.js`         | GET /api/notes - return notes if token valid |
| `server.js`            | Local dev server untuk testing               |
| `catatan-kekasih.html` | Frontend with API integration                |
| `package.json`         | Dependencies: jsonwebtoken                   |
| `vercel.json`          | Vercel configuration                         |

## ✅ Checklist

- [ ] Run `npm install`
- [ ] Run `node server.js` - test lokal
- [ ] Test di browser dengan PIN `111025`
- [ ] Deploy ke Vercel
- [ ] Update API_BASE_URL di HTML
- [ ] Upload HTML ke hosting
- [ ] Test production

Done! 🎉

---

Questions? Refer ke `BACKEND_SETUP.md` untuk info lebih detail.
