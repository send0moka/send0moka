import http from 'http'
import url from 'url'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const PORT = process.env.PORT || 3000
const SECRET_KEY = process.env.JWT_SECRET || 'dev-secret-key-not-for-production'
const PIN_HASH = 'd2b83f5e1e65f8e3790dc0056549ba831c4c526e11ca58085925020a53006b65' // SHA-256 of "111025" (Node.js crypto)

// Love notes data
const LOVE_NOTES = {
  en: [
    {
      id: 1,
      date: '2024-01-15',
      title: 'First Love Letter',
      body: 'This is a personal note about our first meeting. Kept safe and secure behind authentication.',
      category: 'memories'
    },
    {
      id: 2,
      date: '2024-02-20',
      title: 'Small Moments',
      body: 'The little things matter the most. Your smile, your laugh, the way you hold my hand...',
      category: 'everyday'
    },
    {
      id: 3,
      date: '2024-03-10',
      title: 'Forever Promise',
      body: 'I promise to cherish every moment with you. Through rain and sunshine.',
      category: 'promises'
    }
  ],
  id: [
    {
      id: 1,
      date: '2024-01-15',
      title: 'Surat Cinta Pertama',
      body: 'Ini adalah catatan pribadi tentang pertemuan pertama kita. Dijaga dengan aman di belakang autentikasi.',
      category: 'memories'
    },
    {
      id: 2,
      date: '2024-02-20',
      title: 'Momen-Momen Kecil',
      body: 'Hal-hal kecil adalah yang paling berarti. Senyummu, tawamu, cara tanganmu memegang tanganku...',
      category: 'everyday'
    },
    {
      id: 3,
      date: '2024-03-10',
      title: 'Janji Selamanya',
      body: 'Aku berjanji untuk menghargai setiap saat bersama dirimu. Saat hujan maupun terik matahari.',
      category: 'promises'
    }
  ]
}

// Helper untuk SHA-256
function sha256Hex(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

// POST /api/auth
async function handleAuth(req, res) {
  let body = ''
  
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', async () => {
    try {
      const data = JSON.parse(body)
      const { pin } = data

      if (!pin) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'PIN required' }))
        return
      }

      const submittedPinHash = sha256Hex(pin.toString())

      if (submittedPinHash !== PIN_HASH) {
        res.writeHead(401, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Invalid PIN' }))
        return
      }

      const token = jwt.sign(
        { authenticated: true, timestamp: Date.now() },
        SECRET_KEY,
        { expiresIn: '24h' }
      )

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        success: true,
        token: token,
        message: 'PIN correct, access granted'
      }))
    } catch (error) {
      console.error('Auth error:', error)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Server error' }))
    }
  })
}

// GET /api/notes
function handleNotes(req, res) {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.writeHead(401, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'No token provided' }))
    return
  }

  const token = authHeader.substring(7)

  try {
    const decoded = jwt.verify(token, SECRET_KEY)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      success: true,
      notes: LOVE_NOTES,
      message: 'Access granted'
    }))
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      res.writeHead(401, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Invalid token' }))
    } else if (error.name === 'TokenExpiredError') {
      res.writeHead(401, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Token expired, please authenticate again' }))
    } else {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Server error' }))
    }
  }
}

// CORS Headers
function setCORSHeaders(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return true
  }
  return false
}

// Main server
const server = http.createServer((req, res) => {
  if (setCORSHeaders(req, res)) return

  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname

  if (pathname === '/api/auth' && req.method === 'POST') {
    handleAuth(req, res)
  } else if (pathname === '/api/notes' && req.method === 'GET') {
    handleNotes(req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Not found' }))
  }
})

server.listen(PORT, () => {
  console.log(`🔒 Love Notes API Server running at http://localhost:${PORT}`)
  console.log(`🔑 Test PIN: 111025`)
  console.log('')
  console.log('Endpoints:')
  console.log(`  POST http://localhost:${PORT}/api/auth (body: {"pin": "111025"})`)
  console.log(`  GET http://localhost:${PORT}/api/notes (header: Authorization: Bearer <token>)`)
})
