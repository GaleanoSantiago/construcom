$(document).ready(function(){var a=$(".owl-carousel.main-carousel");a.owlCarousel({autoplay:!0,smartSpeed:1e3,autoplayTimeout:2e4,loop:!0,nav:!1,navText:!1,dots:!0,mouseDrag:!0,margin:10,navigation:!0,navigationText:['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],slideBy:1,items:1}),a.on("changed.owl.carousel",function(a){var e=new ScrollMagic.Controller;$(".owl-carousel.main-carousel #first-p").each(function(){new ScrollMagic.Scene({triggerElement:this,triggerHook:1}).setTween(TweenMax.from(this,1,{scale:0,ease:Power1.easeIn,delay:1})).addTo(e)})})});