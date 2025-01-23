
const quizData= [
        {
          question: "Microsoft Excel dasturida yangi hujjat yaratilsa, unga qanday nom biriktiriladi?",
          options: {
            a: "Книга1",
            b: "Презентация1",
            c: "Документ1",
            d: "Лист1"
          },
          correctAnswer: "a"
        },
        {
          question: ".xls kengaytmaga ega bo’lgan faylni sichqonchaning chap tugmasi bilan ikki marta bosilsa nima sodir bo’ladi?",
          options: {
            a: "Microsoft Excel dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
            b: "Microsoft Word dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
            c: "Microsoft powerpoint dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
            d: "Microsoft wordpad dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida hujjatni yopish uchun qanday amal bajariladi? To’g’ri javob variantini ko’rsating:",
          options: {
            a: "Файл\\Закрыть menyu amalini bajarish",
            b: "Файл\\Выход menyu amalini bajarish",
            c: "Закрыть tugmasini bosish",
            d: "Файл\\Завершить menyu amalini bajarish"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida Yaratilgan hujjatlar 'Ish kitobi' (rabochaya kniga) deb ataladi. Yangi hujjat Yaratish tartibi to’g’ri ko’rsatilgan variantni tanlang:",
          options: {
            a: "Файл\\Создать",
            b: "Файл\\Новая книга",
            c: "Вставка\\Новая книга",
            d: "Файл\\Новый"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida Yaratilgan ish kitobini saqlash mumkin bo’lgan to’g’ri variantni ko’rsating:",
          options: {
            a: "Файл\\Сохранить",
            b: "Файл\\Отправить",
            c: "Формат\\Сохранить",
            d: "Правка\\Копировать"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida ish kitobini ochish mumkin bo’lgan to’g’ri variantni ko’rsating:",
          options: {
            a: "Файл\\Открыть",
            b: "Файл\\Открыть как",
            c: "Формат\\Загрузить",
            d: "Правка\\Загрузить"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturi ish kitobiga Yangi sahifani (list) qanday qo'shish mumkin?",
          options: {
            a: "Sahifa nomiga sichqoncha o’ng tugmasini bosing va paydo bo’lgan menyudan 'Вставить' amalini tanlang",
            b: "Sahifa nomiga sichqoncha chap tugmasini ikki marta bosing va sahifa nomini kiriting",
            c: "Sahifa nomiga sichqoncha chap tugmasini bosing va paydo bo’lgan menyudan 'Dobavit' amalini tanlang",
            d: "Sahifa nomini tanlang va 'Pravka\\Вставить' menyu amalini bajaring"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturi ish kitobidagi sahifani (list) qanday o'chirish mumkin?",
          options: {
            a: "Sahifa yorlig'iga sichqoncha ung tugmasini bosib va kontekst menyusidan 'Udalit' amalini tanlash",
            b: "Sahifa nomiga sichqoncha tugmasini bosish orqali uni belgilab va Dalete tugmasini bosish bilan",
            c: "Sahifa nomiga sichqoncha tugmasini bosish orqali uni belgilab va Pravka\\Udalit' menyu amalini bajarish bilan",
            d: "Sahifani belgilab va 'Файл\\Закрыть' menyu amalini bajarish bilan"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida ish kitobi sahifalarini (list) qanday qilib tez qayta nomlash mumkin?",
          options: {
            a: "Sahifa nomiga sichqoncha chap tugmasini ikki marta bosing va sahifa yangi nomini kiriting",
            b: "Sahifa nomiga sichqoncha o’ng tugmasini bosing, kontekst menyusidan 'Pereimenovat' amalini tanlang va sahifa yangi nomini kiriting",
            c: "Sahifa nomiga sichqoncha chap tugmasini bosish orqali uni belgilang, 'Pravka\\Perinomenovat' menyu amalini bajaring va sahifa yangi nomini kiriting",
            d: "Sahifa nomiga sichqoncha chap tugmasini bosish orqali uni belgilang, F2 tugmasini bosing va sahifa yangi nomini kiriting"
          },
          correctAnswer: "a"
        },
        {
          question: "Microsoft Excel dasturida ish kitobi sahifalarini (list) qanday qilib ko’chirish yoki nusxa olish mumkin?",
          options: {
            a: "Sahifa nomiga sichqoncha ung tugmasini bosish va kontekst menyusidan 'Переместить\\Скопировать' amalini bajarish orqali",
          b: "Sahifani tanlash va Uskunalar panelidan 'Kopirovat' va 'Вставить' tugmalarini bosish orqali",
          c: "Sahifani tanlash va Uskunalar panelidan 'Vырeзaт' va 'Вставить' tugmalarini bosish orqali",
          d: "Sahifani tanlash va 'Pravka\\Kopirovat', 'Pravka\\Вставить' menyu amallarini bajarish orqali"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Excel dasturida jadvaldagi satr tartib raqamiga (satr nomiga) sichqoncha ko’rsatkichi bilan bosilsa nima sodir bo’ladi?",
        options: {
          a: "Satr to’liq belgilanadi",
          b: "Satr faollashadi",
          c: "Kursor tanlangan satrga urnatiladi",
          d: "Satrning ekranda ko’ringan qismi belgilanadi"
        },
        correctAnswer: "a"
      }
    ,{
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
    },
    {
        question: "Agar siz joriy hujjatni shu nom bilan ikkinchi marta saqlamoqchi bolsangiz, unda qanday amalni bajarasiz:",
        options: {
          a: "Сохранить",
          b: "Сохранить как",
          c: "Открыть",
          d: "Отключить"
        },
        correctAnswer: "b"
      },
      {
        question: "Qaysi amallar buferga kiritiladi:",
        options: {
          a: "вырезать, копировать",
          b: "вырезать",
          c: "копировать",
          d: "вставить"
        },
        correctAnswer: "a"
      },
      {
        question: "Word: Menyu quyidagi qismlardan iborat:",
        options: {
          a: "Файл, правка, вид, вставка",
          b: "Файл, таблица, формула",
          c: "Файл, правка, редактирование, вид",
          d: "Файл, вид, данные, таблица"
        },
        correctAnswer: "a"
      },
      {
        question: "Word: Ekranda klaviaturada mavjud bolmagan belgilar royxati xosil bolish uchun qaysi bandiga murojat etiladi:",
        options: {
          a: "Символ",
          b: "Файл",
          c: "Автотекст",
          d: "Примечание"
        },
        correctAnswer: "a"
      },
      {
        question: "Abzatslarni kop bosqichli markerlash usulini tanlab olishimiz mumkin bandini tanlang:",
        options: {
          a: "Список",
          b: "Символ",
          c: "Абзац",
          d: "Рисунок"
        },
        correctAnswer: "a"
      },
      {
        question: "Abzatslarning bosh xarfini aloxida ko‟rsatish uchun qaysi bandiga murojat etiladi:",
        options: {
          a: "Буквица",
          b: "Список",
          c: "Символ",
          d: "Формат"
        },
        correctAnswer: "a"
      },
      {
        question: ".Hujjat fonini tanlab olingan rang bilan toldirish uchun qaysi bandiga murojat etiladi:",
        options: {
          a: "Фон",
          b: "Список",
          c: "Символ",
          d: "Формат"
        },
        correctAnswer: "a"
      },
      {
        question: "Matni taxrir qilish uchun Menyuning qaysi bo‟limida amalga oshiriladi:",
        options: {
          a: "Сервис",
          b: "Файл",
          c: "Вид",
          d: "Формат"
        },
        correctAnswer: "a"
      },
      {
        question: "Statistika bandi nimani aniqlaydi:",
        options: {
          a: "hujjatning xajmi, belgilar va satrlar soni",
          b: "Foydalangan suzlar",
          c: "Ozgarishlarni",
          d: "tilni"
        },
        correctAnswer: "a"
      },
      {
        question: "Sahifada standart shakl va chegaralash belgilarini hosil qilish uchun qaysi tugma yordamida bajariladi:",
        options: {
          a: "Автофигуры",
          b: "Действия",
          c: "Надпис",
          d: "Порядок"
        },
        correctAnswer: "a"
      },
      {
        question: "Qaysi bandida tasvirlarni izoxlashda qulaylik tugdiruvchi elementlar jamlangan:",
        options: {
          a: "Выноски",
          b: "основные фигуры",
          c: "Звезды и ленты",
          d: "Блок-схема"
        },
        correctAnswer: "a"
      },
      {
        question: "Qaysi uskunalar panelida belgilangan tugmachalar joylashgan:",
        options: {
          a: "Форматирование",
          b: "Рисование",
          c: "Стандартная",
          d: "Таблицы границы"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Word dasturi yordamida yaratiladigan hujjatlar qanday nomlanadi:",
        options: {
          a: "Документ",
          b: "Презентация",
          c: "Книга",
          d: "Лист"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Word dasturiga yuklangan hujjatni yopish tartibi to’g’ri keltirilgan javobni ko’rsating:",
        options: {
          a: "«Файл\Закрыть» menyu amalini bajarish",
          b: "«Файл\Выход» menyu amalini bajarish",
          c: "« Закрыть » tugmasini bosish",
          d: "«Файл\Завершить» menyu amalini bajarish"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Word dasturi ma’lumotnomasini (Sправка) chaqirish qaysi tugma orqali amalga oshiriladi:",
        options: {
          a: "F1",
          b: "F2",
          c: "F8",
          d: "F12"
        },
        correctAnswer: "a"
      },
      {
        question: "Microsoft Word dasturida sichqoncha yordamida gapni (nuqtagacha bo’lgan matn) tezkor belgilash qanday amalga oshiriladi:",
        options: {
          a: "CTRL tugmasini bosgan holda ixtiyoriy gapni sichqoncha tugmasi bilan bosish orqali",
          b: "Kursorni kerakli gapga o’rnatish va “Правка\Выделить все” menyu amalini bajarish bilan",
          c: "Kursorni kerakli gapga o’r    natish va “Ctrl-A” tugmalar birikmasini bosish bilan",
                                                  d: "Kursorni kerakli gapga o’rnatish va kontekst menyusidan “Выделить” amalini bajarish bilan"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Chop etilmaydigan belgilar ekranda nimani tasvirlaydi:",
                                                options: {
                                                  a: "Xizmat belgilarini",
                                                  b: "Sahifa parametrlarini",
                                                  c: "qoldirib ketilgan belgilarni",
                                                  d: "Maxsus belgilarni"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Word da <abzaц>ni tugatish qaysi klavishani bosish bilan yakunlanadi:",
                                                options: {
                                                  a: "Enter",
                                                  b: "Esc",
                                                  c: "Shift",
                                                  d: "Backspace"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Word asosiy ob’yekti qanday kengaytirgichli faylda saklanadi:",
                                                options: {
                                                  a: "DOC",
                                                  b: "BMP",
                                                  c: "XLS",
                                                  d: "PPT"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Word da varakning parametrini o`zgartirish qanday bajariladi: -1. Parametri stranitsi 2. Format 3. Parametri 4. Word 5. Файл",
                                                options: {
                                                  a: "4,5,1",
                                                  b: "3,1,2",
                                                  c: "1,2,4",
                                                  d: "3,4,2"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Word hujjatiga Mc.Office kolleksiyasidan rasmlar urnatish uchun buyruqlar ketma-ketligini toping 1. Kolleksii 2.M.Office 3.Vstavka 4.Kartinki 5.Word 6.Risunok",
                                                options: {
                                                  a: "5,3,6,4,2,1",
                                                  b: "3,1,2,4,5,6",
                                                  c: "1,2,4,6,3,5",
                                                  d: "3,4,2,1,6,5"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Word: \"Правка\" menyusiga kiradigan buyruqlarni ko’rsating:",
                                                options: {
                                                  a: "bufer obmena",
                                                  b: "Chernovik",
                                                  c: "Разрыв",
                                                  d: "Shrift"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Excel dasturi nima uchun mo’ljallangan:",
                                                options: {
                                                  a: "jadvalli ma’lumotlarni qayta ishlaydigan dastur",
                                                  b: "foto tasvirlarni qayta ishlaydigan dastur",
                                                  c: "foto tasvirlarni qayta ishlaydigan dastur",
                                                  d: "matnli ma’lumotlarni qayta ishlaydigan dastur"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Quyidagilarning qaysi biri Elektron jadval protsessori:",
                                                options: {
                                                  a: "Excel",
                                                  b: "FoxPro",
                                                  c: "Basic",
                                                  d: "Access"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                question: "Microsoft Excel dasturida ustunlar qanday nomlangan:",
                                                options: {
                                                  a: "Faqat lotin xarflari bilan",
                                                  b: "faqat kirill xarflari bilan",
                                                  c: "arab xarflari bilan",
                                                  d: "lotin xarflari va Rim raqamlari bilan"
                                                },
                                                correctAnswer: "a"
                                              },
                                              {
                                                  question: "Ixtiyoriy turdagi kompyuter tarmoqlarining vazifasini aniqlang.",
                                                  options: {
                                                    a: "Umumiy resurslarga murojat qilish va ishlash",
                                                    b: "Faqat maxsus resurslarga murojaat qilish va ishlatish",
                                                    c: "Elektron pochtadan unumli foydalanish",
                                                    d: "Elektron pochta ishini tashkil qilish"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Kompyuter tarmoqlaridagi resurslar turlari quyidagicha:",
                                                  options: {
                                                    a: "Apparatli, programmaviy va information",
                                                    b: "Apparatli va programmaviy",
                                                    c: "Apparatli, programmaviy, information va dasturiy",
                                                    d: "Apparatli, electron, fizik va information"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Axborot resursi ta’rifini bering.",
                                                  options: {
                                                    a: "Axborot resursi deb uzoqda joylashgan kompyuterlarda saqlanadigan ma’lumotlarga aytiladi",
                                                    b: "Axborot resursi deb shaxsiy kompyuterda joylashgan dasturlar majmuiga aytiladi",
                                                    c: "Axborot resursi deb uzoqda joylashgan kompyuterlarga saqlanadigan apparatura qurilmalarga aytiladi",
                                                    d: "Axborot resursi deb uzoqda joylashgan kompyuterlarga saqlanadigan dasturiy ta’minotga aytiladi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Internet nima?",
                                                  options: {
                                                    a: "Xalqaro (butun dunyo) tarmogi",
                                                    b: "Yevropa va Osiyo orasidagi tarmoq",
                                                    c: "AQSH va Yevropa orasida tashkil qilingan tarmoq",
                                                    d: "Kompyuterlarning lokal tarmogi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Internet kimga, qaysi tashkilotga qarashli?",
                                                  options: {
                                                    a: "Internet aniq bir shaxs yoki tashkilotga qarashli emas",
                                                    b: "Internet Apple firmasiga tegishli",
                                                    c: "Internet milliarder Bill Geyts ga qarashli",
                                                    d: "Internet Microsoft firmasiga qarashli"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Internetning negizida nima yotadi?",
                                                  options: {
                                                    a: "Super kompyuterlarning ozaro tezkor aloqa kanallari yordamida boglangan tizimi yotadi",
                                                    b: "Super kompyuterlarning katta toplami yotadi",
                                                    c: "Shaxsiy kompyuterlarning aloqa kanallari yordamida boglangan tizimi yotadi",
                                                    d: "Shaxsiy kompyuterlarning toplami yotadi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Internet muhitida ma’lumotlarning asosiy qismi qanday shaklda saqlanadi?",
                                                  options: {
                                                    a: "Gepermatn shaklda saqlanadi",
                                                    b: "Butun va haqiqiy turdagi sonlar toplami shaklida saqlanadi",
                                                    c: "Massivlar shaklida saqlanadi",
                                                    d: "Butun, haqiqiy, massiv va fayl tipidagi ma’lumotlar majmui shaklida saqlanadi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Tarmoqqa kiritilgan kompyuterlar …",
                                                  options: {
                                                    a: "Tarmoq tugunlari deyiladi",
                                                    b: "Tarmoqning programma taminoti deyiladi",
                                                    c: "Tarmoqning axborot resurslari deyiladi",
                                                    d: "Tarmoqning apparat va programma ta’minoti deyiladi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "LAN va WAN nima?",
                                                  options: {
                                                    a: "LAN – bu lokal va WAN – global tarmoqlardir",
                                                    b: "LAN – bu global va WAN – lokal tarmoqlardir",
                                                    c: "LAN – apparatura va WAN – programma ta’minotidir",
                                                    d: "LAN – tarmoqning programma va WAN – tarmoqning apparatura ta’minotidir"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Klient server tipidagi tarmoqqa …",
                                                  options: {
                                                    a: "Server – tarmoq ishini boshqaruvchi, klient – qolgan kompyuterlar",
                                                    b: "Klient – tarmoq ishini boshqaruvchi, server – qolgan kompyuterlar",
                                                    c: "Faqat klient kompyuterlar ishlatiladi",
                                                    d: "Faqat server kompyuterlar ishlatiladi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Tarmoq topologiyasi nima?",
                                                  options: {
                                                    a: "Tarmoqdagi kompyuterlarning joylashishi va boglanishi sxemasi",
                                                    b: "Tarmoqdagi kompyuterlarning joylashishi",
                                                    c: "Tarmoqdagi kompyuterlarning toplami",
                                                    d: "Shaxsiy kompyuterlarning ozaro boglanishi"
                                                  },
                                                  correctAnswer: "a"
                                                },
                                                {
                                                  question: "Asosiy tarmoq topologiyalari:",
                                                  options: {
                                                    a: "Yulduz, halqa va shina",
                                                    b: "Shina, yulduz va ketma-ket",
                                                    c:"Halqa, aylana va shina",
                                                            d: "Yulduz, halqa va aylana"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Xab (hub) nima?",
                                                          options: {
                                                            a: "Yulduz topologiyali tarmoqqa markaziy qurilma (kompyuter)",
                                                            b: "Shina topologiyali tarmoqqa yordamchi kompyuter",
                                                            c: "Yulduz topologiyali tarmoqda yordamchi qurilma",
                                                            d: "Shina topologiyali tarmoqda markaziy kompyuter"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Shlyuz vazifasini aniqlang.",
                                                          options: {
                                                            a: "Har xil protokolli lokal tarmoqlarni boglash",
                                                            b: "Bir xil protokolli lokal tarmoqlarni boglash",
                                                            c: "Global tarmoqlarni ishini tekshirish",
                                                            d: "Lokal tarmoqlarni ishini tekshirish"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Agar tarmoqda kabel tizimi ishlatilmasa …",
                                                          options: {
                                                            a: "Biz simsiz tarmoqni hosil qilamiz",
                                                            b: "Tarmoq ishlamaydi",
                                                            c: "Kompyuterlar ishi buziladi",
                                                            d: "Tarmoq tashkil qilib bolmaydi"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Bod (bit/sek) nima uchun ishlatiladi?",
                                                          options: {
                                                            a: "Tarmoqda ma’lumotlarni uzatish tezligini aniqlash uchun",
                                                            b: "Kompyuter tezkorligini aniqlash uchun",
                                                            c: "Xotira hajmini aniqlash uchun",
                                                            d: "Takt chastotasini olchash uchun"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "WLAN nima?",
                                                          options: {
                                                            a: "Simsiz lokal tarmoq turi",
                                                            b: "Optotolali lokal tarmoq turi",
                                                            c: "Global tarmoqning turi",
                                                            d: "Lokal tarmoqlarning birlashmasi"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Kabelning qaysi turi yoruglik oqimini uzatishga moljallangandir?",
                                                          options: {
                                                            a: "Optotolali kabellar",
                                                            b: "Koaksial kabellar",
                                                            c: "Koaksial va optotolali kabellar",
                                                            d: "Kabelli kanallar va optotolali kabellar"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Modemning vazifasi…",
                                                          options: {
                                                            a: "Modulyatsiya va demodulyatsiya qilishdir",
                                                            b: "Kompyuter tezkorligini oshirishdir",
                                                            c: "Xotira hajmini kengaytirishdir",
                                                            d: "Programmalarni vaqtinchalik saqlashdir"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Modemning ma’lumotlarni uzatish tezligi …",
                                                          options: {
                                                            a: "Bit/sek bilan olchanadi",
                                                            b: "Megabayt va gigabayt bilan olchanadi",
                                                            c: "Operatsiya/sekund bilan olchanadi",
                                                            d: "Sekund/bit bilan olchanadi"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Tarmoq operatsion sistemasi vazifalarini aniqlang.",
                                                          options: {
                                                            a: "Tarmoqda ma’lumotlarni uzatish, saqlash va qayta ishlash",
                                                            b: "Tarmoqda foydalanuvchi bilan muloqot qilish",
                                                            c: "Tarmoqda foydalanuvchilar kompyuterlarining protsessor vaqtini taqsimlash",
                                                            d: "Tarmoqda foydalanuvchilar kompyuterlarining operativ xotirasini taqsimlash"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Tarmoq operatsion sistemasining bosh vazifasi …",
                                                          options: {
                                                            a: "Tarmoq resurslarini taqsimlash va boshqarish",
                                                            b: "Elektron pochta xizmatini boshqarish",
                                                            c: "Telekonferensiyani tashkil qilish",
                                                            d: "Domenlarni nomlash va chat tashkil qilish"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "Trafik nima?",
                                                          options: {
                                                            a: "Trafik deb kanaldagi ma’lumotlarning toliqlik oqimiga aytiladi",
                                                            b: "Trafik deb xotiradagi ma’lumotlarning hajmiga aytiladi",
                                                            c: "Trafik – bu shinaning ma’lumotlarni uzatish oqimiga aytiladi",
                                                            d: "Trafik – bu modemning tezkorligi olchovi"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "IP – adres – bu …",
                                                          options: {
                                                            a: "32 bitli son bolib 4 ta qismga bolinadi",
                                                            b: "24 bitli son bolib 3 ta qismga bolinadi",
                                                            c: "16 bitli son bolib 2 ta qismga bolinadi",
                                                            d: "1 baytli son bolib 2 ta qismga bolinadi"
                                                          },
                                                          correctAnswer: "a"
                                                        },
                                                        {
                                                          question: "IP – adreslarning soni …",
                                                          options: {
                                                            a: "Chegaralangan",
                                                            b: "Chegaralanmagan",
                                                            c: "Chegaralanmagan, ammo aniqlash mumkin",
                                                            d: "Chegaralangan, ammo ixtiyoriy foydalanuvchi kengaytirishi mumkin"
                                                          },
                                                          correctAnswer: "a"
                                                        },
  {
    question: "Iyerarxik ma’lumotlar bazasi misoli sifatida:",
    options: {
      a: "diskda saqlanadigan fayllar katalogi",
      b: "guruh jurnali sahifasi",
      c: "poyezdlar qatnovi jadvali",
      d: "elektron jadval"
    },
    correctAnswer: "a"
  },
  {
    question: "Tarmoq strukturali informatsion modelga quyidagi kiradi:",
    options: {
      a: "kompyuter Internet tarmog‘i",
      b: "Mendeleyev jadvali",
      c: "kompyuter fayl tizimi",
      d: "oilaning genealogik daraxti"
    },
    correctAnswer: "a"
  },
  {
    question: "Iyerarxik ma’lumotlar bazasida ma’lumotlar majmui va ular orasidagi bog‘lanish quyidagicha tasvirlanadi:",
    options: {
      a: "daraxtsimon struktura",
      b: "tarmoq sxemasi",
      c: "jadval",
      d: "jadvallar majmuasi"
    },
    correctAnswer: "a"
  },
  {
    question: "Amaliyotda keng ishlatiladigan model:",
    options: {
      a: "relyatsion model",
      b: "taqsimlangan ma’lumotlar bazasi",
      c: "iyerarxik ma’lumotlar bazasi",
      d: "tarmoq ma’lumotlar bazasi"
    },
    correctAnswer: "a"
  },
  {
    question: "Relyatsion ma’lumotlar bazasi yozuvida quyidagilar bo‘lishi mumkin:",
    options: {
      a: "har xil turdagi ma’lumotlar",
      b: "faqat bir turli ma’lumot",
      c: "faqat matnli axborot",
      d: "mutlaq sonli axborot"
    },
    correctAnswer: "a"
  },
  {
    question: "0,7–3>2 ifoda qanaqa ma’lumotlar turiga tegishli:",
    options: {
      a: "mantiqiy",
      b: "sonli",
      c: "satrli",
      d: "butun"
    },
    correctAnswer: "b"
  },
  {
    question: "Ma’lumotlar bazasini boshqarish tizimi bu:",
    options: {
      a: "ma’lumotlar bazasini yaratish va uni boshqarish uchun xizmat qiladi",
      b: "kompyuterning hamma apparat vositalarini ishini ta’minlovchi dasturlar majmui",
      c: "turli hujjatlar va matnlarni qayta ishlash uchun amaliy dastur",
      d: "fayllar bilan yanada qulay ishlash imkonini beruvchi operatsion tizim qobig‘i"
    },
    correctAnswer: "a"
  },
  {
    question: "Quyidagi javoblarning qaysi birida relyatsion ma’lumotlar bazasidagi axborotlarni tashkilashtirish shakli to’g‘ri keltirilgan?",
    options: {
      a: "Jadval",
      b: "Istalgan fayl",
      c: "Iyerarxik struktura",
      d: "Daraxt"
    },
    correctAnswer: "a"
  },
  {
    question: "Ma’lumotlar bazasidagi nomlangan eng kichik element bu",
    options: {
      a: "Maydonlar",
      b: "Katak",
      c: "Yozuv",
      d: "Shablon"
    },
    correctAnswer: "a"
  },
  {
    question: "Ma’lumotlar bazasi struktura o‘zgaradi, agarda",
    options: {
      a: "Maydon qo‘shilsa/uchirilsa",
      b: "Yozuvlar tahrirlansa",
      c: "Yozuvlar joylari almashtirilsa",
      d: "Yozuv qo‘shilsa/uchirilsa"
    },
    correctAnswer: "a"
  },
  {
    question: "Quyidagi tasdiqlardan qaysi biri noto‘g‘ri?",
    options: {
      a: "Ma’lumotlar bazasidagi maydon tarkibida bir necha yozuvlar bor",
      b: "Ma’lumotlar bazasi qat’iy strukturaga ega",
      c: "Ma’lumotlar bazasining har bir maydoni o‘z uzunligiga ega",
      d: "Ma’lumotlar bazasidagi yozuv tarkibida bir necha maydonlar bor"
    },
    correctAnswer: "a"
  },
  {
    question: "SQL bu",
    options: {
      a: "So‘rovlar tilidir",
      b: "Yuqori darajadagi dasturlash tilidir",
      c: "Quyi darajadagi dasturlash tilidir",
      d: "Ma’lumotlar bazalarini belgilash tilidir"
    },
    correctAnswer: "a"
  },
  {
    question: "Ma’lumotlarning o‘ziga xos xususiyatlarini e’tiborga olgan holda uning maydonlarini ifodalash – bu",
    options: {
      a: "Jadval tuzish",
      b: "Ma’lumotlar bazasi yaratish",
      c: "So‘rov tuzish",
      d: "Hisobot yaratish"
    },
    correctAnswer: "a"
  },
  {
    question: "Belgilari soni 255 dan oshmaydigan maydon nomini ko‘rsating",
    options: {
      a: "Oddiy matn maydoni",
      b: "Sonli maydon",
      c: "Sana va vaqt maydoni",
      d: "Hisoblagich maydon"
    },
    correctAnswer: "a"
  },
  {
    question: "So‘rovlar nimaga mo‘ljallangan?",
    options: {
      a: "Ma’lumotlar bazasidan axborotlarni tanlash va qayta ishlash uchun",
                                                       b: "Murakkab dasturiy harakatlarni bajarish uchun",
                                                       c: "Ma’lumotlarni kiritish uchun",
                                                       d: "Ma’lumotlar bazasini saqlash uchun"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Ma’lumotlar bazasi qaysi obyektlarsiz mavjud emas?",
                                                     options: {
                                                       a: "Jadvallarsiz",
                                                       b: "Formalarsiz",
                                                       c: "Hisobotlarsiz",
                                                       d: "Modullarsiz"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Ma’lumotlar bazasi qaysi jadval elementlarida saqlanadi?",
                                                     options: {
                                                       a: "Maydonlarda",
                                                       b: "Ustunlarda",
                                                       c: "Satrlarda",
                                                       d: "Yozuvlarda"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Yozuvsiz jadvalda qandaydir axborot saqlanishi mumkinmi?",
                                                     options: {
                                                       a: "Yozuvsiz jadval mavjud bo‘lmaydi",
                                                       b: "Bo‘sh jadval ma’lumotlar bazasi strukturasi haqida axborotga ega",
                                                       c: "Bo‘sh jadval kelgusi yozuvlar haqida ma’lumotni saqlaydi",
                                                       d: "Bo‘sh jadval hech qanday axborot saqlamaydi"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "«Schetchik» turdagi maydonning xususiyati?",
                                                     options: {
                                                       a: "Avtomatik ko‘payish xususiyatiga ega",
                                                       b: "Haqiqiy sonlarni kiritish uchun xizmat qiladi",
                                                       c: "Cheklangan o‘lchovga ega",
                                                       d: "Sonli ma’lumotlarni kiritish uchun xizmat qiladi"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "«Memo» turdagi maydonning xususiyati?",
                                                     options: {
                                                       a: "Matnli ma’lumotlarni katta hajmda saqlash uchun xizmat qiladi",
                                                       b: "Cheklangan o‘lchovga ega",
                                                       c: "Haqiqiy sonlarni kiritish uchun xizmat qiladi",
                                                       d: "Avtomatik ko‘payish xususiyatiga ega"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Makroslar nima uchun mo‘ljallangan?",
                                                     options: {
                                                       a: "Buyruqlar guruhi avtomatik bajarilishi uchun",
                                                       b: "Ma’lumotlar bazasini tanlash va qayta ishlash uchun",
                                                       c: "Ma’lumotlarni kiritish uchun",
                                                       d: "Ma’lumotlar bazasini saqlash uchun"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Quyida keltirilgan ma’lumotlar bazasi modellarining qaysi birida elementlararo gorizontal va vertikal aloqa bor?",
                                                     options: {
                                                       a: "Tarmoqli",
                                                       b: "Relyatsion",
                                                       c: "Iyerarxik",
                                                       d: "Obyektga yo‘naltirilgan"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Qanday so‘rovni tuzish mumkin emas?",
                                                     options: {
                                                       a: "Parallel",
                                                       b: "Oddiy",
                                                       c: "Kesishgan",
                                                       d: "Jadval yaratuvchi"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Ma’lumotlarni kiritish uchun kerakli maydonga ega bo‘lgan elektron blank nima deb ataladi?",
                                                     options: {
                                                       a: "Forma",
                                                       b: "Makros",
                                                       c: "So‘rov",
                                                       d: "Jadval"
                                                     },
                                                     correctAnswer: "a"
                                                   },
                                                   {
                                                     question: "Kompyuter tarmogi nima?",
                                                     options: {
                                                       a: "Kompyuter tarmogi deb ikkita va undan kop kompyuterlarning fizik boglanishiga aytiladi.",
                                                       b: "Kompyuter tarmogi deb faqat uchta kompyutrlarning boglanishiga aytiladi.",
                                                       c: "Kompyuter tarmogi deb faqat ikkita kompyuterning boglanishiga aytiladi.",
                                                       d: "Kompyuter tarmogi deb ikkita va undan kop kompyuterlarning majmuiga aytiladi."
                                                     },
                                                     correctAnswer: "d"
                                                   },  {
                                                         question: "Excel: A1 yacheykaga 15, B1 yacheykaga 3, C1 yacheykaga 18, D1 yacheykaga 4, E1 yacheykaga =(A1 - B1 - C1) / D1 formula kiritilsa uning qiymatini toping.",
                                                         options: {
                                                           a: "-9",
                                                           b: "-18",
                                                           c: "-4",
                                                           d: "-2"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Excel: A1 yacheykaga 15, B1 yacheykaga 3, C1 yacheykaga 15, D1 yacheykaga 4, E1 yacheykaga =(A1 - B1 - C1) / D1 formula kiritilsa uning qiymatini toping.",
                                                         options: {
                                                           a: "15",
                                                           b: "18",
                                                           c: "24",
                                                           d: "33"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Jadval ma’lumotlarini o’sish yoki kamayish tartibida saralash qaysi menyu yordamida amalga oshiriladi?",
                                                         options: {
                                                           a: "Данные",
                                                           b: "Вид",
                                                           c: "Сервис",
                                                           d: "Формат"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Ma’lumotlarni qayta ishlash paketi qaysi menyu yordamida o‘rnatiladi?",
                                                         options: {
                                                           a: "Сервис",
                                                           b: "Данные",
                                                           c: "Формат",
                                                           d: "Вставка"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Elektron jadvalda A1:E1 yacheykalar ajratilgan. Ajratilgan yacheykalar soni nechta?",
                                                         options: {
                                                           a: "5",
                                                           b: "7",
                                                           c: "6",
                                                           d: "4"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Elektron jadvalda A1:E3 yacheykalar ajratilgan. Ajratilgan yacheykalar soni nechta?",
                                                         options: {
                                                           a: "15",
                                                           b: "20",
                                                           c: "9",
                                                           d: "4"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Jadvaldan kerakli ma’lumotni qidiruv darchasini ochuvchi tugmalar kombinatsiyasi:",
                                                         options: {
                                                           a: "Ctrl-F",
                                                           b: "Ctrl-H",
                                                           c: "Ctrl-G",
                                                           d: "Ctrl-P"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Jadvaldan kerakli ma’lumotni boshqasiga almashtirish darchasini ochuvchi tugmalar kombinatsiyasi:",
                                                         options: {
                                                           a: "Ctrl-H",
                                                           b: "Ctrl-F",
                                                           c: "Ctrl-G",
                                                           d: "Ctrl-P"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Uskunalar paneliga qo‘shimcha tugmalarni chiqarish tartibi:",
                                                         options: {
                                                           a: "Vid→Panel instrumentov→nastroyka→komandi",
                                                           b: "Vid→Panel instrumentov→nastroyka→parametri",
                                                           c: "Vstavka→Panel instrumentov→nastroyka→komandi",
                                                           d: "Vstavka→Panel instrumentov→nastroyka→parametri"
                                                         },
                                                         correctAnswer: "a"
                                                       },
                                                       {
                                                         question: "Hujjatni ximoyalash qaysi menyu orqali o’rnatiladi:",
                                                         options: {
                                                           a: "Сервис",
                                                           b: "Вставка",
                                                           c: "Правка",
                                                           d: "Файл"
                                                         },
                                                         correctAnswer: "d"
                                                       }

  
  
];
console.log(quizData.length)










    
  


   



