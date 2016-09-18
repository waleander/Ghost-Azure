"use strict"

$(document).ready(function () {
    if ($(window).width() > 1200) {
        var h = $(document).innerHeight();

        $('.sidebar-right').css({
            height: h
        });
    }

    //$(function () {
    //    var $article = $('post-content');
    //
    //    $article.each(function () {
    //
    //        $(this).readingTime({
    //            readingTimeTarget: $(this).closest('article').find('.eta'),
    //            wordCountTarget: $(this).closest('article').find('.word-count'),
    //            wordsPerMinute: 275,
    //            round: false,
    //            lang: 'en',
    //            success: function () {
    //                console.log('It worked!');
    //            },
    //            error: function (message) {
    //                console.log(message);
    //                $article.find('.reading-time').remove();
    //            }
    //        });
    //    });
    //
    //});

    var $index = $('article.index');

    $index.on('mouseover', function () {
        $(this).css({
                background: '#E0F8EC',
                opacity: '0.8'
            })
            .fadeIn('slow', 0.30);
    });

    $index.on('click', function () {
        $(this).css({
                background: '#EEEBE4 ',
                opacity: '0.8'
            })
            .fadeIn('slow', 0.30);
    });

    $index.on('mouseout', function () {
        $(this).css({
                background: 'inherit',
                opacity: '1.0'
            })
            .fadeOut('slow', 0.30);
    });

    var $lastp = $(".post-content #pcontent > p:last-child");
    $lastp.append($("<span>").text(" ..."));


    var expanded = true;
    var parentWidth = $(".sdblt-container").outerWidth();
    var $main = $("#main");
    var $sdb = $(".sdblt-container");
    var $parent = $(".sdblt-container");

    var toggleMain = function () {
        if ($("div.main-wrapper").hasClass("col-lg-7")) {
            $main.addClass("col-lg-9");
            $main.removeClass("col-lg-7");
        } 
         
        else {
            $main.addClass("col-lg-7");
            $main.removeClass("col-lg-9");
        }
        
        if ($("div.main-wrapper").hasClass("col-md-7")) {
            $main.addClass("col-md-9");
            $main.removeClass("col-md-7");
        } 
        else {
            $main.addClass("col-md-7");
            $main.removeClass("col-md-9");
        }

    };

    var animate = function () {
        if (expanded) {
            $parent.animate({}, 200, function () {


                $sdb.removeClass("col-lg-3");
                $sdb.addClass("col-lg-1");
                $sdb.removeClass("col-md-3");
                $sdb.addClass("col-md-1");
                toggleMain();
                $sdb.find(".blog-description").hide();
                $sdb.find(".blog-description").hide();
                $sdb.find(".cp-right").hide();
                $(".toggle-icon").hide();
                $sdb.find("#sidebar-links").css("margin-left", "30px");
                $(".blog-title").hide();
                $(".blog-img").hide();
                expanded = false;
                return false;
            });

        } else {
            $parent.animate({}, 1000, "linear", function () {

                $sdb.removeClass("col-lg-1");
                $sdb.addClass("col-lg-3");
                $sdb.removeClass("col-md-1");
                $sdb.addClass("col-md-3");
                toggleMain();
                $sdb.find(".blog-description").show();
                $sdb.find(".cp-right").show();
                $(".toggle-icon").show();
                $(".blog-title").show();
                $(".blog-img").show();
                expanded = true;
                return false;
            });

        }
    };

    $(".sdb-collapse").bind("click", function (event) {
        var el1 = $(".pan1");
        var el2 = $(".pan2");
        showHide(el1, el2);
        animate();
        return false;

    });

    $("body").find(".sdb-collapse").triggerHandler("click");



    //$('div')
    //    .addClass('my-class')
    //    .find('img')
    //    .addClass('red-border')
    //    .addBack()
    //    .addClass('opaque');

    function showHide(pan1, pan2) {

        if (pan1.is(":visible") && pan2.is(":visible")) {
            pan2.hide();
            pan1.show();
        } else if (pan1.is(":hidden") && pan2.is(":visible")) {
            pan1.show();
            pan2.hide();
        } else if (pan1.is(":visible") && pan2.is(":hidden")) {
            pan2.show();
            pan1.hide();
        } else {
            pan2.show();
            pan1.hide();
        }
    }

});

$(".sdb-collapse").trigger("click");
