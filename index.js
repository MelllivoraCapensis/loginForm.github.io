const login = 'login';
const password = 'password';
$('#navigationButton').click(function() {
	if($(this).html() === 'Авторизация')
		{
			$('#loginForm').css('left', '0');
			$(this).html('Скрыть');
		}
	else if($(this).html() === 'Скрыть')
	    {
	    	$('#loginForm').css('left', '-305px');
			$(this).html('Авторизация');
	    }
	else if($(this).html() === 'Выйти')
	    {
	    	$('#loginForm').css('left', '-305px').css('display', 'flex');
			$(this).html('Авторизация');
			$('#authorizationMessage').css('display', 'none');
			$('#mainContent').css('display', 'block');
	    }
	
});
$('#showPasswordBox').click(function() {
	if(this.checked)
		$('#password').attr('type', 'text');
	else
		$('#password').attr('type', 'password');
});
$('#enterButton').click(function(e) {
	$('#loginForm').css('animation', '');
	e.preventDefault();
 if($('#login').val() === login && $('#password').val() === password)
    {
      $('#mainContent').css('display', 'none');
      $('#authorizationMessage').css('display', 'block');
      $('#loginForm').css('display', 'none');
      $('#navigationButton').html('Выйти');
    }
  else
    {
      $('#loginForm').addClass('loginError');
      setTimeout(function() {
      $('#loginForm').removeClass('loginError');
      }, 500);
    }

})