salam_genre.addEventListener("click", function() {
    removeIPS();
    main.classList.add("show");
    salam_genre_m.classList.add("true");

    let pos = salam_genre_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

stunting.addEventListener("click", function() {
    removeIPS();
    main.classList.add("show");
    stunting_m.classList.add("true");

    let pos = stunting_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

narkotika.addEventListener("click", function() {
    removeIPS();
    main.classList.add("show");
    narkotika_m.classList.add("true");

    let pos = narkotika_m.getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});