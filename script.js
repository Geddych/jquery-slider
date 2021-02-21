$( function() {
    $( "#tabs" ).tabs();
} );

$("#textRedSlider").slider({
    min: 0,
    max: 255,
    value: 0,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#textRedSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");   
        $('.colorBlock').css('color',`rgb(${$("#textRedSlider").slider("value")} ${$("#textGreenSlider").slider("value")} ${$("#textBlueSlider").slider("value")})`)     
    }    
});
$("#textRedSlider span").html("<b>&lt;</b>" + $("#textRedSlider").slider("value") + "<b>&gt;</b>");

$("#textGreenSlider").slider({
    min: 0,
    max: 255,
    value: 0,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#textGreenSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");   
        $('.colorBlock').css('color',`rgb(${$("#textRedSlider").slider("value")} ${$("#textGreenSlider").slider("value")} ${$("#textBlueSlider").slider("value")})`)     
    }    
});
$("#textGreenSlider span").html("<b>&lt;</b>" + $("#textGreenSlider").slider("value") + "<b>&gt;</b>");

$("#textBlueSlider").slider({
    min: 0,
    max: 255,
    value: 0,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#textBlueSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");  
        $('.colorBlock').css('color',`rgb(${$("#textRedSlider").slider("value")} ${$("#textGreenSlider").slider("value")} ${$("#textBlueSlider").slider("value")})`)
    }    
});
$("#textBlueSlider span").html("<b>&lt;</b>" + $("#textBlueSlider").slider("value") + "<b>&gt;</b>");

//  Background color sliders

$("#backRedSlider").slider({
    min: 0,
    max: 255,
    value: 255,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#backRedSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");   
        $('.colorBlock').css('background-color',`rgb(${$("#backRedSlider").slider("value")} ${$("#backGreenSlider").slider("value")} ${$("#backBlueSlider").slider("value")})`)     
    }    
});
$("#backRedSlider span").html("<b>&lt;</b>" + $("#backRedSlider").slider("value") + "<b>&gt;</b>");

$("#backGreenSlider").slider({
    min: 0,
    max: 255,
    value: 255,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#backGreenSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");   
        $('.colorBlock').css('background-color',`rgb(${$("#backRedSlider").slider("value")} ${$("#backGreenSlider").slider("value")} ${$("#backBlueSlider").slider("value")})`)     
    }    
});
$("#backGreenSlider span").html("<b>&lt;</b>" + $("#backGreenSlider").slider("value") + "<b>&gt;</b>");

$("#backBlueSlider").slider({
    min: 0,
    max: 255,
    value: 255,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        $("#backBlueSlider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");   
        $('.colorBlock').css('background-color',`rgb(${$("#backRedSlider").slider("value")} ${$("#backGreenSlider").slider("value")} ${$("#backBlueSlider").slider("value")})`)     
    }    
});
$("#backBlueSlider span").html("<b>&lt;</b>" + $("#backBlueSlider").slider("value") + "<b>&gt;</b>");







// $('.colorBlock').css('color',`rgb(${$("#textRedSlider").slider("value")} ${$("#textGreenSlider").slider("value")} ${$("#textBlueSlider").slider("value")})`)