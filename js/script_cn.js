//slick slider
$(document).ready(function(){
    $('.slider1').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeight: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    });

    $('.slider2').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '100px',
        adaptiveHeight: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    })

    $('.slider3').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '20px',
        adaptiveHeight: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    });
    $('.slider4').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
    });
/*    $('.nextButton').on('click', function(){
        $('.slider').slick('slickNext');
    });

    $('.prevButton').on('click', function(){
        $('.slider').slick('slickPrev');
    });*/
});

$(document).ready(function() {
    $('.story_nav_arrow').mouseenter(function() {
        $('.story_nav').toggleClass('active');
        $(this).toggleClass('arrow-out');
    });

    $('.story_nav').mouseleave(function() {
        $(this).removeClass('active');
    });

    $('.story_nav').mouseenter(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
    });
});

$(document).ready(function() {
    $('.tutor_nav_arrow').mouseenter(function() {
        $('.tutor_nav').toggleClass('active');
        $(this).toggleClass('arrow-out');
    });

    $('.tutor_nav').mouseleave(function() {
        $(this).removeClass('active');
    });

    $('.tutor_nav').mouseenter(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
    });
});

var hero_cards_img_arr = [
    "image/calamity1.png",
    "image/angel1.png",
    "image/corrad1.png",
    "image/leiter1.png",
    "image/andymea1.png",
    "image/ekasia1.png",
    "image/hulse1.png",
    "image/falcon1.png"
];

var hero_cards_avatar_arr =[
    "image/calamity2.png",
    "image/angel2.png",
    "image/corrad2.png",
    "image/leiter2.png",
    "image/andymea2.png",
    "image/ekasia2.png",
    "image/hulse2.png",
    "image/falcon2.png"
];

var hero_name_arr = [
    "惡魔使者—萬劫",
    "人造天使—安潔爾",
    "光啟者——柯雷德",
    "鋼鐵戰錘—萊特",
    "大魔導師—安迪米亞",
    "聖女—艾卡西亞",
    "戰爭之影—赫爾斯",
    "主宰—獵鷹"
];

var atk_arr = [
    "0","5","?","5","3","3","4","5"
];

var hp_arr = [
    "40","25","6","35","20","30","25","25"
];

var mr_arr = [
    "3","4","3","2","3","3","5","4"
];

var ar_arr = [
    "1","1","1","1","3","1","1","2"
];

var fund_arr = [
    "500","400","500","700","400","500","300","450"
];

var a_skill_name_arr = [
    "魔能爆發","神罰","機甲改良","烈焰衝鋒","爆裂魔法","神之贈禮","群獸增幅","急襲之影"
];

var a_skill_arr = [
    ": 此英雄此回合獲得移動距離+3，以及攻擊範圍+1，並且此英雄能不用消耗行動點數再次行動一次 冷卻:3回合",
    ": 將5攻擊範圍內一個敵軍單位移動到此單位的攻擊範圍內並對其攻擊，並使其下回合無法行動 冷卻:3回合",
    ": 增加自身5點生命上限 冷卻:2回合",
    ": 向一個直線方向衝刺5格(不能穿過山脈，但是能無視湖泊限制)，能在移動後立即觸發地形效果，並對途經的敵方單位 造成5點傷害 冷卻:3回合",
    ": 對任一單位造成3點傷害  冷卻:2回合",
    ": 玩家能夠立即抽取一張寶藏卡加入手卡，若為陷阱卡，則不會觸發其效果並將其洗回卡組  冷卻:3回合",
    ": 這個回合自己所有單位的移動範圍+2並使他們本回合攻擊造成的傷害+ 冷卻:3回合",
    ": 此英雄立即傳送至4個攻擊範圍內一個敵方單位旁邊並造成5點傷害(無法被反擊) 冷卻:3回合"
];

var p_skill_name1_arr = [
    "力量轉化","魔法動能光翼","修補裝甲","守護者","魔術精通","慈悲守護","叢林之王","鋼鐵之翼"
];

var p_skill1_arr = [
    ": 回合結束時，此英雄生命值-3，但攻擊力+3",
    ": 此英雄視為空中單位，能夠無視地形限制移動",
    ": 回合結束時自身2個攻擊範圍內的己方單位以及自身回復3點生命值",
    ": 自身2個攻擊範圍內的己方單位以及自身受到的傷害-1",
    ": 此英雄使用的主動技能或者使用魔法卡造成的傷害+2",
    ": 若2個攻擊範圍內有己方單位被攻擊，則此英雄代替該小隊進行戰鬥",
    ": 對處於樹林地形的單位攻擊時，敵軍無法受到樹林地形的減傷加成",
    ": 此英雄視為空中單位，能夠無視地形限制移動"
];

var p_skill_name2_arr = [
    "生命汲取","動能補充","攻守合一","","守護秘法","聖光加護","自然之力","無情收割"
];

