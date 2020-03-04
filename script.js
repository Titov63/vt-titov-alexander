var modal = document.querySelector(".modal-background_js");
var buttonOpen = document.querySelector(".button-explore_js");
var modalClose = document.querySelector(".modal-close-button_js");
var input = document.querySelector(".long-input_js");
var range = document.querySelector(".range_js")

buttonOpen.addEventListener("click", function() {
  setTimeout(() => {
    modal.classList.toggle("modal-close");
    input.focus();
  }, 400);
});

modalClose.addEventListener("click", function() {
  setTimeout(() => {
    modal.classList.toggle("modal-close");
    buttonOpen.focus();
  }, 400);
});

window.addEventListener("keydown", function(event) {
  if (!modal.classList.contains("modal-close") && event.code === "Escape") {
    setTimeout(() => {
      modal.classList.toggle("modal-close");
      buttonOpen.focus();
    }, 400);
  }
});

function range(){
	var
	val = $('.range').val();
	$('.range').css({'background':'-webkit-linear-gradient(left ,#C29974 0%,#C29974 '+val+'%, rgba(0, 0, 0, 0.5) '+val+'%, rgba(0, 0, 0, 0.5) 100%)'});
 }


 window.onload=function(range) {
   range
   
 }