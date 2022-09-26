function clickMateri(idName)
{
    let article = document.querySelector("main article#" + idName);
    article.classList.add("true");

    let navigation = article.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        "behavior": "smooth",
        "top": navigation
    });
}

const tombol = document.querySelector("main div.button");
tombol.addEventListener("click", () => {
    document.querySelectorAll("main article").forEach(e => {
        e.classList.remove("true");
    });

    window.scrollTo({
        "behavior": "smooth",
        "top": 0
    });
});