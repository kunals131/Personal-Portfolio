
const main_page = document.querySelector('main');
const header = document.querySelector('header');

const texts = [
    {
        'usual' : "This project is a full-stack web-app based on django's Rest Framework. User can send, recieve and edit emails, create account, login,logout and whole data is saved with django's default sqlite database.",
        'shortend' : "Fullstack Application based on django's REST Framework "
    },
    {
        'usual' : "This project is my personal portfolio, High quality ui design without just SASS, and google fonts with functions like theme options,smoothscroll and css animations",
        'shortend' : "Front-End of Personal Portfolio beautifully designed with SASS"
    },
    {
        'usual' : "Webscrapper is a upgrade website to craigslist, It uses Bs4, Beautiful Soup and djnago to search and show results in a beautiful UI",
        'shortend' : "Webscrapper built by Beautiful Soup, BS4 and Django"
    }
]

function disabledPage(values) {
    if (values===true) {
        main_page.style.opacity = 0.6;
        header.style.opacity = 0.6;
    }
    else {
        main_page.style.opacity = 1;
        header.style.opacity = 1;
    }
}


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

function changeText(disp) {
    const all_texts = document.querySelectorAll('.work__project__text__main');
    if (disp=='dekstop') {
        all_texts[0].innerHTML = texts[0].usual;
        all_texts[1].innerHTML = texts[1].usual;
        all_texts[2].innerHTML = texts[2].usual;
    }
    else {
        all_texts[0].innerHTML = texts[0].shortend;
        all_texts[1].innerHTML = texts[1].shortend;
        all_texts[2].innerHTML = texts[2].shortend;
    }
    

    
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
        bg.style.background = "url('./img/300ppi/dekstop2.png') center center/cover";
        changeText('dekstop');
    }
    else {
        // fname.innerHTML = 'ku';
        // lname.innerHTML = 'nal';
        bg.style.background = "url('./img/300ppi/phone2.png') center center/cover";
        changeText('phone');

    }
})


$(window).on("load",function(){
    $(".loader-container").fadeOut(5000);
});



//sidebar functionality 
const settings_button = document.querySelector('.button__settings');
const sidebar2 = document.querySelector('.sidebar');
settings_button.addEventListener('click', ()=>{
    if (sidebar2.classList.contains('open')) {
        sidebar2.classList.remove('open');
       disabledPage(false);
    }
    else {
        sidebar2.classList.add('open');
        disabledPage(true);
    }
})



function colourselected(color_switch) {
    document.querySelector('.logo__box').style.backgroundColor = color_switch;
    document.querySelector('.home__img').style.boxShadow = `4px 4px 30px -3px ${color_switch}`;
    document.querySelectorAll('.work__project__button').forEach(b=>{
        b.style.backgroundColor = color_switch;
    })
    document.querySelector('.skills__heading').style.color = color_switch;
    document.querySelector('.contact__envelope').style.color = color_switch;
    document.querySelector('.social-icons__link').style.color = color_switch;
    document.querySelector('.contact__heading__p2').style.color = color_switch;
    document.querySelector('.button__settings').style.backgroundColor = color_switch;
    
}

document.addEventListener('DOMContentLoaded',()=>{
    
})


document.addEventListener('DOMContentLoaded', ()=>{
    const all_colours = document.querySelectorAll('.sidebar__color');
    all_colours.forEach(each_color=>{
        each_color.style.backgroundColor = each_color.dataset.color;
    })
    all_colours[0].parentElement.classList.add('selected');

    all_colours.forEach(each_color=>{
        each_color.addEventListener('click',()=>{
            for(let selection of all_colours) {
                if (selection.parentElement.classList.contains('selected')) {
                    selection.parentElement.classList.remove('selected');
                }
            }
            each_color.parentElement.classList.add('selected');
            colourselected(each_color.dataset.color);


        })
    })
    document.addEventListener('click', (e)=>{
        let count_click = 0;
        if (document.querySelector('.sidebar').classList.contains('open')) {
            let x = (e.target.classList[0]);
            // alert(x);
            if (x=='material-icons') {
                count_click++;
                if (count_click==2) {
                    document.querySelector('.sidebar').classList.remove('open');
                }
            }
            else {
                let sidebarClasses = ['sidebar', 'sidebar-container', 'sidebar__color', 'sidebar__items' ,'sidebar__sub', 'sidebar__heading'];
                if (!sidebarClasses.includes(x)) {
                    document.querySelector('.sidebar').classList.remove('open'); 
                    disabledPage(false);
                }
            }
        }
    })

})


//Project_responsive 


