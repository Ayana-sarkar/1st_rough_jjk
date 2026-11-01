<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
  <style>
    body {
      background-image: url("Royale Green.jpg");
      background-size: cover;
      background-position: centre;
      background-repeat: no-repeat;
      background-attachment: fixed;
      margin: 0;
      font-family: sans-serif;
    }
    /* Styling the heading inside a wide, semi-transparent horizontal card */
h1 {
  /* Text styling */
  color: #ffffff;                             /* White text color */
  font-family: 'Montserrat', sans-serif;      /* Modern font */
  font-size: 2.5rem;                          /* Bigger, bolder text */
  text-transform: uppercase;                 /* Makes letters uppercase */
  letter-spacing: 3px;                        /* Spacing between letters for width */
  text-align: center;                         /* Centers the text */
  background: rgba(255, 255, 255, 0.2);       /* White card with 20% opacity */
  backdrop-filter: blur(10px);                /* Glassmorphism blur effect */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle white border */
  border-radius: 16px;                        /* Rounded card edges */
  width: 90%;                                 /* Makes the card wider */
  max-width: 1000px;                          /* Caps max width on large screens */
  margin: 30px auto;                          /* Margins top/bottom & centers horizontally */
  padding: 20px 30px;                         /* Spacing inside the card */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);/* Soft background shadow */
}
 .image-gallery {
  /* Set how many columns you want */
  column-count: 3; 
  column-gap: 15px; /* Spacing between columns */
 }
 .img-wrapper {
  overflow: hidden;        /* Clips the zoomed image within its rounded borders */
  border-radius: 12px;     /* Keeps the rounded corners intact during zoom */
  margin-bottom: 15px;     /* Space beneath stacked items */
 }
 .img-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  /* Animates scale changes smoothly over 0.4 seconds */
  transition: transform 0.4s ease, filter 0.4s ease; 
   box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25);
   cursor: pointer;     /* Changes cursor to a pointing hand on hover */
 }
    .img-wrapper:hover img {
  transform: scale(1.04);  /* Zooms in by 8% (adjust scale value as desired) */
  filter: brightness(1.20); /* Optional: Slightly brightens the image on hover */
    }
/* 2nd picture sliding left*/
   /* Container for the animated card */
.slide-card-link {
  display: block;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
}/* from here, 2nd picture sliding left */
.slide-card-link {
  display: block;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
}
.slide-card-link.active {
 position: fixed;
  top: 0;
  left: 0;
  width: 300px; /* Adjust to desired left-sidebar width */
  height: 100vh;
  margin: 0;
  z-index: 9999;
  }
.slide-card-link.active img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* New background state applied to body */
body.new-bg-active {
  background-image: url("Mao Mao.jpg");
  background-size: cover;
  background-position: center;
  transition: background-image 0.6s ease-in-out;
}
/* Hides other elements on the main page smoothly */
    body.new-bg-active > *:not(.slide-card-link) {
  opacity: 0;
  transition: opacity 0.4s ease;
}

}
  </style>
</head>
<body> 
  <h1>JUJUTSU KAISEN</h1>
  
  <div class="image-gallery">
       <div class="img-wrapper">
         <a href="https://ayana-sarkar.github.io/JupyterLab3.github.io/">
  <img src="download (3).jpg" alt="Picture 1">
             </a>
       </div>
    <a href="destination.html" class="slide-card-link" onclick="triggerSlide(event, this)">
    <div class="img-wrapper">
  <img src="Apothecary Diaries - aesthetic.jpg" alt="Picture 2">
    </div>
    </a>
     <div class="img-wrapper">
  <img src="Cosplay Costumes, Cosplay Shoes, Cosplay Wigs Latest & Greatest - CosplayClass_.jpg" alt="Picture 3">
    </div>
     <div class="img-wrapper">
  <img src="Maomao.jpg" alt="Picture 4">
    </div>
  </div>

  
   <script>
     function triggerSlide(event, element) {
  event.preventDefault(); // Stop instant page load
// Slide the picture card to the left margin
  element.classList.add('active');
// Swap the background of the page
  document.body.classList.add('new-bg-active');
// Wait 600ms for the slide animation to finish before navigating
  setTimeout(() => {
    window.location.href = element.href;
  }, 600);
}</script>


</body>
</html>
