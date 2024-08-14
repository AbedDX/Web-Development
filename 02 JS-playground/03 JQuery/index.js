

//link attribute to yahoo
$("a").attr("href", "https://www.yahoo.com");


$(document).keyup(function(event){
    console.log(event.key);
    $("h1").text(event.key);
})