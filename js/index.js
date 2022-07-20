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
    
    // 고래
    const header = document.querySelector("header");

    header.addEventListener('mouseover', (e) => {
        e.target.classList.add('on');
    })

    header.addEventListener('mouseout', (e) => {
        e.target.classList.remove('on');
    }) 
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
        }, 3000, function() {
            $(this).remove()
        }
        );
    }, 350);
    
    // 모바일 메뉴 슬라이드
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

    // 모달창
    $(".skills").on("click", function() {
        const hiddenTitle = $(this).children(".hidden-title").text();
        const hiddenText = $(this).children(".hidden-text").text();
        $(".popup-overlay, .popup-content").addClass("active");
        $(".popup-title").text(hiddenTitle);
        $(".popup-text").text(hiddenText);
    });
      
    $(".close, .popup-overlay").on("click", function() {
        $(".popup-overlay, .popup-content").removeClass("active");
    });

    // 모바일 메뉴
    $("#slide-open").click(() => {
        $("#slide").slideToggle(500, 'swing');
    })
});


