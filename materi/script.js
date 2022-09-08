console.log("SSK SMPN 1 Cibadak");
console.log("GitHub Creator : ItsSiapaAja");

let header = 70;
let nav = document.querySelector("nav h1");

let sskMateri = document.querySelector("section.materi .ssk");
let ipsMateri = document.querySelector("section.materi .ips");

let main = document.querySelector("main");

// SSK
let salam_genre = document.querySelector("section.materi div.ssk div ul li.salam-genre");
let salam_genre_m = document.querySelector("main article#salam-genre");

let stunting = document.querySelector("section.materi div.ssk div ul li.stunting");
let stunting_m = document.querySelector("main article#stunting");

let narkotika = document.querySelector("section.materi div.ssk div ul li.narkotika");
let narkotika_m = document.querySelector("main article#narkotika");

// IPS
let materiIps = {
    interaksiSosial : [document.querySelector("section.materi div.ips div ul li.interaksi-sosial"), document.querySelector("main article#interaksi-sosial")],
    faktorInteraksiSosial : [document.querySelector("section.materi div.ips div ul li.faktor-interaksi-sosial"), document.querySelector("main article#faktor-interaksi-sosial")],
    interaksiAntarRuang : [document.querySelector("section.materi div.ips div ul li.interaksi-antar-ruang"), document.querySelector("main article#interaksi-antar-ruang")]
};

let buttonKembali = document.querySelector("main div.button");

function homePage()
{
    location.href = "../index.html";
}

function removeSSK()
{
    salam_genre_m.classList.remove("true");
    stunting_m.classList.remove("true");
    narkotika_m.classList.remove("true");
}

function removeIPS()
{
    materiIps.interaksiSosial[1].classList.remove("true");
    materiIps.faktorInteraksiSosial[1].classList.remove("true");
    materiIps.interaksiAntarRuang[1].classList.remove("true");
}

nav.addEventListener("click", homePage);
sskMateri.addEventListener("click", function (e) {
    sskMateri.classList.toggle("list");
});

ipsMateri.addEventListener("click", function (e) {
    ipsMateri.classList.toggle("list");
});

buttonKembali.addEventListener("click", function () {
    removeSSK();
    removeIPS();
    main.classList.remove("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});