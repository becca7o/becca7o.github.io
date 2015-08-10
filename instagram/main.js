window.onload = function(){
var addPictureButton = document.getElementById('button');
addPictureButton.onclick = function() {
   alert("button was clicked");
var photoURL = prompt("Please paste a URL to the photo you want");
//alert(photoURL)
var img = document.createElement("img");
img.src = photoURL;
var parent = document.getElementById("header");
parent.appendChild(img);
};
};
