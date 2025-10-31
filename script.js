// Contrast + font size toggles (footer buttons)
document.addEventListener('click', (e)=>{
  if(e.target.matches('[data-contrast]')){
    document.documentElement.classList.toggle('contrast');
  }
  if(e.target.matches('[data-font]')){
    document.documentElement.classList.toggle('large');
  }
});
