document.addEventListener('DOMContentLoaded', () => {
  const records = document.querySelectorAll('.record');
  const sections = document.querySelectorAll('.content');

  records.forEach(record => {
    record.addEventListener('click', () => {
      const targetId = record.getAttribute('data-target');

      sections.forEach(section => {
        section.classList.remove('active');
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


