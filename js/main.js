
 /*---------menu de navegacion----------*/
 (() =>{
     const hamburgerBtn = document.querySelector(".hamburger-btn"),
     navMenu = document.querySelector(".nav-menu"),
     closeNavBtn = navMenu.querySelector(".close-nav-menu");

     hamburgerBtn.addEventListener("click", showNavMenu);
     closeNavBtn.addEventListener("click", hideNavMenu);

     function showNavMenu(){
         navMenu.classList.add("open");
     }
     function hideNavMenu(){
         navMenu.classList.remove("open");
         fadeOutEffect();
     }
     function fadeOutEffect(){
         document.querySelector(".fade-out-effect").classList.add("active");
         setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");

         },300)
     }

     document.addEventListener("click", (event) =>{
          if(event.target.classList.contains('link-item')){

              if(event.target.hash !==""){

                  event.preventDefault();
                  const hash = event.target.hash;

                  document.querySelector(".section.active").classList.add("hide");
                  document.querySelector(".section.active").classList.remove("active");

                  document.querySelector(hash).classList.add("active");
                  document.querySelector(hash).classList.remove("hide");

                  if(navMenu.classList.contains("open")){
                     event.target.classList.add("active","inner-shadow");
                     event.target.classList.remove("outer-shadow","hover-in-shadow");
                     hideNavMenu();
                  }
                  else{
                      let navItems = navMenu.querySelectorAll(".link-item");
                      navItems.forEach((item) =>{
                          if(hash === item.hash){

                          }
                      })
                      fadeOutEffect();
                  }
                 //  ver url
                 window.location.hash = hash;

              }
          }

     })

 })();

function bodyScrollingToggle(){
    document.body.classList.toggle("stop-scrolling");
}


// /*---------Secciones ocultas excepto cuando esta activa--------*/

//  (() =>{
//      const sections = document.querySelectorAll(".section");
//      sections.forEach((section) =>{
//          if(!section.classList.contains("active")){
//              section.classList.add("hide");
//          }
//      })
//  })();

 window.addEventListener("load", () =>{
     document.querySelector(".preloader").classList.add("fade-out");
     setTimeout(() => {
         document.querySelector(".preloader").style.display = "none";
     },600)
 })


 /*--------Validacion del formulario--------*/

 const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_1u2nmzx';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviando Mensaje';
        alert('Mensaje Enviado Correctamente!');
      }, (err) => {
        btn.value = 'Enviando Mensaje';
        alert(JSON.stringify(err));
      });
  });