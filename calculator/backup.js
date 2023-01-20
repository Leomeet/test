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

function calculate() {

    // X^2
    answer = Math.pow(input, 2);

    //1/X inverse
    answer = Math.pow(input, -1);

    // |X| 
    answer = Math.abs(input);

    // 10^x
    answer = Math.pow(10, input);

    // 10^(x-1)
    answer = Math.pow(10, input - 1);

    // exp
    answer = 2.718281828

    // lg with base e
    answer = Math.log(input);

    // log with base 10
    answer = Math.log10(input);

    // x ^ y
    answer = Math.pow(ans,input);   
  
    // 2 sqrt(x^2
    answer = Math.pow(Math.sqrt(input),2);

    //pi
    answer = 3.141592653589793238462643383279502884197169399375105820;

    
}

function update_value(id,value) {
    document.getElementById(id).value = value;
}
function get_value(id){
    return document.getElementById(id).value;
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

