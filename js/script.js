/* 비쥬얼 슬라이드 */
const vSlideBox=$('.vSlideBox');
const vSlide=$('.vSlide');
let VSsetInterval;
const vprevBtn=$('.slide-left-Btn');
const vnextBtn=$('.slide-right-Btn');
let j = 0; //대문 슬라이드 번호(vSlide번호)

$('.slide-left-Btn,.slide-right-Btn').on('mouseover',function(){
    clearInterval(VSsetInterval);
});
$('.slide-left-Btn,.slide-right-Btn').on('mouseout',function(){
    vsSlide();
})
//visual slide
function vsSlide(){
    vSlide[j].classList.add('active');
    VSsetInterval=setInterval(function(){
        vPlain();
    }, 5000);
}
vsSlide();

function vPlain(){
    vSlide.animate(500,function(){
            vSlide[j].classList.remove('active');
    });
    j==2 ? j=0 : j++;
    vSlide[j].classList.add('active');
}

// visual next버튼//

vnextBtn.click(function(){
    vPlain(); 
});


// visual prev버튼//
vprevBtn.click(function(){
    vSlide.animate(500,function(){
        vSlide[j].classList.remove('active');
    })
    j==0? j=2 : j--;
    vSlide[j].classList.add('active');
});

//visual tab
const tabHead=$('.tab>li');
const tabBody=$('.con_wrap');
let vTabNum=0;
const th=document.getElementsByClassName('test')
const tb=document.getElementsByClassName('con_wrap')
console.log(th)
// li 클릭시 기존 li con 액티브 리무브, 클릭한 li와 con 액티브 활성화
for(let i=0;i<th.length;i++){
    th[i].addEventListener('click',function(e){
        e.preventDefault();
        th[vTabNum].classList.remove('active')
        tb[vTabNum].classList.remove('active')
        vTabNum=i
        th[i].classList.add('active')
        tb[i].classList.add('active')
    })
}


/* tabHead.click(function(){
    let i = $(this).index();
    tabHead[vTabNum].classList.remove('active');
    tabBody[vTabNum].classList.remove('active');
    vTabNum=i
    tabHead[i].classList.add('active')
    tabBody[i].classList.add('active')
}) */


/* 
document.querySelector(".test").addEventListener('click', function(){
    console.log("hi");
})
 */




/* esection1 슬라이드 */

const slideBanner=$('.slidsbox .sildslist'),
      slideList=$('.slidsbox .sildslist li'),
      prevBtn=$('.prev'),
      nextBtn=$('.next');
let slideWidth=slideList.width();
let setIntervalId;
bannerSlide();
function bannerSlide(){
    setIntervalId=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth+60)},300, function(){
            $('.slidsbox .sildslist li:first').insertAfter('.slidsbox .sildslist li:last');
            slideBanner.css({left:0})
        })
    },5000)
}

$('.prev, .next, .slidsbox').on('mouseover',function(){
    clearInterval(setIntervalId);
});
$('.prev, .next, .slidsbox').on('mouseout',function(){
    bannerSlide();
})

function rightBtn(){
    slideBanner.stop().animate({left:-(slideWidth+60)},300, function(){
        $('.slidsbox .sildslist li:first').insertAfter('.slidsbox .sildslist li:last');
        slideBanner.css({left:0})
    })
}
function leftBtn(){
    $('.slidsbox .sildslist li:last').insertBefore('.slidsbox .sildslist li:first');
    slideBanner.css({left:-(slideWidth+60)}).stop().animate({left:0},300)
}
prevBtn.click(function(){
    leftBtn();
});
nextBtn.click(function(){
    rightBtn();
});

//esection2 tab
const es2TabHead=document.getElementsByClassName('es2_notice_li')
const es2TabBody=document.getElementsByClassName('notice_cont')
let es2TabNum=0;

for(let i=0;i<es2TabHead.length;i++){
    es2TabHead[i].addEventListener('click',function(e){
        e.preventDefault()
        es2TabHead[es2TabNum].classList.remove('active')
        es2TabNum=i
        es2TabHead[es2TabNum].classList.add('active')
    })
}

//esection4 slide
const es4Slidebanner=$('.slids_list')
const es4SlideList=$('.es4slide')

const es4TxtBox=document.getElementsByClassName('es4textbox')
const es4prev=document.getElementsByClassName('es4prev')
const es4next=document.getElementsByClassName('es4next')

let es4SlideWidth=es4SlideList.width()
let es4setup;
let es4Num=0;

function se4NextBtn(){
    es4TxtBox[es4Num].classList.remove('active');
    es4Num ==4? es4Num=0 : es4Num++;
    es4TxtBox[es4Num].classList.add('active');
}
function se4PrevBtn(){
    es4TxtBox[es4Num].classList.remove('active');
    es4Num ==0? es4Num=4 : es4Num--;
    es4TxtBox[es4Num].classList.add('active');
}
es4next[0].addEventListener('click',function(){
    se4NextBtn()
    es4Slidebanner.stop().animate({left:-(es4SlideWidth+50)},500,function(){
        $('.slids_list li:first').insertAfter('.slids_list li:last')
        es4Slidebanner.css({left:0})
    })
    
})
es4prev[0].addEventListener('click',function(){
    se4PrevBtn()
    $('.slids_list li:last').insertBefore('.slids_list li:first');
    es4Slidebanner.css({left:-(es4SlideWidth+50)}).stop().animate({left:0},300)
})

function es4BannerSlide(){
    es4setup=setInterval(function(){
        es4Slidebanner.stop().animate({left:-(es4SlideWidth+50)},300,function(){
            $('.slids_list li:first').css({opacity:'0'})
            $('.slids_list li:first').insertAfter('.slids_list li:last')
            $('.slids_list li:last').css({opacity:'1'})
            es4Slidebanner.css({left:0})
        })
        se4NextBtn()
    },3000)
}
es4BannerSlide()
$('.es4next, .es4prev').on('mouseover',function(){
    clearInterval(es4setup);
});
$('.es4next, .es4prev').on('mouseout',function(){
    es4BannerSlide();
})

//footer relate-site toggle

const fLinkMenu=document.querySelector('.linkList1')
const fLink=document.querySelector('.site-Lilk1')
const fLinkMenu1=document.querySelector('.linkList2')
const fLink1=document.querySelector('.site-Lilk2')

fLink.addEventListener('click',function(){
    fLinkMenu.classList.toggle('active')
    fLink.classList.toggle('active')
    return false
})
fLink1.addEventListener('click',function(){
    fLinkMenu1.classList.toggle('active')
    fLink1.classList.toggle('active')
    return false
})