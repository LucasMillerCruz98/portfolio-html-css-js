export function toggleMenuDisplayTransparent() {
  const menu = document.querySelector('.menu')

  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
      menu.classList.add('scroll')
    }else{
      menu.classList.remove('scroll')
    }
  })

  return menu
}