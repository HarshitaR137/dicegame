var n= Math.random();
n= n*6;
n= Math.floor(n) +1;
var imagesource= "images/dice"+n+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource);

var n2=Math.random();
n2=n2*6 ;
n2= Math.floor(n2)+1;
var imagesource2= "images/dice"+n2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesource2);

if(n>n2){
    document.querySelector("h1").innerHTML="player1 won";
}
else if(n2>n){
    document.querySelector("h1").innerHTML="player2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}