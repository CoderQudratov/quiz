const quizData= [
    {
      question: "Kompyuter virusi bu:",
      options: {
        a: "O’lchami katta bo’lmagan maxsus yozilgan dastur",
        b: "Kompyuter kasalligi",
        c: "Kompyuterning maxsus jihozi",
        d: "Mikrob"
      },
      correctAnswer: "a"
    },
    {
      question: "Chop qilish qurilmasining turlari necha xil bo’ladi?",
      options: {
        a: "Matritsali, purkagichli, lazerli",
        b: "Purkagichli, lazerli",
        c: "Rangli, oq-qora",
        d: "Purkagichli, lazerli, ignali"
      },
      correctAnswer: "a"
    },
    {
      question: "Shaxsiy kompyuterning asosiy qismlaridan birini ko’rsating:",
      options: {
        a: "Tizimli blok",
        b: "Printer",
        c: "Skaner",
        d: "Venchester"
      },
      correctAnswer: "a"
    },
    {
      question: "Shaxsiy kompyuterning asosiy qismlaridan birini ko’rsating:",
      options: {
        a: "Monitor",
        b: "Kolonka",
        c: "Printer",
        d: "Skaner"
      },
      correctAnswer: "a"
    },
    {
      question: "Kompyuterning ehtimoliy nosozliklarini aniqlang: Tashqi belgisi: Kompyuter yoqilgandan so’ng ham ishlamayapti, tizimli blok yoki monitor indikator lampasi yonmayapti:",
      options: {
        a: "Elektr oziqlanish yo’q",
        b: "Kompyuter tizimli bloki ishlamayapti",
        c: "Diskovodga disk qo’yilgan, kompyuterning dasturiy ta’minoti buzilgan",
        d: "Klaviatura ulanmagan yoki noto’g’ri ulangan, klaviatura ba’zi tugmalari bosilib qolgan"
      },
      correctAnswer: "a"
    },
    {
      question: "Kompyuterning ehtimoliy nosozliklarini aniqlang: Tashqi belgisi: Tizimli blokda indikator yonib turibdi, lekin kompyuter ekranida tasvir yo’q:",
      options: {
        a: "Kompyuter tizimli bloki ishlamayapti",
        b: "Diskovodga disk qo’yilgan, kompyuterning dasturiy ta’minoti buzilgan",
        c: "Klaviatura ulanmagan yoki noto’g’ri ulangan, klaviatura ba’zi tugmalari bosilib qolgan",
        d: "Klaviatura bilan sichqon noto’g’ri ulangan, tizimli blokda nimadir ishlamayotgan bo’lishi mumkin"
      },
      correctAnswer: "d"
    },
    {
      question: "Qattiq disk bu:",
      options: {
        a: "Kompyuterning bosh xotirasi",
        b: "Mikroprotsessor",
        c: "RW diski",
        d: "Protsessor"
      },
      correctAnswer: "a"
    },
    {
      question: "«Мой компьютер» yorlig’ining vazifasi nima?",
      options: {
        a: "Disklar bilan ishlash, disklarni tanlash, operativ xotira qattiq ma’lumot olish va h.k.",
        b: "Disklar bilan ishlash, disklarni tanlash, o’chirilgan fayllarni tiklash va h.k.",
        c: "O’chirilgan fayllarni vaqtincha saqlash",
        d: "Foydalanuvchining ishchi materiallari, ya’ni fayllari va papkalarini saqlash"
      },
      correctAnswer: "a"
    },
    {
      question: "Modem qaysi texnologiyaga kerakli texnik qurilma?",
      options: {
        a: "Telekommunikatsiya texnologiyasi",
        b: "Ma’lumotlar bazasi texnologiyasi",
        c: "Ofis texnologiyasi",
        d: "Dasturlash texnologiyasi"
      },
      correctAnswer: "a"
    },
    {
      question: "CD-R va CD-RW disk yurituvchilarining farqi nimada?",
      options: {
        a: "CD-R disk yurituvchisi ma’lumotlarni o’qishga, CD-RW esa ma’lumotlarni o’qish va yozishga mo’ljallangan",
        b: "CD-R disk yurituvchisi ma’lumotlarni o’qish va yozishga, CD-RW esa ma’lumotlarni o’qishga mo’ljallangan",
        c: "Ikkalasi ham faqat ma’lumotlarni o’qishga mo’ljallangan",
        d: "Ikkalasi ham faqat ma’lumotlarni yozishga mo’ljallangan"
      },
      correctAnswer: "a"
    },
    {
      question: "Skaner - bu:",
      options: {
        a: "Grafik ma’lumotlarni kiritish qurilmasi",
        b: "Alfavit-raqamli va grafik ma’lumotlarni chiqarish qurilmasi",
        c: "Qog’oz chiqaradigan qurilmalarga grafik ma’lumotlarini chiqarish",
        d: "Grafik ma’lumotlarni chiqarish qurilmasi"
      },
      correctAnswer: "a"
    },
    {
      question: "Quyidagi qurilmalarning qaysi biri yordamida Internetga ulanish mumkin?",
      options: {
        a: "Modem",
        b: "Printer",
        c: "Skaner",
        d: "Plata"
      },
      correctAnswer: "a"
    },
    {
      question: "Operatsion tizim – bu:",
      options: {
        a: "Kompyuterning barcha qurilmalarini o’zaro ishlashini va ularni ishlatishga foydalanuvchilarga ruxsat beruvchi dasturlar to’plami",
      b: "Hujjatlar bilan amallar bajaruvchi dasturlar to’plami",
      c: "Ma’lumotlarni defragmentlash dasturi",
      d: "Kompyuter asosiy qurilmalarining yig’indisi"
    },
    correctAnswer: "a"
  },
  {
    question: "Kompyuter qurilmalariga xizmat ko’rsatuvchi dasturlar qanday nomlanadi?",
    options: {
      a: "Drayver",
      b: "Translyator",
      c: "Kompilyator",
      d: "Arxivator"
    },
    correctAnswer: "a"
  },
  {
    question: "Arxivlovchi-dastur bu:",
    options: {
      a: "Fayllarni siquvchi dastur",
      b: "Fayllarni nusxasini saqlab qoluvchi dastur",
      c: "Interpretator",
      d: "Fayllarni taxlagich"
    },
    correctAnswer: "a"
  },
  {
    question: "Axborotning eng kichik o’lchov birligi nima?",
    options: {
      a: "Bit",
      b: "Bayt",
      c: "Bod",
      d: "Bit/s"
    },
    correctAnswer: "a"
  },
  {
    question: "Bir bayt necha bitga teng?",
    options: {
      a: "8",
      b: "2",
      c: "4",
      d: "16"
    },
    correctAnswer: "a"
  },
  {
    question: "Bir kilobayt necha baytga teng?",
    options: {
      a: "1024",
      b: "512",
      c: "00",
      d: "2048"
    },
    correctAnswer: "a"
  },
  {
    question: "Quyidagi axborot tashuvchi disklarni hajmi bo’yicha o’sib borish tartibida ko’rsatilgan variantni tanlang:",
    options: {
      a: "Floppi - CD - DVD - HDD",
      b: "HDD - Floppi - CD - DVD",
      c: "HDD - DVD - Floppi - CD",
      d: "CD – HDD – DVD – Floppi"
    },
    correctAnswer: "a"
  },
  {
    question: "Tarmoq platasi (adapteri) nima uchun ishlatiladi?",
    options: {
      a: "Kompyuterni lokal tarmoqqa ulash",
      b: "Kompyuterni modemga ulash",
      c: "Kompyuterni internetga ulash",
      d: "Kompyuterni elektr manbaiga ulash"
    },
    correctAnswer: "a"
  },
  {
    question: "Kompyuter xotirasi uchun xarakterli bo’lgan parametrni ko’rsating:",
    options: {
      a: "Hajm",
      b: "Takt chastotasi",
      c: "Uzatish tezligi",
      d: "Ishlov berish tezligi"
    },
    correctAnswer: "a"
  },
  {
    question: "\"Kompyuter ishlab turgan vaqtda unga ma’lumotlarni kiritish qurilmasi\" - bu ta’rif quyida keltirilgan qaysi terminga mos keladi?",
    options: {
      a: "Kiritish qurilmasi",
      b: "Lazerli va purkovchi printer",
      c: "Monitor va qattiq disk",
      d: "Chiqarish qurilmasi"
    },
    correctAnswer: "a"
  },
  {
    question: "Axborotni vizual tasvirlash uchun mo’ljallangan qurilma qanday nomlanadi?",
    options: {
      a: "Monitor (displey)",
      b: "Planshet kompyuter",
      c: "Yoritkichli klaviatura",
      d: "Ko’rgazmali stend",
      e: "Skaner"
    },
    correctAnswer: "a"
  },
  {
    question: "\"Mexanik harakatni ekrandagi kursor harakatiga aylantirib beruvchi mexanik manipulyator\", so’z nima haqida bormoqda?",
    options: {
      a: "Sichqon",
      b: "Klaviatura",
      c: "Sensorli ekran",
      d: "Harakat datchiki",
      e: "To’g’ri javob yo’q"
    },
    correctAnswer: "a"
  },
  {
    question: "Qanday qurilmalar foydalanuvchi tomonidan axborotlarni kompyuterga kirituvchi asosiy qurilmalar hisoblanadi?",
    options: {
      a: "Klaviatura va sichqoncha",
      b: "Tizim bloki va klaviatura",
      c: "Monitor (displey) va qattiq disk",
      d: "Sichqon va elektr manbaa simi"
    },
    correctAnswer: "a"
  },
  {
    question: "Kompyuterlarda ma’lumotlarni to’plovchi asosiy qurilma qanday nomlanadi?",
    options: {
      a: "Qattiq disk",
      b: "Protsessor",
      c: "Tizim bloki",
      d: "CD/DVD"
    },
    correctAnswer: "a"
  },
  {
    question: "Operatsion tizim va kompyuter funksiyalaridan foydalanish hamda ularni boshqarish bo’yicha to’liq huquqiga ega bo’lgan foydalanuvchini turini ko’rsating:",
    options: {
      a: "Administrator",
      b: "Oddiy foydalanuvchi (Polzovatel)",
      c: "Mehmon foydalanuvchi (Gost)",
      d: "Tashrif foydalanuvchi"
    },
    correctAnswer: "a"
  },
  {
    question: "Faqatgina o’zining qayd ma’lumoti sozlashlarini o’zgartirish huquqiga ega bo’lgan, ammo dasturlarni o’rnatish va operatsion tizim funksiyalarini sozlash bo’yicha cheklovlari mavjud bo’lgan foydalanuvchi turini ko’rsating:",
    options: {
      a: "Oddiy foydalanuvchi (Polzovatel)",
      b: "Administrator",
      c: "Mexmon foydalanuvchi (Gost)",
      d: "Tashrif foydalanuvchi"
    },
    correctAnswer: "a"
  },
  {
    question: "Tizimga parolsiz kirish huquqi mavjud, ammo kompyuter va operatsion tizimni boshqarish bo’yicha hech qanday imkoniyatga ega bo’lmagan foydalanuvchi turini ko’rsating:",
    options: {
      a: "Mexmon foydalanuvchi (Gost)",
      b: "Administrator",
      c: "Tashrif foydalanuvchi",
      d: "Oddiy foydalanuvchi (Polzovatel)"
    },
    correctAnswer: "a"
  },
  {question: "Tizimga kirish uchun xar bir foydalanuvchidan qanday ma’lumotlar kiritish talab qilinadi?",
      options: {
        a: "Login va parol",
        b: "Faqat parol",
        c: "Faqat login",
        d: "Ismi Sharifi"
      },
      correctAnswer: "a"
    },
    {
      question: "Tizimga kirishda foydalanuvchining logini va paroli noto’g’ri kiritilsa qanday jarayon sodir bo’ladi?",
      options: {
        a: "Login va parolni qaytadan kiritish so’raladi",
        b: "Loginni kiritish qaytadan so’raladi",
        c: "Parolni kiritish qaytadan so’raladi",
        d: "Tizim qayta yuklanadi"
      },
      correctAnswer: "a"
    },
    {
      question: "Tizimga kirishda foydalanuvchining logini va paroli to’g’ri kiritilsa qanday jarayon sodir bo’ladi?",
      options: {
        a: "Tizim yuklanadi va ekranda ish stoli tasviri paydo bo’ladi",
        b: "Tizimga kirgandan so’ng login va parolni yana qayta kiritish so’raladi",
        c: "Foydalanuvchining ismi va sharifini kiritish talab qilinadi",
        d: "Tizim vaqt va sanasini o’rnatish talab qilinadi"
      },
      correctAnswer: "a"
    },
    {
      question: "Kompyuter kutish rejimiga o’tganda qanday jarayon sodir bo’ladi?",
      options: {
        a: "Kompyuterning xotirasiga dasturlarning joriy holati yozib olinadi, ventilyatorlar o’chiriladi va kompyuter elektr manbani tejash rejimiga o’tadi",
        b: "Kompyuterning xotirasidagi barcha ma’lumotlar o’chiriladi va kompyuter elektr manbaini tejash rejimiga o’tadi",
        c: "Faqatgina kompyuterning monitori (ekran) va ventilyatorlari o’chiriladi",
        d: "Kompyuter qayta yuklanadi va foydalanuvchi aralashuviga qadar tizim yuklanishini kutib turadi"
      },
      correctAnswer: "a"
    },
    {
      question: "Nomi, kengaytmasi va hajmiga ega bo’lgan u yoki bu turdagi axborotlarni o’zida jamlagan obyekt qanday nomlanadi?",
      options: {
        a: "Fayl",
        b: "Yorliq",
        c: "Папка",
        d: "Dastur"
      },
      correctAnswer: "a"
    },
    {
      question: "O’zining mos belgisiga va nomiga ega, biror dastur yoki papkaga bo’lgan murojaatni amalga oshiruvchi obyekt qanday nomlanadi?",
      options: {
        a: "Yorliq",
        b: "Fayl",
        c: "Папка",
        d: "Disk"
      },
      correctAnswer: "a"
    },
    {
        "question": "Diskda o’z nomiga ega bo’lgan va o’zida turli fayl ob’ektlarini va yorliqlarni jamlagan ob’ekt qanday nomlanadi?",
        "options": {
          "a": "Папка",
          "b": "Dastur",
          "c": "Fayl",
          "d": "Yorliq"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Qaysi tugmalar birikmasi yordamida almashish buferiga obyektlarning nusxasi olinadi?",
        "options": {
          "a": "Ctrl-C",
          "b": "Ctrl-V",
          "c": "Ctrl-X",
          "d": "Alt-C"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Qaysi tugmalar birikmasi yordamida obyektlarning nusxasi almashish buferidan tanlangan papkaga qo’yiladi?",
        "options": {
          "a": "Ctrl-V",
          "b": "Ctrl-C",
          "c": "Ctrl-X",
          "d": "Alt-C"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Klaviaturaning qaysi tugmasi yordamida obyektlarni o’chirish mumkin?",
        "options": {
          "a": "Delete",
          "b": "Backspace",
          "c": "F8",
          "d": "End"
        },
        "correctAnswer": "a"
      },
      {
        "question": "O’chirilgan fayllar qayerga yuboriladi?",
        "options": {
          "a": "Savatga",
          "b": "Boshqaruv paneliga",
          "c": "Ishchi stolga",
          "d": "\"Мой компьютер\" obyektiga"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Qaysi obyekt foydalanuvchining operatsion tizim bilan muloqotini ta’minlab beruvchi asosiy interfeys hisoblanadi?",
        "options": {
          "a": "Ish stoli",
          "b": "Boshqaruv paneli",
          "c": "Topshiriqlar paneli",
          "d": "\"Мой компьютер\" obyekti"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Qanday amal yordamida biror fayl yoki papkani savatga (korzinaga) jo’natmasdan butunlay o’chirish mumkin?",
        "options": {
          "a": "Shift-Delete",
          "b": "Delete",
          "c": "Ctrl-Delete",
          "d": "Alt-Delete"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Odatda savatdan (korzinadan) obyektlarni tiklash jarayonida ular qayerga tiklanadi?",
        "options": {
          "a": "O’chirilgan vaqtdagi asl joyiga",
          "b": "\"Мои документы\" papkasiga",
          "c": "\"Мой компьютер\" papkasiga",
          "d": "Foydalanuvchi tomonidan ko’rsatilgan joyga"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Bitta disk doirasida sichqoncha ko’rsatkichi bilan tutgan holda biror fayl yoki papka bir papkadan ikkinchisiga olib o’tilsa nima sodir bo’ladi?",
        "options": {
          "a": "Birinchi papkadan ikkinchi papkaga obyekt to’liq ko’chiriladi",
          "b": "Ikkinchi papkada obyekt yorlig‘i paydo bo’ladi",
          "c": "Ikkinchi papkada obyekt nusxasi paydo bo’ladi",
          "d": "Har ikkala papka tarkibi birlashtiriladi"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Bosh menyuning qaysi bo’limi orqali tizim ma’lumotnomasiga murojaat qilinadi?",
        "options": {
          "a": "\"Справка и поддержка\" bo’limi",
          "b": "\"Программы\" bo’limi",
          "c": "\"Выполнить\" bo'limi",
          "d": "\"Настройка\" bo’limi"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Tashqi xotira xizmat qiladi:",
        "options": {
          "a": "kompyuter ishlayotgan yoki ishlamayotganidan qat’iy nazar malumotlarni uzoq vaqt saqlash uchun",
          "b": "ma’lumotlarni EHM ichida saqlash uchun",
          "c": "masalalarni yechish jarayonida tez-tez o’zgarib turadigan ma'lumotlarni xotirada saqlash uchun",
          "d": "joriy vaqtda ma’lumotlarni qayta ishlash uchun"
        },
        "correctAnswer": "a"
      },
      {
        "question": "DOS ni vazifasi:",
        "options": {
          "a": "kompyuter qurilmalari va resurslarini boshqarishni tashkil etishda",
          "b": "kompyuter va uning tashqi qurilmalari orasida ma’lumotlar almashishni tashkil etishda faqat fayllarni saqlash va qayta ishlashda",
          "c": "tashqi qurilmalar bilan ishlashni tashkil etishda",
          "d": "barcha javoblar to’g’ri"
        },
        "correctAnswer": "d"
      },
      {
        "question": "Kompyuter o’chirilganda hamma ma’lumotlar o’chib ketadi:",
        "options": {
          "a": "tezkor xotirada",
          "b": "yumshoq diskda",
          "c": "qattiq diskda",
          "d": "CD-ROM diskda"
        },
        "correctAnswer": "a"
      },
      {
        "question": "Windows: Kompyuterni asosiy menyusi ochiladi, qachonki:",
      "options": {
        "a": "tugmasi bosilganda",
        "b": "\"Мой компьютер\" papkasi ochilganda",
        "c": "Shift klavishasi bosilganda",
        "d": "Ctrl klavishasi bosilganda"
      },
      "correctAnswer": "a"
    },
    {
      "question": "Windows: Faylni yoki papkani o’chirish uchun ob’ekt belgisini qaysi belgi tomon olib borish kerak?",
      "options": {
        "a": "Kорзина",
        "b": "Ярлык",
        "c": "Мои документы",
        "d": "Мой компьютер"
      },
      "correctAnswer": "a"
    },
    {
        question: "Kompyuter virusi bu:",
        options: {
          a: "O’lchami katta bo’lmagan maxsus yozilgan dastur",
          b: "Kompyuter kasalligi",
          c: "Kompyuterning maxsus jihozi",
          d: "Mikrob"
        },
        correctAnswer: "a"
      },
      {
        question: "Chop qilish qurilmasining turlari necha xil bo’ladi?",
        options: {
          a: "Matritsali, purkagichli, lazerli",
          b: "Purkagichli, lazerli",
          c: "Rangli, oq-qora",
          d: "Purkagichli, lazerli, ignali"
        },
        correctAnswer: "d"
      },
      {
        question: "Shaxsiy kompyuterning asosiy qismlaridan birini ko’rsating:",
        options: {
          a: "Tizimli blok",
          b: "Printer",
          c: "Skaner",
          d: "Venchester"
        },
        correctAnswer: "a"
      },
      {
        question: "Shaxsiy kompyuterning asosiy qismlaridan birini ko’rsating:",
        options: {
          a: "Monitor",
          b: "Kolonka",
          c: "Printer",
          d: "Skaner"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuterning ehtimoliy nosozliklarini aniqlang: Tashqi belgisi: Kompyuter yoqilgandan so’ng ham ishlamayapti, tizimli blok yoki monitor indikator lampasi yonmayapti:",
        options: {
          a: "Elektr oziqlanish yo’q",
          b: "Kompyuter tizimli bloki ishlamayapti",
          c: "Diskovodga disk qo’yilgan, kompyuterning dasturiy ta’minoti buzilgan",
          d: "Klaviatura ulanmagan yoki noto’g’ri ulangan, klaviatura ba’zi tugmalari bosilib qolgan"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuterning ehtimoliy nosozliklarini aniqlang: Tashqi belgisi: Tizimli blokda indikator yonib turibdi, lekin kompyuter ekranida tasvir yo’q:",
        options: {
          a: "Kompyuter tizimli bloki ishlamayapti",
          b: "Diskovodga disk qo’yilgan, kompyuterning dasturiy ta’minoti buzilgan",
          c: "Klaviatura ulanmagan yoki noto’g’ri ulangan, klaviatura ba’zi tugmalari bosilib qolgan",
          d: "Klaviatura bilan sichqon noto’g’ri ulangan, tizimli blokda nimadir ishlamayotgan bo’lishi mumkin"
        },
        correctAnswer: "d"
      },
      {
        question: "Qattiq disk bu:",
        options: {
          a: "Kompyuterning bosh xotirasi",
          b: "Mikroprotsessor",
          c: "RW diski",
          d: "Protsessor"
        },
        correctAnswer: "a"
      },
      {
        question: "«Мой компьютер» yorlig’ining vazifasi nima?",
        options: {
          a: "Disklar bilan ishlash, disklarni tanlash, operativ xotira qattiq ma’lumot olish va h.k.",
          b: "Disklar bilan ishlash, disklarni tanlash, o’chirilgan fayllarni tiklash va h.k.",
          c: "O’chirilgan fayllarni vaqtincha saqlash",
          d: "Foydalanuvchining ishchi materiallari, ya’ni fayllari va papkalarini saqlash"
        },
        correctAnswer: "a"
      },
      {
        question: "Modem qaysi texnologiyaga kerakli texnik qurilma?",
        options: {
          a: "Telekommunikatsiya texnologiyasi",
          b: "Ma’lumotlar bazasi texnologiyasi",
          c: "Ofis texnologiyasi",
          d: "Dasturlash texnologiyasi"
        },
        correctAnswer: "a"
      },
      {
        question: "CD-R va CD-RW disk yurituvchilarining farqi nimada?",
        options: {
          a: "CD-R disk yurituvchisi ma’lumotlarni o’qishga, CD-RW esa ma’lumotlarni o’qish va yozishga mo’ljallangan",
          b: "CD-R disk yurituvchisi ma’lumotlarni o’qish va yozishga, CD-RW esa ma’lumotlarni o’qishga mo’ljallangan",
          c: "Ikkalasi ham faqat ma’lumotlarni o’qishga mo’ljallangan",
          d: "Ikkalasi ham faqat ma’lumotlarni yozishga mo’ljallangan"
        },
        correctAnswer: "a"
      },
      {
        question: "Skaner - bu:",
        options: {
          a: "Grafik ma’lumotlarni kiritish qurilmasi",
          b: "Alfavit-raqamli va grafik ma’lumotlarni chiqarish qurilmasi",
          c: "Qog’oz chiqaradigan qurilmalarga grafik ma’lumotlarini chiqarish",
          d: "Grafik ma’lumotlarni chiqarish qurilmasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Quyidagi qurilmalarning qaysi biri yordamida Internetga ulanish mumkin?",
        options: {
          a: "Modem",
          b: "Printer",
          c: "Skaner",
          d: "Plata"
        },
        correctAnswer: "a"
      },
      {
        question: "Operatsion tizim – bu:",
        options: {
          a: "Kompyuterning barcha qurilmalarini o’zaro ishlashini va ularni ishlatishga foydalanuvchilarga ruxsat beruvchi dasturlar to’plami",
        b: "Hujjatlar bilan amallar bajaruvchi dasturlar to’plami",
        c: "Ma’lumotlarni defragmentlash dasturi",
        d: "Kompyuter asosiy qurilmalarining yig’indisi"
      },
      correctAnswer: "a"
    },
    {
      question: "Kompyuter qurilmalariga xizmat ko’rsatuvchi dasturlar qanday nomlanadi?",
      options: {
        a: "Drayver",
        b: "Translyator",
        c: "Kompilyator",
        d: "Arxivator"
      },
      correctAnswer: "a"
    },
    {
      question: "Arxivlovchi-dastur bu:",
      options: {
        a: "Fayllarni siquvchi dastur",
        b: "Fayllarni nusxasini saqlab qoluvchi dastur",
        c: "Interpretator",
        d: "Fayllarni taxlagich"
      },
      correctAnswer: "a"
    },
    {
        question: "Kompyuter protsessori qanday vazifani bajaradi?",
        options: {
          a: "Asosiy mantiqiy va arifmetik amallarni bajaradi",
          b: "Ma’lumotlarning xotiradan olgan joyini tekshiradi",
          c: "Programmalarni ishlashini tekshiradi",
          d: "Ma’lumotlarni boshqa urilmaga uzatadi"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter venchesteri nima vazifa bajaradi?",
        options: {
          a: "Asosiy xotirani tashkil qilib, ma’lumotlarni saqlaydi",
          b: "Mantiqiy amal bajaradi",
          c: "Operativ xotirani tashkil qilib, ma’lumotlarni saqlaydi",
          d: "Asosiy mantiqiy va arifmetik amallarni bajaradi"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter ishlash tezligi nimaga bog’liq?",
        options: {
          a: "Protsessor chastotasiga",
          b: "Displey ekran razmeriga",
          c: "Elektr toki kuchlanishiga",
          d: "Vinchester quvvatiga"
        },
        correctAnswer: "a"
      },
      {
        question: ".jpg kengaytmali fayl qanday axborotni saqlaydi?",
        options: {
          a: "Rasmlarni",
          b: "Faqat matnli",
          c: "Jadvallarni",
          d: "Grafik axborotlarni"
        },
        correctAnswer: "a"
      },
      {
        question: ".bmp kengaytmali fayl qaysi dastur yordamida yaratiladi?",
        options: {
          a: "Paint",
          b: "Excel",
          c: "Access",
          d: "Power Point"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter klaviaturasi - bu:",
        options: {
          a: "Alfavit",
          b: "Raqamli ma’lumotlarni kiritish qurilmasi",
          c: "Grafik ma’lumotlarni kiritish qurilmasi",
          d: "Alfavit-raqamli va grafik ma’lumotlarni chiqarish qurilmasi"
        },
        correctAnswer: "b"
      },
      {
        question: "Kompyuter monitori - bu:",
        options: {
          a: "Alfavit-raqamli va grafik ma’lumotlarni chiqarish qurilmasi",
          b: "Grafik ma’lumotlarni kiritish qurilmasi",
          c: "Ovoz ma’lumotlarini kiritish-chiqarish qurilmasi",
          d: "Alfavit-raqamli ma’lumotlarni kiritish qurilmasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Kiritish qurilmasi nima?",
        options: {
          a: "Klaviatura",
          b: "Strimer",
          c: "Faks modem",
          d: "Disketa"
        },
        correctAnswer: "a"
      },
      {
        question: "Chiqarish qurilmasi – bu:",
        options: {
          a: "Displey va printer",
          b: "Skaner",
          c: "Modem",
          d: "Strimmer"
        },
        correctAnswer: "a"
      },
      {
        question: "Modem nima?",
        options: {
          a: "Analogli signallarni diskret signallarga o’tkazib beruvchi va aksincha amal bajaruvchi texnik qurilma",
          b: "Pochta dasturi",
          c: "Tarmoq protokoli",
          d: "Internet server"
        },
        correctAnswer: "a"
      },
      {
        question: "Fayl tushunchasining to’liq va aniq ifodasini tanlang:",
        options: {
          a: "Bu o’z nomi, yaratilish vaqti va o’ziga xos belgilarga ega bo’lgan, tashqi tashuvchiga yozilgan axborotdir",
          b: "EHM xotirasiga yuklanadigan va ma’lum ishni bajaradigan programmadir",
          c: "Magnit diskga yozilib, ma’lum vaqt ichida saqlanadigan va uzunlikka ega bo’lgan ma’lumotlardir",
          d: "Magnit diskka yozilib, bir qator ko’rsatrichlarga ega bo’lgan nomlangan axborotdir"
        },
        correctAnswer: "a"
      },
      {
        question: "Tanlangan obyekt ustida F2 tugmasi bosilganda:",
        options: {
          a: "obyektning nomini o’zgartirish mumkin",
          b: "obyekt o’chiriladi",
          c: "obekt ichiga kiriladi",
          d: "obyekt Buferga ko’chiriladi"
        },
        correctAnswer: "a"
      },
      {
        question: "Sistemali menyu qaysi klavishalar kombinatsiyasi yordamida ochiladi?",
        options: {
          a: "Alt-Probel",
          b: "Ctrl-Esc",
          c: "Ctrl-Enter",
          d: "Alt-Tab"
        },
        correctAnswer: "a"
      },
      {
        question: "Bosh menyu qaysi klavishalar kombinatsiyasi yordamida ochiladi?",
        options: {
          a: "Ctrl-Esc",
          b: "Alt-Probel",
          c: "Alt-Tab",
          d: "Ctrl-Enter"
        },
        correctAnswer: "a"
      },
      {
        question: "Blok sxema nima?",
        options: {
          a: "Algoritmni geometrik shakllar yordamida berilish usuli",
          b: "Algoritm xossalaridan biri",
          c: "Kompyuterning asosiy qurilmasi",
          d: "Kompyuterning kushimcha qurilmasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Yorliqni yo’qotish natijasida…:",
        options: {
          a: "faqat yorliq yo’qoladi.",
          b: "yorliq bilan bog’langan programmaning fayli yo’qoladi.",
          c: "yorliq bilan bog’langan ma’lumotlar fayli yo’qoladi.",
          d: "yorliq bilan bog’langan barcha fayllar yo’qoladi."
        },
        correctAnswer: "a"
      },
      {
        question: "“Пуск” menyusining qaysi bo’limi yaqinda taxrirlangan yoki hosil qilingan faylini chaqirishni amalga oshiradi?",
        options: {
          a: "Документы",
          b: "Настройка",
          c: "Панель задач Masalalar paneli (Taskbar)",
          d: "Программы"
        },
        correctAnswer: "a"
      },
      {
        question: "«Проводник» va «Мой компьютер» nima bilan prinsipial farq qiladi?",
        options: {
          a: "«Проводник» da iearxik strukturali darcha mavjud",
          b: "«Мой компьютер» kompyuterning barcha qurilmalarini akslantiradi, «Проводник» esa - faqat bitta diskni",
          c: "«Мой компьютер» kompyuterning barcha qurilmalarini rasmlar bilan akslantiradi, «Проводник» esa - jadval ko’rinishida",
          d: "A va B javoblar to’g’ri"
        },
        correctAnswer: "d"
      },
      {
        question: "Fayl yoki \"papka\"ga yangi nom berish uchun, uni tanlangach qaysi tugmachani bosish lozim:",
        options: {
          a: "F2",
          b: "F3",
          c: "Alt-Enter",
          d: "Shift-F4"
        },
        correctAnswer: "a"
      },
      {
        question: "Ctrl-Esc tugmalarining kombinatsiyasi qanday vazifani amalga oshiradi?",
        options: {
          a: "\"Пуск\" menyusini ochadi",
          b: "Barcha aktiv masalalarning ro’yxatini chiqaradi",
          c: "Joriy aktiv fayl ishini yakunlaydi",
          d: "Orqaga qaytish buyrug’i"
        },
        correctAnswer: "a"
      },
      {
        question: "Qaysi tugmalar kombinatsiyasi aktiv programma ishini tugatadi?",
        options: {
          a: "Alt-F4",
          b: "Shift-F5",
          c: "Alt-Tab",
          d: "Ctrl-F4"
        },
        correctAnswer: "a"
      },
      {
        question: "Bloknot muxarririda hosil qilingan fayllar qanday kengaytmaga ega bo’ladi?",
        options: {
          a: "txt",
          b: "doc",
          c: "rtf",
          d: "exe"
        },
        correctAnswer: "a"
      },
      {
        question: "Qaysi tugmachalar yordamida belgilangan ma’lumotni Clipboard (bufer) ga ko’chirish mumkin?",
        options: {
          a: "Ctrl-C",
          b: "Ctrl-X",
          c: "Ctrl-V",
          d: "Ctrl-Y"
        },
        correctAnswer: "a"
      },
      {
        question: "Clipboard (bufer) ga joylashgan ma’lumotlarni qaysi tugmachalar kombinatsiyasi yordamida kerakli joyga qo’yish mumkin?",
        options: {
          a: "Ctrl-V",
          b: "Ctrl-C",
          c: "Ctrl-X",
          d: "Ctrl-Y"
      },
      correctAnswer: "a"
    },
    {
      question: "Menyuning qaysi bo’limi mos programmani yuklashni va yaqinda o’zgartirilgan faylini chaqirishni amalga oshiradi?",
      options: {
        a: "\"Документы\"",
        b: "\"Программы\"",
        c: "\"Настройка\"",
        d: "Masalalar paneli (Taskbar)"
      },
      correctAnswer: "a"
    },
    {
      question: "Obyektning kontekst menyusini qanday chaqirish mumkin?",
      options: {
        a: "«Obyekt» belgisiga sichqonchaning o’ng tugmasini bosib",
        b: "Obyekt belgisiga sichqonchaning chap tugmasini bosib",
        c: "Panel zadach ga sichqonchaning o’ng tugmasini bosib",
        d: "Ob’ektni faol qilish"
      },
      correctAnswer: "a"
    },
    {
      question: "Foydalanuvchi ish joyida bo’lmagan paytda uning kompyuterini himoyalash mumkin bo’lgan usulni ko’rsating:",
      options: {
        a: "Ekran zastavkasi yordamida",
        b: "Internetni uzib qo’yish",
        c: "Tarmoq administratori yordamida",
        d: "Kompyuterni o’chirib qo’yish"
      },
      correctAnswer: "a"
    },
    {
      question: "WinRAR dasturi yordamida fayl yoki papkalarni arxivlash jarayonida ularga parol qo’yish mumkinmi?",
      options: {
        a: "Xa",
        b: "Yo’q",
        c: "WinRAR dasturida bunday amal mavjud emas",
        d: "Obyektlarni arxivlash vaqtida ularga parol o’rnatish mumkin emas"
      },
      correctAnswer: "a"
    },
    {
      question: "AVP \"Лаборатории Касперского\", NOD 32, Doctor Web, McAfee dasturlari qanday dasturlar turiga kiradi?",
      options: {
        a: "Antivirus dasturlari.",
        b: "Internet tarmog’iga ulanish dasturlari.",
        c: "Administrator nomidan yuklanadigan dasturlar.",
        d: "Elektron hujjatlar almashishda qo’llaniladigan dasturlar."
      },
      correctAnswer: "a"
    },
    {
      question: "ARPAnet qaysi operatsion sistemada ishlagan?",
      options: {
        a: "UNIX operatsion sistemasida",
        b: "MS DOS operatsion sistemasida",
        c: "Microsoft operatsion sistemasida",
        d: "NC operatsion sistemasi"
      },
      correctAnswer: "a"
    },
    {
        question: "Scan Disk dasturi quyidagi qaysi vazifa uchun mo’ljallangan?",
        options: {
          a: "Diskdagi xatoliklarni va nosozliklarni tuzatish",
          b: "Disklarni formatlash",
          c: "Diskning fizikaviy yuzasini tekshirish",
          d: "Diskni ixchamlash"
        },
        correctAnswer: "a"
      },
      {
        question: "Axborotlarni quyida keltirilgan usullardan qaysi biri yordamida bir kompyuterdan-ikkinchisiga uzatib bo’lmaydi?",
        options: {
          a: "Elektr manbaa simlari orqali",
          b: "Axborotni USB-flesh qurilmasiga yozish orqali",
          c: "Axborotni elektron pochtaga yuborish orqali (Internetga ulangan holda)",
          d: "Axborotni CD-diskka yozish orqali"
        },
        correctAnswer: "a"
      },
      {
        question: "DOS ning vazifasi:",
        options: {
          a: "Kompyuter qurilmalari va resurslarini boshqarishni tashkil etish",
          b: "Kompyuter va uning tashqi qurilmalari orasida ma’lumotlar almashishni tashkil etish",
          c: "Faqat fayllarni saqlash va qayta ishlash",
          d: "Tashqi qurilmalar bilan ishlashni tashkil etish"
        },
        correctAnswer: "a"
      },
      {
        question: "Tashqi xotira xizmat qiladi:",
        options: {
          a: "Kompyuter ishlayotgan yoki ishlamayotganidan qat’iy nazar ma’lumotlarni uzoq vaqt saqlash uchun",
          b: "Ma’lumotlarni EHM ichida saqlash uchun",
          c: "Masalalarni yechish jarayonida tez-tez o’zgarib turadigan ma’lumotlarni xotirada saqlash uchun",
          d: "Joriy vaqtda ma’lumotlarni qayta ishlash uchun"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter o’chirilganda hamma ma’lumotlar o’chib ketadi:",
        options: {
          a: "Tezkor xotirada",
          b: "Yumshoq diskda",
          c: "Qattiq diskda",
          d: "CD-ROM diskda"
        },
        correctAnswer: "a"
      },
      {
        question: "Asosiy plataning inglizcha nomi qanday?",
        options: {
          a: "Motherboards",
          b: "HDD-Hard disk driver",
          c: "FDD- Floppy disk driver",
          d: "RAM- Random Access Memory"
        },
        correctAnswer: "a"
      },
      {
        question: "Fayl nomi nechta qismdan iborat bo’ladi?",
        options: {
          a: "2 ta",
          b: "5 ta",
          c: "4 ta",
          d: "3 ta"
        },
        correctAnswer: "d"
      },
      {
        question: "Kompyuterning ishlashi uchun qanday ta’minot zarur?",
        options: {
          a: "Texnik va dasturiy ta’minot",
          b: "Texnik ta’minot",
          c: "Dasturiy ta’minot",
          d: "Tok manbai"
        },
        correctAnswer: "a"
      },
      {
        question: "Qanday tugmachalar kombinatsiyasi yordamida nus’ha olingan matnni kursor o’rniga qo’yish mumkin?",
        options: {
          a: "Ctrl-V yoki Shift-Insert",
          b: "Ctrl-F.",
          c: "Ctrl-N .",
          d: "Ctrl-B"
        },
        correctAnswer: "a"
      },
      {
        question: "Sichqoncha nima?",
        options: {
          a: "Ma’lumotlarni kiritilishini yengillashtiruvchi manipulyator",
          b: "Kompyuterga ma’lumotlarni kiritish uchun mo’ljallangan",
          c: "Qog’ozga matnli va grafikli ma’lumotlarni chiqarish qurilmasi",
          d: "Ekranga matnli va grafikli ma’lumotlarni chiqarish qurilmasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Katalog deb nimaga aytiladi?",
        options: {
          a: "Fayl nomi, hajmi, oxirgi marta o’zgartirish kiritilgan sanasi va vaqti haqidagi ma’lumotlar saqlanadigan diskdagi maxsus joyga aytiladi",
          b: "Kompyuter ishga tushishi bilan ishga tushuvchi dasturga",
          c: "Ma’lumotlarni kiritilishini yengillashtiruvchi manipulyatorga",
          d: "To’g’ri javob yo’q"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuterga ma’lumotlarni kiritish uchun mo’ljallangan qurilmaga dastur haqida ma’lumotnomani ochish uchun qaysi klavisha ishlatiladi?",
        options: {
          a: "F1 klavishasi",
          b: "Scroll Lock klavishasi",
          c: "Print Screen klavishasi",
          d: "Power klavishasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Beshinchi avlod EHM lari qanday bo’lishi kerak?",
        options: {
          a: "Intellektual bilimlar bazasiga ega bo’lgan, intellektual robotlar",
          b: "Elektron mikrosxema asosida ishlaydigan",
          c: "Mikroprotsessor asosida ishlaydigan",
          d: "Elektron lampa asosida ishlaydigan"
      },
      correctAnswer: "a"
    },
    {
      question: "Axborotni to’plash, saqlash, izlash, unga ishlov berish hamda undan foydalanish imkonini beradigan, tashkiliy jihatdan tartibga solingan jami axborot resurslari, axborot texnologiyalari va aloqa vositalari qanday nomlanadi?",
      options: {
        a: "Axborot tizimi",
        b: "Axborot resursi",
        c: "Axborot texnologiyasi",
        d: "Telekommunikatsiya tizimi"
      },
      correctAnswer: "a"
    },
    {
      question: "Axborot tizimi tarkibidagi elektron shakldagi axborot, ma’lumotlar banki, ma’lumotlar bazasi qanday nomlanadi?",
      options: {
        a: "Axborot resursi",
        b: "Axborot tizimi",
        c: "Axborot texnologiyasi",
        d: "Telekommunikatsiya tizimi"
      },
      correctAnswer: "a"
    },
    {
      question: "\"Axborot\" tushunchasiga berilgan ta’rifni ko’rsating:",
      options: {
        a: "Manbalari va taqdim etilish shaklidan qat’iy nazar shaxslar, predmetlar, faktlar, voqealar, xodisalar va jarayonlar to’g’risidagi ma’lumotlar",
        b: "Identifikatsiyalash mumkin bo’lgan, rekvizitlari ko’rsatilgan va axborot tashuvchi qurilmalarga joylashtirilgan istalgan ma’lumotlar",
        c: "To’g’ri javob yo’q",
        d: "Buni tepadagi namunadagika yoz"
      },
      correctAnswer: "a"
    },
    {
      question: "Kompyuter viruslari va zarar yetkazuvchi dasturlarni topish hamda zarar yetkazilgan fayllarni tiklovchi, fayl va dasturlarni profilaktika qiluvchi dastur qanday nomlanadi?",
      options: {
        a: "Antivirus",
        b: "To’siqlovchi",
        c: "Tarmoqlararo ekran",
        d: "Nazoratchi"
      },
      correctAnswer: "a"
    },
    {
        question: "\"SPAM\" nima?",
        options: {
          a: "Barcha javoblar to’g’ri",
          b: "Axborotlarni so’ralmagan hollarda anonim tarzda tarqatilishi",
          c: "Reklamalarni so’ralmagan hollarda tarqatilishi",
          d: "Axborotni ommaviy tarqalish"
        },
        correctAnswer: "a"
      },
      {
        question: "Sizning kompyuteringizga viruslar va/yoki zararlangan fayllar qanday qilib tushib qolishi mumkinligini ko’rsating:",
        options: {
          a: "Barcha javoblar to’g’ri.",
          b: "Elektron pochta orqali.",
          c: "USB flesh qurilmasi, CD/DVD disk va boshqa axborot tashuvchi qurilmalar orqali.",
          d: "Internet tarmog’iga antivirus dasturlari, fayrvol yoki virusdan himoyalovchi boshqa dasturlardan foydalanmagan holda ulanish oqibatida."
        },
        correctAnswer: "a"
      },
      {
        question: "Foydalanuvchi ish joyida bo’lmagan paytda uning kompyuterini himoyalash mumkin bo’lgan usulni ko’rsating:",
        options: {
          a: "Ekran zastavkasi yordamida -Internetni uzib qo’yish",
          b: "Tarmoq administratori yordamida",
          c: "Kompyuterni o’chirib qo’yish"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Office dasturiy paketida mavjud bo’lgan pochta mijozi (klienti) dasturining nomini ko’rsating:",
        options: {
          a: "Outlook.",
          b: "Microsoft Office paketida pochta klienti dasturi mavjud emas",
          c: "Thunderbird.",
          d: "GMail."
        },
        correctAnswer: "a"
      },
      {
        question: "Axborot texnologiyasi nima?",
        options: {
          a: "Axborotni bir ko’rinishdan ikkinchi, sifat jihatdan mutloq yangi ko’rinishga keltiruvchi, ma’lumotlarni to’plash, qayta ishlash va uzatishning vosita va usullari majmuasidan foydalanish jarayonidir",
          b: "Informatsiyalarni yigish, saqlash va qayta ishlash uchun mo’ljallangan texnik vositalar jamlanmasi",
          c: "Kompyuter va uning qo’shimcha qurilmalaridan foydalanish texnologiyasi",
          d: "Belgilanma maqsadga erishish uchun informatsiyalarni uzatish, qayta ishlash va saqlash uchun qo’llaniladigan usullar, shaxslar va vositalarning o’zaro bog’langan majmuasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Outlook Express dasturi nima vazifani bajaradi?",
        options: {
          a: "Elektron pochta xizmatidan foydalanishni ta’minlaydi",
          b: "Internetga ulanishni ta’minlaydi",
          c: "Web-sahifa tuzish uchun ishlatiladi",
          d: "Internetda Web-sahifalarni qabul qilish, ma’lumotlarni ko’rish va yuklash uchun"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter asosida qaysi sanoq tizimi yotadi?",
        options: {
          a: "Ikkilik",
          b: "Onlik",
          c: "Sakkizlik",
          d: "On oltilik"
        },
        correctAnswer: "a"
      },
      {
        question: "Axboriy ma’lumotni bir ko’rinishdan ikkinchi, sifat jihatidan yangi korinishga keltirish, axborotni yigish, qayta ishlash va uzatishning usul va vositalari majmuasidan foydalanish jarayoni nima deb ataladi:",
        options: {
          a: "Axboriy jarayon",
          b: "Axborot tizimi",
          c: "Axborot texnologiyasi",
          d: "Dasturiy ta’minot"
        },
        correctAnswer: "c"
      },
      {
        question: "Quyidagilardan qaysi biri axborotga misol boladi?",
        options: {
          a: "Matn va belgi",
          b: "Vaqt va raqam",
          c: "Matn va vaqt",
          d: "Tovush, vaqt"
        },
        correctAnswer: "a"
      },
      {
        question: "Informatsion tizimning asosiy maqsadi:",
        options: {
          a: "Ma’lumotlarni yaratish, yigish, qayta ishlash va masofaga uzatish",
          b: "Kompyuterlar, kompyuter tarmoqlari, odamlar",
          c: "Ma’lumotlarni qayta ishlash",
          d: "Maxsulot ishlab chiqarish"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter asosiy qurilmalari:",
        options: {
          a: "Monitor, klaviatura, sistema bloki, sichqoncha",
          b: "Monitor, sichqoncha, sistema bloki",
          c: "Sichqoncha, monitor, printer, sistemali blok",
          d: "Protsessor, monitor, klaviatura"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter – bu:",
        options: {
          a: "Axborotni qayta ishlovchi ko’p funksiyali elektron qurilma",
          b: "Matnlar bilan ishlash, saqlash va chop etish uchun mo’ljallangan elektron qurilma",
        c: "Sonlarni qayta ishlash uchun mo`ljallangan elektron qurilma",
        d: "Turli ko’rinishdagi axborot saqlash uchun mo’ljallangan elektron qurilma"
      },
      correctAnswer: "a"
    },
    
    {
        question: "Proyektor vazifasi nima?",
        options: {
          a: "Kompyuter ekranidagi ma’lumotlarni katta ekranlarga chiqarish",
          b: "Kichik hajmli tasvirlarni yoki rasmga olishga moljallangan",
          c: "Kompyuterda tovushlarni, musiqalarni eshitish",
          d: "Katta hajmli tasvirlarni yoki rasmga olishga moljallangan"
        },
        correctAnswer: "a"
      },
      {
        question: "Faks-modem vazifasi nima?",
        options: {
          a: "Qogozdagi ma’lumotni boshqa joyga uzatishda yordam beradi",
          b: "Klaviatura ishini osonlashtiradi, foydalanuvchiga yordam beradi",
          c: "Kompyuterlarni tarmoq orqali bir-biriga boglashda yordam beradi",
          d: "Barchasi to’g’ri"
        },
        correctAnswer: "d"
      },
      {
        question: "HUB(Хаб) vazifasi nima?",
        options: {
          a: "Kompyuterlarni tarmoq orqali bir-biriga boglashda yordam beradi",
          b: "Qog’ozdagi ma’lumotni boshqa joyga uzatishda yordam beradi",
          c: "Klaviatura ishini osonlashtiradi, foydalanuvchiga yordam beradi",
          d: "Barchasi to’g’ri"
        },
        correctAnswer: "a"
      },
      {
        question: "Web-kamera vazifasi nima?",
        options: {
          a: "Kichik hajmli tasvirlarni yoki rasmga olishga mo’ljallangan",
          b: "Kompyuter ekranidagi ma’lumotlarni katta ekranlarga chiqarish",
          c: "Kompyuterda tovushlarni, musiqalarni eshitish",
          d: "Barchasi to’g’ri"
        },
        correctAnswer: "a"
      },
      {
        question: "Skanerning vazifasi nima?",
        options: {
          a: "Qogozdagi ma’lumotlarni kompyuter xotirasiga otkazish",
          b: "Kompyuterdagi ma’lumotlarni qog’ozga chop etish",
          c: "Internet tarmogiga ulanish",
          d: "Telefon signallarini kompyuterga yetkazish"
        },
        correctAnswer: "a"
      },
      {
        question: "Qattiq disk bu:",
        options: {
          a: "Istalgan formadagi ma’lumotlarni saqlash qurilmasi",
          b: "Grafik ma’lumotlarni kiritish qurilmasi",
          c: "Alfavit-raqamli ma’lumotlarni chiqarish qurilmasi",
          d: "Ma’lumotlarni lazer disklarda saqlash qurilmasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Kompyuter arifmetik-mantiqiy qurilmasi bu:",
        options: {
          a: "Protsessor",
          b: "Modem",
          c: "Plotter",
          d: "Displey"
        },
        correctAnswer: "a"
      },
      {
        question: "Bir Gegabayt bu:",
        options: {
          a: "1024 Mbayt",
          b: "1024 Kbayt",
          c: "1024 Bayt",
          d: "528 Kbayt"
        },
        correctAnswer: "a"
      },
      {
        question: "Ctrl-P tugmalar birikmasi nimani anglatadi?",
        options: {
          a: "Faylni chop etish",
          b: "Amallarni qaytarish",
          c: "Belgilangan qismlarni o’chirish",
          d: "Nusxa olish, nusxa ko’chirish"
        },
        correctAnswer: "a"
      },
      {
        question: "TCP/IP ni boshqalariga nisbatan to‘la ifodalovchi ta’rifni toping:",
        options: {
          a: "Turli tarmoq protokollari va platformalarida ishlovchi turli ilovalarda axborot almashinishni ta’minlovchi protokollar oilasi",
          b: "Misrosoft tomonidan ishlab chiqilgantarmoqlar o‘rtasida marshrutlashni ta’minlovchi protokollar oilasi",
          c: "Turli programma va apparat ta’minotini ishlab chiqaravchilarga Intemetga kirishni ta’minlovchi protokol",
          d: "Oddiy foydalanuvchilarga internet manbalariga kirish imkoniyatini beruvchi tarmoq protokollari oilasi"
        },
        correctAnswer: "a"
      },
      {
        question: "Ma’lumot - bu:",
        options: {
          a: "So‘zlashuv uchun xarakterli bo‘lgan erkin tartibdan yuqori darajada tartiblanganligi bilan farqlanuvchi axborot turi",
          b: "Yangi mahsulotlar, materiallar, texnologik jrayonlarning yuzaga kelishiga sababchi bo‘luvchi axborot turi",
          c: "Turli shakllarda yaratilishi mumkin bo‘lgan va qo‘shimcha tartiblashni talab qiluvchi axborot turi",
          d: "Ma’lum bir tartibda tartiblangan va qog‘oz tashuvchilarga tushirilgan axborot qismi"
        },
        correctAnswer: "a"
      },
      {
        question: "Axborot tizimiga ta’rif bering:",
        options: {
          a: "Qo‘yilgan maqsadga erishish yo‘lida axborotlami olish, qayta ishlash, va uzatish uchun usullar, vositalar va xodimlar jamlanmasi",
          b: "Material olamda axborot almashinuvining yuzaga kelishini ta’minlovchi axborot uzatuvchi, aloqa kanallari, qabul qilgich vositalar jamlanmasi",
        c: "Qo‘yilgan maqsadga erishish yo’lida o‘zaro birlashtirilgan va ayni vaqtda yagona deb qaraluvchi elementlar to‘plami",
        d: "Ishlab chiqarish jarayonida insonlaming umumiy munosabatlarini ifodalovchi vositlar to‘plami"
      },
      correctAnswer: "a"
    }
  
  
];
console.log(questions.length);








    
  


   



