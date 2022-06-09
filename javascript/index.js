const cta = document.getElementById('mobile-cta');
      nav1 = document.querySelector('nav');
      exit = document.getElementById('mobile-exit');


cta.addEventListener("click", ()=>{
   nav1.style.display = "block";  
   
  
})

exit.addEventListener("click", ()=>{
   nav1.style.display = "none"; 

  
})

