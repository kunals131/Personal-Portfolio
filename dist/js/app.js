document.addEventListener('scroll', ()=>{
    if (window.scrollY>100) {
        document.querySelector('header').classList.add('dark-bg')
    }
    if (window.scrollY<100) {
        document.querySelector('header').classList.remove('dark-bg')
    }
    
})