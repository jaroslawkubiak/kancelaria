(function fill() {
  const data = {
    navMenu: [
      { link: "o-mnie", name: "o mnie" },
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
  };
  const template = Handlebars.compile(document.getElementById("template").innerHTML);
  const filled = template(data);
  document.getElementById("output").innerHTML = filled;
})();

/////////////////////////////////////////////////////
//slider effect
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
let curSlide = 0;
const maxSlide = slides.length;
// creating "dots"
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<span data-slide="${i}" class="dots__dot cursor-pointer block w-16 h-4 rounded-full mb-2 border-dotBorder border hover:bg-dotActive">&nbsp;</span>`
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
setInterval(changeSlide, 5000);

// selecting active dot
const activeDot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("bg-dotActive"));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("bg-dotActive");
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

// handling underline on menu links
const nav = document.getElementById("nav-menu");
const hendleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target.children[0].classList.toggle("hidden");
  }
};
nav.addEventListener("mouseover", hendleHover);
nav.addEventListener("mouseout", hendleHover);
