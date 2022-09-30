let equal_press = 0;
//Excludeing AC and DEL;
let button_input=document.querySelectorAll(".input-button");
//Input, Equal, Clear & Erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

button_input.forEach((button_class)=>{
    button_class.addEventListener("click",()=>{
        // if(equal_press==1){
        //     input.value="";
        //     equal_press=0;
        // }
        input.value+=button_class.value;

    })
})

equal.addEventListener("click", () => {
    equal_press=1;
    let inp_value=input.value;
    let addon="";
    try {
        let solution = eval(inp_value);
        if(Number.isInteger(solution)){
            if(solution!==0){
                addon+=inp_value;
                input.value = addon;
            }
        } else {
            if(solution!==0){
                addon+=inp_value;
                input.value = addon.toFixed(2);
            }
        }
    } catch (err) {
        alert("Invalid Calculation");
    }
})


clear.addEventListener("click",()=>{
    input.value="";
})

erase.addEventListener("click",()=>{
    input.value=input.value.slice(0,input.value.length-1);
})
