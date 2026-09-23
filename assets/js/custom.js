function checkScrollForTransparentNavbar() {
    $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[change-on-scroll]").addClass("fixed-top"), $(".navbar[change-on-scroll]").removeClass("absolute-top"), $("#mySidenav-left").addClass("sidenav-fixed"), $("#mySidenav-left").removeClass("sidenav-absolute"), $("#mySidenav-left").css("background-color", "white"), $("#mySidenav-right").css("visibility", "visible"), $("#mySidenav-right").addClass("sidenav-fixed"), $("#mySidenav-right").removeClass("sidenav-absolute"), $("#mySidenav-right").css("background-color", "white"), $(".navbar[change-on-scroll]").css("background-color", "rgba(0,0,0,1)"), $(".navbar[change-on-scroll]").removeClass("bg-transparent"), $("#mySidenav-right").css("margin-top", "100px"), $("#mySidenav-left").css("margin-top", "100px"), $("#nav-bar").removeClass("invisible-nav")) : transparent || (transparent = !0, $(".navbar[change-on-scroll]").removeClass("fixed-top"), $(".navbar[change-on-scroll]").addClass("absolute-top"), $("#mySidenav-left").addClass("sidenav-absolute"), $("#mySidenav-left").removeClass("sidenav-fixed"), $("#mySidenav-left").css("background-color", "transparent"), $("#mySidenav-right").css("visibility", "hidden"), $("#mySidenav-right").addClass("sidenav-absolute"), $("#mySidenav-right").removeClass("sidenav-fixed"), $("#mySidenav-right").css("background-color", "transparent"), $(".navbar[change-on-scroll]").css("background-color", "transparent"), $(".navbar[change-on-scroll]").addClass("bg-transparent"), $("#mySidenav-left").css("margin-top", "6%"), $("#mySidenav-right").css("margin-top", "6%"), $("#nav-bar").addClass("invisible-nav"), menuItems.removeClass("active-a").parent().removeClass("active-item"))
}

function scrollToSection(e) {
    closeNav(), 0 != $("#" + e).length && $("html, body").animate({
        scrollTop: $("#" + e).offset().top - 200
    }, 1e3)
}

