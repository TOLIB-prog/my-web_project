/* ===== BURGER ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.onclick = () => nav.classList.toggle('active');

/* ===== SCROLL ANIMATION ===== */
const animated = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 },
);

animated.forEach((el) => observer.observe(el));

/* ===== LAZY LOAD ===== */
const lazyImages = document.querySelectorAll('.lazy');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imgObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imgObserver.observe(img));