var p_skill2_arr = [
    ": 此英雄擊殺任意單位時，每擊殺一個單位，回復2點生命值(不能超過生命上限)",
    ": 到達寶藏點後， 能夠無需使用行動點數再次移動(不能攻擊，以及每回合只能觸發一次)",
    ": 此英雄的攻擊力等於其生命值，並會隨著其生命值而變化",
    "",
    ": 此英雄不會受到來自其他玩家使用的魔法/陷阱/英雄技能造成的負面效果影響(依然會收到傷害)",
    ": 自身以及所有己方單位從裝備獲得的攻擊力/生命值翻倍",
    ": 回合結束時若處於樹林地形，則會回復2點生命",
    ": 若在自己回合內，此英雄擊殺了任意單位，便能回復一點行動點，並且此英雄能再次行動(每回合只能觸發一次)"
];

var l_skill_name1_arr = [
    "邪惡獻祭",
    "粒子力場",
    "裝甲部隊",
    "坦克精通",
    "魔法增幅",
    "聖女的威望",
    "獸之號令",
    "絕對空域"
];

var l_skill1_arr = [
    ": 此單位招募任何士兵單位時所需資金翻倍，但所有士兵單位的初始攻擊力和生命值翻倍",
    ": 此單位率領的空兵單位受到的傷害-1",
    ": 此英雄率領的步兵以及騎兵單位攻擊力+2，以及生命值+2，但是他們以及此英雄無法受到醫療兵以及魔法/裝備的回復生命效果",
    ": 自身的坦克單位攻擊力+1以及生命值+3",
    ": 此英雄率領的步兵，射手單位攻擊力+1",
    ": 此英雄率領的步兵，騎兵，醫療兵單位生命值+2",
    ": 招募騎兵的所需資金減50",
    ": 此英雄只能率領空兵，但是招募空兵的所需資金減50以及率領的空兵單位攻擊力+2以及生命值+1"
];

var l_skill_name2_arr = [
    "",
    "迅捷行動",
    "",
    "腳踏實地與格鬥狂熱",
    "魔法導師",
    "光之魔法",
    "馭獸精通",
    ""
];

var l_skill2_arr = [
    "",
    ": 此單位率領的士兵移動範圍+1",
    "",
    ": 無法率領空兵和射手",
    ": 招募醫療兵的所需資金減半",
    ": 此英雄率領的醫療兵單位治療量+1，並且會獲得攻擊力，其攻擊力等於其治療量，且其治療量會隨攻擊力上升而上升",
    ": 此英雄率領的騎兵單位攻擊力+2",
    ""
];


$(document).on('click', '.avatar', function() {
    var avatarImg = $(this).find('img');
    if (avatarImg.length > 0) {
        var avatarSrc = avatarImg.attr('src');
        if (avatarSrc) {
            avatarSrc = avatarSrc.trim();
            var index = -1;
            for (var i = 0; i < hero_cards_avatar_arr.length; i++) {
                if (hero_cards_avatar_arr[i].trim() === avatarSrc) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                $('.selected').removeClass('selected');
                $('.displayed_hero').attr("src", hero_cards_img_arr[index]);
                $('.hero_name').html(hero_name_arr[index]);
                $('.atk').html(atk_arr[index]);
                $('.hp').html(hp_arr[index]);
                $('.mr').html(mr_arr[index]);
                $('.ar').html(ar_arr[index]);
                $('.fund').html(fund_arr[index]);
                $('.A_skill_name').html(a_skill_name_arr[index]);
                $('.A_skill').html(a_skill_arr[index]);
                $('.P_skill_name1').html(p_skill_name1_arr[index]);
                $('.P_skill1').html(p_skill1_arr[index]);
                $('.P_skill_name2').html(p_skill_name2_arr[index]);
                $('.P_skill2').html(p_skill2_arr[index]);
                $('.L_skill_name1').html(l_skill_name1_arr[index]);
                $('.L_skill1').html(l_skill1_arr[index]);
                $('.L_skill_name2').html(l_skill_name2_arr[index]);
                $('.L_skill2').html(l_skill2_arr[index]);
                $(this).find('.avatar_img').addClass('selected');
            }
        }
    }
});


var soldier_cards_avatar_arr = [
    "image/infantry.png",
    "image/rider.png",
    "image/sniper.png",
    "image/medic.png",
    "image/airforce.png",
    "image/tank.png",
];

var soldier_cards_img_arr = [
    "image/infantry_card.png",
    "image/rider_card.png",
    "image/sniper_card.png",
    "image/medic_card.png",
    "image/airforce_card.png",
    "image/tank_card.png",
];

$(document).on('click', '.avatar_soldier', function() {
    var soldieravatarImg = $(this).find('img');
    if (soldieravatarImg.length > 0) {
        var soldieravatarSrc = soldieravatarImg.attr('src');
        if (soldieravatarSrc) {
            soldieravatarSrc = soldieravatarSrc.trim();
            var index = -1;
            for (var i = 0; i < soldier_cards_avatar_arr.length; i++) {
                if (soldier_cards_avatar_arr[i].trim() === soldieravatarSrc) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                $('.selected').removeClass('selected');
                $('.displayed_soldier').attr("src", soldier_cards_img_arr[index]);
                $(this).find('.avatar_img').addClass('selected');
            }
        }
    }
});



$(document).ready(function(){
    var nav = $('.nav1');
    var banner = $('.banner');
    var bannerHeight = banner.outerHeight();

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > bannerHeight) {
            nav.addClass('fixed-nav');
        } else {
            nav.removeClass('fixed-nav');
        }
    });
});
