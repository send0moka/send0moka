import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-change-in-vercel'
const PIN_HASH = 'd2b83f5e1e65f8e3790dc0056549ba831c4c526e11ca58085925020a53006b65' // SHA-256 of "111025" (Node.js crypto)

// Helper function untuk hash SHA-256
function sha256Hex(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { pin } = req.body

    if (!pin) {
      return res.status(400).json({ error: 'PIN required' })
    }

    // Hash PIN yang dikirim
    const submittedPinHash = sha256Hex(pin.toString())

    // Bandingkan dengan PIN yang benar
    if (submittedPinHash !== PIN_HASH) {
      return res.status(401).json({ error: 'Invalid PIN' })
    }

    // Generate JWT token
    const token = jwt.sign(
      { authenticated: true, timestamp: Date.now() },
      SECRET_KEY,
      { expiresIn: '24h' } // Token berlaku 24 jam
    )

    return res.status(200).json({
      success: true,
      token: token,
      message: 'PIN correct, access granted'
    })
  } catch (error) {
    console.error('Auth error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}
