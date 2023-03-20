document.querySelector('#extsec').onclick = function(){
    document.querySelector('#addblock').classList.remove('extension')
}

document.querySelector('.bar').onclick = function(){
    document.querySelector('.secondary-menu').classList.add('active');
    document.querySelector('.portfolio').classList.add('nonactive');
    document.querySelector('.menu').classList.add('hidden');
    //document.querySelector('.first-container').style.overflow = ('hidden');
}

document.querySelector('.block-cross').onclick = function(){
    document.querySelector('.secondary-menu').classList.remove('active');
    document.querySelector('.portfolio').classList.remove('nonactive');
    document.querySelector('.menu').classList.remove('hidden');
}

