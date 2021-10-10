
$(document).ready(function() {
    
/*  ======================================================================
    MOBILE MENU
========================================================================== */
    $('.js-mb-menu-open').on('click', function(){
        $('.responsive-menu').addClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 1});
        $('.responsive-overlay').addClass('active');
        $('body').addClass('not-scroll');
        $('#cd-vertical-nav').show();
    });

    $('.responsive-overlay').on('click', function(){
        $('.responsive-menu').removeClass('active'); 
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0});
        $('body').removeClass('not-scroll');
        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });

    $('.responsive-menu__close').on('click', function(){
        $('.responsive-menu').removeClass('active'); 
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0})
        $('body').removeClass('not-scroll');
        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });

/*  ======================================================================
    OPEN SUB MENU
========================================================================== */
    $('.mb-menu__open-sub-menu').on('click', function(){
        var mb_item = $(this).parent();
        if (!mb_item.hasClass('active')){
            mb_item.addClass('active');
            $(this).next('.mb-sub-menu').slideDown(200);
        }
        else {
            mb_item.removeClass('active');
            $(this).next('.mb-sub-menu').slideUp(200);
        }
    });

    $('.js-mb-open-sub-menu').on('click', function(e){
        e.preventDefault();
        var mb_item = $(this).parent();
        if (!mb_item.hasClass('active')){
            mb_item.addClass('active');
            $(this).next().next('.mb-sub-menu').slideDown(200);
        }
        else {
            mb_item.removeClass('active');
            $(this).next().next('.mb-sub-menu').slideUp(200);
        }
    });


    $('.select').find('.select__title').on('click', function(e){
        var title  = $(this), 
            select = $(this).parent(), 
            list   = title.next('.select__list');

        if( title.hasClass('active') ){
            title.removeClass('active');
            list.removeClass('active');
            select.removeClass('active');
            return false;
        } 
        else {
            $('.select__title').removeClass('active');
            $('.select__list').removeClass('active');
            $('.select').removeClass('active');
            title.addClass('active');
            list.addClass('active');
            select.addClass('active');
            return false;
        }
    });

    $(document).click(function(e){
        $('.select__title').removeClass('active');
        $('.select__list').removeClass('active');
        $('.select').removeClass('active');
    });

    $('.select__item').on('click', function(e){
        var item  = $(this), 
            title = item.parent().prev('.select__title'),
            input = item.parent().parent().find('.select__input'),
            select = title.parent();         

        if(select.attr('data-select') != undefined){
            title.removeClass().addClass('select__title').addClass(item.data('class'));
        }; 

        $(this).addClass('active').siblings().removeClass('active');

        if (!item.parent().hasClass('js-no-select')) {
            title.text(item.text());
            input.val(item.text());
        }
        item.parent().removeClass('active');  
    });

    $('.select__title').on('mousedown', function(e){
        e.preventDefault();
    });

    $('.select__title').on('selectstart', function(e){
        e.preventDefault();
    });
})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 5) {
        //clearHeader, not clearheader - caps H
        $(".header-responsive").addClass("borderHeader");
    } else {
        $(".header-responsive").removeClass("borderHeader");
    }
});

var lastScrollTop = 0;
// $(window).scroll(function(event){
//     var st = $(this).scrollTop();

//     if (st > lastScrollTop || st === 0){
//         $('.logotype').removeClass("UpImg");
//         $('.logotype').addClass("DownImg");
//     } else {
//         $('.logotype').removeClass("DownImg");
//         $('.logotype').addClass("UpImg");
//     }
//     lastScrollTop = st;
// });

$(document).ready(function(){
    $('').on('hover',function(){;
        $('.').show();
        console.log('1');
    })
});

jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
        $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            }else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }
});

$(document).ready(function(){
    $('#cd-vertical-nav ul li a').on('click', function(){
        $('.responsive-menu').removeClass('active');
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0})
        $('body').removeClass('not-scroll');

        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });
});

/* form */

$(document).ready(function(){
    
    /* Modal styles, show & hide*/ 
    $('.callback-button').on('click', function(){
        $('.mb-modal').show();
        $('.mb-modal__overlay').show();
    });
    $('.mb-modal__close').on('click', function(){
        $('.mb-modal').hide();
        $('.mb-modal__overlay').hide();
    });
    $('.mb-modal__overlay').on('click', function(){
        $('.mb-modal').hide();
        $(this).hide();
    });

    /* Modal Axaj to php */
    $('#form').submit(function (event){
        event.preventDefault();
        var data_form = $('form').serialize();

        $.ajax({
            url: 'ajax/mail.php',
            type: 'post',
            // dataType: 'json',
            data: data_form,
            success: function(data) {
                $('.mb-modal-good').show();
                setTimeout(function(){
                    $('.mb-modal').hide();
                    $('.mb-modal__overlay').hide();
                    $('.mb-modal-good').hide();
                    $("#form")[0].reset();
                }, 1000);
            }
        });
    }
    );
})









