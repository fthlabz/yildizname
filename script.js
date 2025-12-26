/* FTHLABZ INFINITY ENGINE (FINAL MERGE) */

const charMap = {
    'a': 1, 'b': 2, 'c': 3, 'ç': 3, 'd': 4, 'e': 1, 'f': 80, 'g': 20, 'ğ': 1000, 'h': 8,
    'ı': 10, 'i': 10, 'j': 3, 'k': 20, 'l': 30, 'm': 40, 'n': 50, 'o': 6, 'ö': 6, 'p': 2,
    'r': 200, 's': 60, 'ş': 300, 't': 400, 'u': 6, 'ü': 6, 'v': 6, 'y': 10, 'z': 7, ' ': 0
};

// --- İNŞAAT BLOKLARI (Parçalı Cümle Yapısı) ---
const DB = {
    zodiacIntro: {
        "KOÇ": "Ruhsal haritanın başında Koç burcunun öncü ateşi yanıyor; bu seni doğuştan bir başlatıcı kılıyor.",
        "BOĞA": "Boğa burcunun sarsılmaz toprağı ruhuna işlemiş; sen güvenin ve sabrın yaşayan sembolüsün.",
        "İKİZLER": "İkizler burcunun rüzgarı zihninde esiyor; bu da sana inanılmaz bir iletişim yeteneği veriyor.",
        "YENGEÇ": "Yengeç burcunun derin suları kalbinde; sen mantığınla değil, derin sezgilerinle hareket ediyorsun.",
        "ASLAN": "Aslan burcunun güneşi ruhunda parlıyor; sen yönetmek ve sahnede olmak için yaratılmışsın.",
        "BAŞAK": "Başak burcunun analitik zekası kodlarına işlenmiş; mükemmeliyetçilik senin yaşam biçimin.",
        "TERAZİ": "Terazi burcunun dengesi ruhunda; sen her zaman adaleti ve estetiği arayan bir arabulucusun.",
        "AKREP": "Akrep burcunun gizemi ve tutkusu mayanda var; küllerinden yeniden doğmak senin süper gücün.",
        "YAY": "Yay burcunun keşif arzusu kanında dolaşıyor; sınırlar sana göre değil, ruhun uzak ufukları hedefliyor.",
        "OĞLAK": "Oğlak burcunun disiplini seni sen yapıyor; zirveye tırmanmak senin için bir zorunluluk.",
        "KOVA": "Kova burcunun vizyoner bakışı zihninde; sen geleceği gören ve özgürlüğüne düşkün bir ruhsun.",
        "BALIK": "Balık burcunun evrensel şefkati kalbinde; sınırların yok, herkesle ruhsal bir bağ kurabiliyorsun."
    },
    elementDetail: {
        "ATEŞ": "Senin tabiatın 'Nariye' (Ateş) sınıfındandır. Ruhun durağanlığı kabul etmez. Tıpkı ateşin yukarı yükselmesi gibi, sen de sürekli yükselmek ve görünür olmak istersin. Öfken saman alevi gibidir; çabuk parlar ama kin tutmazsın.",
        "TOPRAK": "Senin tabiatın 'Turabiye' (Toprak) sınıfındandır. Fıtratında acelecilik yoktur. Bir tohumu eker ve sabırla ağaç olmasını beklersin. Güvenmediğin yere adım atmazsın. Senin gücün 'Sebat' etmektir.",
        "HAVA": "Senin tabiatın 'Havaiye' (Hava) sınıfındandır. Ruhun rüzgar gibidir; bir yerde durmaz, sürekli yeni bilgi ve macera arar. Dilinle yılanı deliğinden çıkarırsın ama kararsızlık senin en büyük düşmanındır.",
        "SU": "Senin tabiatın 'Maiye' (Su) sınıfındandır. Bulunduğun kaba uyarsın ama sabrın taştığında o kabı kırabilirsin. Sezgilerin mantığından çok daha güçlüdür. İnsanların enerjisini sünger gibi çekersin."
    },
    pathConnector: [
        "", // 0 yok
        "Hayat yolunda 'Liderlik' vasfınla ön plana çıkıyorsun. Başkasının izinden gitmek sana göre değil.",
        "Senin sınavın 'Denge ve Birlik'. Keskin uçları törpülemek ve barışı sağlamak için buradasın.",
        "İfade gücün ve yaratıcılığın senin sihirli değneğin. Sözlerinle dünyayı değiştirebilirsin.",
        "Disiplin ve inşa etmek senin görevin. Sağlam temeller atmadan huzur bulamıyorsun.",
        "Değişim ve özgürlük senin yakıtın. Rüzgar gibi esmeli ve deneyimden deneyime koşmalısın.",
        "Sorumluluk ve hizmet senin kalbinde. Aileni ve sevdiklerini korumak senin kutsal görevin.",
        "Analiz ve bilgelik yolundasın. Yüzeysel olan hiçbir şey seni tatmin etmez, derinleşmelisin.",
        "Güç ve otorite yönetimi senin elinde. Maddi dünyada başarı senin için kaçınılmaz.",
        "Evrensel şifa ve insanlık sevgisi senin yolun. Sen sadece kendin için değil, bütün için varsın."
    ],
    loveStart: [
        "Gönül kapın herkese açık değil; sen seçilen değil, seçen tarafsın.",
        "Aşk senin için bir oyun değil, ruhsal bir tamamlanma yolculuğu.",
        "İlişkilerde yüzeysellik senin ruhunu çürütür, sen derinlik arıyorsun.",
        "Sevdiğin zaman 'ya hep ya hiç' kuralıyla seviyorsun, gri alanların yok.",
        "Senin aşk dilin kelimeler değil, fedakarlık ve eylemlerdir.",
        "Yalnızlık senin için korkutucu değil, kalitesiz bir kalabalıktan iyidir."
    ],
    loveMid: [
        "Partnerinden beklentin sadece sevgi değil, zihinsel bir meydan okuma.",
        "Geçmişte yaşadığın güven kırıklıkları, kalbine görünmez duvarlar örmüş.",
        "Bazen aşırı korumacı tavrın, sevgini bir kafese dönüştürebiliyor.",
        "Şefkatin o kadar büyük ki, genelde yaralı ruhları kendine çekiyorsun.",
        "Özgürlüğüne düşkünlüğün, bağlanma korkusu gibi görünebilir."
    ],
    loveEnd: [
        "Gerçek aşkı bulduğunda, o duvarlar yıkılacak ve nehir gibi akacaksın.",
        "Seni tamamlayan değil, sana aynalık yapan kişi senin ruh eşindir.",
        "Kaderin sana, sabrının sonunda hak ettiğin o derin bağı getirecek.",
        "Senin ilacın 'Teslimiyet'. Kontrolü bıraktığın an, aşk seni bulacak."
    ]
};

