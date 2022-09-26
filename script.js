console.log("SSK SMPN 1 Cibadak");
console.log("GitHub Creator : ItsSiapaAja");

let ips = document.getElementById("aips");
let ssk = document.getElementById("assk");
let nav = document.querySelector("nav");
let header = 50;

let buttonIPS = document.querySelector("div.jumbotron div.ips");
let buttonSSK = document.querySelector("div.jumbotron div.ssk");

function homePage()
{
    location.href = "index.html";
}

nav.addEventListener("click", homePage);

if(buttonIPS != null || buttonSSK != null)
{
    buttonIPS.addEventListener("click", function (e) {
        let ipsPos = ips.getBoundingClientRect().top;
        let offsetPos = ipsPos + window.pageYOffset - header;
        window.scrollTo({
            top: offsetPos,
            behavior: "smooth"
        });
    });
    
    buttonSSK.addEventListener("click", function (e) {
        let sskPos = ssk.getBoundingClientRect().top;
        let offsetPos = sskPos + window.pageYOffset - header;
        window.scrollTo({
            top: offsetPos,
            behavior: "smooth"
        });
    });
}