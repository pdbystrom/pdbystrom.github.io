$(document).ready(function(){
	
// $("section.module.parallax-1").hover(function () {
//    $(this).toggleClass("gray");
//});

  
//$("section.module.parallax-2").hover(function () {
//    $(this).toggleClass("gray");
//});

  
//$("section.module.parallax-3").hover(function () {
//    $(this).toggleClass("gray");
//});
  
//$("section.module.parallax-4").hover(function () {
//    $(this).toggleClass("gray");
//});
  
//$("section.module.parallax-5").hover(function () {
//    $(this).toggleClass("gray");
//});
  
//$("section.module.parallax-6").hover(function () {
//    $(this).toggleClass("gray");
//});

dw_Tooltip.defaultProps = {
    //supportTouch: true, // set false by default
    sticky: true,
    showCloseBox: true,
    closeBoxImage: 'images/close.gif',
    positionFn: dw_Tooltip.positionWindowCenter,
    wrapFn: dw_Tooltip.wrapToWidth
}

// Problems, errors? See http://www.dyn-web.com/tutorials/obj_lit.php#syntax

dw_Tooltip.content_vars = {
    L1: {
        str: '<p>I took seven years of spanish total starting when I was in 8th grade.</p>',
        w: 500 // width for tooltip
    }, 
    L2:  {
        str: '<p>I took an interest in coding when I was 15 years old but unfortunately I didn\'t have the resources to pursue my interest until I began classes at the University of Minnesota. There I took intro to web design and my senior year I took advanced web design. I want to learn as much as I can about web design because it amazes me how much one can do with it.</p>',
        w: 500
    },
    L3: {
        str: '<p>jQuery has been my greatest challenge since taking up web design. I\'ve taken Code Academy courses and Lynda lessons and I still aim to master it. It has been a long process but I know that if I stick with it, eventually I\'ll become an expert.</p>',
        w: 500
    },
    L4: {
        str: '<p>My junior year of college I took a class called digital media that changed my life. In this class we learned about analytics and search engine optimization and I loved sifting through all of the different pieces of data and trying to find the meaningful insight.</p>',
        w: 500 // width for tooltip
    },
    L5: {
        str: '<p>I\'ve used photoshop since I was 15. I used to make graphics for friends and family. It took me a while to finally grasp Illustrator and inDesign when I went to college but it was rewarding. There are so many more things you can do with these additional programs.</p>',
        w: 500 // width for tooltip
    },
    L6: {
        str: '<p>I use Microsoft Office daily. Often it\'s Microsoft Word or Powerpoint but I am very familiar with how the programs run. I am in no way an expert at Excel, however. That is completely different monster.</p>',
        w: 500 // width for tooltip
    },
}

});