// --- ÇALIŞTIRMA ---
document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const mother = document.getElementById('mother').value.trim();
    const dateStr = document.getElementById('date').value;

    if(!name || !mother || !dateStr) return;

    // Yükleme Animasyonu
    document.getElementById('screen-form').classList.remove('active');
    document.getElementById('screen-loading').classList.add('active');

    const steps = ["Yıldız haritası taranıyor...", "Ebced ve Element dengeleniyor...", "Kader defteri yazılıyor..."];
    let step = 0;
    const interval = setInterval(() => {
        if(step < steps.length) {
            document.getElementById('loading-detail').innerText = steps[step];
            step++;
        } else {
            clearInterval(interval);
            performAnalysis(name, mother, dateStr);
            document.getElementById('screen-loading').classList.remove('active');
            document.getElementById('screen-result').classList.add('active');
        }
    }, 800);
});

function performAnalysis(name, mother, dateStr) {
    // 1. HESAPLAMALAR
    const ebcedTotal = calculateEbced(name) + calculateEbced(mother);
    const dateObj = new Date(dateStr);
    const zodiac = getZodiac(dateObj); // {name, element}
    const lifePath = getLifePath(dateStr);
    
    // BENZERSİZ TOHUM (Ahmet ile Mehmet'i ayıran formül)
    // Tarih Sayısı + Ebced + İsim Uzunluğu = Eşsiz Sayı
    const uniqueSeed = ebcedTotal + parseInt(dateStr.replace(/-/g, '')) + name.length;

    // UI DOLDUR
    document.getElementById('res-name').innerText = name.toLocaleUpperCase('tr-TR');
    document.getElementById('res-zodiac').innerText = zodiac.name;
    document.getElementById('res-element').innerText = zodiac.element;
    document.getElementById('res-ebced').innerText = "EBCED: " + ebcedTotal;

    const content = document.getElementById('content-area');
    content.innerHTML = "";

    // --- 15 MADDELİK İÇERİK OLUŞTURMA ---

    // 1. ELEMENT (Detaylı)
    addCard(content, "fa-fire", "1. TABİAT VE ELEMENT ANALİZİ", DB.elementDetail[zodiac.element], 0.1);

    // 2. RUHSAL KİMLİK (Kombinasyon: Burç Girişi + Kader Yolu)
    let p2 = DB.zodiacIntro[zodiac.name] + " " + DB.pathConnector[lifePath];
    addCard(content, "fa-fingerprint", "2. RUHSAL KİMLİK VE KADER YOLU", p2, 0.2);

    // 3. İRADE DENGESİ
    const p3 = (calculateEbced(name) > calculateEbced(mother)) 
        ? "Kendi isminin frekansı daha yüksek. Bu, senin kaderini ailenin değil, bizzat senin kararlarının şekillendireceğini gösterir. İpler senin elinde." 
        : "Anne kökünün frekansı daha baskın. Bu sana atalarından gelen güçlü bir manevi koruma ve sezgi mirası sağlıyor.";
    addCard(content, "fa-scale-balanced", "3. İRADE VE KÖK DENGESİ", p3, 0.3);

    // 4. AŞK (3 Parçalı Kombinasyon)
    let p4 = DB.loveStart[uniqueSeed % 6] + " ";
    p4 += DB.loveMid[(uniqueSeed + 2) % 5] + " ";
    p4 += DB.loveEnd[(uniqueSeed + 4) % 4];
    addCard(content, "fa-heart", "4. AŞK VE GÖNÜL KAPISI", p4, 0.4);

    // 5. RIZIK VE KARİYER
    const day = dateObj.getDay();
    let p5 = "";
    if(day === 1 || day === 5) p5 = "Doğduğun günün enerjisi (Ay/Venüs) sana insan ilişkileri, sanat, estetik ve hizmet sektörlerinde büyük kapılar açıyor.";
    else if(day === 2 || day === 6) p5 = "Doğduğun günün sert enerjisi (Mars/Satürn) seni teknik, yönetim, inşaat ve zorlu işlerin lideri yapıyor.";
    else p5 = "Doğduğun günün enerjisi (Merkür/Jüpiter) sana ticaret, iletişim, eğitim ve medya alanlarında başarı vadediyor.";
    p5 += (ebcedTotal > 550) ? " Ayrıca isminin yüksek frekansı, maaşlı çalışmaktan ziyade kendi sistemini kurman gerektiğini fısıldıyor." : " Takım çalışması ve diplomasi senin gizli silahın.";
    addCard(content, "fa-coins", "5. RIZIK VE KARİYER YOLU", p5, 0.5);

    // 6. 40 KAPISI
    const mod40 = ebcedTotal % 40;
    let p6 = "";
    if(mod40 === 0) p6 = "Mühürlü Kader: İsmin 40'a tam bölünüyor. Başladığın iş yarım kalmaz, evren seni destekler.";
    else if(mod40 > 30) p6 = `Sabır Eşiği (${mod40}/40): Döngü tamamlanmak üzere. Şu an yaşadığın zorluklar son sınavlar.`;
    else if(mod40 < 15) p6 = `Yeni Enerji (${mod40}/40): Yolun başındasın. Hata yapmaktan korkma, deneyerek büyüyeceksin.`;
    else p6 = `Olgunlaşma Süreci (${mod40}/40): Ne baştasın ne sonda. Şu an emek verme ve inşa etme vaktidir.`;
    addCard(content, "fa-door-open", "6. KIRKLAR KAPISI", p6, 0.6);

    // 7. SAĞLIK (Burç Bazlı)
    const healthMap = {
        "KOÇ": "Baş, beyin ve yüz bölgesi hassas. Migrene dikkat.",
        "BOĞA": "Boğaz, boyun ve tiroid. İfade edemediklerin şişkinlik yapar.",
        "İKİZLER": "Omuzlar, kollar, eller ve akciğerler. Sinirsel gerginlik.",
        "YENGEÇ": "Mide, göğüs ve sindirim. Stres direkt midene vurur.",
        "ASLAN": "Kalp, sırt ve omurga. Gurur ve kaygı kalbini yorabilir.",
        "BAŞAK": "Bağırsaklar ve sinir sistemi. Detaycılık seni yoruyor.",
        "TERAZİ": "Böbrekler ve bel bölgesi. Duygusal yükleri belinde taşıma.",
        "AKREP": "Üreme sistemi ve boşaltım. Derin duygular bedeni etkiler.",
        "YAY": "Karaciğer, kalça ve uyluk. Aşırıya kaçmak karaciğeri yorar.",
        "OĞLAK": "Dizler, dişler, kemikler ve deri. Romatizmal hassasiyet.",
        "KOVA": "Bacaklar, bilekler ve dolaşım sistemi. Kramplara dikkat.",
        "BALIK": "Ayaklar ve lenf sistemi. Vücut su tutmaya meyilli."
    };
    addCard(content, "fa-leaf", "7. SAĞLIK VE ENERJİ MERKEZİ", healthMap[zodiac.name], 0.7);

    // 8. KORUYUCU ESMA
    const esmalar = ["Ya Kuddüs", "Ya Rahim", "Ya Vedud", "Ya Fettah", "Ya Rezzak", "Ya Şafi", "Ya Nur", "Ya Latif", "Ya Cami", "Ya Aziz"];
    addCard(content, "fa-hands-praying", "8. KORUYUCU ESMA", `Frekansına en uygun zikir: <strong>${esmalar[ebcedTotal % 10]}</strong>`, 0.8);

    // 9. ŞİFALI TAŞ
    const stones = ["Ametist", "Akik", "Sitrin", "Kuvars", "Ay Taşı", "Kaplan Gözü", "Lapis Lazuli", "Turkuaz", "Yeşim", "Obsidyen"];
    addCard(content, "fa-gem", "9. UĞURLU TAŞIN", `Enerjini dengeleyen taş: <strong>${stones[uniqueSeed % 10]}</strong>`, 0.9);

    // 10. GİZLİ YETENEK
    const talents = [
        "İnsanların niyetini onlar konuşmadan sezebilmek (Durugörü).",
        "Kriz anlarında soğukkanlılıkla çözüm üretmek.",
        "Sözcüklerle insanları ikna etme ve büyüleme.",
        "Ellerini kullanarak maddeye şekil verme ve şifalandırma.",
        "Rüyaların gerçeğe çıkması ve haberci olması."
    ];
    addCard(content, "fa-eye", "10. GİZLİ RUHSAL YETENEK", talents[uniqueSeed % 5], 1.0);

    // 11. ZAMAN
    const m = dateObj.getMonth();
    const timeTxt = (m < 6) ? "Yılın 'Ekim' dönemindesin. Yeni niyetler et." : "Yılın 'Hasat' dönemindesin. Sonuç alma vakti.";
    addCard(content, "fa-hourglass-half", "11. ZAMANIN RUHU", timeTxt, 1.1);

    // 12. UYARI
    const warns = [
        "Sırlarını herkese anlatma. Yıldızın nazar enerjisine açık.",
        "Geçmişe takılı kalma. Arkana bakarak önünü göremezsin.",
        "Para konusunda duygusal davranma. Borç verirken dikkat et.",
        "Öfken saman alevi gibi. Ani kararlar sana zarar verebilir.",
        "Herkesi kendin gibi sanma. İnsanlara sınır çizmeyi öğren."
    ];
    addCard(content, "fa-triangle-exclamation", "12. KOZMİK UYARI", warns[ebcedTotal % 5], 1.2);

    // 13. RUH EŞİ HARFİ
    const letters = ["A, S, K", "M, E, H", "Y, Z, R", "B, T, N", "C, D, P", "F, L, V"];
    addCard(content, "fa-font", "13. RUH EŞİ HARFLERİ", `Kaderinde etkisi olan harfler: <strong>${letters[uniqueSeed % 6]}</strong>`, 1.3);

    // 14. UĞURLU GÜN
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    addCard(content, "fa-calendar-day", "14. GÜÇ GÜNÜN", `${days[dateObj.getDay()]} günü senin en yüksek enerjili günündür.`, 1.4);

    // 15. SON SÖZ
    const seals = [
        "Kader gayrete aşıktır.", "Yıldızlar yolu gösterir, yürüyen sensin.", 
        "Nasibinde olan, dağın altında da olsa sana gelir.", "Su akar, yolunu bulur, zorlama."
    ];
    addCard(content, "fa-signature", "15. MÜHÜR SÖZÜ", `<em>"${seals[uniqueSeed % 4]}"</em>`, 1.5);
}

