$( document ).ready(function() {
    console.log( "ready!" );

var one_drone = new Audio("audio/pulse_zone_v2/pz_1.mp3");
var two_drone = new Audio("audio/pulse_zone_v2/pz_2.mp3");
var three_spark = new Audio("audio/pulse_zone_v2/pz_3.mp3");
var four_wash = new Audio("audio/pulse_zone_v2/pz_4.mp3");
var five_air = new Audio("audio/pulse_zone_v2/pz_5.mp3");
var six_beep = new Audio("audio/pulse_zone_v2/pz_6.mp3");
var seven_synth = new Audio("audio/pulse_zone_v2/pz_7.mp3");
var eight_synth = new Audio("audio/pulse_zone_v2/pz_8.mp3");
var nine_synth = new Audio("audio/pulse_zone_v2/pz_9.mp3");
// nine


one_drone.loop = true;
two_drone.loop = true;
three_spark.loop = true;
four_wash.loop = true;
five_air.loop = true;
six_beep.loop = true;
seven_synth.loop = true;
eight_synth.loop = true;
nine_synth.loop = true;

var playing = false;

// Play/Pause functions for each key
// Keep keypad color on play until pause click

// one
 $(document).on('click', '.one', function() {

    if (one_drone.currentTime > 0) {
    	one_drone.load();
    	one_drone.pause();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
    else {
    	one_drone.play();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }	
  
  });

// two
 $(document).on('click', '.two', function() {

    if (two_drone.currentTime > 0) {
    	two_drone.load();
    	two_drone.pause();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
    else {
    	two_drone.play();
    	var color = $(this).attr('class').split(' ')[0];
    	var colorclassname = color + 'color';
    	console.log(colorclassname);
    	$(this).toggleClass(colorclassname);
    }
  
  });

// three

$(document).on('click', '.three', function() {

    if (three_spark.currentTime > 0) {
        three_spark.load();
        three_spark.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        three_spark.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// four

$(document).on('click', '.four', function() {

    if (four_wash.currentTime > 0) {
        four_wash.load();
        four_wash.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        four_wash.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// five

$(document).on('click', '.five', function() {

    if (five_air.currentTime > 0) {
        five_air.load();
        five_air.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        five_air.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// six

$(document).on('click', '.six', function() {

    if (six_beep.currentTime > 0) {
        six_beep.load();
        six_beep.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        six_beep.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// seven

$(document).on('click', '.seven', function() {

    if (seven_synth.currentTime > 0) {
        seven_synth.load();
        seven_synth.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        seven_synth.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

// eight

$(document).on('click', '.eight', function() {

    if (eight_synth.currentTime > 0) {
        eight_synth.load();
        eight_synth.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        eight_synth.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });

//nine

$(document).on('click', '.nine', function() {

    if (nine_synth.currentTime > 0) {
        nine_synth.load();
        nine_synth.pause();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
    else {
        nine_synth.play();
        var color = $(this).attr('class').split(' ')[0];
        var colorclassname = color + 'color';
        console.log(colorclassname);
        $(this).toggleClass(colorclassname);
    }
  
  });


 

});

