Handlebars.registerHelper("activeNav", function (navPage, navLink) {
  let renderedLink = `<li><a href="${navLink}" class="relative text-text_primary my-1 mx-7 text-lg transition-all w-min-content
                  before:w-0
                  before:h-0.5
                  before:absolute
                  before:bottom-0
                  before:transition-all
                  before:duration-500
                  before:-left-2
                  before:bg-bg_dotActive
                  hover:before:w-[calc(100%+1rem)]
                  ">
                    ${navPage}</a></li>`;
  return new Handlebars.SafeString(renderedLink);
});

(function fill() {
  const data = {
    navMenu: [
      { link: "o-mnie.html", name: "o mnie" },
      { link: "#", name: "oferta" },
      { link: "#", name: "współpraca" },
      { link: "#", name: "kontakt" },
    ],
    slidebox: [
      {
        title: "Reprezentuję przedsiębiorców",
        text: "w czynnościach z zakresu <strong>postępowań podatkowych, kontroli podatkowej, postępowań przed sądami administracyjnymi.</strong>",
      },
      {
        title: "Będąc ekonomistą, prawnikiem",
        text: "i prezesem firmy podatkowo-księgowej patrzę na problemy biznesu z merytoryczną wnikliwością, opierając się na wiedzy z wielu dziedzin i na praktycznym doświadczeniu.",
      },
    ],
    section2Header: [
      "NAWET",
      "NAJTRUDNIESZE",
      "PROBLEMY",
      "BIZNESOWE SĄ",
      "MOŻLIWE DO",
      "ROZWIĄZANIA",
    ],
    section2List: [
      "Klienci często zwracają się do mnie w trudnych sytuacjach biznesowych.",
      "<strong>Aby przejść obronną ręką przez skomplikowane kazusy podatkowe i prawne,</strong> niezbędna jest perfekcyjna wiedza, strategiczne podejście, wnikliwość, upór i konsekwencja w działaniu.",
      "<strong>Dlatego w czasie współpracy łączę moje doświadczenie z różnych obszarów biznesu z wiedzą, która daje ogrom możliwości działania.</strong>",
    ],
    section3LeftHeader:
      "Doświadczenie w pracy z klientami z <strong>kilkudziesięciu branż</strong> sprawia, że szybciej i skuteczniej znajduję rozwiązania.",
    section3LeftText:
      "Łączenie doświadczenia z wielu branż oraz bieżące zarządzanie firmą księgowo-podatkową pozwala mi lepiej rozumieć problemy biznesu oraz patrzeć na wyzwania księgowo-podatkowe strategicznie, z szerokiej perspektywy. Często to detale wpływają na powodzenie w postępowaniach dlatego tak ważne jest wykorzystanie dużego spektrum doświadczeń.",
    section3Industries: [
      { img: "paliwowa.svg", text: "paliwowa" },
      { img: "informatyczna.svg", text: "informatyczna" },
      { img: "geodezyjna.svg", text: "geodezyjna" },
      { img: "budowlana.svg", text: "budowlana" },
    ],
    section4Header:
      "Skala doświadczenia i wiedza na najwyższym poziomie najczęściej decydują o sukcesie.",
    section4Text:
      "W trudnych sprawach prawno-podatkowych nie ma miejsca na merytoryczne pomyłki. Klienci współpracując ze mną muszą mieć pewność, że znając biegle każdy przepis, wszystkie procedury i detale dotyczące interpretacji prawnych, wykorzystam je, aby działać na ich korzyść.",
    aboutMeHeader: "Doświadczenie",
    aboutMeList: [
      {
        main: `Ponad 10 letnie doświadczenie w pracy <br />z blisko 300 klientami. ZAKRES DZIAŁAŃ:`,
        second: [
          "",
          `Udzielanie porad, sporządzanie opinii i wyjaśnień z zakresu prawa podatkowego.`,
          `Przygotowywanie zeznań i deklaracji podatkowych oraz udzielanie pomocy w tym zakresie.`,
          `Reprezentowanie klientów w postępowaniach przed organami podatkowymi we wszystkich instancjach oraz przed Sądami Administracyjnymi, ze szczególnym uwzględnieniem tzw. spraw paliwowych`,
        ],
      },
      {
        main: `Stanowisko Prezesa Zarządu w firmie księgowo-podatkowej <a href="https://concepcion.pl/" class="underline" target="_blank">Concepcion Sp. z o.o.</a>`,
      },
      {
        main: `Współpraca z klientami z kilkudziesięciu branż`,
      },
      {
        main: `Tworzenie kursów przygotowujących do egzaminu na Doradcę Podatkowego oraz Biegłego Rewidenta.`,
      },
    ],
    aboutMeSec2Header: "Wykształcenie",
    aboutMeSec2List: [
      "Wydział Prawa Uniwersytetu Warmińsko-Mazurskiego w Olsztynie.",
      "Wydział Nauk Ekonomicznych Uniwersytetu Warmińsko-Mazurskiego w Olsztynie. <br />Studia ukończone z wyróżnieniem.",
      "Kwalifikacje doradcy podatkowego potwierdzone egzaminem państwowym zdanym przed Państwową Komisją Egzaminacyjną do Spraw Doradztwa Podatkowego.",
    ],
    aboutMeSec3Header: "Wartości",
    aboutMeSec3List: [
      {
        img: "perfekcjonizm-ico.svg",
        title: "Perfekcjonizm",
        text: `W mojej pracy nie mogę pozwolić sobie na pomyłki, ponieważ ciąży na mnie ogromna odpowiedzialność. <strong>Skupiam się na rzetelności, która daje ponadprzeciętne rezultaty.</strong> Traktuję konsekwentny, bezkompromisowy i ciągły rozwój jako podstawę jakości i motywację do pracy.`,
      },
      {
        img: "empatia-ico.svg",
        title: "Empatia",
        text: `Sam będąc przedsiębiorcą rozumiem doskonale wyzwania z jakimi mierzą się moi klienci. <strong>Potrafię udzielić wsparcia nie tylko merytorycznego, cenię również ludzki wymiar współpracy</strong>, w którym liczy się człowiek i jego indywidualna sytuacja. <strong>Często zarażam klientów humorem ponieważ z najtrudniejszej sytuacji można wyjść obronną ręką.</strong>`,
      },
    ],
  };
  const template = Handlebars.compile(document.getElementById("template").innerHTML);
  const filled = template(data);
  document.getElementById("output").innerHTML = filled;
})();

