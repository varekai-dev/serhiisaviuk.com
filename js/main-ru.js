

const text = document.getElementById("text")
const darkness = document.getElementById('dark')

const toogleMode = () => {
 if(darkness.classList.contains('on')){
   text.innerHTML="Темные времена"
 } else{
   text.innerHTML="Зажечь свет"
 }
 
 darkness.classList.toggle('on')
 text.classList.toggle('light')
}

text.addEventListener('click', toogleMode)