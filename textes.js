const texte = document.querySelector('.texte')


const texteArray = [
    { 
        txt: 'SNEAKERS EVENT',
        href: "sneakers.html",
        groups: ["group2"],
    },
    {
        img: "BOOK_neel_honorine-41.png",
        groups: ["group2"],
        txt: 'SNEAKERS EVENT',
    },
    {
        txt: 'JIMI HENDRIX',
        href: "jimi.html",
        groups: ["group2"],
    },
    {
        img: "BOOK_neel_honorine-51.png",
        groups: ["group2"],
        txt: 'JIMMI HENDRIX',
    },
    {
        txt: 'LA métamorphose',
        href: "meta.html",
        groups: ["group2"],
    },
    {
        img: "Roman.jpg",
        groups: ["group2"],
        txt: 'LA métamorphose',
    },
    {
        txt: 'ARLES',
        href: "arles.html",
        groups: ["group2"],

    },
    {
        img: "NEEL_HONORINE_ARLES-1.jpg",
        groups: ["group2"],
        txt: 'ARLES',

    },
    {
        txt: 'AGNèS VARDA',
        href: "varda.html",
        groups: ["group2", "group4"],

    },
    {
        img: "agnesvarda.png",
        groups: ["group2", "group4"],
        txt: 'AGNèS VARDA',

    },
    {
        txt: 'L\'ENTREPOT',
        href: "entrepot.html",
        groups: ["group1"],

    },
    {
        img: "entrpot.png",
        groups: ["group1"],
        txt: 'L\'ENTREPOT',

    },
    {
        txt: 'ZERO WASTE',
        href: "zerowaste.html",
        groups: ["group1"],

    },
    {
        img: "zerowaste.png",
        groups: ["group1"],
        txt: 'ZERO WASTE',

    },
    {
        txt: 'SP DUO',
        href: "spduo.html",
        groups: ["group1", "group3"],

    },
    {
        img: "spduopetit.png",
        groups: ["group1", "group3"],
        txt: 'SP DUO',

    },
    {
        txt: 'RETRONEWS',
        href: "retronews.html",
        groups: ["group2"],

    },
    {
        img: "couv2.jpg",
        groups: ["group2"],
        txt: 'RETRONEWS',

    },
    {
        txt: 'DIEPPE',
        href: "dieppe.html",
        groups: ["group1" ,"group3"],

    },
    {
        img: "dieppe2.jpg",
        groups: ["group1" ,"group3"],
        txt: 'DIEPPE',

    },
    
]

texteArray.forEach(element => {

    if(!element.img){
        const name = element.txt
        const cssClass = name.toLowerCase().trim().replace("'", "").replace('é',"e").replace(' ',"-")
        element.txt.split(' ').forEach(word => {
            const splitWord = word.split('')

            const length = splitWord.length -1

            splitWord.forEach((letter,index) => {

                const a = document.createElement('a')
                a.classList.add('show')

                if(index === length){
                    // Change margin
                    a.style.marginRight = "40px"
                }
                a.href = element.href
                a.textContent = letter

                if(element.groups){
                    element.groups.map(group =>{
                        a.classList.add(group)
                    })
                }

                a.classList.add(cssClass)

                texte.append(a)
            })

        })


        const classListe = document.querySelectorAll(`.${cssClass}`)
        
        classListe.forEach(element => {
            element.addEventListener('mouseover' , function(){

                const aInTexteList = document.querySelectorAll('.texte a')
                aInTexteList.forEach(aInTexte => {
                    aInTexte.style.color = "#000"
                })
                
                classListe.forEach(el => {
                    el.style.color = 'blue'
                })
            })
        })
        
    }else{
        const img = document.createElement('img')
        img.style.marginRight = "40px"
        img.src = element.img
        img.classList.add('show')
        const name = element.txt
        const cssClass = name.toLowerCase().trim().replace("'", "").replace('é',"e").replace(' ',"-")
        img.classList.add(cssClass)
        if(element.groups){
            element.groups.map(group =>{
                img.classList.add(group)
            })
        }
        texte.append(img)
    }
    
})

let filterLinks= document.querySelectorAll('.filter-links')

filterLinks.forEach(filterLink => {
    filterLink.addEventListener('click',function(e){
        e.preventDefault()

        const texteItemsList = document.querySelectorAll('#texte>*')

        texteItemsList.forEach(elementItem => {
            elementItem.classList.remove('show')
        })

        let dataTargetAttribute = filterLink.getAttribute('data-target')
        
        let dataTargets = dataTargetAttribute.split(',')

        dataTargets.map(dataTarget => {
            const elemetnsTarget = document.querySelectorAll(`.${dataTarget}`)
            elemetnsTarget.forEach(element => {
                element.classList.add('show')
            })
        })

        
    })
})



// document.getElementById(texte).style.display = none;

