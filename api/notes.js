import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-change-in-vercel'

// Love notes data - simpan di sini (bisa dipindah ke database nanti)
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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Ambil token dari header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' })
    }

    const token = authHeader.substring(7) // Hapus "Bearer " prefix

    // Verify token
    const decoded = jwt.verify(token, SECRET_KEY)

    // Return notes + metadata
    return res.status(200).json({
      success: true,
      notes: LOVE_NOTES,
      message: 'Access granted'
    })
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' })
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired, please authenticate again' })
    }

    console.error('Notes error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}
