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
    document.querySelector('#about').style.fontWeight = 500;
    document.querySelector('#work').style.fontWeight = 500;
    document.querySelector('#more').style.fontWeight = 500;


    document.querySelector(`#${selected}`).style.color = 'white';
    document.querySelector(`#${selected}`).style.fontWeight = 600;

}



document.addEventListener('DOMContentLoaded', ()=>{

    const menu_buttons = document.querySelectorAll('.nav-menu__link');
    menu_buttons.forEach(menu_btn=>{
        menu_btn.addEventListener('click',()=>{
            makeitbold(menu_btn.id)
        })
    })




    const fname = document.querySelector('.logo__fname');
    const lname = document.querySelector('.logo__lname');
    const bg = document.querySelector('.img-container');

    const deks_width = 1024;
    if (window.innerWidth>=deks_width) {
        fname.innerHTML = 'kunal';
        lname.innerHTML = 'sangtiani';
        bg.style.backgroundImage = "url('./img/300ppi/dekstop2.png')";
    }
    else {
        fname.innerHTML = 'ku';
        lname.innerHTML = 'nal';
        bg.style.backgroundImage = "url('./img/300ppi/phone2.png')";
    }
})

