window.onload = function() {
    // 깃 로고
    let git = document.getElementById('git-pc');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 700) {
            git.style.opacity = 1;
            git.style.transition = "0.5s";
        } else {
            git.style.opacity = 0;
            git.style.transition = "0.5s";
        }
    });

    // 가로 스크롤
    const scrollContainer = document.querySelector('.portfolio-flex');

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // 물방울
    function createBubble() {
        const bubble = document.getElementById('bubble');
        const createElement = document.createElement('span');
        let size = Math.random() * 60;

        createElement.style.width = 20 + size + 'px';
        createElement.style.height = 20 + size + 'px';
        createElement.style.left = Math.random() * innerWidth + 'px';
        bubble.appendChild(createElement);

        setTimeout(() => {
            createElement.remove()
        }, 4000)
    }

    setInterval(createBubble, 150);
}


$(function() {
    // 부드럽게 이동하는 메뉴
    $('#gnb > li > a').click(function() {
        var target = $(this).attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000);
    });

    // 퍼센트
    $('.count').each(function() {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + "%");
            }
        });
    });

    // 로고
    var bArray = [];
    var sArray = [4,6,8,10];
     
    for (var i = 0; i < $('#logo-big').width(); i++) {
        bArray.push(i);
    }
         
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
     
    setInterval(() => {
        var size = randomValue(sArray);
        $('#logo-big').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
            
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 350);

    // 고래
    setInterval(() => {
        $('.whale').animate({left:0},3000,"swing").animate({left:"100%"},3000,"swing");
    })
});


