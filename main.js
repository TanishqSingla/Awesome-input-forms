$(function() {
  $(".input-group input").focusout(function() {
    const text = $(this).val();
    if (text === "") {
      $(this).removeClass("has-val");
    } else {
      $(this).addClass("has-val");
    }
  });
});
