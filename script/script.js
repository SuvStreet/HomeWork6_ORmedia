/* document.getElementById(''); */

document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu').classList.toggle('show')
}

setInterval(function(){
    if(document.querySelectorAll('.owl-dot')[0].className === 'owl-dot active'){
        document.querySelector('.container1').classList.remove('container1_img2')
        document.querySelector('.container1').classList.add('container1_img1')
    } else if (document.querySelectorAll('.owl-dot')[1].className === 'owl-dot active'){
        document.querySelector('.container1').classList.remove('container1_img1')
        document.querySelector('.container1').classList.add('container1_img2')
    }
}, 10);