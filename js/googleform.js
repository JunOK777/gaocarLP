function processForm( e ){
  e.preventDefault()
  let name    = $('#name').val();
  let company = $('#company').val();
  let email   = $('#email').val();
  let message = $('#message').val();

    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdG4iJpB_iROdXahKPx5mui-uihkmGQOpSW17qoSXGVsxbzWw/formResponse',
        data: {"entry.2116052852": name, 'entry.460780491': company, 'entry.1558582620': email, 'entry.2140715854': message},
        type: 'POST',
        dataType: 'html',
        statusCode: {
          0: function() {
            alert('success!')

            $('#name').val('');
            $('#company').val('');
            $('#email').val('');
            $('#message').val('');

          },
          200: function() {
            alert('success')
          },
          400: function() {
            alert('fail')
          }
        }
    });




}

$('#contactForm-1').submit( processForm );