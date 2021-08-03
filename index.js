$(window).on('load', function () {
  $('#loading').hide();
}) 

//codepen code

//This script lets you scroll through an image sequence with a correlating number sequence on top of the image. It also creates a download link to a higres image, of the displayed image, located in a separate directory. 

//Works on desktop and mobile.

// based on https://scrollmagic.io/examples/expert/image_sequence.html

//  low res and highres images need to be stored in seperate directories with the same file name and named: 0000.fileType, 0001.fileType, 0002.fileType, ...

// works on desktop and mobile!

// include
//jquery https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
//GSAP https://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenMax.min.js
//scrollmagic https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js
//GSAP animation https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js
//scrollmagic debug indicators https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js


// define these vars to your needs

var framePath = "./video/"; //Define file path for your images
var highResPath = "./video/"; //if you have a downloadable high res image, define its path here.  
var nFrames = 61; //Define amount of images. counting starts at 0, to have it count to 400 you would have to ad 401 images. 
var fileType = ".jpg"; //Define your image file type.
var pageLengt = 2000000; // this defines over what distance, in pixels, your image sequence should be displayed. esentally it defines how speady you scroll trough all the individual images. make shure your page has at least this lengt in px aswel.

//no need to change anything further down here.

//Define arrays.

var images = []; //Define array for images
var numberSequence = []; //Define array for number sequence
var higresimages = []; //Define array for higres images


// ad images with path to array

function pad(number) { // pad numbers with leading zeros for your image sequence
  var str = 'ezgif-frame-0';
  if (number < 10) { str = 'ezgif-frame-00' }
  str = str + number;
  return str;
}

for (i = 1; i < (nFrames); i++) {//loop through all pictures
  images.push(framePath + pad(i) + fileType); //Add every image to array with pad numbers and file type
}


// ad higres images with path to array

for (i = 1; i < (nFrames); i++) {//loop through all pictures
  higresimages.push(highResPath + pad(i) + fileType); //Add the higResPath to the array with pad numbers and file type
}


// ad numbers to numbersequence array

for (i = 1; i < (nFrames); i++) {
  numberSequence.push(i); //Add N numbers to array
}


// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = { curImg: 0 };

// create tween
var ImageSequenceTween = new TimelineMax()
  .to(obj, 0.5,
    {
      curImg: images.length - 1,  // animate propery curImg to number of images
      roundProps: "curImg",       // only integers so it can be used as an array index
      repeat: 0,                  // repeat 3 times
      immediateRender: true,      // load first image automatically
      ease: Linear.easeNone,      // show every image the same ammount of time
      onUpdate: function () {
        $("#imgsequence").attr("src", images[obj.curImg]);// set the image source
        $("#higreslink").attr("href", higresimages[obj.curImg]);// set higres download link path
      }
    }
  )


