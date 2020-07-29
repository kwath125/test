$('#navbar a, .btn').on('click', function(event){
  if(this.hash !==''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop:$(hash).offset().top - 100 //
      },
      800 //속도
    );

  }
})

// 스티키 베느바 벡그라운드 투명하게
window.addEventListener('scroll', function(){
  if(window.scrollY>150){
    this.document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    this.document.querySelector("#navbar").style.opacity = 1;
  }
})