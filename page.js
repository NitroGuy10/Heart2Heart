
let canvas = document.getElementById("canvas")

// Title image
let image = document.createElement("IMG");
image.src = "Heart2Heart.png";
image.alt = "Heart2Heart";
image.id = "title-image";
canvas.after(image);

// Background
let background = document.createElement("DIV");
background.id = "bg";
canvas.before(background);

// Spacing
let space1 = document.createElement("DIV");
space1.className = "space-ifbig";
canvas.before(space1);
let space2 = document.createElement("DIV");
space2.className = "space";
canvas.after(space2);
let space3 = document.createElement("DIV");
space3.className = "space";
image.after(space3);