/////////////////////////////////////////////////////
// mobile menu
const mobMenuBtn = document.getElementById("mobile-menu-btn");
const mobLogo = document.getElementById("mob-logo");
const mobMenu = document.getElementById("mobile-menu");
mobMenuBtn.addEventListener("click", () => {
  console.log(mobMenu);
  mobMenu.classList.toggle("-translate-y-[120%]");
  mobMenu.classList.toggle("translate-y-0");

  // switching logo to white
  // mobLogo.src = "/img/logo-white.svg";
});

/////////////////////////////////////////////////////
//slider effect
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
let curSlide = 0;
const maxSlide = slides.length;

// if maxSlide is empty - don't do anything. This work's only in index.html
if (maxSlide) {
  // creating "dots"
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<span data-slide="${i}" class="dots__dot cursor-pointer block w-12 h-2 md:w-16 md:h-4 rounded-full mb-2 border border-dotBorder hover:bg-bg_dotActive">&nbsp;</span>`
      );
    });
  };

  //change slide
  const changeSlide = function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  // changing slide after 5s
  // setInterval(changeSlide, 5000);

  // selecting active dot
  const activeDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("bg-bg_dotActive"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("bg-bg_dotActive");
  };

  // changing slides
  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`));
  };
  // init for dots
  const init = function () {
    createDots();
    goToSlide(0);
    activeDot(0);
  };
  init();

  // event listener for dots
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
}
