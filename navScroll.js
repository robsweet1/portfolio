let scrollPosition = 0
let visible = true
let navbar

const init = () => { navbar = document.getElementById('nav') }

window.onload = init


const handleScroll = () => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log(scrollTop, scrollPosition)
    if (scrollTop > scrollPosition) {
        navbar.classList.add('nav-hide')
        visible = false
    }
    else {
        navbar.classList.remove('nav-hide')
        visible = true
    }
    scrollPosition = scrollTop
}

const handleMouseOver = (e) => {
    if(e.clientY < 75){
        navbar.classList.remove('nav-hide')
    }
    else if (visible === false){
        navbar.classList.add('nav-hide')
    }

}

window.addEventListener('scroll' , handleScroll, true)
window.addEventListener('mousemove', handleMouseOver, true)
