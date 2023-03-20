document.querySelector('#plus4').onclick = function(){
    document.querySelector('#plus4').classList.toggle('rotate-plus')  ///трансформ крестика
    document.querySelector('#appl4').classList.toggle('open')  ///отображаем/скрываем элемент
}

document.querySelector('#plus1').onclick = function(){
    document.querySelector('#plus1').classList.toggle('rotate-plus')  ///трансформ крестика
    document.querySelector('#appl1').classList.toggle('open')  ///отображаем/скрываем элемент
}

document.querySelector('#plus2').onclick = function(){
    document.querySelector('#plus2').classList.toggle('rotate-plus')  ///трансформ крестика
    document.querySelector('#appl2').classList.toggle('open')  ///отображаем/скрываем элемент
}

document.querySelector('#plus3').onclick = function(){
    document.querySelector('#plus3').classList.toggle('rotate-plus')  ///трансформ крестика
    document.querySelector('#appl3').classList.toggle('open')  ///отображаем/скрываем элемент
}

                
document.querySelector('#masss').onclick = function(){
    document.querySelector('#sevmes').classList.add('openz')    
}

document.querySelector('.close-cross').onclick = function(){
    document.querySelector('#sevmes').classList.remove('openz')
}

document.querySelector('.bar').onclick = function(){
    document.querySelector('.secondary-menu').classList.add('active');
    document.querySelector('.first-container').style.overflow = ('hidden');
}

document.querySelector('.block-cross').onclick = function(){
    document.querySelector('.secondary-menu').classList.remove('active')
}