// --- YARDIMCI FONKSİYONLAR ---
function calculateEbced(str) { let t=0; for(let c of str.toLocaleLowerCase('tr-TR')) t+=(charMap[c]||0); return t; }
function getLifePath(d){ let s=0; for(let c of d.replace(/-/g,'')) s+=parseInt(c); while(s>9 && s!=11 && s!=22){ let t=0; for(let c of s.toString()) t+=parseInt(c); s=t; } return s; }
function getZodiac(d) {
    const day=d.getDate(), m=d.getMonth()+1;
    if((m==3&&day>=21)||(m==4&&day<=20)) return {name:"KOÇ", element:"ATEŞ"};
    if((m==4&&day>=21)||(m==5&&day<=20)) return {name:"BOĞA", element:"TOPRAK"};
    if((m==5&&day>=21)||(m==6&&day<=21)) return {name:"İKİZLER", element:"HAVA"};
    if((m==6&&day>=22)||(m==7&&day<=22)) return {name:"YENGEÇ", element:"SU"};
    if((m==7&&day>=23)||(m==8&&day<=23)) return {name:"ASLAN", element:"ATEŞ"};
    if((m==8&&day>=24)||(m==9&&day<=23)) return {name:"BAŞAK", element:"TOPRAK"};
    if((m==9&&day>=24)||(m==10&&day<=23)) return {name:"TERAZİ", element:"HAVA"};
    if((m==10&&day>=24)||(m==11&&day<=22)) return {name:"AKREP", element:"SU"};
    if((m==11&&day>=23)||(m==12&&day<=21)) return {name:"YAY", element:"ATEŞ"};
    if((m==12&&day>=22)||(m==1&&day<=20)) return {name:"OĞLAK", element:"TOPRAK"};
    if((m==1&&day>=21)||(m==2&&day<=18)) return {name:"KOVA", element:"HAVA"};
    return {name:"BALIK", element:"SU"};
}
function addCard(cont, icon, title, txt, delay) {
    const div = document.createElement('div');
    div.className = 'detail-item';
    div.style.animationDelay = delay + 's';
    div.innerHTML = `<div class="detail-title"><i class="fa-solid ${icon}"></i> ${title}</div><div class="detail-text">${txt}</div>`;
    cont.appendChild(div);
}