import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-change-in-vercel'

// Love notes data - simpan di sini (bisa dipindah ke database nanti)
const LOVE_NOTES = {
  en: [
    {
      id: 1,
      date: 'Block 1',
      title: 'Basic Identity',
      body: 'Jehian Athaya Tsani Az Zuhry (Jehian, Mas Yaya, Mas Jeje, Taya), born 27 January 2004, age 22. Lives in Pasir Wetan RT 1 RW 2, Karanglewas, Banyumas 53161. Informatics, Faculty of Engineering, Unsoed.<br><br>Pasa Kholilah (Asa, Paskol), born 3 November 2004, age 21. Lives in Kutasari Dusun Prompong RT 4 RW 2, Baturaden, Banyumas 53151. Food Technology, Faculty of Agriculture, Unsoed.<br><br>Family highlights: Father of Jehian: Fahrudin Juhri (PNS teacher at MIM Pasir Lor). Mother of Jehian: Khotimah Rahayuningsih (PNS teacher at MIM Singasari). Jehian is second child, older sibling: Ado.<br><br>Father of Asa: Sono (Bapendik Faperta). Mother of Asa: Suswati (IRT). Asa is fourth child, siblings: Ade, Febri, Lingga.<br><br>Dream careers: Jehian -> PNS Kementerian, PCPM BI, MT BUMN, software house. Asa -> PNS Pemda, MUA.',
      category: 'identity'
    },
    {
      id: 2,
      date: 'Block 2',
      title: 'Our Story',
      body: 'We met through KKN. In October 2024, after group assignment, Jehian became curious about Pasa. During village survey in December 2024, Jehian took Asa by motorbike. During KKN (January-February 2025), we were always together, and love grew strongly.<br><br>Timeline: post-KKN we focused on different phases (semester 6 and internship in Boyolali), then met again in Purwokerto at Els Koffie and reconnected deeply. We discovered we matched in vibe and humor, and even made fun TikTok videos. We coincidentally watched Sore: Istri dari Masa Depan around the same day, then rewatched together because the values felt very close to us.<br><br>In August Jehian interned at Kementan Jakarta Selatan while we kept communication. In October, during short leave in Purwokerto, Jehian prepared a bouquet and confessed at Dluca. The note i love you asa <3 (beneran) answered Asa past story about buying flowers for herself. Asa accepted. Since then we grew through dates, studying together, birthdays, seminar milestones, internship in KPWBI Purwokerto, Valentine, Ramadan fasting together, Eid together, and gym plan starting 29 March.<br><br>Future plan: April beach trip to Pasir Putih Kebumen + English tests + final exams, May saving phase, June graduation together, July-September apply jobs + freelance + trip, 2028 house down payment, 2029 marriage.',
      category: 'story'
    },
    {
      id: 3,
      date: 'Block 3',
      title: 'Personality and Dynamics',
      body: 'Why we choose each other: same vibe, same playful side, similar humor, compatible communication style, and complementary personality. What I need exists in Asa, and what Asa needs exists in me.<br><br>Both of us are introvert. Love language is flexible as long as we are both happy and respectful. Shared boundaries: kiss and hug are okay, but we avoid intimate acts to protect our future and avoid unwanted risk.<br><br>Team strength: very solid. Challenge strategy: we face problems together and look for solutions as one team.',
      category: 'dynamics'
    },
    {
      id: 4,
      date: 'Block 4',
      title: 'Activities and Shared Interests',
      body: 'Shared hobbies: watching Korean drama and horror, cafe chill, learning together, scrolling TikTok, photobooth sessions, nature trips, and culinary exploration.<br><br>Favorite foods together: fried duck, ramen all rich, and many more comfort foods we keep discovering.',
      category: 'activities'
    },
    {
      id: 5,
      date: 'Block 5',
      title: 'Dos and Donts',
      body: 'Dos (what Asa likes): bouquet flowers, being given money support, polite attitude, visible effort, discipline, liking Jungkook, frequent updates, sending photos, being initiative, and asking permission politely.<br><br>Donts (what Asa dislikes): using Javanese ngapak in this relationship context, being unclear, clumsy behavior, being untidy, indecisive confusion, answering with questions only, and high tone while speaking.',
      category: 'boundaries'
    }
  ],
  id: [
    {
      id: 1,
      date: 'Blok 1',
      title: 'Identitas Dasar',
      body: 'Jehian Athaya Tsani Az Zuhry (panggilan: Jehian, Mas Yaya, Mas Jeje, Taya), lahir 27 Januari 2004, usia 22. Domisili: Pasir Wetan RT 1 RW 2, Karanglewas, Banyumas 53161. Jurusan Informatika, Fakultas Teknik, Unsoed.<br><br>Pasa Kholilah (panggilan: Asa, Paskol), lahir 3 November 2004, usia 21. Domisili: Kutasari Dusun Prompong RT 4 RW 2, Baturaden, Banyumas 53151. Jurusan Teknologi Pangan, Fakultas Pertanian, Unsoed.<br><br>Keluarga Jehian: Ayah Fahrudin Juhri (PNS guru MIM Pasir Lor), Ibu Khotimah Rahayuningsih (PNS guru MIM Singasari), anak ke-2, kakak: Ado.<br><br>Keluarga Asa: Ayah Sono (Bapendik Faperta), Ibu Suswati (IRT), anak ke-4, kakak: Ade, Febri, Lingga.<br><br>Cita-cita kerja: Jehian -> PNS kementerian, PCPM BI, MT BUMN, software house. Asa -> PNS pemda, MUA.',
      category: 'identitas'
    },
    {
      id: 2,
      date: 'Blok 2',
      title: 'Cerita Kalian Berdua',
      body: 'Awal bertemu dari KKN. Oktober 2024 setelah pembagian kelompok, Jehian mulai penasaran dengan Pasa. Saat survei desa KKN Desember 2024, Jehian yang boncengin Asa. Selama KKN Januari-Februari 2025 kita selalu bareng, dan perasaan itu tumbuh jadi cinta.<br><br>Timeline penting: setelah KKN sempat berkembang masing-masing karena kondisi berbeda (semester 6 vs magang Boyolali), lalu ketemu lagi saat libur di Purwokerto (Els Koffie), obrolan nyambung, vibes cocok, sampai bikin konten TikTok seru. Kita juga sempat nonton Sore: Istri dari Masa Depan di waktu berdekatan lalu rewatch bareng karena prinsip filmnya relate ke hubungan kita.<br><br>Agustus Jehian magang di Kementan Jakarta Selatan dan tetap intens berkabar. Oktober, saat cuti urus berkas TA, Jehian ajak Asa ke Dluca, bawa buket, lalu confess dengan note i love you asa <3 (beneran). Momen ini menjawab story Asa yang pernah beli bunga untuk dirinya sendiri. Asa menerima confess itu.<br><br>Setelah jadian: banyak date, belajar bareng, momen ulang tahun, sempro-semhas, magang KPWBI Purwokerto, valentine, puasa Ramadan bareng, lebaran bareng, dan rencana gym mulai 29 Maret. Rencana lanjut: April ke Pantai Pasir Putih Kebumen + ujian bahasa Inggris + pendadaran, Mei nabung, Juni wisuda bareng, Juli-September apply kerja + freelance + liburan, 2028 DP rumah, 2029 menikah.',
      category: 'cerita'
    },
    {
      id: 3,
      date: 'Blok 3',
      title: 'Kepribadian dan Dinamika',
      body: 'Alasan saling memilih: kita punya banyak kesamaan, satu vibes, sama-sama plenger, suka bercanda, jokes nyambung, cara bicara cocok, dan personalitas saling melengkapi. Apa yang aku butuh ada di Asa, apa yang Asa butuh ada di aku.<br><br>Karakter: sama-sama introvert. Love language diborong semua selama sama-sama happy dan tetap tahu batasan. Batasan kita: kiss dan hug oke, tapi hubungan intim dihindari karena mempertimbangkan risiko kehamilan dan masa depan kita berdua.<br><br>Kekuatan sebagai tim: sangat solid. Cara hadapi tantangan: cari jalan keluar bareng-bareng.',
      category: 'dinamika'
    },
    {
      id: 4,
      date: 'Blok 4',
      title: 'Aktivitas dan Minat',
      body: 'Hobi bersama: nonton drakor dan horor, cafe chill, belajar, scroll TikTok, photobooth, liburan ke alam, dan kulineran.<br><br>Makanan favorit bersama: bebek goreng, ramen all rich, dan masih banyak lagi.',
      category: 'aktivitas'
    },
    {
      id: 5,
      date: 'Blok 5',
      title: 'Dos and Donts',
      body: 'Dos (yang Asa suka): dikasih buket bunga, dikasih uang, aku sopan, aku effort, aku disiplin, aku suka Jungkook, aku ngabarin terus, aku pap, aku inisiatif, aku minta izin.<br><br>Donts (yang Asa tidak suka): aku pakai bahasa Jawa/ngapak dalam konteks hubungan ini, aku tidak jelas, aku clumsy, aku jorok, aku bingung, aku balik nanya, aku bernada tinggi.',
      category: 'rules'
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
