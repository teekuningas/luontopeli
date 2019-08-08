$(function(){

  var n_images = 5;
  var visible_idx = 0;

  // click handlers for quiz buttons
  $(".quiz-option").on('click',function () {
    $("#quizform").submit()
  });

  // handler to scroll through images
  $(".image-btn").on('click',function () {
    visible_idx++;
    hide_images(visible_idx % n_images);
  });

  function hide_images(idx) {
    var i;
    for (i = 0; i < n_images; i++) {
      $("#image_" + (i+1).toString()).hide()
    }
    $("#image_" + (idx+1).toString()).show()
  }

  // in the beginning, hide all but first
  hide_images(0)

}); 