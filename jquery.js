$(document).ready(function () {
	
	$('#usercheck').hide();
	$('#passcheck').hide();
	$('#cnfpasscheck').hide();
     
     var user_err= true;
     var pass_err= true;
     var cnfpass_err=true;
     $('#username').keyup(function (){
     	username_check();
     });
     function username_check() {

     	var user_val=$('#username').val();
          if (user_val=="") {
              
     		$('#usercheck').show();
     		$('#usercheck').html("**Username can not blank");
                $('#usercheck').focus();
               $('#usercheck').css("color","red");
               user_err = false;
               return user_err;
               }
               else{
                    $('#usercheck').hide();
               }
                if ((user_val.length<3) ||(user_val.length>20)) {
              
               $('#usercheck').show();
               $('#usercheck').html("**Username between three to twenty");
                $('#usercheck').focus();
               $('#usercheck').css("color","red");
               user_err = false;
               return user_err;
               }
               else{
                    $('#usercheck').hide();
               }   
     }
          $('#password').keyup(function (){
          password_check();
     });
     function password_check() {

          var pass_val=$('#password').val();
          if (pass_val=="") {
              
               $('#passcheck').show();
               $('#passcheck').html("**Password can not blank");
                $('#passcheck').focus();
               $('#passcheck').css("color","red");
               user_err = false;
               return user_err;
          }
               
               else {
                    $('#passcheck').hide();
               }
                if ((pass_val.length<3) ||(pass_val.length>20)) {
              
               $('#passcheck').show();
               $('#passcheck').html("**Username between three to twenty");
                $('#passcheck').focus();
               $('#passcheck').css("color","red");
               pass_err = false;
               return pass_err;
               }
               else{
                    $('#passcheck').hide();
               }   
     }
     $('#confirmpassword').keyup(function () {
          cnfpass_check();
          
     });
     function cnfpass_check() {
          var cnf_val = $('#confirmpassword').val();
          var pass_val = $('#password').val();
          if (cnf_val!=pass_val) {
               $('#cnfpasscheck').show();
               $('#cnfpasscheck').html("***password does not Match");
               $('#cnfpasscheck').css("color","red");
               return false;
          }
          else {
               $('#cnfpasscheck').hide();


          }

     }



});
