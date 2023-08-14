let burger = document.getElementById('burguer')
let menu1 = document.getElementById('menu1')

burger.addEventListener('click', ()=> {

    if(menu1.classList.contains("menu-media-hidden")){
        menu1.classList.add("menu-media-visible")
        menu1.classList.remove("menu-media-hidden")
    } else {
        menu1.classList.add("menu-media-hidden")
        menu1.classList.remove("menu-media-visible")
    }
})