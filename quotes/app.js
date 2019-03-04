$(window).keypress(function(e) {
      if (e.which === 32) {
        generateQuotes();
      }
  });
window.addEventListener("click", function(){ generateQuotes(); });

$(window).on("tap", function() {
  generateQuotes();
})
  function mycallback(json){
    var quote = json[0];
    $("#quote").html(quote.content)
    $("#writer").html(quote.title)
    $("#quote").addClass("executed");
      $("#quote").removeClass("reset");
      $("#writer").toggleClass("fade");
  }

  function generateQuotes() {
    $("#quote").addClass("reset");
        $("#quote").removeClass("executed");
        $("#writer").toggleClass("fade");
        setTimeout(function(){
          $.ajax({
            crossOrigin: true,
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
            dataType:"jsonp"
        });
        }, 1000);
  }
