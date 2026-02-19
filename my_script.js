window.onload = function () {
  //Random background color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  // 2) Random artist picture
  let artistPics = [
    "Noah-Kahan.jpg",
    "Noah-Kahan-2.jpg",
    "Noah-Kahan-3.jpg"
  ];

  let randomIndex = Math.floor(Math.random() * artistPics.length);
  let mainImg = document.querySelector("#column_1 img");

  if (mainImg) {
    mainImg.src = artistPics[randomIndex];
  }

  // Random footer background color
  let fr = Math.floor(Math.random() * 256);
  let fg = Math.floor(Math.random() * 256);
  let fb = Math.floor(Math.random() * 256);

  let footer = document.getElementById("footer");
  if (footer) {
    footer.style.backgroundColor = "rgb(" + fr + "," + fg + "," + fb + ")";
  }
};