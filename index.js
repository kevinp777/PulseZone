$( document ).ready(function() {
    console.log( "ready!" );

var kp1 = new Audio("audio/pulse_zone_v2/pz_1.mp3");
var kp2 = new Audio("audio/pulse_zone_v2/pz_2.mp3");
var kp3 = new Audio("audio/pulse_zone_v2/pz_3.mp3");
var kp4 = new Audio("audio/pulse_zone_v2/pz_4.mp3");
var kp5 = new Audio("audio/pulse_zone_v2/pz_5.mp3");
var kp6 = new Audio("audio/pulse_zone_v2/pz_6.mp3");
var kp7 = new Audio("audio/pulse_zone_v2/pz_7.mp3");
var kp8 = new Audio("audio/pulse_zone_v2/pz_8.mp3");
var kp9 = new Audio("audio/pulse_zone_v2/pz_9.mp3");
// nine


kp1.loop = true;
kp2.loop = true;
kp3.loop = true;
kp4.loop = true;
kp5.loop = true;
kp6.loop = true;
kp7.loop = true;
kp8.loop = true;
kp9.loop = true;

var playing = false;

// Play/Pause functions for each key
// Keep keypad color on play until pause click

// one
 $(document).on('click', '.one', function() {

    if (kp1.currentTime > 0) {
    	kp1.load();
    	kp1.pause();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
    else {
    	kp1.play();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }	
  
  });

// two
 $(document).on('click', '.two', function() {

    if (kp2.currentTime > 0) {
    	kp2.load();
    	kp2.pause();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
    else {
    	kp2.play();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
  
  });

// three

$(document).on('click', '.three', function() {

    if (kp3.currentTime > 0) {
        kp3.load();
        kp3.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp3.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// four

$(document).on('click', '.four', function() {

    if (kp4.currentTime > 0) {
        kp4.load();
        kp4.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp4.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// five

$(document).on('click', '.five', function() {

    if (kp5.currentTime > 0) {
        kp5.load();
        kp5.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp5.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// six

$(document).on('click', '.six', function() {

    if (kp6.currentTime > 0) {
        kp6.load();
        kp6.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp6.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// seven

$(document).on('click', '.seven', function() {

    if (kp7.currentTime > 0) {
        kp7.load();
        kp7.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp7.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// eight

$(document).on('click', '.eight', function() {

    if (kp8.currentTime > 0) {
        kp8.load();
        kp8.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp8.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

//nine

$(document).on('click', '.nine', function() {

    if (kp9.currentTime > 0) {
        kp9.load();
        kp9.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        kp9.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  });
});