import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the plet hotInHere = document.querySelectorAll('.hot')
  
  let hotInHere = document.querySelectorAll('.hot');
  let text = hotInHere.textContent;
  
  hotInHere.forEach(element => {
    if(!element.textContent.includes('🔥')){
      element.textContent += '🔥'
    }   
   
 });
});
