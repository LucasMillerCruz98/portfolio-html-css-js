import { handleTypeTitle } from './functions/handleTypeTitle.js'
import { toggleMenuDisplayTransparent } from './functions/toggleMenuDisplayTransparent.js'
import { typingTitle, menuActive, navMenu } from './dom/index.js'

function callFunctions() {
  
  handleTypeTitle(typingTitle)
  
  toggleMenuDisplayTransparent()

  menuActive.addEventListener('click', () => {
    menuActive.classList.toggle('fa-x')
    
    navMenu.classList.toggle('active')
    
  })

}

callFunctions()

