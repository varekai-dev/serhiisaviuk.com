

const text = document.getElementById("text")
 const main = document.querySelector('.main')

const darkMode = () =>{
  main.classList.toggle('dark') 
  
}



 text.addEventListener('click', darkMode)