// When the DOM is ready
$(function () {


  // init controller
  var ImageSequenceController = new ScrollMagic.Controller();

  // build scene --> image sequence
  var scene = new ScrollMagic.Scene({
    triggerElement: ".frame",
    triggerHook: 0,
    duration: "100%",
  })

    .setTween(ImageSequenceTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(ImageSequenceController)
    .setPin(".frame");
});


// navbar scrolling function

    
    window.onscroll = function() {
    var nav = document.getElementById('nav');
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
   
    if ( window.pageYOffset>(5.9*vh) && window.pageYOffset<(8.25*vh)) {
        nav.classList.add("nav1");

    } else{
        nav.classList.remove("nav1");
    }
}


// Iphone layers and cards
var topElements = new TimelineMax({ delay: .3, yoyo: true, repeat: -1 });

topElements.staggerFrom('.phFrame', .5, { opacity: 0, y: -33 }, .24)
  .staggerFrom('.phScreen', .5, { opacity: 0 }, .1)
  .staggerFrom('.topElements', .5, { opacity: 0, x: 20, y: 13 }, .1)
  .to({}, 2, {});

var counter = 1;

function looper() {

  if (counter == 0) {
    $('.textClipOne .h-3').text('Collaboration')
    $('.textClipTwo .h-3').text('/Messaging')
  }

  if (counter == 1) {
    $('.textClipOne .h-3').text('IP Telephony')
    $('.textClipTwo .h-3').text('/PABX')
  }

  if (counter == 2) {
    $('.textClipOne .h-3').text('Video')
    $('.textClipTwo .h-3').text('Conferencing')
  }

  if (counter == 3) {
    $('.textClipOne .h-3').text('3 Systems')
    $('.textClipTwo .h-3').text('In One')
    counter = -1;
  }

  counter += 1;
  // if(counter == 4){
  //   counter = 0;
  // }
}

TweenMax.from('.h-3', 2, { y: 20, opacity: 0, ease: Power4.easeOut }, .2);

var aCounter = 1;

var displayAnim = new TimelineMax({ delay: .1, repeat: -1 });

displayAnim.eventCallback("onRepeat", looper, ["aCounter"]);

displayAnim.staggerFromTo('.h-3', 1, { y: 200, ease: Power4.easeOut }, { y: 0 }, .2)

  .to({}, 2, {})
  .staggerTo('.h-3', 1.2, { y: -60, opacity: 0, ease: Power4.easeIn }, .2, "-=1.2");
//END SECTION

//SCROLLMAGIC
var controller = new ScrollMagic.Controller();



//Scenes

//Video Animation

//text part

const sett = document.querySelector(".sett");
const text1 = sett.querySelector(".rev");
const text2 = sett.querySelector(".rev2");
const text3 = sett.querySelector(".rev3");
//END SECTION

//SCROLLMAGIC
const controller2 = new ScrollMagic.Controller();

//Scenes
let scenet = new ScrollMagic.Scene({
  duration: "100%",
  triggerElement: sett,
  triggerHook: 0
})
  .setPin(sett)
  .addTo(controller);

var tl1 = new TimelineMax();

tl1
  .fromTo(text1, 4, { opacity: 0, y: "30%" }, { opacity: 1, y: "0%" })
  .to(text1, 4, { opacity: 0, y: "-30%" })


  .fromTo(text2, 4, { opacity: 0, y: "30%" }, { opacity: 1, y: "0%" })
  .to(text2, 4, { opacity: 0, y: "-30%" })

  .fromTo(text3, 4, { opacity: 0, y: "30%" }, { opacity: 1, y: "0%" })
  .to(text3, 4, { opacity: 0, y: "-30%" })





var scenett = new ScrollMagic.Scene({
  triggerElement: sett,
  triggerHook: 0,
  duration: "100%"
})

  .setTween(tl1)
  .addTo(controller2);


// p part

var tlFirstScroll = new TimelineMax();

tlFirstScroll
  .set('.iphone-image-wrapper', { scale: 4, transformOrigin: "center top" })
  .to('.iphone-image-wrapper', 3, { scale: 2.2, y: "-50%" })
  .to('.iphone-image-wrapper', 3, { scale: 1, y: "0%" })

//Scene 1 

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.trigger',
  triggerHook: 0,
  duration: "100%"
})

  .setTween(tlFirstScroll)
  .addTo(controller);



var tlSecondScroll = new TimelineMax();

tlSecondScroll

  .to('.iphone1', 3, { x: "-64%" })
  .to('.iphone2', 3, { x: "64%" }, "-=3")
  .from('.iphone1-text', 0.3, { autoAlpha: 0 }, "-=3")
  .from('.iphone2-text', 0.3, { autoAlpha: 0 }, "-=3")
  .to('.iphone1-text', 3, { x: "-40%" }, "-=3")
  .to('.iphone2-text', 3, { x: "40%" }, "-=3")

  .set('.iphone-stick', { display: "block" })
  .set('.iphone-stick', { y: "0%" })

  .to('.iphone1-img-behind', 3, { x: "-60%" })
  .to('.iphone2-img-behind', 3, { x: "60%" }, "-=3")

  .to('.iphone1-img', 0.5, { autoAlpha: 0 }, "-=3")
  .to('.iphone2-img', 0.5, { autoAlpha: 0 }, "-=3")

  .to('.iphone1-text', 0.3, { autoAlpha: 0 }, "-=3")
  .to('.iphone2-text', 0.3, { autoAlpha: 0 }, "-=3")

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.trigger2',
  triggerHook: 0,
  duration: "100%"
})

  .setTween(tlSecondScroll)
  .setPin('.trigger2')
  .addTo(controller);

//laptop


// p part

var tlFirstScroll = new TimelineMax();

tlFirstScroll
  .set('.iphone-image-wrapper', { scale: 4, transformOrigin: "center top" })
  .to('.iphone-image-wrapper', 3, { scale: 2.2, y: "-50%" })
  .to('.iphone-image-wrapper', 3, { scale: 1, y: "0%" })

