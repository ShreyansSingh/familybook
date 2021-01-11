
var j=0;
var images = [
    "IMG_0205.JPG" ,
    "IMG_7658 (1).jpg" ,
    "028fb870-5b44-48e4-aeae-86afbeb607d4.JPG",
    "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/shailesh-kumar-1aebf58d",
]


var reasons=[
    "Kiara/Sister",
"Rachna/Mom",
"Shreyans/Brother",
"Shailesh/Dad",
]

function bo() {
document.getElementById("images2").src=images[j];
document.getElementById("reason").innerHTML=reasons[j];

  j++;
   
  if(j == 4) { j=0; }
}
