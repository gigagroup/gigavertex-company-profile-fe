import type { Locale } from "@/i18n/config";
import { legalEn } from "@/i18n/en/legal";

export type LegalSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs?: readonly string[];
  readonly items?: readonly string[];
  readonly subsections?: readonly {
    readonly title?: string;
    readonly paragraphs: readonly string[];
    readonly items?: readonly string[];
  }[];
};

export type LegalDocument = {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly lastUpdated: string;
    readonly intro: string;
  };
  readonly sections: readonly LegalSection[];
};

const legalId = {
  termsOfService: {
    meta: {
      title: "Ketentuan Layanan",
      description:
        "Syarat dan ketentuan penggunaan produk, perangkat lunak, dan platform berbasis langganan (SaaS) Giga Vertex Technology.",
      lastUpdated: "5 Juni 2026",
      intro:
        "Ketentuan Layanan ini (“Ketentuan”) mengatur akses dan penggunaan Anda terhadap produk, perangkat lunak, situs web, dashboard, dan layanan berlangganan yang dioperasikan oleh PT Giga Vertex Technology (“Giga Vertex”, “kami”). Dengan membuat akun, berlangganan, atau menggunakan layanan kami, Anda menyetujui Ketentuan ini.",
    },
    sections: [
      {
        id: "1",
        title: "1. Tentang Giga Vertex",
        paragraphs: [
          "Giga Vertex adalah penyedia produk kecerdasan buatan (AI), perangkat lunak, dan platform berbasis langganan (SaaS) untuk bisnis, kreator, dan individu. Layanan kami mencakup tools AI kreatif, automasi media sosial, video generatif, CRM, dan produk digital terkait yang dapat diakses melalui situs web dan dashboard kami.",
        ],
      },
      {
        id: "2",
        title: "2. Kelayakan & Akun",
        paragraphs: [
          "Anda harus berusia minimal 18 tahun, atau usia dewasa menurut hukum di yurisdiksi Anda, untuk menggunakan layanan berbayar kami. Jika Anda menggunakan layanan atas nama perusahaan atau organisasi, Anda menyatakan memiliki kewenangan untuk mengikat entitas tersebut pada Ketentuan ini.",
          "Anda bertanggung jawab menjaga kerahasiaan kredensial akun dan seluruh aktivitas di bawah akun Anda. Segera hubungi support@gigavertex.com jika Anda mencurigai akses tidak sah.",
        ],
      },
      {
        id: "3",
        title: "3. Langganan, Penagihan & Pembayaran",
        paragraphs: [
          "Banyak produk Giga Vertex ditawarkan dalam bentuk langganan berulang. Biaya, siklus penagihan, dan fitur yang disertakan ditampilkan saat checkout atau di halaman paket Anda. Dengan berlangganan, Anda memberi wewenang kepada kami dan mitra pembayaran untuk menagih biaya yang berlaku secara berkala hingga Anda membatalkan.",
          "Harga dapat berubah dengan pemberitahuan yang wajar. Perubahan berlaku untuk periode penagihan berikutnya kecuali diwajibkan lain oleh hukum. Pajak, jika berlaku, dapat ditambahkan pada faktur Anda.",
          "Kegagalan pembayaran dapat mengakibatkan penangguhan atau penghentian akses ke fitur berbayar.",
        ],
      },
      {
        id: "4",
        title: "4. Penggunaan yang Diperbolehkan",
        paragraphs: [
          "Anda setuju untuk tidak menyalahgunakan layanan kami. Aktivitas yang dilarang termasuk, namun tidak terbatas pada:",
        ],
        items: [
          "Melanggar hukum yang berlaku atau hak pihak ketiga",
          "Menghasilkan, mendistribusikan, atau menyimpan konten yang melanggar hukum, berbahaya, abusive, atau menyesatkan",
          "Mencoba melewati batas penggunaan, kontrol keamanan, atau pembatasan langganan",
          "Reverse engineering, scraping, atau menjual kembali layanan kami kecuali diizinkan secara tegas",
          "Menggunakan tools AI kami untuk membuat spam, malware, penipuan, atau konten yang melanggar hak kekayaan intelektual",
          "Mengganggu operasi, integritas, atau ketersediaan platform kami",
        ],
      },
      {
        id: "5",
        title: "5. Output AI & Konten Pengguna",
        paragraphs: [
          "Anda tetap memiliki kepemilikan atas konten yang Anda kirimkan ke layanan kami, dengan lisensi yang Anda berikan kepada kami untuk menghosting, memproses, dan menyampaikan konten tersebut guna menyediakan layanan.",
          "Output yang dihasilkan AI dapat tidak akurat, tidak lengkap, atau tidak sesuai untuk tujuan tertentu. Anda bertanggung jawab meninjau output sebelum mempublikasikan atau mengandalkannya. Giga Vertex tidak menjamin output AI bebas kesalahan atau bebas klaim pihak ketiga.",
          "Anda tidak boleh memproses data pribadi sensitif melalui layanan kami kecuali dokumentasi produk secara tegas mendukungnya dan Anda telah menerapkan pengamanan yang sesuai.",
        ],
      },
      {
        id: "6",
        title: "6. Hak Kekayaan Intelektual",
        paragraphs: [
          "Giga Vertex dan pemberi lisensinya memiliki seluruh hak atas platform, perangkat lunak, merek, dokumentasi, dan teknologi yang mendasarinya. Ketentuan ini tidak mengalihkan kepemilikan hak kekayaan intelektual kami kepada Anda.",
          "Dengan tunduk pada kepatuhan Anda terhadap Ketentuan ini dan pembayaran biaya yang berlaku, kami memberi Anda lisensi terbatas, non-eksklusif, dan tidak dapat dialihkan untuk mengakses serta menggunakan layanan yang dilanggani untuk keperluan internal atau bisnis yang diizinkan.",
        ],
      },
      {
        id: "7",
        title: "7. Layanan Pihak Ketiga",
        paragraphs: [
          "Layanan kami dapat terintegrasi dengan model AI pihak ketiga, penyedia pembayaran, tools analitik, atau platform sosial. Penggunaan layanan pihak ketiga dapat tunduk pada ketentuan dan kebijakan terpisah. Giga Vertex tidak bertanggung jawab atas layanan pihak ketiga di luar kendali wajar kami.",
        ],
      },
      {
        id: "8",
        title: "8. Penangguhan & Penghentian",
        paragraphs: [
          "Anda dapat membatalkan langganan sesuai petunjuk di akun Anda atau dengan menghubungi dukungan. Pembatalan umumnya berlaku pada akhir periode penagihan saat ini kecuali dinyatakan lain.",
          "Kami dapat menangguhkan atau menghentikan akses jika Anda melanggar Ketentuan ini secara material, gagal membayar, menimbulkan risiko hukum atau keamanan, atau jika diwajibkan oleh hukum. Setelah penghentian, hak Anda menggunakan layanan terkait berakhir, namun ketentuan yang secara sifatnya harus tetap berlaku akan tetap berlaku.",
        ],
      },
      {
        id: "9",
        title: "9. Penafian",
        paragraphs: [
          "Layanan kami disediakan “apa adanya” dan “sebagaimana tersedia” sejauh diizinkan oleh hukum. Kami menafikan jaminan kelayakan jual, kesesuaian untuk tujuan tertentu, dan tidak melanggar, kecuali hukum konsumen wajib memberikan perlindungan lain.",
        ],
      },
      {
        id: "10",
        title: "10. Batasan Tanggung Jawab",
        paragraphs: [
          "Sejauh diizinkan oleh hukum, Giga Vertex tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau hukuman, atau atas hilangnya keuntungan, pendapatan, data, atau goodwill yang timbul dari penggunaan layanan.",
          "Total tanggung jawab kami atas klaim terkait layanan tidak akan melebihi jumlah yang Anda bayarkan kepada Giga Vertex untuk layanan terkait dalam dua belas (12) bulan sebelum peristiwa yang menimbulkan klaim, kecuali hukum yang berlaku mewajibkan jumlah lebih tinggi.",
        ],
      },
      {
        id: "11",
        title: "11. Hukum yang Berlaku & Sengketa",
        paragraphs: [
          "Ketentuan ini diatur oleh hukum Republik Indonesia, tanpa memperhatikan prinsip konflik hukum. Pengadilan di Bogor, Indonesia memiliki yurisdiksi eksklusif, kecuali hukum perlindungan konsumen wajib di negara Anda memberikan hak berbeda.",
        ],
      },
      {
        id: "12",
        title: "12. Perubahan Ketentuan",
        paragraphs: [
          "Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Versi yang berlaku saat Anda menggunakan layanan mengatur penggunaan tersebut. Perubahan material akan dikomunikasikan melalui situs web, dashboard, atau email jika diperlukan.",
        ],
      },
      {
        id: "13",
        title: "13. Kontak",
        paragraphs: [
          "Pertanyaan tentang Ketentuan ini dapat dikirim ke support@gigavertex.com atau PT Giga Vertex Technology, Bogor, Indonesia.",
        ],
      },
    ],
  },
  privacyPolicy: {
    meta: {
      title: "Kebijakan Privasi",
      description:
        "Cara PT Giga Vertex Technology mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi di seluruh platform AI dan SaaS-nya.",
      lastUpdated: "5 Juni 2026",
      intro:
        "Kebijakan Privasi ini menjelaskan bagaimana PT Giga Vertex Technology (“Giga Vertex”, “kami”) menangani data pribadi ketika Anda mengunjungi situs web kami, membuat akun, berlangganan layanan, atau menghubungi kami. Kami berkomitmen pada transparansi, keamanan, dan kepatuhan terhadap peraturan perlindungan data yang berlaku.",
    },
    sections: [
      {
        id: "1",
        title: "1. Siapa Kami",
        paragraphs: [
          "Giga Vertex adalah perusahaan teknologi Indonesia yang menyediakan produk AI dan platform SaaS berbasis langganan. Untuk permintaan terkait privasi, hubungi support@gigavertex.com.",
        ],
      },
      {
        id: "2",
        title: "2. Data yang Kami Kumpulkan",
        paragraphs: ["Kami dapat mengumpulkan kategori informasi berikut:"],
        items: [
          "Data akun: nama, alamat email, hash kata sandi, nama perusahaan, dan detail penagihan",
          "Data langganan & pembayaran: paket yang dipilih, riwayat transaksi, dan status pembayaran (diproses melalui mitra pembayaran)",
          "Data penggunaan: file log, alamat IP, informasi perangkat/browser, penggunaan fitur, dan interaksi dukungan",
          "Data konten: prompt, unggahan, output yang dihasilkan, dan file proyek yang Anda kirim melalui platform",
          "Komunikasi: pesan ke dukungan, umpan balik, dan preferensi pemasaran",
        ],
      },
      {
        id: "3",
        title: "3. Cara Kami Menggunakan Data",
        paragraphs: ["Kami menggunakan data pribadi untuk:"],
        items: [
          "Menyediakan, mengoperasikan, dan meningkatkan produk serta layanan",
          "Memproses langganan, faktur, dan permintaan dukungan pelanggan",
          "Mengamankan akun, mendeteksi penipuan, dan menegakkan Ketentuan kami",
          "Menganalisis performa produk dan mengembangkan fitur baru",
          "Mengirim pemberitahuan layanan, pembaruan penagihan, dan—dengan persetujuan—komunikasi pemasaran",
          "Mematuhi kewajiban hukum dan menanggapi permintaan yang sah",
        ],
      },
      {
        id: "4",
        title: "4. Pemrosesan AI",
        paragraphs: [
          "Beberapa layanan Giga Vertex memproses prompt, media, dan file pengguna menggunakan model kecerdasan buatan. Kami menggunakan data ini untuk menghasilkan output yang diminta, menjaga kualitas layanan, dan mencegah penyalahgunaan.",
          "Kami tidak menjual data pribadi. Kami tidak menggunakan konten pelanggan untuk melatih model publik pihak ketiga kecuali diungkapkan secara jelas dan Anda memilih untuk fitur tertentu.",
        ],
      },
      {
        id: "5",
        title: "5. Dasar Hukum",
        paragraphs: [
          "Bergantung pada lokasi Anda, kami memproses data pribadi berdasarkan pelaksanaan kontrak, kepentingan sah (seperti keamanan dan peningkatan produk), kewajiban hukum, dan persetujuan jika diwajibkan.",
        ],
      },
      {
        id: "6",
        title: "6. Berbagi Data & Pemroses",
        paragraphs: [
          "Kami dapat membagikan data dengan penyedia layanan tepercaya yang membantu operasional bisnis, seperti cloud hosting, pemroses pembayaran, pengiriman email, analitik, dan mitra infrastruktur AI. Penyedia ini terikat oleh kewajiban kerahasiaan dan keamanan kontraktual.",
          "Kami juga dapat mengungkapkan informasi jika diwajibkan oleh hukum, untuk melindungi hak dan keselamatan, atau sehubungan dengan merger, akuisisi, atau penjualan aset dengan pengamanan yang sesuai.",
        ],
      },
      {
        id: "7",
        title: "7. Transfer Internasional",
        paragraphs: [
          "Karena kami mengoperasikan layanan digital secara global, data Anda dapat diproses di Indonesia dan negara lain tempat penyedia kami memiliki infrastruktur. Kami menerapkan pengamanan yang sesuai untuk transfer lintas batas jika diwajibkan.",
        ],
      },
      {
        id: "8",
        title: "8. Retensi",
        paragraphs: [
          "Kami menyimpan data pribadi hanya selama diperlukan untuk menyediakan layanan, memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. Periode retensi dapat bervariasi menurut jenis data dan produk.",
        ],
      },
      {
        id: "9",
        title: "9. Keamanan",
        paragraphs: [
          "Kami menerapkan langkah teknis dan organisasi termasuk enkripsi dalam transit, kontrol akses, pemantauan, dan pelatihan staf. Tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, namun kami terus berupaya melindungi informasi Anda.",
        ],
      },
      {
        id: "10",
        title: "10. Hak Anda",
        paragraphs: [
          "Bergantung pada hukum yang berlaku, Anda dapat memiliki hak untuk mengakses, memperbaiki, menghapus, membatasi, atau memindahkan data pribadi, serta menolak pemrosesan tertentu. Anda juga dapat menarik persetujuan jika pemrosesan berbasis persetujuan.",
          "Untuk menggunakan hak Anda, email ke support@gigavertex.com. Kami mungkin perlu memverifikasi identitas Anda sebelum memenuhi permintaan.",
        ],
      },
      {
        id: "11",
        title: "11. Cookie & Analitik",
        paragraphs: [
          "Kami menggunakan cookie dan teknologi serupa untuk mengingat preferensi, menjaga Anda tetap masuk, mengukur lalu lintas, dan meningkatkan pengalaman pengguna. Anda dapat mengelola cookie melalui pengaturan browser, meskipun beberapa fitur mungkin tidak berfungsi jika cookie dinonaktifkan.",
        ],
      },
      {
        id: "12",
        title: "12. Anak-anak",
        paragraphs: [
          "Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Jika Anda yakin seorang anak telah memberikan data pribadi kepada kami, hubungi kami dan kami akan mengambil langkah yang sesuai untuk menghapusnya.",
        ],
      },
      {
        id: "13",
        title: "13. Pembaruan",
        paragraphs: [
          "Kami dapat memperbarui Kebijakan Privasi ini secara berkala. Tanggal “Terakhir diperbarui” di bagian atas menunjukkan revisi terbaru. Penggunaan layanan setelah perubahan berlaku dianggap sebagai pengakuan kebijakan yang diperbarui, kecuali hukum yang berlaku mewajibkan persetujuan tambahan.",
        ],
      },
    ],
  },
  refundPolicy: {
    meta: {
      title: "Kebijakan Pengembalian Dana",
      description:
        "Aturan pengembalian dana dan pembatalan untuk pembelian dan langganan di platform Giga Vertex Technology.",
      lastUpdated: "5 Juni 2026",
      intro:
        "Terima kasih telah berlangganan produk Giga Vertex. Kebijakan Pengembalian Dana ini menjelaskan kapan Anda mungkin berhak atas pengembalian dana atau pembatalan, serta cara mengajukan permintaan. Kebijakan ini berlaku untuk konsumen dan pelanggan bisnis kecuali perjanjian tertulis terpisah menyatakan lain.",
    },
    sections: [
      {
        id: "1",
        title: "1. Kebijakan Umum",
        paragraphs: [
          "Kecuali diwajibkan oleh hukum yang berlaku, biaya langganan dan pembelian digital satu kali umumnya tidak dapat dikembalikan dan tidak dapat ditukar setelah akses diberikan.",
          "Giga Vertex dapat memberikan pengembalian dana secara diskresioner atau jika undang-undang perlindungan konsumen wajib memberikan hak penarikan atau pengembalian dana.",
          "Permintaan pengembalian dana harus diajukan dalam periode statutori atau diskresioner yang dijelaskan di bawah.",
          "Jika pengembalian dana disetujui, akses ke produk atau fitur berbayar terkait dapat ditangguhkan atau dicabut.",
        ],
      },
      {
        id: "2",
        title: "2. Uji Coba Gratis & Langganan",
        paragraphs: [
          "Jika paket mencakup uji coba gratis, Anda tidak akan ditagih hingga uji coba berakhir kecuali dinyatakan lain saat checkout. Batalkan sebelum uji coba berakhir untuk menghindari penagihan periode berikutnya.",
          "Saat Anda membatalkan langganan, pembatalan umumnya berlaku pada akhir siklus penagihan saat ini. Anda tetap memiliki akses hingga tanggal tersebut kecuali paket Anda menyatakan lain.",
          "Kami tidak memberikan pengembalian dana prorata untuk waktu yang tidak terpakai dalam periode penagihan kecuali diwajibkan oleh hukum atau secara tegas dinyatakan dalam penawaran Anda.",
        ],
      },
      {
        id: "3",
        title: "3. Hak Penarikan Statutori",
        paragraphs: [
          "Jika hukum konsumen lokal memberikan periode penarikan tanpa syarat untuk layanan digital, hak tersebut berlaku dan dapat mengesampingkan Kebijakan ini.",
        ],
        subsections: [
          {
            title: "Indonesia",
            paragraphs: [
              "Untuk transaksi konsumen yang memenuhi syarat menurut aturan perlindungan konsumen Indonesia, Anda mungkin memiliki hak membatalkan dalam periode yang ditetapkan hukum untuk kontrak layanan digital tertentu, dengan pengecualian untuk konten yang telah diakses atau disampaikan dengan persetujuan Anda.",
            ],
          },
          {
            title: "Uni Eropa / EEA / Inggris",
            paragraphs: [
              "Konsumen dapat memiliki hak statutori 14 hari untuk menarik diri dari beberapa kontrak konten dan layanan digital. Hak ini mungkin tidak berlaku setelah pengiriman digital dimulai dengan persetujuan tegas Anda dan pengakuan bahwa hak penarikan dilepaskan.",
            ],
          },
          {
            title: "Wilayah lain",
            paragraphs: [
              "Aturan regional tambahan dapat berlaku di Turki, Israel, Korea Selatan, Brasil, China, Kanada, Singapura, dan yurisdiksi lain. Jika hukum lokal memberikan perlindungan lebih tinggi, hukum tersebut yang berlaku.",
            ],
          },
        ],
      },
      {
        id: "4",
        title: "4. Cara Mengajukan Pengembalian Dana",
        paragraphs: [
          "Untuk mengajukan pengembalian dana atau pembatalan, hubungi kami melalui salah satu cara berikut:",
        ],
        items: [
          "Email ke support@gigavertex.com dengan email akun, referensi pesanan, dan alasan permintaan",
          "Hubungi kami via WhatsApp di +62 812-2852-2550",
          "Gunakan area penagihan atau manajemen langganan di dashboard produk Anda, jika tersedia",
        ],
        subsections: [
          {
            paragraphs: [
              "Jika memenuhi syarat, pengembalian dana akan diproses ke metode pembayaran asal jika memungkinkan dalam 14 hari kerja setelah persetujuan.",
            ],
          },
        ],
      },
      {
        id: "5",
        title: "5. Masalah Teknis & Cacat Layanan",
        paragraphs: [
          "Jika Anda mengalami masalah teknis berkelanjutan atau cacat material yang mencegah akses ke fitur berbayar sebagaimana dijelaskan, hubungi dukungan terlebih dahulu dengan detail masalah, tangkapan layar, dan stempel waktu.",
          "Jika kami mengonfirmasi kegagalan layanan material yang dapat diatribusikan kepada Giga Vertex dan tidak dapat menyelesaikannya dalam waktu wajar, kami dapat memberikan pengembalian dana atau kredit sesuai hukum perlindungan konsumen yang berlaku.",
        ],
      },
      {
        id: "6",
        title: "6. Chargeback & Sengketa Pembayaran",
        paragraphs: [
          "Kami menganjurkan Anda menghubungi Giga Vertex sebelum mengajukan chargeback ke bank atau penyedia pembayaran.",
          "Jika chargeback atau sengketa pembayaran dibuka, akses ke langganan terkait dapat ditangguhkan sementara selama kasus ditinjau.",
          "Hal ini tidak mempengaruhi hak sah Anda untuk memperdebatkan tagihan yang tidak sah atau salah.",
        ],
      },
      {
        id: "7",
        title: "7. Pengembalian Dana Diskresioner",
        paragraphs: [
          "Giga Vertex dapat, atas kebijakan sendiri, meninjau permintaan pengembalian dana yang diajukan dalam 14 hari sejak tanggal transaksi. Pengajuan dalam periode ini tidak menjamin persetujuan.",
          "Setiap permintaan dievaluasi berdasarkan penggunaan produk, riwayat penagihan, alasan yang diberikan, dan ketentuan paket yang berlaku. Kami dapat menyetujui pengembalian penuh, sebagian, atau menolak permintaan.",
        ],
      },
      {
        id: "8",
        title: "8. Penyalahgunaan & Penipuan",
        paragraphs: [
          "Pengembalian dana tidak akan diberikan jika terdapat bukti penipuan, penyalahgunaan refund, chargeback berulang, atau perilaku manipulatif lainnya.",
        ],
      },
      {
        id: "9",
        title: "9. Pembaruan Kebijakan",
        paragraphs: [
          "Kami dapat memperbarui Kebijakan Pengembalian Dana ini dari waktu ke waktu. Versi yang berlaku saat transaksi Anda mengatur transaksi tersebut kecuali hukum yang berlaku mewajibkan lain.",
        ],
      },
      {
        id: "10",
        title: "10. Kontak",
        paragraphs: [
          "Untuk pertanyaan pengembalian dana, email support@gigavertex.com atau kunjungi halaman Kontak kami. PT Giga Vertex Technology, Bogor, Indonesia.",
        ],
      },
    ],
  },
} as const;

export function getLegal(locale?: Locale) {
  return locale === "en" ? legalEn : legalId;
}

export type LegalContent = ReturnType<typeof getLegal>;
