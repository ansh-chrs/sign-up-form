const pass= document.querySelector('#pass');
const con_pass= document.querySelector('#con-pass');
const input= document.querySelectorAll('input');
const popup= document.querySelector('.popup');



input.forEach( (element) => {
    element.addEventListener('focusin', (e) => {
    let para = e.target.nextElementSibling;
    para.classList.add('clicked');
    
    

    });


    element.addEventListener('focusout', (e) => {
        let para = e.target.nextElementSibling;
        if(element.value ==='')
      { para.classList.remove('clicked');
      
      
    
    }
    else return;
    });
     

    element.addEventListener('invalid',()=>{
      element.classList.add('error');
 });
 

});



con_pass.addEventListener("focusin",()=>{

   password= pass.value;
   con_pass.setAttribute("pattern",`${password}`);
   con_pass.setAttribute("title",`Password Mismatch`);
});