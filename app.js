
// const colors = [
//     "AliceBlue", "AntiqueWhite", "Aquamarine", "BurlyWood",
//     "Chartreuse", "CornflowerBlue", "RoyalBlue", "DarkSlateBlue",
//     "DarkSeaGreen", "DodgerBlue", "DarkCyan", "ForestGreen",
//     "LightBlue", "PaleTurquoise", "LightSteelBlue", "LightSeaGreen",
//     "LimeGreen", "MediumSlateBlue", "CadetBlue", "SkyBlue"
// ];
// const bodyTag = document.getElementById('body-bg');
// const displayColor = document.getElementById('color-name');
// const btn = document.getElementById('change-btn');

// function changeBackgroundColor() {

//     const randomIndex = Math.floor(Math.random() * colors.length);

//     const bgcolor = colors[randomIndex];

//     bodyTag.style.backgroundColor = bgcolor;

//     displayColor.innerHTML = bgcolor;

//     const darkColors = ["DarkSlateBlue", "DarkCyan", "ForestGreen", "RoyalBlue", "DarkSeaGreen", "LightSeaGreen"];

//     if (darkColors.includes(bgcolor)) {
//         displayColor.style.color = "white";
//     } else {
//         displayColor.style.color = "black";
//     }
// }