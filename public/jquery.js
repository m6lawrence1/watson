$(function() { 
//created function to change style on active link that was clicked
 $('a.home').on('click', function(){
 	$('a.home').css('background-color', 'lightblue');
    $('a.form').css('background-color', 'gray');
 });

 $('a.form').on('click', function(){
 	$('a.form').css('background-color', 'lightblue');
    $('a.home').css('background-color', 'gray');
 });

 $('button').on('click', function(){
 	$('div.results').removeClass( 'hidden');
 });
    
// need to add function to hide div that contains text for results   
    
});

