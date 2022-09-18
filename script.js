document.addEventListener('DOMContentLoaded', () => {
   // recording to LS
   let formData = {}; 
   const ls = localStorage;
   const fieldsetIn = document.querySelector('#fieldset1');
   const fieldsetOut = document.querySelector('#fieldset2');
   const btnSubmit = document.querySelector('#buttonSubmit');

   fieldsetIn.addEventListener('input', (event) =>{
      formData[event.target.name] =  event.target.value;
   })
   btnSubmit.addEventListener('click', () => {
      ls.setItem('formData', JSON.stringify(formData))
      location.reload();
   })
   // output from LS
   if(ls.formData){
      formData = JSON.parse(ls.getItem('formData'));
      for(key in formData){
         console.log(key);
         console.log(formData[key]);
         let i = document.createElement('h3');
         i.innerText = key + ' ' + formData[key];
         fieldsetOut.appendChild(i);  
      }
   }
})