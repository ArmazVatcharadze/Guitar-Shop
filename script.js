const hamburger = document.querySelector('#hamburger')

const nav = document.querySelectorAll('.nav')


hamburger.addEventListener('click', () => {
    nav.forEach(na => {
        na.classList.toggle('nav-open')
    })
});


const electric = document.querySelector('.electric')

const electricImg = document.querySelector('.electrick-img')

const acousticImg = document.querySelector('.acoustic-img')

const acoustic = document.querySelector('.acoustic')

acousticImg.addEventListener('click', openAcoustic)

function openAcoustic(){
    home.style.display = 'none'
    acoustic.style.display = 'flex'
}


const bassImg = document.querySelector('.bass-img')

const bass = document.querySelector('.bass')


bassImg.addEventListener('click', openBass)

function openBass(){
    home.style.display = 'none'
    bass.style.display = 'flex'
}



const home = document.querySelector('.home')

const back = document.querySelectorAll('.back')

electricImg.addEventListener('click', openElectric)

function openElectric(){
    home.style.display = 'none'
    electric.style.display = 'flex'
}

back.forEach(bck => {
    bck.addEventListener('click', () => {
        bck.parentElement.parentElement.style.display = 'none'
        home.style.display = 'block'
    })
})

const viewBack = document.querySelector('.view-back')

viewBack.addEventListener('click', () => {
    viewBack.parentElement.style.display = 'none'
    viewBack.parentElement.querySelector('.wrapp').innerHTML = '';
    home.style.display = 'block'
    const about = document.querySelector('.about-guit')

    about.style.display = 'none'
})

const see = document.querySelectorAll('.see')

see.forEach(se => {
    se.addEventListener('click', () => {
        se.parentElement.style.display = 'none'
        const viewOut = document.querySelector('.view-guitar')
        const wrap = document.querySelector('.wrapp')
        const about = document.querySelector('.about-guit')

        about.style.display = 'flex'


        viewOut.style.display = 'block'
        const div = document.createElement('div')
        div.setAttribute('class', 'view-outer')
        div.innerHTML = `<img class="view-img" src="${se.querySelector('img').src}" alt="">
        <div class="view-text">
            <h1>Lorem, ipsum.</h1>
            <h3>500$</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,</p>
            <button class = "add-cart">Add to cart</button>
        </div>`

        wrap.appendChild(div)


    })

})






const cart11 = document.querySelector('.cart')
const cart = document.querySelector('.cart-bag')


cart11.addEventListener('click', showCart)

function showCart(){
    cart.classList.toggle('flex')

}



const navElec = document.querySelector('.nav-elec')
const navAcc = document.querySelector('.nav-acc')
const navBass = document.querySelector('.nav-bass')

navElec.addEventListener('click', openEl)

function openEl(){
    navElec.parentElement.parentElement.style.display = 'none'
    electric.style.display = 'flex'
}

navAcc.addEventListener('click', openAcc)

function openAcc(){
    navAcc.parentElement.parentElement.style.display = 'none'
    acoustic.style.display = 'flex'
}

navBass.addEventListener('click', openBas)

function openBas(){
    navBass.parentElement.parentElement.style.display = 'none'
    bass.style.display = 'flex'
}


