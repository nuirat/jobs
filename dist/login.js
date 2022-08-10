function login()
{
    alert('its work')
$.post('/login',{username:$('#userName').val(),password:$('#password')},function(user){

})
}
