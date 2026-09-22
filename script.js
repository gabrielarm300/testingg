// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gentle reveal for polaroids/cards as they enter the viewport
const revealTargets = document.querySelectorAll(
  '.proj-polaroid, .skill-card, .timeline-item, .polaroid, .postcard'
);

if ('IntersectionObserver' in window) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform += ' translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.style.transform.replace(
            ' translateY(16px)',
            ''
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
