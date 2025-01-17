const dropdownList = document.querySelectorAll('.dropdown')
dropdownList.forEach(dropdown =>{
        dropdown.addEventListener('click', function(e){
            // e.preventDefault()
            e.stopPropagation()
            const ul = this.querySelector('ul')
            ul.classList.toggle('active')
            
            const div = this.querySelector('div')
            div.classList.toggle('active')
        })
})

let logo = document.querySelector('#logo')
let cath = document.querySelector('.cath')

logo.addEventListener('click', function(){
    console.log('click')
    cath.classList.toggle('active')
})


