let operators    = document.getElementById('operators-input');
let reset        = document.getElementById('reset');
var first_input  = document.getElementById('first-input');
var expression = '';

// function argument(value) {
//     first_input.value = value;
   
// // if(operators.value){
// //     second_input.value += value;
    
// // }
// // else{
// //     first_input.value += value;
    
// //  }
// };


function argument(value) {
  expression +=value;
  document.getElementById('first-input').value = expression;
}

function operator(operator) {
  expression += ` ${operator} `;
  document.getElementById('first-input').value = expression;
}

reset.addEventListener('click',function () {
    first_input.value ='';
    expression='';
    
 });

function calculate(){
    let expression = document.getElementById('first-input').value;
      const result = eval(expression);
      first_input.value =result;
   
  }
    
//     if(first_input =='+')
//         {
//         let result = eval(expression);
//             document.getElementById('first-input').innerText = result;
//         operators.value =result;
//     }
//     else if(operators.value =='-')
//         {
//         let result= Number(first_input.value) - Number(second_input.value);
//         operators.value =result;
//         console.log(result);
//     }
//     else if(operators.value =='/')
//         {
//         let result= Number(first_input.value) / Number(second_input.value);
//         operators.value =result;
//         console.log(result);
//     }
//     else if(operators.value =='*')
//         {
//         let result= Number(first_input.value) * Number(second_input.value);
//         operators.value =result;
//         console.log(result);
//     }
// }
function argumentdelete(){

    if(first_input.value){
        first_input.value=first_input.value.slice(0,-1);
        expression=expression.slice(0,-1);
    }
    else{
        alert("no values")
    }
    };
   


