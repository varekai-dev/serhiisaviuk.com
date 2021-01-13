

const text = document.getElementById("text")
 const darkness = document.getElementById('dark')

const toogleMode = () => {
  if(darkness.classList.contains('on')){
    text.innerHTML="Темні часи"
  } else{
    text.innerHTML="Запалити світло"
  }
  
  darkness.classList.toggle('on')
  text.classList.toggle('light')
}

 text.addEventListener('click', toogleMode)