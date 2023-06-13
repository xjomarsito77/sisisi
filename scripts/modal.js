const openinfo = document.querySelector('.infoclick')
const info = document.querySelector('.info')
const closeinfo = document.querySelector('.modal_info')
openinfo.addEventListener('click', (e) => {
    e.preventDefault()
    info.classList.add('modal--show')
})

closeinfo.addEventListener('click', (e) => {
    e.preventDefault()
    info.classList.remove('modal--show')
})