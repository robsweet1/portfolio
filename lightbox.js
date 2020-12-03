const lightbox = document.getElementById('lightbox')
const screenshots = document.querySelectorAll('img')
screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', e => {
        lightbox.classList.add('lightbox-active')
        const img = document.createElement('img')
        img.src = screenshot.src
        img.id = 'lightbox-image'
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) 
        return
    lightbox.classList.remove('lightbox-active')
    lightbox.removeChild(lightbox.querySelector('img'))
})