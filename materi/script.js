console.log("SSK SMPN 1 Cibadak");
console.log("GitHub Creator : ItsSiapaAja");

let header = 70;
let nav = document.querySelector("nav h1");

let Materi = {
    sskMateri: document.querySelector("section.materi .ssk"),
    ipsMateri: document.querySelector("section.materi .ips"),
    materiCard: document.querySelectorAll("section.materi #card")
};

let main = document.querySelector("main");

function homePage()
{
    location.href = "../index.html";
}

function cardClicked()
{
    this.classList.toggle("list");
}

Materi.materiCard[0].addEventListener("click", cardClicked);
Materi.materiCard[1].addEventListener("click", cardClicked);
nav.addEventListener("click", homePage);