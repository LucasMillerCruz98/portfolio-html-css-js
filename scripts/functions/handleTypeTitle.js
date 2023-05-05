export function handleTypeTitle(typingTitle) {
  const arrText = typingTitle.innerHTML.split('')
  typingTitle.innerHTML = ``

  arrText.forEach((letter, index) => {
    setTimeout(() => {
      typingTitle.innerHTML += letter
    }, 75 * index)
  });

  return arrText
}
