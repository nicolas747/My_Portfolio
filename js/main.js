/*Sobre Mi Seccion*/
(() =>{
    const aboutSection = document.querySelector(".about-section"), tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (even) =>{
        if(event.target.classList.contains("tab-items") && !event.target.classList.contains ("active")){
            const target = event.target.getAttribute("data-target");
            
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.add("active");
            }
        
    })
})();