document.addEventListener('scroll', ()=>{
    if (window.scrollY>100) {
        document.querySelector('header').classList.add('dark-bg')
    }
    if (window.scrollY<100) {
        document.querySelector('header').classList.remove('dark-bg')
    }
})


const inactive_color = 'grey';
const active_color = 'white';

function makeitbold(selected) {
    document.querySelector(`#about`).style.color = inactive_color;
    document.querySelector(`#work`).style.color = inactive_color;
    document.querySelector(`#more`).style.color = inactive_color;
    document.querySelector(`#${selected}`).style.color = 'white';
    document.querySelector(`#${selected}`).style.fontWeight = 500;
}

function navwithscroll() {
    const skill_secion = document.querySelector('#skills_section')
    const home_secion = document.querySelector('#home_section');
    const work_secion = document.querySelector('#work_section')

    document.addEventListener('scroll',()=>{
        if (window.scrollY>=0) {
            makeitbold('about');
        }
        if (window.scrollY>=50) {
            makeitbold('work');
        }
        if (window.scrollY>=work_secion.getBoundingClientRect().bottom){
            makeitbold('more');
        }
    })
}



document.addEventListener('DOMContentLoaded', ()=>{

    const menu_buttons = document.querySelectorAll('.nav-menu__item');
    menu_buttons.forEach(menu_btn=>{    
        menu_btn.addEventListener('click',()=>{
            makeitbold(menu_btn.id.substr(menu_btn.id.length-1))
        })
    })
    navwithscroll();

    const fname = document.querySelector('.logo__fname');
    const lname = document.querySelector('.logo__lname');
    const bg = document.querySelector('.img-container');

    const deks_width = 1024;
    if (window.innerWidth>=deks_width) {
        // fname.innerHTML = 'kunal';
        // lname.innerHTML = 'sangtiani';
        bg.style.backgroundImage = "url('./img/300ppi/dekstop2.png')";
    }
    else {
        // fname.innerHTML = 'ku';
        // lname.innerHTML = 'nal';
        bg.style.backgroundImage = "url('./img/300ppi/phone2.png')";
    }
})


$(window).on("load",function(){
    $(".loader-container").fadeOut(7000);
});