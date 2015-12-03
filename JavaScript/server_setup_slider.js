var dataJson=[{"Imagedes":"Get your IBM Power PC server on a cart or server lift where you can easily inspect the outside of the server.  Before installing the server into your server rack check it out to make sure that its chassis, physical ports and any other mechanisms are functional."},
    {"Imagedes":"Make sure you are electrostatically grounded.  When you are, remove the server cover and inspect each engineering module within the server, making sure memory modules, cooling modules, etc. are all locked into place with no debris that will obstruct their functioning.  "},
    {"Imagedes":"IBM Power PC servers come with fast-install server rails.  Identify which unit positions you are going to install your server into and snap the server rails into place accordingly."},
    {"Imagedes":"When you have tested your rails and confirmed they are functionally installed, simply drop the Power PC server onto the rails.  It will snap right into place for easy sliding and management."},
    {"Imagedes":"Connect the power cables to the power supply units.  You may also connect NIC network cabling at this time, however do not connect any network cabling to the HMC ports yet.  Once you have the server initially cabled, go around front and power it on."},
    {"Imagedes":"On the front of the server you will see a purple eject button.  This is for the control panel.  Go ahead and eject it and use the toggle buttons to navigate to function 3001.  Function 3001 will reveal the Power PC server's APIPA address, which you will need for initial configuration of the server."},
    {"Imagedes":"Head around back of the server again.  Connect a network cable to HMC port 2."},
    {"Imagedes":"Grab a laptop running a Windows OS >= 7.  Plug the other end of your HMC-ported network cable into the network port on your laptop.  When Windows is running navigate to your network devices."},
    {"Imagedes":"Right click on your Ethernet NIC and access its properties.  Select its IPv4 properties."},
    {"Imagedes":"Select the Use the following IP address radio button.  Enter in a dummy APIPA address, the /16 subnet mask and the Power PC server's current HMC port 2 APIPA address.  Click OK and open up a browser."},
    {"Imagedes":"In the browser's navigation bar enter in the server's current APIPA address.  Chances are that your browser will alert you that the connection may be unsafe.  Proceed to this address anyway."},
    {"Imagedes":"The server's Advanced System Management Interface will load.  Log in with credentials admin/admin or admin/password.  Change the server's system name to your desired system name.  When you add server's to your HMC, this is the name that will be registered."},
    {"Imagedes":"Under Network Services select Network Configuration.  Configure Network interface eth0 to match your network needs.  Do not modify the other interface."},
    {"Imagedes":"Under Login Profile change the login profile password for user HMC.  This is the password that will be required to add server's to the HMC."}]

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
