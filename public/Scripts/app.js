
//IIFE - Immadietly invoked Function Expression
(function(){

    function Start(){
       console.log(`%c App Started...`, 
       "fonr-size: 20px; color: blue; font-weight: bold");
     }

    window.addEventListener("load", Start);
}
)();