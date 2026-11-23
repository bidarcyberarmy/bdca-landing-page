import type { Locale } from './locales';

const en = {
  skip: 'Skip to main content',
  nav: {
    home: 'BDCA home', main: 'Main navigation', mobile: 'Mobile navigation',
    menu: 'Menu', language: 'Website language', programs: 'Programs',
    people: 'Our people', community: 'Community', ecosystem: 'Ecosystem',
    certificates: 'Certificates', join: 'Join the community',
  },
  footer: {
    home: 'Bina Darma Cyber Army home', exploreLabel: 'Explore BDCA', explore: 'Explore',
    learning: 'Learning & research', software: 'Software projects',
    activities: 'Activities & achievements', findLabel: 'Find BDCA online',
    find: 'Find us', email: 'Email BDCA',
  },
  home: {
    title: 'Bina Darma Cyber Army (BDCA) · Student Tech Community',
    description: 'Meet Bina Darma Cyber Army, the student technology community at Universitas Bina Darma in Palembang. Explore cybersecurity, software development, and research.',
  },
  hero: {
    kicker: 'A student-led technology community',
    title: 'Great minds.', accent: 'Greater possibilities.',
    description: 'From first curiosity to real contribution, BDCA is where students explore, connect, and create together.',
    about: 'Get to know BDCA', programs: "See what we're building",
    rotate: 'Rotate globe', pause: 'Pause globe', loading: 'Loading globe…', unavailable: 'Globe unavailable',
    strip: ['Security-first thinking', 'Built through collaboration', 'Driven by curiosity'],
    scroll: 'Scroll to About BDCA',
  },
  about: {
    kicker: 'Who we are', title: 'A place to', accent: 'become more.',
    description: 'A student-led technology community at Universitas Bina Darma in Palembang. We explore cybersecurity, build software, share knowledge, and grow through practical collaboration.',
    topics: ['Student community', 'Cybersecurity', 'Software engineering', 'Research'],
  },
  programs: {
    kicker: 'What we do', title: 'Different disciplines.', subtitle: 'One shared purpose.',
    intro: 'Learning by doing. Bringing people with different skills into the same room.',
    items: [
      { verb: 'Discover', name: 'Cybersecurity', description: 'Explore application security, defensive thinking, CTF challenges, and hands-on research.' },
      { verb: 'Create', name: 'Software development', description: 'Make useful digital tools through engineering, experimentation, and collaboration.' },
      { verb: 'Connect', name: 'Education & community', description: 'Share ideas through practical sessions, mentorship, and collective learning.' },
    ],
  },
  bdcahoot: {
    label: 'Software Development Project',
    description: 'A multiplayer quiz built for BDCA Sharing Sessions. The host runs the quiz and participants answer on their phones.',
    event: 'During the event',
    access: 'Connect to the same Wi-Fi as the host and use the room code they share.',
    how: 'How it works',
    github: 'View on GitHub',
    steps: [
      'The host picks a quiz and opens a room.',
      'Participants enter the room code and answer timed questions.',
      'After the final question, the host reveals the podium.',
    ],
  },
  certificates: {
    label: 'Credential Verification',
    title: 'BDCA Certification',
    description: 'Verify official BDCA membership, skills, and workshop certificates online using their unique credential ID.',
    event: 'Certificate verification',
    access: 'Open the portal and enter a certificate ID or scan its QR code to confirm authenticity.',
    how: 'How to verify',
    open: 'Open portal',
    steps: [
      'Open the BDCA certification portal.',
      'Enter the certificate ID or scan the QR code on the certificate.',
      'Review the verified holder name, event, and issue details.',
    ],
  },
  roster: {
    kicker: 'The people of BDCA', title: 'Organizational', accent: 'Structure',
    description: 'Meet the 2026–2027 Bina Darma Cyber Army team. Five groups work together to run the community.',
    people: 'people', groups: 'groups', members: 'members',
  },
  community: {
    kicker: 'Stay curious. Stay connected.', title: 'There’s room for', subtitle: 'your next idea.',
    description: 'Discover a community of students learning, experimenting, and building together at Universitas Bina Darma.',
    join: 'Connect with BDCA', globe: 'Globe marking the BDCA base in Palembang',
  },
  resources: {
    back: 'Back to BDCA home', open: 'Open portal', internal: 'Internal', maintenance: 'Under maintenance',
    ecosystem: {
      label: 'BDCA Ecosystem', title: 'Portals, labs, and community',
      description: 'Find member profiles, verify certificates, join community channels, and explore cybersecurity learning resources from Bina Darma Cyber Army.',
    },
    activities: {
      label: 'Activities & Achievements', title: 'BDCA’s competition record',
      description: 'Explore Bina Darma Cyber Army’s activities and participation in national and international cybersecurity competitions.',
    },
  },
};

