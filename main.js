let isFlipped = {
    1: false,
    3: false
};

function flipImage(imageNumber) {
    const flipCard = document.querySelector(`.flip-card-${imageNumber}`);

    if (!isFlipped[imageNumber]) {
        flipCard.style.transform = 'rotateY(180deg)';
    } else {
        flipCard.style.transform = 'rotateY(0deg)';
    }

    isFlipped[imageNumber] = !isFlipped[imageNumber];
}




function startVibration() {
    const image = document.querySelector('.vibrating-image');
    image.classList.add('vibrating');
}

function stopVibration() {
    const image = document.querySelector('.vibrating-image');
    image.classList.remove('vibrating');
}


var imageId = 'image1';

document.getElementById(imageId).addEventListener('mouseenter', function() {
    startVibration(imageId);
});

document.getElementById('image1').addEventListener('mouseout', function() {
    stopVibration('image1');
});

document.getElementById('image2').addEventListener('mouseenter', function() {
    startVibration2('image2');
});


document.getElementById('image2').addEventListener('mouseout', function() {
    stopVibration2('image2');
});

document.getElementById('image3').addEventListener('mouseenter', function() {
    startVibration3('image3');
});


document.getElementById('image3').addEventListener('mouseout', function() {
    stopVibration3('image3');
});

document.getElementById('image4').addEventListener('mouseenter', function() {
    startVibration4('image4');
});


document.getElementById('image4').addEventListener('mouseout', function() {
    stopVibration4('image4');
});

document.getElementById('image5').addEventListener('mouseenter', function() {
    startVibration5('image5');
});


document.getElementById('image5').addEventListener('mouseout', function() {
    stopVibration5('image5');
});

document.getElementById('image6').addEventListener('mouseenter', function() {
    startVibration6('image6');
});


document.getElementById('image6').addEventListener('mouseout', function() {
    stopVibration6('image6');
});




function startVibration2() {
    const image = document.querySelector('.vibrating-image2');
    image.classList.add('vibrating');
}

function stopVibration2() {
    const image = document.querySelector('.vibrating-image2');
    image.classList.remove('vibrating');
}

function startVibration3() {
    const image = document.querySelector('.vibrating-image3');
    image.classList.add('vibrating');
}

function stopVibration3() {
    const image = document.querySelector('.vibrating-image3');
    image.classList.remove('vibrating');
}

function startVibration4() {
    const image = document.querySelector('.vibrating-image4');
    image.classList.add('vibrating');
}

function stopVibration4() {
    const image = document.querySelector('.vibrating-image4');
    image.classList.remove('vibrating');
}

function startVibration5() {
    const image = document.querySelector('.vibrating-image5');
    image.classList.add('vibrating');
}

function stopVibration5() {
    const image = document.querySelector('.vibrating-image5');
    image.classList.remove('vibrating');
}

function startVibration6() {
    const image = document.querySelector('.vibrating-image6');
    image.classList.add('vibrating');
}

function stopVibration6() {
    const image = document.querySelector('.vibrating-image6');
    image.classList.remove('vibrating');
}




document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.getElementById("menu-trigger");
    const dropdownMenu = document.getElementById("drop-menu");

    menuTrigger.addEventListener("click", function() {
        dropdownMenu.classList.toggle("active");
    });
});

window.onscroll = function() {
    stickyHeader();
};

const header = document.getElementById("header");
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.skillsIcnsBox img');

    function checkScroll() {
        images.forEach((image, index) => {
            const position = image.getBoundingClientRect().top;

            if (position < window.innerHeight && position > 0) {
                setTimeout(() => {
                    image.classList.add('visible');
                }, (index + 1) * 400);
            }
        });
    }


    checkScroll();


    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function() {
    const figs = document.querySelectorAll('.skillsIcnsBox figure');

    function checkScroll2() {
        figs.forEach((fig, index) => {
            const position2 = fig.getBoundingClientRect().top;

            if (position2 < window.innerHeight && position2 > 0) {
                setTimeout(() => {
                    fig.classList.add('visible2');
                }, (index + 1) * 400);
            }
        });
    }


    checkScroll2();


    window.addEventListener('scroll', checkScroll2);
});


function displayTxt(card) {
    card.querySelector('.textePop').style.display = 'flex';
}

function hideTxt(card) {
    card.querySelector('.textePop').style.display = 'none';
}