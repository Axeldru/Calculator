let result = document.getElementById("inputtext");
let displaynumber = function append(number) {

  result.value+= number
  
}
function clr() {
    result.value = " ";
    
}

function del(){
    result.value = result.value.slice(0,-1);
    answer(" ")
}

function Result() {
    try{
    result.value=eval(result.value);
    

    }
    catch(err){
        alert("Invalid expression")
    }
}
function Raise() {
    Math.pow(displaynumber)
}



