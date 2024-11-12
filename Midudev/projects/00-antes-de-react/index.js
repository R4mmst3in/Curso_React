
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (button.classList.contains('liked')) {
      button.classList.remove('liked')
      button.innerText = 'Me gusta'
    } else
    {
      button.classList.add('liked')
      button.innerText = 'Quitar me gusta'
    }
    }
  )
  }
)