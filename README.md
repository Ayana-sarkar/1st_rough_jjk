<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
  <style>
    body {
      background-color: skyblue;
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


  </style>
</head>
<body> 
  <h1>JUJUTSU KAISEN</h1>
  
  <div class="image-gallery">
    <div class="img-wrapper">
  <img src="download (3).jpg" alt="Picture 1">
    </div>
    <div class="img-wrapper">
  <img src="Apothecary Diaries - aesthetic.jpg" alt="Picture 2">
    </div>
     <div class="img-wrapper">
  <img src="Cosplay Costumes, Cosplay Shoes, Cosplay Wigs Latest & Greatest - CosplayClass_.jpg" alt="Picture 3">
    </div>
     <div class="img-wrapper">
  <img src="Maomao.jpg" alt="Picture 4">
    </div>
  </div>
   <script src="script.js"></script>


</body>
</html>
