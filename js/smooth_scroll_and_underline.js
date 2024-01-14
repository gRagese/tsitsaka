const anchor = document.querySelector('a[href*="#f"]')
// anchors.remove(document.querySelector)
const as = document.querySelectorAll('a')

anchor.addEventListener('click', function(e){
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

for (let a of as) {

    a.addEventListener('mouseover', function(e) {
        a.classList.add('underlined')
        console.log('work')
    })
    
    a.addEventListener('mouseout', function(e) {
        a.classList.remove('underlined')
        console.log('work')
    })
}