materiIps.interaksiSosial[0].addEventListener("click", function () {
    removeSSK();
    main.classList.add("show");
    materiIps.interaksiSosial[1].classList.add("true");

    let pos = materiIps.interaksiSosial[1].getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

materiIps.faktorInteraksiSosial[0].addEventListener("click", function () {
    removeSSK();
    main.classList.add("show");
    materiIps.faktorInteraksiSosial[1].classList.add("true");

    let pos = materiIps.faktorInteraksiSosial[1].getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});

materiIps.interaksiAntarRuang[0].addEventListener("click", function () {
    removeSSK();
    main.classList.add("show");
    materiIps.interaksiAntarRuang[1].classList.add("true");

    let pos = materiIps.interaksiAntarRuang[1].getBoundingClientRect().top + window.scrollY - header;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
});