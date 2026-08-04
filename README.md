# 1st_rough_jjk
<!DOCTYPE html>
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
    .image-gallery {
  display: flex;             /* Align items side-by-side */
  justify-content: space-between; /* Equal spacing between images */
  gap: 15px;                 /* Space between each photo */
}

.image-gallery img {
  width: 31%;                /* Makes each photo take ~1/3 of row space */
  aspect-ratio: 1 / 1;       /* Forces images to stay perfectly square */
  object-fit: cover;         /* Prevents picture distortion/stretching */
  border-radius: 12px;       /* Rounded/beveled corners */
}
  </style>
</head>
<body>
  <h1>JUJUTSU KAISEN</h1>
  <div class="image-gallery">
  <img src="download(3).jpg" alt="Data Visualization" class="box-image">
  </div>
</body>
</html>
