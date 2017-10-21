$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // var setFooterPositionInterval;
    // var contentCoor;
    // var footerCoor;

    // ----------------------------

    var screenParam;
    var indexElem;

    // ----------------------------

    // getFooterPosition();
    getAdaptivePositionElements();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // if($(".footer").length > 0) {

        //     $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // }

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getAdaptivePositionElements();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

    });


    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".resp-nav").is(":hidden") ) {

                $(this).addClass("active");
                $(".resp-nav").fadeIn(300);                

            } else {

                $(".resp-nav").fadeOut(300);
                $(this).removeClass("active");

            }            

        });

    });


    // function getFooterPosition() {

    //     $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //     if($(".footer").length > 0) {

    //         $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    //         setFooterPositionInterval = setInterval(function() {

    //             contentCoor = $(".content").offset().top + $(".content").height();
    //             footerCoor = $(".footer").offset().top;

    //             if( contentCoor != footerCoor ) {

    //                 $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //                 $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    //                 clearInterval(setFooterPositionInterval);

    //             }

    //         }, 35);

    //     }

    // }

    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                screenParam = parseInt( $(this).attr("data-min-screen") );

                indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }



});
