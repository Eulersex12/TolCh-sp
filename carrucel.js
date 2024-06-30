window.addEventListener("load", () =>{
  tiempo();
});


  const inputs = document.querySelectorAll('input[name="slider"]');
  const ptos = document.querySelectorAll('.slider .naveg .ptos label'); 
  //flechas
  const fchaPrev = document.querySelector('.slider .naveg .prev');
  const fchaNext = document.querySelector('.slider .naveg .next');

  
  fchaPrev.addEventListener("click", () => {
    const elementoActual = document.querySelector('.slider .naveg .ptos label.active');
    if(elementoActual.previousElementSibling){
      elementoActual.previousElementSibling.click();
    }else {
      ptos[ptos.length-1].click();
    }
  });

  fchaNext.addEventListener("click", ()=> {
    const elementoActual = document.querySelector('.slider .naveg .ptos label.active');
    if(elementoActual.nextElementSibling){
      elementoActual.nextElementSibling.click();
    } else {
      ptos[0].click();
    }
  });

  //navegacion
  inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      ptos.forEach((dot, i) => {
        if(i == index) {
          dot.classList.add("active");
        }else {
          dot.classList.remove("active");
        }
      })
    })
  });
  function tiempo () {
    setInterval(() => {
      const elementoActual = document.querySelector('.slider .naveg .ptos label.active');
    if(elementoActual.nextElementSibling){
      elementoActual.nextElementSibling.click();
    } else {
      ptos[0].click();
    }
    }, 5000);
  }