function openNav() {
    $("#my-nav-toggle").css("visibility", "hidden"), document.getElementById("mySidenav").style.width = "100%"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0", $("#my-nav-toggle").css("visibility", "")
}
var transparent = !0
$(document).ready(function() {
    function e(e) {
        e.each(function() {
            var e = $(this),
                a = {}
            a.timelineWrapper = e.find(".events-wrapper"), a.eventsWrapper = a.timelineWrapper.children(".events"), a.fillingLine = a.eventsWrapper.children(".filling-line"), a.timelineEvents = a.eventsWrapper.find("a"), a.timelineDates = f(a.timelineEvents), a.eventsMinLapse = g(a.timelineDates), a.timelineNavigation = e.find(".cd-timeline-navigation"), a.eventsContent = e.children(".events-content"), l(a, C)
            var i = o(a, C)
            e.addClass("loaded"), a.timelineNavigation.on("click", ".next", function(e) {
                e.preventDefault(), t(a, i, "next")
            }), a.timelineNavigation.on("click", ".prev", function(e) {
                e.preventDefault(), t(a, i, "prev")
            }), a.eventsWrapper.on("click", "a", function(e) {
                e.preventDefault(), a.timelineEvents.removeClass("selected"), a.timelineEvents.removeClass("li-selected"), $(this).addClass("selected"), $(this).addClass("li-selected"), c($(this)), r($(this), a.fillingLine, i), d($(this), a.eventsContent)
            }), a.eventsContent.on("swipeleft", function() {
                var e = u()
                "mobile" == e && n(a, i, "next")
            }), a.eventsContent.on("swiperight", function() {
                var e = u()
                "mobile" == e && n(a, i, "prev")
            }), $(document).keyup(function(t) {
                "37" == t.which && h(e.get(0)) ? n(a, i, "prev") : "39" == t.which && h(e.get(0)) && n(a, i, "next")
            })
        })
    }

    function t(e, t, n) {
        var a = v(e.eventsWrapper),
            i = +e.timelineWrapper.css("width").replace("px", "")
        "next" == n ? s(e, a - i + C, i - t) : s(e, a + i - C)
    }

    function n(e, t, n) {
        var i = e.eventsContent.find(".selected"),
            s = "next" == n ? i.next() : i.prev()
        if (s.length > 0) {
            var l = e.eventsWrapper.find(".selected"),
                o = "next" == n ? l.parent("li").next("li").children("a") : l.parent("li").prev("li").children("a")
            r(o, e.fillingLine, t), d(o, e.eventsContent), o.addClass("selected"), o.addClass("li-selected"), l.removeClass("selected"), l.removeClass("li-selected"), c(o), a(n, o, e)
        }
    }

    function a(e, t, n) {
        var a = window.getComputedStyle(t.get(0), null),
            i = +a.getPropertyValue("left").replace("px", ""),
            r = +n.timelineWrapper.css("width").replace("px", ""),
            l = +n.eventsWrapper.css("width").replace("px", ""),
            o = v(n.eventsWrapper);
        ("next" == e && i > r - o || "prev" == e && -o > i) && s(n, -i + r / 2, r - l)
    }

    function s(e, t, n) {
        var a = e.eventsWrapper.get(0)
        t = t > 0 ? 0 : t, t = void 0 !== n && n > t ? n : t, p(a, "translateX", t + "px"), 0 == t ? e.timelineNavigation.find(".prev").addClass("inactive") : e.timelineNavigation.find(".prev").removeClass("inactive"), t == n ? e.timelineNavigation.find(".next").addClass("inactive") : e.timelineNavigation.find(".next").removeClass("inactive")
    }

    function r(e, t, n) {
        var a = window.getComputedStyle(e.get(0), null),
            i = a.getPropertyValue("left"),
            s = a.getPropertyValue("width")
        i = +i.replace("px", "") + +s.replace("px", "") / 2
        var r = i / n
        p(t.get(0), "scaleX", r)
    }

    function l(e, t) {
        for (i = 0; i < e.timelineDates.length; i++) {
            var n = m(e.timelineDates[0], e.timelineDates[i]),
                a = Math.round(n / e.eventsMinLapse) + 2
            e.timelineEvents.eq(i).css("left", a * t + "px")
        }
    }

    function o(e, t) {
        var n = m(e.timelineDates[0], e.timelineDates[e.timelineDates.length - 1]),
            i = n / e.eventsMinLapse,
            i = Math.round(i) + 4,
            s = i * t
        return e.eventsWrapper.css("width", s + "px"), r(e.eventsWrapper.find("a.selected"), e.fillingLine, s), a("next", e.eventsWrapper.find("a.selected"), e), s
    }

    function d(e, t) {
        var n = e.data("date"),
            a = t.find(".selected"),
            i = t.find('[data-date="' + n + '"]'),
            s = i.height()
        if (i.index() > a.index()) var r = "selected enter-right",
            l = "leave-left"
        else var r = "selected enter-left",
            l = "leave-right"
        i.attr("class", r), a.attr("class", l).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
            a.removeClass("leave-right leave-left"), i.removeClass("enter-left enter-right")
        }), t.css("height", s + "px")
    }

    function c(e) {
        e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")
    }

    function v(e) {
        var t = window.getComputedStyle(e.get(0), null),
            n = t.getPropertyValue("-webkit-transform") || t.getPropertyValue("-moz-transform") || t.getPropertyValue("-ms-transform") || t.getPropertyValue("-o-transform") || t.getPropertyValue("transform")
        if (n.indexOf("(") >= 0) {
            var n = n.split("(")[1]
            n = n.split(")")[0], n = n.split(",")
            var a = n[4]
        } else var a = 0
        return +a
    }

    function p(e, t, n) {
        e.style["-webkit-transform"] = t + "(" + n + ")", e.style["-moz-transform"] = t + "(" + n + ")", e.style["-ms-transform"] = t + "(" + n + ")", e.style["-o-transform"] = t + "(" + n + ")", e.style.transform = t + "(" + n + ")"
    }

    function f(e) {
        var t = []
        return e.each(function() {
            var e = $(this),
                n = e.data("date").split("T")
            if (n.length > 1) var a = n[0].split("/"),
                i = n[1].split(":")
            else if (n[0].indexOf(":") >= 0) var a = ["2000", "0", "0"],
                i = n[0].split(":")
            else var a = n[0].split("/"),
                i = ["0", "0"]
            var s = new Date(a[2], a[1] - 1, a[0], i[0], i[1])
            t.push(s)
        }), t
    }

    function m(e, t) {
        return Math.round(t - e)
    }

    function g(e) {
        var t = []
        for (i = 1; i < e.length; i++) {
            var n = m(e[i - 1], e[i])
            t.push(n)
        }
        return Math.min.apply(null, t)
    }

    function h(e) {
        for (var t = e.offsetTop, n = e.offsetLeft, a = e.offsetWidth, i = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft
        return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + i > window.pageYOffset && n + a > window.pageXOffset
    }

    function u() {
        return window.getComputedStyle(document.querySelector(".cd-horizontal-timeline"), "::before").getPropertyValue("content").replace(/'/g, "").replace(/"/g, "")
    }
    $('[data-toggle="tooltip"]').tooltip(), $(".slidingDiv").hide(), $(".show_hide").show(), $(".show_hide").click(function() {
        var e = $(this).attr("rel")
        $(e).slideToggle()
    }), $navbar = $(".navbar[change-on-scroll]"), scroll_distance = $navbar.attr("change-on-scroll") || 500, 0 != $(".navbar[change-on-scroll]").length && (checkScrollForTransparentNavbar(), $(window).on("scroll", checkScrollForTransparentNavbar))
    var y = $(".cd-horizontal-timeline"),
        C = 60
    y.length > 0 && e(y)
}), setTimeout(function() {
    $("body").addClass("loaded")
}), topMenu = $("#landing-content"), topMenuHeight = 150, menuItems = topMenu.find("a")
var lastId, topMenu = $("#landing-content"),
    topMenuHeight = 150,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var e = $($(this).attr("href"))
        return e.length ? e : void 0
    })
menuItems.click(function(e) {
    var t = $(this).attr("href"),
        n = "#" === t ? 0 : $(t).offset().top - topMenuHeight + 1
    $("html, body").stop().animate({
        scrollTop: n
    }, 850), e.preventDefault()
}), $(window).scroll(function() {
    var e = $(this).scrollTop() + topMenuHeight,
        t = scrollItems.map(function() {
            return $(this).offset().top < e ? this : void 0
        })
    t = t[t.length - 1]
    var n = t && t.length ? t[0].id : ""
    lastId !== n && (lastId = n, "" != n && menuItems.removeClass("active-a").parent().removeClass("active-item").end().filter("[href='#" + n + "']").parent().addClass("active-item"), $("[href='#" + n + "']").addClass("active-a"), console.log(e))
}), $(function() {
    $(".lazy").lazy();
})