//Scene 1 

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.trigger',
  triggerHook: 0,
  duration: "100%"
})

  .setTween(tlFirstScroll)
  .addTo(controller);



var tlSecondScrolll = new TimelineMax();

tlSecondScrolll

  .to('.ilaptop1', 3, { x: "-64%" })
  .to('.ilaptop2', 3, { x: "64%" }, "-=3")
  .from('.ilaptop1-text', 0.3, { autoAlpha: 0 }, "-=3")
  .from('.ilaptop2-text', 0.3, { autoAlpha: 0 }, "-=3")
  .to('.ilaptop1-text', 3, { x: "-40%" }, "-=3")
  .to('.ilaptop2-text', 3, { x: "40%" }, "-=3")

  .set('.ilaptop-stick', { display: "block" })
  .set('.ilaptop-stick', { y: "0%" })

  .to('.ilaptop1-img-behind', 3, { x: "-60%" })
  .to('.ilaptop2-img-behind', 3, { x: "60%" }, "-=3")

  .to('.ilaptop1-img', 0.5, { autoAlpha: 0 }, "-=3")
  .to('.ilaptop2-img', 0.5, { autoAlpha: 0 }, "-=3")

  .to('.ilaptop1-text', 0.3, { autoAlpha: 0 }, "-=3")
  .to('.ilaptop2-text', 0.3, { autoAlpha: 0 }, "-=3")

var scene3l = new ScrollMagic.Scene({
  triggerElement: '.trigger2l',
  triggerHook: 0,
  duration: "100%"
})

  .setTween(tlSecondScrolll)
  .setPin('.trigger2l')
  .addTo(controller);


// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

// SWIPER
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
});

// SWIPER END



// PBX

console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });



// CLOUDS


//change screen 


$(document).ready(function () {

  // HOME TYPED JS
  var typelement = $('.element');
  if (typelement.length) {
    typelement.each(function () {
      $(this).typed({
        strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')]
        , loop: $(this).data('loop') ? $(this).data('loop') : false
        , backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000
        , typeSpeed: 10
        ,
      });
    });
  }


  var wind = $(window)
  function footsize() {
    if ($('footer').height() < wind.height()) {
      $('body').css({
        "padding-bottom": $('footer').height() + "px"
      });

    }

  }



  if ($('.home').length) {
    function centerInit() {
      var hometext = $('.home')
      hometext.css({
        "height": wind.height() + 70 + "px"
      });
    }
    centerInit();
    wind.resize(centerInit);
  }



});

!function (t) { "use strict"; var s = function (s, e) { this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build() }; s.prototype = { constructor: s, init: function () { var t = this; t.timeout = setTimeout(function () { for (var s = 0; s < t.strings.length; ++s)t.sequence[s] = s; t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) }, t.startDelay) }, build: function () { var s = this; if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) { this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children()); var e = this.stringsElement.children(); t.each(e, function (e, i) { s.strings.push(t(i).html()) }) } this.init() }, typewrite: function (t, s) { if (this.stop !== !0) { var e = Math.round(70 * Math.random()) + this.typeSpeed, i = this; i.timeout = setTimeout(function () { var e = 0, r = t.substr(s); if ("^" === r.charAt(0)) { var o = 1; /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o) } if ("html" === i.contentType) { var n = t.substr(s).charAt(0); if ("<" === n || "&" === n) { var a = "", h = ""; for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length));); s++, a += h } } i.timeout = setTimeout(function () { if (s === t.length) { if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return; i.timeout = setTimeout(function () { i.backspace(t, s) }, i.backDelay) } else { 0 === s && i.options.preStringTyped(i.arrayPos); var e = t.substr(0, s + 1); i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s) } }, e) }, e) } }, backspace: function (t, s) { if (this.stop !== !0) { var e = Math.round(70 * Math.random()) + this.backSpeed, i = this; i.timeout = setTimeout(function () { if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) { for (var e = ""; "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s));); s--, e += "<" } var r = t.substr(0, s); i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s)) }, e) } }, shuffleArray: function (t) { var s, e, i = t.length; if (i) for (; --i;)e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s; return t }, reset: function () { var t = this; clearInterval(t.timeout); this.el.attr("id"); this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback() } }, t.fn.typed = function (e) { return this.each(function () { var i = t(this), r = i.data("typed"), o = "object" == typeof e && e; r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]() }) }, t.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function () { }, preStringTyped: function () { }, onStringTyped: function () { }, resetCallback: function () { } } }(window.jQuery);



// download cards



// intro-video



