
		function myFunction(){
		var U_name=	document.getElementById('username').value;
		
			document.getElementById('top-div').style.display='none';
			document.getElementById('bottom-div').style.display='inline';

			document.getElementById('name_headind').innerHTML=U_name;
			
		var u_email =	document.getElementById('email').value;
		
			document.getElementById('top-div').style.display='none';
			document.getElementById('bottom-div').style.display='inline';
			
			document.getElementById('email_headind').innerHTML=u_email;
		
		var pass=document.getElementById('password').value;  
		var pass1=document.getElementById('con_password').value;  
			if (U_name==null || U_name==""){  
				alert("Name can't be blank");  
				return false;  
			  }
			  else if(u_email==null || u_email==""){  
				alert("Email can't be black");  
				return false;  
				}  
			  else if(pass.length<6){  
				alert("Password must be at least 6 characters long.");  
				return false;  
				}  
				else if (pass != pass1) {
					//alert("Passwords Do not match");
					alert("Password do not match.");  

				}
				else {
					alert("Passwords Match!!!");
				}
		}
		
function goBack() {
	document.getElementById('top-div').style.display='block';
	document.getElementById('bottom-div').style.display='none';
}
		
