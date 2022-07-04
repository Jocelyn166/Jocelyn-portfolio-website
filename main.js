
const navToggle = document.querySelector("#navToogle");
const navMenu = document.querySelector("#navMenu");
const navClose = document.querySelector("#navClose");

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    });
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    });
}
const navLinks = document.querySelectorAll(".nav_link");
for(let navLink of navLinks){
    navLink.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}
// skills //
const skillsArrow = document.querySelector('.skills_arrow');

skillsArrow.addEventListener('click',changeCurrentClass);

function changeCurrentClass(){
    skillsArrow.classList.toggle('rotate_arrow');
    const items = skillsArrow.parentElement.nextElementSibling.children;
    if(skillsArrow.classList.value !== 'fa fa-solid fa-angle-down skills_arrow'){
        for(let i=0;i< items.length;i++){
            items[i].classList.value = 'skills_data';
           }
    }else{
        for(let i=0;i< 4;i++){
            items[i].classList.add('skills_open');
        }for(let i=4;i<8;i++){
            items[i].classList.add('skills_close');
        }
    }
   
}

// services modal//
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{ 
            modalView.classList.remove('active-modal');
        })
    })
})

// swiper//
  var swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // change background header//
  function scrollHeader(){
      const header = document.querySelector('#header');
      const logo = document.querySelector('.nav_logo');
      const navLinks = document.querySelectorAll('.nav_link');
      const themeBtn = document.querySelector('#theme-button');
      if(this.scrollY>=80){
          header.classList.add('scroll-header');
          logo.classList.add('scroll-nav-logo');
          navLinks.forEach((el)=>{el.classList.add('scroll-nav-link')});
          themeBtn.classList.add('scroll-themeBtn');
      }else{
          header.classList.remove('scroll-header');
          logo.classList.remove('scroll-nav-logo');
          navLinks.forEach((el)=>{el.classList.remove('scroll-nav-link')});
          themeBtn.classList.remove('scroll-themeBtn');
      }

  }
  window.addEventListener('scroll',scrollHeader);



// dark light theme //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';
// previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'fa-moon':'fa-sun';

// validate if the user previously chose a topic
if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-moon'? 'add':'remove'](iconTheme);
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save the theme and the current icon that the user close
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})  