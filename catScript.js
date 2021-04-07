//for trace api which accepts scans of animes and returns info on them.
var img = document.querySelector("img"); // select image from DOM
var canvas = document.createElement("canvas");
canvas.width = img.naturalWidth;
canvas.height = img.naturalHeight;
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

fetch("https://trace.moe/api/search", {
  method: "POST",
  body: JSON.stringify({ image: canvas.toDataURL("image/jpeg", 0.8) }),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

//for search anime api jankin
fetch("https://api.jikan.moe/v3")