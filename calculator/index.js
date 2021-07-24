function display(numbers){
    if (numbers.length>0) {
        document.getElementById("display").textContent=numbers; 
    } else {
        document.getElementById("display").textContent="0";
    }
}
addEventListener("load", function(){
    var numbers="";
    var numbers2="";
    var operation="";
    display(numbers);

    document.getElementById("zero").addEventListener("click", function(){
        numbers+="0";
        display(numbers);
    })
    document.getElementById("one").addEventListener("click", function(){
        numbers+="1";
        display(numbers);
    })
    document.getElementById("two").addEventListener("click", function(){
        numbers+="2";
        display(numbers);
    })
    document.getElementById("three").addEventListener("click", function(){
        numbers+="3";
        display(numbers);
    })
    document.getElementById("four").addEventListener("click", function(){
        numbers+="4";
        display(numbers);
    })
    document.getElementById("five").addEventListener("click", function(){
        numbers+="5";
        display(numbers);
    })
    document.getElementById("six").addEventListener("click", function(){
        numbers+="6";
        display(numbers);
    })
    document.getElementById("seven").addEventListener("click", function(){
        numbers+="7";
        display(numbers);
    })
    document.getElementById("eight").addEventListener("click", function(){
        numbers+="8";
        display(numbers);
    })
    document.getElementById("nine").addEventListener("click", function(){
        numbers+="9";
        display(numbers);
    })
    document.getElementById("dot").addEventListener("click", function(){
        numbers+=".";
        display(numbers);
    })
    

    //add
    document.getElementById("addition").addEventListener("click", function(){
        numbers2=numbers;
        numbers="";
        operation="add";
    })

    //subtraction
    document.getElementById("subtraction").addEventListener("click", function(){
        numbers2=numbers;
        numbers="";
        operation="sub";
    })

    //multiplication
    document.getElementById("multiply").addEventListener("click", function(){
        numbers2=numbers;
        numbers="";
        operation="mul";
    })

    //divide
    document.getElementById("division").addEventListener("click", function(){
        numbers2=numbers;
        numbers="";
        operation="div";
    })

    //+- make number negative or positive
    document.getElementById("pm").addEventListener("click", function(){
        if (numbers.startsWith('-')) { //numbers is negative
            numbers = numbers.substring(1); //remove negative sign
        } else { //number is positive
            numbers = '-' + numbers; //add negative sign
        }
        display(numbers);
    })

    //equals
    document.getElementById("equals").addEventListener("click", function(){
        numbers=parseFloat(numbers);
        numbers2=parseFloat(numbers2);
    
     // if else version
        /*
        if (operation === "add") {
            numbers+=numbers2; 
        } else if(operation === "sub") {
            numbers=numbers2-numbers;
        } else if(operation === "mul") {
            numbers*=numbers2; 
        } else if(operation === "div") {
            numbers=numbers2/numbers;
        }
        */

     // perform different tasks based on operation
        switch (operation) {
            case "add":
                numbers += numbers2;
                break;
            case "sub":
                numbers = numbers2 - numbers
                break;
            case "mul":
                numbers *= numbers2;
                break;
            case "div":
                numbers = numbers2 / numbers
                break;
        }

        numbers=numbers.toString(); 
        numbers2="";
        display(numbers);
        
    })
    
    //the clear button
    document.getElementById("clear").addEventListener("click", function(){
        numbers="";
        numbers2="";
        display(numbers);
    })
})
