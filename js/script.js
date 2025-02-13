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
    "Calamity",
    "Angel",
    "Corrad",
    "Leiter",
    "Andymea",
    "Ekasia",
    "Hulse",
    "Falcon"
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
    "Dark Infusion","Divine Judgment","Mechanical Enhancement","Purgatory Dash","SuperNova Explosive","Gift from the Divine","Beastial Augmentation","Shadow Assault"
];

var a_skill_arr = [
    ": Empowers the hero with dark energy, granting 3 range of moving and extending range of attack by 1 for this turn. Additionally, the hero can take an extra action without spending action points. Cooldown: 3 turns.",
    ": Move an enemy unit within 5 range of this unit into its attack range and attack it, rendering it unable to act next turn. Cooldown: 3 turns.",
    ": Increase own maximum HP by 5. Cooldown: 2 turns.",
    ": Dash forward in a straight line for 5 squares (cannot pass through mountains, but can ignore lake restrictions), triggering ttreasure point or supply point immediately after moving and dealing 5 damage to enemy units passed through. Cooldown: 3 turns.",
    ": Deals 3 damage to any unit. Cooldown: 2 turns.",
    ": Allows the player to immediately draw one treasure card to add to their hand. If it's a trap card, its effect will not be triggered, and it will be shuffled back into the deck. Cooldown: 3 turns.",
    ": Increases the movement range of all own units by 2 for this turn and enhances their damage dealt this turn. Cooldown: 3 turns.",
    ": Instantly teleports this hero adjacent to an enemy unit within 4 attack range and deals 5 damage (cannot be countered). Cooldown: 3 turns."
];

var p_skill_name1_arr = [
    "Soul Surge","Mag-Driven Wings","Armor Repair","Guardian","Magic Proficiency","Merciful Guardian","King of the Jungle","Steel Wings"
];

var p_skill1_arr = [
    ": Sacrifices 3 HP at the end of each turn to gain ATK by 3.",
    ": This hero is treated as an airforce unit, able to move without terrain restrictions.",
    ": At the end of each turn, heal 3 HP for friendly units within 2 range of self. (including this hero)",
    ": Reduce damage taken by friendly units within 2 range of self by 1.",
    ": Damage dealt by active skills used by this hero or by magic cards is increased by 2.",
    ": If a friendly unit within 2 attack ranges is attacked, this hero will intervene and take their place in battle.",
    ": When attacking units in forest terrain, enemies cannot benefit from the damage reduction bonus of forest terrain.",
    ": This hero is treated as an airforce unit, able to move without terrain restrictions."
];

var p_skill_name2_arr = [
    "Life Leech","Kinetic Recharge","Unity of Offense and Defense","","Arcana Shelter","Radiant Blessing","Force of Nature","Ruthless Harvest"
];

var p_skill2_arr = [
    ": Heal 2 HP from each unit killed by this hero (not more than maximum HP).",
    ": Upon reaching a treasure point, can move again without spending action points (cannot attack, and can only trigger once per turn).",
    ": This hero's ATK equals its HP and fluctuates with its HP.",
    "",
    ": This hero is immune to negative effects caused by other players' use of magic/trap/hero skills (still takes damage).",
    ": Doubles the ATK/HP gained from equipment for self and all friendly units.",
    ": At the end of the turn, if in forest terrain, heal 2 HP.",
    ": If this hero kills any unit during their turn, they regain one action point, and this hero can take an additional action. (Can only trigger once per turn.)"
];

var l_skill_name1_arr = [
    "Blood Pact",
    "Particle Barrier",
    "Armored Division",
    "Tank Mastery",
    "Magic Amplification",
    "Prestige of the Saint",
    "Call of the Beasts",
    "Air Supremacy"
];

var l_skill1_arr = [
    ": Doubles the cost required to deploy a soldier unit, in exchange doubling the initial ATK and HP of all deployed soldiers.",
    ": Reduces damage taken by airforce units led by this unit by 1.",
    ": Infantry and rider units led by this hero gain +2 ATK and +2 HP, but they and this hero cannot receive healing effects from medics or magic/equipment.",
    ": Increases ATK by 1 and maximum HP by 3 for own tank units.",
    ": Increases ATK by 1 for infantry and sniper units led by this hero.",
    ": Increases the HP of infantry, riders, and medics led by this hero by 2.",
    ": Reduces the cost required to recruit riders by 50.",
    ": This hero can only lead airforce units, but the funding required to recruit airforce units is reduced by 50. Additionally, the ATK of airforce units led by this hero is increased by 2 and their HP by 1."
];

var l_skill_name2_arr = [
    "",
    "Swift Maneuvers",
    "",
    "Grounded and Combat Enthusiast",
    "Magical Mentor",
    "Light Magic",
    "Beast Mastery",
    ""
];

var l_skill2_arr = [
    "",
    ": Increases the movement range of soldier units led by this unit by 1.",
    "",
    ": Unable to lead airforce and sniper units.",
    ": Halves the cost required to recruit medics.",
    ": Increases the healing amount by 1 for medics led by this hero. Additionally, they gain an ATK stat equal to their healing amount, and the healing amount increases with the ATK stat.",
    ": Increases the ATK of rider units led by this hero by 2.",
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
