const observerFade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
});

const workElements = document.querySelectorAll('.work');
var nav = document.querySelector('nav');
console.log(nav);

workElements.forEach((work) => observerFade.observe(work));

window.addEventListener(
    "scroll",
    () => {
      altura = 4.8*(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

      if(altura >= 0 && altura <= 1)  {
        nav.classList.add("fade-out")
        nav.classList.remove("fade-in")
        nav.classList.remove("hidden")
      }
      else{
        altura = 0.8
        nav.classList.add("hidden")
        console.log(nav);
      }

      document.body.style.setProperty(
        "--scroll",
        altura
      );
    },
);


