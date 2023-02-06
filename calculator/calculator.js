var opt_1 = document.getElementById("output_main").value;
var opt_2 = document.getElementById("output_sub").value;
var value = "";
var answer = "";
var flag;
var memory = 0;

// memory functions
function mc() {
    memory = 0;
}
// returns the memory value
function mr() {
    value = memory;
    update_element("output_main", value);
    update_element("output_sub", answer);
}

// adds the current memory value to it self or answer

function mplus() {
    answer = parseFloat(answer) + parseFloat(memory);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

// subtract the current memory value from it self or answer
function mminus() {
    answer = parseFloat(answer) - parseFloat(memory);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

// saves memory to space
function msave() {
    memory = value;
}


// validates the input with appropriate formatting 
function check_input(value, flag) {

    let last_val = value.charAt(value.length - 1);
    let second_last_val = value.charAt(value.length - 2);

    let condition = (isNaN(parseInt(last_val, 10)) && isNaN(parseInt(second_last_val, 10)));


    // check if the top of the stack and top-1 is a operator 
    // and if yes then what action to perform as per its precedence

    console.log("last:" + last_val + "  second:" + second_last_val);
    if (condition == true && flag == true) {
        
        // if this is true both the first and second values are operators
        console.log(" inside condition");
        if (second_last_val == "+" || second_last_val == "-") {
            // console.log("value:", value);
            // console.log("length before trimming" + value.length);
            value = value.substring(0, value.length - 2);
            // console.log(value);
            // console.log("Length After trimming" + value.length);
            value += last_val;
            // console.log("temp:" + value);
            value = check_input(value);
            return value;
        }


        if (second_last_val == "*" || second_last_val == "/") {
            if (last_val == "%" || last_val == "*" || last_val == "/") {
                console.log("value:", value);
                console.log("lenght before trimming" + value.length);
                value = value.substring(0, value.length - 2);
                console.log(value);
                console.log("Length After trimming" + value.length);
                value += last_val;
                console.log("temp:" + value);
                value = check_input(value);
                return value;
            }
            else {
                return value;

            }
        }



    }

    // if the condition fails it returns the current value as it is
    return value;
}

// updating the value of input fields with new value
function update_element(element_id, value_up) {
    // console.log("id:"+element_id + " value_up:"+value_up);
    document.getElementById(element_id).value = value_up;
}

//get the value from given id of element
function get_value(id) {
    return document.getElementById(id).value;
}
//update the value of variable "value" with answer value
function update_value(update_value) {
    value = update_value;
}
//update the value of answer variable with new answer 
function update_answer(ans) {
    answer = ans;
}



// uses eval to evaluate the answer accoring to the value input
function evaluate_question(value, flag) {

    let correct_input = check_input(value, flag);
    value = correct_input;
    console.log("evaluated_question value: " + value);
    update_element("output_main", value);
    console.log(value);

// try and catch for in complete function evaluation
    try {
        answer = eval(value);
        if (opt_2 !== undefined || opt_1 !== "") {
            console.log("inside if");
            //update_element("output_main", value);
            update_element("output_sub", answer);
            update_answer(answer);
        }
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            if (opt_2 !== undefined || opt_2 !== "") {
                console.log("inside if");
                //update_element("output_main", value);
                update_element("output_sub", answer);
                update_answer(answer);
            }
        }
        console.log("inside catch");
    }

    console.log("eval last value: " + value);
    return value;
}


// main function for the button click event
function f_print(event) {
    if (value == 0 && answer == 0) {
        update_element("output_main", value);
        value = "";
    }
    value += event.target.value;

    console.log("value of button: " + event.target.value);
    if (event.target.value == "**") {
        flag = false;
        console.log("Flag value:" + flag);
        console.log('f_print value: ' + value);
        update_element("output_main", value);
        value = evaluate_question(value, flag);
        console.log('final value: ' + value);
    }

    flag = true;
    console.log("Flag value:" + flag);
    console.log('f_print value: ' + value);
    update_element("output_main", value);
    value = evaluate_question(value, flag);
    console.log('final value: ' + value);
}


// function for clearing out everything
function clean_slate() {
    value = "";
    update_element("output_main", 0);
    update_element("output_sub", 0);
    update_answer(value);
}

// function for equals buttons 
function f_equals() {
    update_element("output_main", answer);
    update_element("output_sub", 0);
    value = answer;

}
function back_space() {
    // value = value.slice(0,value.length-1);
    console.log("backspace value" + value)
    value = value.toString();
    value = value.slice(0, value.length - 1);
    answer = value;


    document.getElementById("output_main").value = value;
    document.getElementById("output_sub").value = answer;

    // f_evel();
}


// calculates the value of pi
function pi() {
    if (value == "") {
        value = "3.14";
        update_element("output_main", value);
    }
    else {
        value += "*3.14"
        flag = true;
        update_element("output_main", value);
        value = evaluate_question(value, flag);

    }

}
// returns the ans for e btn click
function e() {
    if (value == "") {
        value = "2.71";
        update_element("output_main", value);
    }
    else {
        value += "*2.71"
        flag = true;
        update_element("output_main", value);
        value = evaluate_question(value, flag);

    }

}

// x^2 function
function x_squere() {
    answer = answer ** 2;
    // answer = answer * answer ;
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}


// 1/x function
function inverse() {
    answer = 1 / answer;
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}


// |x| function
function absolute_f() {

    answer = Math.abs(parseFloat(answer));
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

// exp function 
function exp() {

    answer = Math.exp(parseFloat(answer));
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);

}

// 2_/x̄ function
function sqrt2x() {
    answer = Math.sqrt(parseInt(answer));
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}


// 10^x function
function ten_res_x() {
    answer = Math.pow(10, answer);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

// LOG function 
function cap_log() {
    answer = Math.log(answer);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}
// lg function
function natural_log() {
    e = 2.718281828;
    answer = Math.log(e, answer);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

//sin function
function sin(){
    answer = Math.sin((parseInt(value)*Math.PI)/180).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}
// cos function
function cos(){

    answer = Math.cos((parseInt(value)*Math.PI)/180).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);

}
// tan function
function tan(){

    answer = Math.tan((parseInt(value)*Math.PI)/180).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);

}
// sec function
function sec(){

    answer = 1/(Math.cos((parseInt(value)*Math.PI)/180)).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
    
}
// cosec function
function cosec(){

    answer = 1/(Math.sin((parseInt(value)*Math.PI)/180)).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}
// cot function
function cot(){

    answer = 1/(Math.tan((parseInt(value)*Math.PI)/180)).toPrecision(13);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}


// Degree function
function DEG(){
    answer = value * (Math.PI/180);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);

}

// FE function
function FE(){
    answer = parseFloat(value).toExponential(2);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}
// !X function 
function fectorialize(){
    answer = factorial(answer);
    value = answer;
    update_element("output_main", value);
    update_element("output_sub", answer);
    update_answer(answer);
}

// fectorial function
function factorial(k) {
    if (k < 0) 
          return -1;
    else if (k == 0) 
        return 1;
    else {
        return (k * factorial(k - 1));
    }
}