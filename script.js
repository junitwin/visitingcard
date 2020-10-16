const body=document.querySelector('body');
const pageHeader=document.querySelector(".page-header");
const themeButton=document.querySelector('.theme-button');
const statusCont=document.querySelector('.status p');
themeButton.onclick=function() {
  body.classList.toggle('dark-theme');
  pageHeader.classList.toggle('dark-theme');
  statusCont.classList.toggle('dark-theme');
}
document.querySelectorAll('.accordion__button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle('accordion__button--active');
    if (button.classList.contains('accordion__button--active')) {
      accordionContent.style.maxHeight=accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
