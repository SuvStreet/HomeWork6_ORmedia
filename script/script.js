/* document.getElementById(''); */

document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu_burger').classList.toggle('show')
}

setInterval(function(){
    if(document.querySelectorAll('.owl-dot')[0].className === 'owl-dot active'){
        document.querySelector('.container1').classList.add('container1_intro')
        document.querySelector('.container1').classList.remove('container1_contact')
        document.querySelector('.container1').classList.remove('container1_work')
    } else if (document.querySelectorAll('.owl-dot')[1].className === 'owl-dot active'){
        document.querySelector('.container1').classList.add('container1_work')
        document.querySelector('.container1').classList.remove('container1_intro')
        document.querySelector('.container1').classList.remove('container1_about')
    } else if (document.querySelectorAll('.owl-dot')[2].className === 'owl-dot active'){
        document.querySelector('.container1').classList.add('container1_about')
        document.querySelector('.container1').classList.remove('container1_work')
        document.querySelector('.container1').classList.remove('container1_contact')
    } else if (document.querySelectorAll('.owl-dot')[3].className === 'owl-dot active'){
        document.querySelector('.container1').classList.add('container1_contact')
        document.querySelector('.container1').classList.remove('container1_about')
        document.querySelector('.container1').classList.remove('container1_intro')
    }
}, 10);