 

// fonction pour le slide up / slide down des sections
$(document).ready(function(){

    $("#panel, #panel2, #panel3").hide();

    $("#competences").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("#Apropos").click(function(){
        $("#panel2").slideToggle("slow");
    });

    $("#ccontact").click(function(){
        $("#panel3").slideToggle("slow");
    });
});


// essai slick pour carousel//
// $(function(){
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       });
// });  
