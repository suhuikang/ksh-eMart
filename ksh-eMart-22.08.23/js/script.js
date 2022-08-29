$(function(){
    // innerfade
    // 페이드인아웃 - 플러그인 
    // inner-fade 라는 클래스가 들어가있는 이미지들을
    // 페이드로 2초동안 돌려라!!
    $('.inner-fade').innerfade({
        animationtype: 'fade',
        timeout: 2000 // 2초
    });

    //레이어팝업
    $('.layerPopup').on('click',function(){
        $('#popup').fadeIn();
    });
    $('.close').on('click',function(){
        $('#popup').fadeOut();
    });
    //.on():이벤트 등록 메서드
});