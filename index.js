// Home collapse
$(".port-item").click(function () {
  $(".collapse").collapse("hide");
})
// Light Box
$(document).on('click', '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});
// Media Query 320 px
if (document.documentElement.clientWidth <= 320) {
  $("#wrapper").removeClass("container").addClass("container-fluid");
  $("#name-wrapper").removeClass(".p-5").addClass("p-2");
};
