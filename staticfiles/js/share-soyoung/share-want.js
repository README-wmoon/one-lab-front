


$(document).ready(function() {
    $('.announce-button-icon').on("click", function(e) {
        var container = $('.announce-list-container');
        container.toggleClass('active');
    });
});


$(".sidebar-menu-item-nav-link").on("click", function(e) {
    e.preventDefault();
    if($('.sidebar-reward-sublist-container').css('display') == 'block'){
        $('.sidebar-reward-sublist-container').css("display", "none");
    }else {
        $(".sidebar-reward-sublist-container").css("display", "block");
    }
})

$(document).ready(function(){
    $("a.sidebar-menu-item-nav-link").on("click", function(e){
        e.preventDefault();
        var svgIcon = $(this).find("svg.sidebar-menu-open-icon.active");
        
        if (svgIcon.length > 0) {
            var currentRotation = getRotationDegrees(svgIcon);
            console.log(currentRotation)
            if (currentRotation === 90) {
                svgIcon.css('transform', 'rotate(-90deg)');
                
            } else {
                svgIcon.css('transform', 'rotate(90deg)');
            }
        }
    });
});

// 회전각을 구하는 함수
function getRotationDegrees(element) {
    var transform = element.css('transform');
    if (transform === 'none') return 0;

    var values = transform.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.atan2(b, a);
    var degrees = angle * (180 / Math.PI);

    return (degrees < 0) ? degrees + 360 : degrees;
}



$("a.sidebar-sublist-nav-link").on("click", function(e) {
    // e.preventDefault();
    var notActive = $("a.sidebar-sublist-nav-link").not(".sublist-active");
    var active = $("a.sidebar-sublist-nav-link.sublist-active");

    if (active.length === 0) {
        // 현재 active 클래스가 없으면 클래스를 추가
        notActive.addClass("sublist-active");
    } else {
        // 현재 active 클래스가 있으면 모든 요소에서 클래스를 제거한 후 현재 요소에 추가
        $("a.sidebar-sublist-nav-link").removeClass("sublist-active");
        $(this).addClass("sublist-active");
    }
});


$(document).ready(function(){
    $("li.category-node-container").on("click", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var categoryNodeItems = clickedElement.find('ul.category-node-items');
        var expandBtn = clickedElement.find(".category-node-expand-btn");

        // 다른 모든 li의 category-node-items를 숨김
        $("li.category-node-container").not(clickedElement).find('ul.category-node-items').slideUp(150);
        
        // 다른 모든 li의 rotate 클래스 제거
        $("li.category-node-container").not(clickedElement).find(".category-node-expand-btn").removeClass('rotate');

        // 현재 클릭된 li에 대해 작업 수행

        // category-node-expand-btn에 rotate 클래스를 토글
        expandBtn.toggleClass('rotate');

        // 선택된 li에 대한 스타일링
        clickedElement.toggleClass('selected');

        // ul.category-node-items의 토글 효과 적용
        categoryNodeItems.slideToggle(150);
    });
});


$(document).ready(function(){
    $("li.category-node-container").on("click", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var nodeLabel = clickedElement.find('span.category-node-label');

        // 다른 모든 li의 category-node-items를 숨김
        $("li.category-node-container").not(clickedElement).find('span.category-node-label').removeClass('active');

        nodeLabel.toggleClass('active')
    });
});

$(document).ready(function(){
    $("li.category-node-container").on("mouseover", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var nodeLabel = clickedElement.find('span.category-node-label');

        nodeLabel.css('font-weight', '700')
    });
});


$(document).ready(function(){
    $("li.category-node-container").on("mouseout", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var nodeLabel = clickedElement.find('span.category-node-label');

        nodeLabel.css('font-weight', '400')
    });
});

$(document).ready(function(){
    $("li.sub-category-node-container").on("mouseover", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var nodeLabel = clickedElement.find('span.sub-category-node-label');

        nodeLabel.css('font-weight', '700')
    });
});


$(document).ready(function(){
    $("li.sub-category-node-container").on("mouseout", function(e) {
        // 현재 클릭된 li.category-node-container에 대해 작업을 수행
        var clickedElement = $(this);
        var nodeLabel = clickedElement.find('span.sub-category-node-label');

        nodeLabel.css('font-weight', '400')
    });
});


// 모달창 나타나고 없어지기
$("button.modal-close-icon-wrapper").on("click", function(e) {
    $(".modal").css('display', 'none')
})

$("button.category-select-btn").on("click", function(e) {
    e.preventDefault();
    $(".modal").css('display', 'block')
})


$("li.sub-category-node-container").on("click", function(e) {
    $(".modal").css('display', 'none')
});



// 프로젝트 유형 선택 시 색과 안내 멘트 속성
$("label.radio").on("click", function(e) {
    var clickedBtn = $(this);
    var activeBtn = clickedBtn.find('span.radio-icon');
    var moreInfo = clickedBtn.find('span.radios-more-info')

    // activeBtn.toggleClass('active')
    // moreInfo.css('display', 'block')

    $("label.radio").not(clickedBtn).find('span.radio-icon').removeClass('active');
    $("label.radio").not(clickedBtn).find('span.radios-more-info').css('display', 'none');

    $("section.section-container.project-intro").css('display', 'block')
    if(activeBtn.hasClass('active')){
    }else {
        activeBtn.toggleClass('active')
        moreInfo.css('display', 'block')
    }
})

// 메이커 유형 선택
$("button.maker-type-select-btn").on("click", function(e) {
    $("button.maker-type-select-btn").not($(this)).removeClass('active');
    $(this).toggleClass('active')
})

$(".input-text").on("focus", function(e) {
    $(this).css('border-color', '#00c4c4')
})

$(document).ready(function() {
    // 파일 업로드 버튼이 클릭되었을 때의 이벤트 처리
    $(".reward-item-add-btn-box").on("click", function() {
        // 파일 선택을 위한 input 요소 생성
        var fileInput = $('<input type="file">');

        // 파일이 선택되었을 때의 이벤트 처리
        fileInput.on("change", function() {
            // 선택된 파일 객체
            var selectedFile = this.files[0];

            // 여기에 파일 업로드 로직을 추가하면 됩니다.
            console.log("선택된 파일:", selectedFile);
            
            // 여기에 선택된 파일을 업로드하는 코드를 추가하면 됩니다.
        });

        // 파일 선택 창을 열기
        fileInput.click();
    });
});