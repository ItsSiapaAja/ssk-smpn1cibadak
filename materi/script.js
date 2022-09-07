let header = 70;
let nav = document.querySelector("nav h1");

let sskMateri = document.querySelector("section.materi .ssk");
let ipsMateri = document.querySelector("section.materi .ips");

let main = document.querySelector("main");
let salam_genre = document.querySelector("section.materi div.ssk div ul li.salam-genre");
let salam_genre_m = document.querySelector("main article#salam-genre");

let stunting = document.querySelector("section.materi div.ssk div ul li.stunting");
let stunting_m = document.querySelector("main article#stunting");

let narkotika = document.querySelector("section.materi div.ssk div ul li.narkotika");
let narkotika_m = document.querySelector("main article#narkotika");

function homePage()
{
    location.href = "../index.html";
}

function removeTrue(condition)
{
    if(condition == 1)
    {
        salam_genre_m.classList.remove("true");
    }
    else if(condition == 2)
    {
        stunting_m.classList.remove("true");
    }
    else if(condition == 3)
    {
        narkotika_m.classList.remove("true");
    }
}

nav.addEventListener("click", homePage);
sskMateri.addEventListener("click", function (e) {
    sskMateri.classList.toggle("list");
});

ipsMateri.addEventListener("click", function (e) {
    ipsMateri.classList.toggle("list");
});

salam_genre.addEventListener("click", function() {
    removeTrue(2);
    removeTrue(3);
    main.classList.add("show");
    salam_genre_m.classList.toggle("true");

    let pos = salam_genre_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

stunting.addEventListener("click", function() {
    removeTrue(1);
    removeTrue(3);
    main.classList.add("show");
    stunting_m.classList.toggle("true");

    let pos = stunting_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

narkotika.addEventListener("click", function() {
    removeTrue(1);
    removeTrue(2);
    main.classList.add("show");
    narkotika_m.classList.toggle("true");

    let pos = narkotika_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});