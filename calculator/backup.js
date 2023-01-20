var opt_1 = document.getElementById("output_main").value;
var opt_2 = document.getElementById("output_sub").value;
var value = "";
var ans = "";

function check_input(value){

    value = "1+2";
    return value;
   
}
    


function f_print(event){

    value += event.target.value;
    document.getElementById("output_main").value = value;

    if(value != ""){
        
        value = check_input(value);
        // value = check;
        console.log("cheking "+value);

        opt_2 = eval(value);
        if(opt_2!==undefined || opt_2!== ""){
            document.getElementById("output_sub").value = opt_2;
        }
    }
    
}



function f_equals(){
    console.log(opt_2);
    ans = opt_2;
    opt_2 = 0;
    document.getElementById("output_main").value = ans;
    document.getElementById("output_sub").value = opt_2;
    value=ans;
}
function back_space(){
    // value = value.slice(0,value.length-1);

    value = value.toString();  
    value = value.slice(0, value.length-1);

    document.getElementById("output_main").value = value;
    document.getElementById("output_sub").value = opt_2;
  
    // f_evel();
}

