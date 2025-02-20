document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".fadeInUp"); 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated"); 
        } else {
          entry.target.classList.remove("animated"); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  animatedElements.forEach((element) => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止點擊時觸發外部事件
      nav.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
      nav.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
          nav.classList.remove("active");
      }
  });
});


function scrollToWork() {
  const section = document.getElementById("worksection");
  const offset = 130; 
  const sectionPosition = section.offsetTop - offset;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth"
  });
}

