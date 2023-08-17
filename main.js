var rating = $('input[name="score"]')
var submit = $('.submit-btn')

function visible() {
    $('.card-select').addClass('invisible');
    $('.card-select').removeClass('visible');
    $('.card-thankyou').removeClass('invisible');
    $('.card-thankyou').addClass('visible');
}

submit.on('click', function () {
  if ($("input[type=radio][name=score]:checked").is(':checked')) {
    visible();
    const selected = $('input:radio[name="score"]:checked').val();
    $('#selected').text(selected);
    
  } else {
    alert("Please press the evaluation button")
  }
});
