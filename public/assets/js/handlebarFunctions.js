Handlebars.registerHelper("writeStars", function(options){
    var str = "";
    for (var i = 0; i < options ; i++){
        str = str + "*";
    }
    return new Handlebars.SafeString('<div>' + str + '</div>');
});

