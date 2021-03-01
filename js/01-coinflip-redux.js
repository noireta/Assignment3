let  numCounter = prompt(" Enter the number");
let i = 1;
for (i = 1 ; i <= numCounter; i++){
let coinFlip = Math.round(Math.random());
if (coinFlip == 0 ){
    document.write("Heads <br>");

}else{
    document.write("Tails <br>"); 
}
}


