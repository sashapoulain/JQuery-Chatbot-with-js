var sorular = [
    'İsminiz?',
    'Nerelisiniz?',
    'Kaç yaşındasınız?',
    'Nerede yaşıyorsunuz?',
    'Okul?',
    'Peki çalışıyor musunuz?',
    'Mesleğiniz nedir?',
    'Sigara kullanıyor musunuz?',
    'Hobileriniz?',
    'Evcil hayvanınız var mı?',
    'Sohbet ettiğiniz için teşekkür ederim:)'
];

var soru = 0;

var inpKut = document.querySelector("#cevapKismi");
var outKut = document.querySelector("#sonuc");
outKut.innerHTML = sorular[soru];

function cevapGoster() {
var input = inpKut.value;
if (inpKut.value == "") {

}else {
        if (soru == 0) {
            outKut.innerHTML = `Merhaba ${input}`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 1) {
            outKut.innerHTML = `${input} güzel bir yer olmalı`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 2) {
            outKut.innerHTML = `Yani ${2020 - input} doğumlusun`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 3) {
            outKut.innerHTML = `${input} umarım doğduğun yer kadar eğlencelidir`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 4) {
            outKut.innerHTML = `${input} iyi bir okul olduğunu duymuştum`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 5) {
            outKut.innerHTML = `${input} iyiymiş`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 6) {
            outKut.innerHTML = `${input} demek... pekala`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "Düşünüyorum...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 7) {
            outKut.innerHTML = `${input} taamaamm`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "son bir kaç soru...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 8) {
            outKut.innerHTML = `hımmm`;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "...");
            ++soru;
            setTimeout(soruDegis, 2000);
        } else if (soru == 9) {
            outKut.innerHTML = `Bunu merakımdan sormuş olabilirim...:) `;
            inpKut.value = "";
            inpKut.setAttribute("placeholder", "...");
            ++soru;
            setTimeout(soruDegis, 2000);
        }
    }
}



function soruDegis() {
    inpKut.setAttribute("placeholder", "Cevap giriniz...");
    outKut.innerHTML = sorular[soru];
    if (soru == 10) {
        inpKut.style.display = "none";

    }
}

$(document).on('keyup', function (e) {
    if (e.which == 13) {
        cevapGoster();
    }
})

$("#cevapKismi").focus();