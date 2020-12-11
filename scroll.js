function scrollAppear (){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2;

    if (introPosition < screenPosition) 
    {introText.classList.add('intro-appear');
    } else
    {introText.classList.remove('intro-appear');}


  }
window.addEventListener('scroll',scrollAppear);


function bgChanger(){
  if(this.scrollY > this.innerHeight/8){
    document.body.classList.add("bg-active");
}    else{
  document.body.classList.remove("bg-active");} } 

  window.addEventListener("scroll",bgChanger);