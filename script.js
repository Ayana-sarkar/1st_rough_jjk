  // List of items in your slider
  const slides = [
    {
      title: "Dead Account",
      spotlight: "#3 Spotlight",
      desc: "Always ready for a fight! Destruction for destruction's sake! The online streamer Aoringo is a troll...",
      img: "dead-account.jpg"
    },
    {
      title: "Jujutsu Kaisen",
      spotlight: "#1 Spotlight",
      desc: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself.",
      img: "jujutsu-kaisen.jpg"
    }
  ];

  let currentIndex = 0;

  const titleEl = document.querySelector('.hero-title');
  const spotlightEl = document.querySelector('.spotlight-tag');
  const descEl = document.querySelector('.hero-description');
  const imgEl = document.querySelector('.hero-image-container img');

  function updateSlide(index) {
    titleEl.textContent = slides[index].title;
    spotlightEl.textContent = slides[index].spotlight;
    descEl.textContent = slides[index].desc;
    imgEl.src = slides[index].img;
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });
