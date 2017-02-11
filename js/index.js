// Is device mobile?
if (window.innerWidth >= 850) {
    // Give video its source, will initiate load. Otherwise, it won't load anything and will be hidden by CSS.
    // This is so the video doesn't burn mobile data on phones.
    // Also it's a stylistic nightmare.
    document.getElementsByTagName('video')[0].src = 'video.mp4';

    // Parallax effect for video background.
    window.onscroll = function() {
        document.getElementsByClassName('video-container')[0].style.transform = 'translateY(' + document.body.scrollTop / 1.5 + 'px)';
    };
}

var greetings = ['Ngiyakwemukela', 'Kíimak \'oolal', ' 	Ẹ ku abọ', 'Märr-ŋamathirri', 'Siya namkela nonke', 'ברוך־הבא', 'Merhbe', 'Croeso', 'Benvnuwe', 'Tere tulõmast', 'Hoan nghênh', 'Tervhen tuldes', 'Benvignùo', 'Xush kelibsiz', 'خوش آمديد', 'Ласкаво просимо', 'yI\'el', 'fi\'i', 'Xush kelibsiz', 'Hoş geldin', 'Maeva', 'Welkom', 'Willkumme', 'Bienveniu', 'Mwaiseni', 'Maogmáng Pag-abót', 'Welkam', 'Emedi', 'Willkommen', 'Tikilluarit', 'Aloha', 'Wayakurua', 'Selamat Datang', 'Benvenuto', 'Mauri', 'Murakaza neza', 'B’a’ntulena', 'Velkommen', 'Bainvegni', 'Бзиала шәаабеит', 'Шъукъеблагъ', 'Welkom', 'ḫaṣānu', 'Mayad-ayad nga pad-abot', 'Mir se vjên', 'Mirë se vjen', 'Qaĝaasakung huzuu haqakux̂', 'Wellkumma', 'እንኳን ደህና መጣህ።', 'أهلاً و سهلاً', 'Ahla w sahla', 'Bienvenius', 'Բարի գալուստ', 'Բարի՜ եկաք:', 'Ghini vinit', 'আদৰণি', 'Bienveníu', 'Miro peicak', 'Xoş gəlmişsiniz', 'Salamat datang', 'Сәләм бирем', 'Ongi etorri', 'Menjuah-juah', 'Še das d\' kemma bisd', 'Прывiтанне', 'Mwaiseni', 'স্বাগতম', 'आईं ना', 'Maogmáng Pag-abót', 'Welkam', 'Dobrodošli', 'Degemer mat', 'Добре дошъл', 'ကြိုဆိုပါတယ်', 'Benvingut', 'Maayong pag-abot', 'Kopisanangan do kinorikatan', 'Bienvenida', 'Bienvenidos', 'Bien binidu', 'Bienbenidu', 'Марша дагIийла шу', 'ᎤᎵᎮᎵᏍᏗ', '歡迎', '歡迎', '歡迎光臨', '欢迎', '歡迎光臨', 'Hóʔą', 'Boolkhent', 'Kopivosian do kinoikatan', 'Dynnargh dhywgh', 'Tatawaw', 'Malipayeng Pag-abot', 'Buďte vítáni', 'Velkommen', 'Welkom', 'Emedi', 'Tere tulemast', 'Miawoe zɔ', 'Vælkomin', 'Bula', 'Tervetuloa', 'Bienvenue', 'Wäljkiimen', 'Wäilkuumen', 'Wolkom', 'Agradît', 'Benvido', 'Buiti achüluruni', 'Adiu', 'Willkommen', 'კეთილი იყოს თქვენი', 'Ἀσπάζομαι!', 'Creoso a\'baramin' , 'Welcome']
var counter = 0;
setInterval(function() {
    document.getElementById('welcome').innerHTML = greetings[Math.floor(counter*greetings.length)] + '!';
    counter += 1/greetings.length;
    counter = (counter > 1) ? 0 : counter
}, 2000);
