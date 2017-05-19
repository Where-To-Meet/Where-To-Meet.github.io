// jQuery

$('.help-icon').on('click', function(){
  $(this).toggleClass('active');
  $(this).closest('section').find('.help-content').slideToggle('fast');
});