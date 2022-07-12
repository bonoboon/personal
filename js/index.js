window.onload = function() {
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

    const scrollContainer = document.querySelector('.portfolio-flex');

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}


// 부드럽게 이동하는 메뉴
$(function() {
    $('#gnb > li > a').click(function() {
        var target = $(this).attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000);
    })
})

// 퍼센트
$(function() {
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
});