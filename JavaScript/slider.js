var dataJson=[{"Imagedes":"The first step is to head to www.ibm.com and create an ibm customer account because you will need these account credentials to download the HMC .iso file and relevant version fixes."},
    {"Imagedes":"Review the Internation License Agreement for the HMC and click Accept when you are done."},
    {"Imagedes":"At the 'hscroot' password creation screen enter in your desired password and click Next."},
    {"Imagedes":"Select eth0 as your LAN adapter and click Next."},
    {"Imagedes":"When all three Task Descriptions show a 'Successful' status close the window.  The HMC will then begin to load."},
    {"Imagedes":"At the HMC main screen select Systems Management."},
    {"Imagedes":"Click on Servers and then Add A Managed System.  When the Add Managed System window opens enter the IPv4 address or hostname of the desired server."},
    {"Imagedes":"Select the minimum, desired and maximum number of processing units to assign to this particular partition."},
    {"Imagedes":"Select the minimum, desired and maximum amount of RAM to assign to this particular partition."},
    {"Imagedes":"Review the profile summary information and click Next when you have verified it is correct."},
    {"Imagedes":"When the activate profile window opens, select the Open a terminal or console session checkbox."},
    {"Imagedes":"At the Linux Text Mode Install screen begin your install!"}]

var index=0;
$('.imageDes').text(dataJson[0].Imagedes);
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
    moveRight();
   }, 3000);
 });

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider').css({ width: slideWidth, height: slideHeight });

$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider ul li:last-child').prependTo('#slider ul');

function moveLeft() {
    $('#slider ul').animate({
        left: + slideWidth
    }, 200, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
        
    });
    if(index<=0)
        index=dataJson.length-1;
    else
        index--                
    $('.imageDes').text(dataJson[index].Imagedes);
};

function moveRight() {
    $('#slider ul').animate({
        left: - slideWidth
    }, 200, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
    });
    
    if(index+1>=dataJson.length)
        index=0;
    else
        index++                
     $('.imageDes').text(dataJson[index].Imagedes);
   
};

$('button.control_prev').click(function () {
    moveLeft();
});

$('button.control_next').click(function () {
    moveRight();
});

});
