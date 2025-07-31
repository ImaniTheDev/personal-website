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

      const speakerImages = [
  'speaker1.png',
  'speaker2.jpg',
  'speaker3.png',
  'speaker4.png',
  'speaker5.jpg',
  'speaker6.png'
];

document.querySelectorAll('.speaker').forEach((el, i) => {
  const random = Math.floor(Math.random() * speakerImages.length);
  el.src = `images/speakers/${speakerImages[random]}`;
});

    });
  });
});


