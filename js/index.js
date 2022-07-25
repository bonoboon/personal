window.onload = function() {
    // top 버튼
    let top = document.getElementById("top");
    top.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 700) {
            top.style.opacity = 1;
            top.style.transition = "0.3s";
        } else {
            top.style.opacity = 0;
            top.style.transition = "0.3s";
        }
    });

    // 가로 스크롤
    const scrollContainer = document.querySelector('.portfolio-flex');
    const mql = window.matchMedia("screen and (min-width: 1024px)");
    
    if (mql.matches) {
        scrollContainer.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }

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
        }, 5000)
    }

    setInterval(createBubble, 150);

    // 북극곰
    var limit = document.getElementById('limit'),
    face  = document.getElementById('face'),
    nose  = document.getElementById('nose'),
    fish  = document.getElementById('fish'),
    ears  = document.querySelectorAll('.ear');

    var mouse = {x:0, y:0},
    center = {
        x: window.innerWidth/2, 
        y: window.innerHeight/2
    },
    limit = {
        left: - (limit.offsetWidth  - face.offsetWidth)  / 2,
        right:  (limit.offsetWidth  - face.offsetWidth)  / 2,
        top:  - (limit.offsetHeight - face.offsetHeight) / 2,
        bottom: (limit.offsetHeight - face.offsetHeight) / 2,
    },
    eyeSize = 20,
    eyeSizeRate = 12,
    noseMoveRate = 2.5,
    earMoveRate = 3.5,
    faceMoveRate = 10;

    function translate (selector, x, y) {
        selector.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }

    function interact (e) {
        mouse.x = e.touches ? e.touches[0].clientX : e.clientX;
        mouse.y = e.touches ? e.touches[0].clientY : e.clientY;
        
        var dx = (mouse.x - center.x)/faceMoveRate,
            dy = (mouse.y - center.y)/faceMoveRate,
            classX = dx < 0 ? 'left' : 'right';
        
        dx = dx < limit.left ? limit.left :
            dx > limit.right ? limit.right : dx;
        
        dy = dy < limit.top ? limit.top :
            dy > limit.bottom ? limit.bottom : dy;
            
        var eye = document.getElementsByClassName(classX + '-eye')[0],
            size = Math.round(eyeSize - Math.abs(dx)/eyeSizeRate),
            margin = Math.round((eyeSize - size)/2);
        
        eye.style.cssText = 'width:' + size + 'px; \
                            height:' + size + 'px; \
                            margin-left:' + margin +'px; \
                            margin-top: ' + margin +'px;';
        
        fish.style.cssText = 
            'left:' + mouse.x + 'px; \
            top:' + mouse.y + 'px;'

        translate(face, dx, dy);

        for (var i = 0; i < ears.length; i++) {
            translate(ears[i], -dx/earMoveRate, -dy/earMoveRate);
        }
        
        translate(nose, dx/noseMoveRate, dy/noseMoveRate);
    }

    window.addEventListener("mousemove", interact);
    window.addEventListener("touchmove", interact);
    window.addEventListener("resize", function () {
        center.x = window.innerWidth/2;
        center.y = window.innerHeight/2;
    });
}


$(function() {
    // 부드럽게 이동하는 메뉴
    $('#gnb > li > a').click(function() {
        var target = $(this).attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000);
    });


    $('#slide > li > a').click(function() {
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
   

    // 로고 물방울
    var bArray = [];
    var sArray = [4,6,8,10];
     
    for (var i = 0; i < $('#title').width(); i++) {
        bArray.push(i);
    }
         
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
     
    setInterval(() => {
        var size = randomValue(sArray);
        $('#title').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
            
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function() {
            $(this).remove()
        }
        );
    }, 350);
    
    // 모바일 메뉴
    $("#slide-open").click(() => {
        $("#slide").slideToggle(500, 'swing');
    });

    $("#slide-open").click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#slide").removeClass('on');
        } else {
            $(this).addClass('active');
            $("#slide").addClass('on');
        }
    });

    // 모바일 슬라이드
    setInterval(function() {
        $("#portfolio-slide-m").animate({left:"-200px"}, 700, function() {
            $("#portfolio-slide-m").append($("#portfolio-slide-m li:first-child")).css({left:0});
        });
    }, 4000);

    // pc 슬라이드
    setInterval(function() {
        $("#portfolio-slide").animate({left:"-200px"}, 700, function() {
            $("#portfolio-slide").append($("#portfolio-slide li:first-child")).css({left:0});
        });
    }, 4000);

    // skill 모달창
    $(".skills").on("click", function() {
        $(".popup-overlay, .popup-content").addClass("active");
        $(".popup-title").text($(this).children(".hidden-title").text());
        $(".popup-text").text($(this).children(".hidden-text").text());
    });
      
    $(".close, .popup-overlay").on("click", function() {
        $(".popup-overlay, .popup-content").removeClass("active");
    });
});


