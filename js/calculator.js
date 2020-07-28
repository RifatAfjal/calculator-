const showResult = document.getElementById('result');
 
 function insert(num){
     if(showResult.innerText === '0'){
        if(num == '/' || num == '*' || num == '-' || num == '+'){
            showResult.innerText = '0';
        }else {
            showResult.innerText = num;
        }
     }else{
        showResult.innerText = showResult.innerText + num;
     }
 }

 function equal(){
     if(showResult.innerText !== ''){
       showResult.innerText = eval(showResult.innerText);  
     }
     
 }

 function removeAll(){
     showResult.innerText = 0;
 }






//  const showResult = document.getElementById('result');
//  const btnDecimal = document.getElementById('decimal');
//  const btnClear = document.getElementById('clear');
//  const btnNumbers = document.querySelectorAll('.number');
//  const btnOperators = document.querySelectorAll('.operator');
//  const keyBoard = document.querySelector('.keyboard');


//  let arr = [];
//  keyBoard.addEventListener('click',function(e){
//      const clickNum = e.target.textContent;
//      const curBtnId = e.target.className;
//      const getDisplayNum = showResult.textContent;
//      if(curBtnId.indexOf('number') >= 0){
//         if(getDisplayNum == ''){
//             showResult.textContent = clickNum;
//         }else{
//             showResult.textContent = getDisplayNum + clickNum;
//         } 
//      }else if(curBtnId.indexOf('operator') >= 0){
//          let makeNum = parseFloat(showResult.textContent);
//          arr.push(makeNum);
//          showResult.textContent = ''
//      }else if(curBtnId.indexOf('equal') >= 0){
//          const fuck = parseFloat(showResult.textContent)
//          showResult.textContent = arr[0] + fuck;
//      }

//      console.log(arr);


//  })

