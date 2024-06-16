const counterElement=document.getElementById("hello");
let count=0;
let n;
function output1(n){
    counterElement.innerHTML = n;
}
function inc(){
    count++;
    console.log(count);
    // counterElement.innerHTML = count;
    output1(count);
}
function dec(){
    if(count==0)
   {
    console.log(count)
    // counterElement.innerHTML = count;
    output1(count);
   }
   else{
    count--
    console.log(count);
    // counterElement.innerHTML = count;
    output1(count);
   }
    
}
function reset(){
   if(count==0)
   {
    console.log(count)
        // counterElement.innerHTML = count;
    output1(count);
   }
   else{
    count=0;
    console.log(count)
    // counterElement.innerHTML = count;
    output1(count);
   }
}