window.addEventListener('DOMContentLoaded',()=>{
let containers = document.querySelectorAll('.category')
containers.forEach(container=>{
    container.addEventListener('mouseenter',(e)=>{
        const front = container.querySelector('.front')
        const middle = container.querySelector('.middle')
        middle ? middle.classList.add('raisePaper') : null
        middle ? middle.classList.remove('lowerPaper') : null
        front.classList.add('lowerFront')
        front.classList.remove('liftFront')
        
    })
})
containers.forEach(container=>{
    container.addEventListener('mouseleave',(e)=>{
        const front = container.querySelector('.front')
        const middle = container.querySelector('.middle')
        middle ? middle.classList.add('lowerPaper') : null
        middle ? middle.classList.remove('raisePaper') : null
        front.classList.add('liftFront')
        front.classList.remove('lowerFront')
    })
})

let addCategoryPopUp = document.querySelector('.addCategoryForm')
let closeAddCategory = document.querySelector('.closeAddCategory')
let addCategory = document.querySelector('.addCategory')
closeAddCategory.addEventListener('click',()=>{
    addCategoryPopUp.classList.add('hidePopUp')
    addCategoryPopUp.classList.remove('showPopUp')
})
addCategory.addEventListener('click',()=>{
    addCategoryPopUp.classList.remove('hidePopUp')
    addCategoryPopUp.classList.add('showPopUp')
    addCategoryPopUp.style.display = 'flex'
})
})