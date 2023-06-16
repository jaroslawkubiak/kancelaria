(function fill() {
  console.log("funkcja fill");
  const data = {
    navMenu: [
        {link: "o-mnie", name: "o mnie"},
        {link: "#", name: "oferta"},
        {link: "#", name: "współpraca"},
        {link: "#", name: "kontakt"},
    ],
    title: "to jest naglowek",
    nav: "nawigacja"
  };
  const template = Handlebars.compile(document.getElementById("template").innerHTML);
  const filled = template(data);
  document.getElementById("output").innerHTML = filled;
})();