const id: typeof en = {
  skip: 'Lewati ke konten utama',
  nav: {
    home: 'Beranda BDCA', main: 'Navigasi utama', mobile: 'Navigasi seluler',
    menu: 'Menu', language: 'Bahasa situs', programs: 'Program',
    people: 'Pengurus', community: 'Komunitas', ecosystem: 'Ekosistem',
    certificates: 'Sertifikat', join: 'Gabung komunitas',
  },
  footer: {
    home: 'Beranda Bina Darma Cyber Army', exploreLabel: 'Jelajahi BDCA', explore: 'Jelajahi',
    learning: 'Pembelajaran & riset', software: 'Proyek perangkat lunak',
    activities: 'Kegiatan & prestasi', findLabel: 'Kanal resmi BDCA',
    find: 'Temukan kami', email: 'Email BDCA',
  },
  home: {
    title: 'Bina Darma Cyber Army (BDCA) · Komunitas Teknologi Mahasiswa',
    description: 'Kenali Bina Darma Cyber Army, komunitas teknologi mahasiswa Universitas Bina Darma di Palembang. Jelajahi keamanan siber, pengembangan perangkat lunak, dan riset.',
  },
  hero: {
    kicker: 'Komunitas teknologi yang dikelola mahasiswa',
    title: 'Ide cemerlang.', accent: 'Peluang lebih luas.',
    description: 'Berawal dari rasa ingin tahu, mahasiswa di BDCA belajar, berkenalan, dan berkarya bersama untuk memberi kontribusi nyata.',
    about: 'Kenali BDCA', programs: 'Lihat karya kami',
    rotate: 'Putar globe', pause: 'Jeda globe', loading: 'Memuat globe…', unavailable: 'Globe tidak tersedia',
    strip: ['Utamakan keamanan', 'Tumbuh lewat kolaborasi', 'Berawal dari rasa ingin tahu'],
    scroll: 'Gulir ke bagian Tentang BDCA',
  },
  about: {
    kicker: 'Tentang kami', title: 'Ruang untuk', accent: 'terus berkembang.',
    description: 'Kami adalah komunitas teknologi yang dikelola mahasiswa Universitas Bina Darma di Palembang. Kami mendalami keamanan siber, membuat perangkat lunak, dan berbagi ilmu lewat kerja sama langsung.',
    topics: ['Komunitas mahasiswa', 'Keamanan siber', 'Rekayasa perangkat lunak', 'Riset'],
  },
  programs: {
    kicker: 'Kegiatan kami', title: 'Bidang berbeda.', subtitle: 'Satu tujuan bersama.',
    intro: 'Belajar lewat praktik bersama orang-orang dengan keahlian yang beragam.',
    items: [
      { verb: 'Jelajahi', name: 'Keamanan siber', description: 'Pelajari keamanan aplikasi dan strategi pertahanan, coba tantangan CTF, dan terlibat langsung dalam riset.' },
      { verb: 'Ciptakan', name: 'Pengembangan perangkat lunak', description: 'Buat alat digital yang bermanfaat lewat rekayasa, eksperimen, dan kolaborasi.' },
      { verb: 'Berbagi', name: 'Edukasi & komunitas', description: 'Bertukar ide lewat sesi praktik, pendampingan, dan belajar bersama.' },
    ],
  },
  bdcahoot: {
    label: 'Proyek Divisi Pengembangan Perangkat Lunak',
    description: 'Kuis multipemain untuk Sharing Session BDCA. Pemandu menjalankan kuis dan peserta menjawab lewat HP masing-masing.',
    event: 'Saat acara berlangsung',
    access: 'Sambungkan HP ke Wi-Fi yang sama dengan pemandu, lalu masukkan kode room yang dibagikan.',
    how: 'Cara main',
    github: 'Lihat di GitHub',
    steps: [
      'Pemandu memilih kuis dan membuka room.',
      'Peserta memasukkan kode room dan menjawab soal dalam batas waktu.',
      'Setelah soal terakhir, pemandu menampilkan podium.',
    ],
  },
  certificates: {
    label: 'Verifikasi Kredensial',
    title: 'BDCA Certification',
    description: 'Verifikasi keanggotaan, keterampilan, dan sertifikat lokakarya resmi BDCA secara daring menggunakan ID kredensial unik.',
    event: 'Verifikasi sertifikat',
    access: 'Buka portal lalu masukkan ID sertifikat atau pindai kode QR untuk memastikan keasliannya.',
    how: 'Cara verifikasi',
    open: 'Buka portal',
    steps: [
      'Buka portal sertifikasi BDCA.',
      'Masukkan ID sertifikat atau pindai kode QR pada sertifikat.',
      'Periksa detail pemilik, kegiatan, dan penerbitan yang terverifikasi.',
    ],
  },
  roster: {
    kicker: 'Orang-orang di balik BDCA', title: 'Struktur', accent: 'Organisasi',
    description: 'Kenali pengurus Bina Darma Cyber Army periode 2026–2027. Lima kelompok bekerja sama untuk menjalankan komunitas.',
    people: 'orang', groups: 'kelompok', members: 'anggota',
  },
  community: {
    kicker: 'Terus belajar. Tetap terhubung.', title: 'Ada ruang untuk', subtitle: 'ide barumu.',
    description: 'Temukan komunitas mahasiswa yang belajar, bereksperimen, dan berkarya bersama di Universitas Bina Darma.',
    join: 'Terhubung dengan BDCA', globe: 'Globe yang menandai lokasi BDCA di Palembang',
  },
  resources: {
    back: 'Kembali ke beranda BDCA', open: 'Buka portal', internal: 'Internal', maintenance: 'Sedang dalam pemeliharaan',
    ecosystem: {
      label: 'Ekosistem BDCA', title: 'Portal, lab, dan komunitas',
      description: 'Temukan profil anggota, verifikasi sertifikat, bergabung dengan kanal komunitas, dan jelajahi sumber belajar keamanan siber dari Bina Darma Cyber Army.',
    },
    activities: {
      label: 'Kegiatan & Prestasi', title: 'Rekam jejak kompetisi BDCA',
      description: 'Jelajahi kegiatan dan partisipasi Bina Darma Cyber Army dalam kompetisi keamanan siber nasional dan internasional.',
    },
  },
};

export const copy: Record<Locale, typeof en> = { en, id };
