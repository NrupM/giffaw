$(document).on("ready", function() {
  // top 25 gifs on page load
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/trending?api_key=9a081f0fb7c84d90919b35b4cc984fa0",
    dataType: "json",
    success: onSuccess
  });
  $("form").on("submit", function(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      data: $("form").serialize(),
      dataType: "json",
      success: onSubmitReqSuccess
    });
  });
});
//append top 25 gifs image results
function onSuccess(responseData) {
  var response = responseData;
  response.data.forEach(function(element) {
    $(".gif-gallery").append('<img src="' + element.images.fixed_height.url + '">');
  });
}
//prepend 25 gifs search results
function onSubmitReqSuccess(responseData) {
  responseData.data.forEach(function(element) {
    $(".gif-gallery").prepend('<img src="' + element.images.fixed_height.url + '">');
  });
}
