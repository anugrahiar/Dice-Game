var r=Math.random();
r=r*6+1;
r=Math.floor(r);
var randomimage="./images/dice"+r+".png";
document.querySelector(".img1").setAttribute("src", randomimage );
var r2=Math.random();
r2=r2*6+1;
r2=Math.floor(r2);
var randomimage2="./images/dice"+r2+".png";
document.querySelector(".img2").setAttribute("src", randomimage2);
if(r>r2){
    document.querySelector("h1").innerHTML="Player 1 wins !";
}
else if(r<r2){
    document.querySelector("h1").innerHTML="Player 2 wins !";

}
else{
    document.querySelector("h1").innerHTML="Draw !";
}
