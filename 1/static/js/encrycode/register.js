$(document).ready(function() {
	$('#submit').attr({"disabled":"disabled"});
	var va_user=false;
	var va_pass=false;
	var va_pass2=false;
	var va_email=false;
	 $("input#username").blur(function(){
	  var username = $.trim($("input#username").val());
	  var len=username.length
	  if(len<6){
		  $('label#name_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;只能是字母数字且不能少于6个字符哦</span></font>');
		  $('#submit').attr({"disabled":"disabled"});
	  }else{
		  $.get("http://www.kunkundashen.cn/MyBlog/checkuser/?username="+username,function(data,status){
			     if (data == "null"){
			      $('label#name_errors').html('<font color="green"><span>&radic;&nbsp;&nbsp;"' + username + '"可以注册</span></font>');
			      va_user=true;
			      if(va_user&&va_pass&&va_pass2&&va_email){
						 $('#submit').removeAttr("disabled");
					 }else{
						 $('#submit').attr({"disabled":"disabled"});
					 }
			     }else{
			      $('label#name_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;“' + username + '”已被注册</span></font>');
			      $('#submit').attr({"disabled":"disabled"});
			     }});
	  }});
	 $("input#password").blur(function(){
		 var password = $.trim($("input#password").val());
		 var plen =password.length;
		 if(plen<6){
			 $('label#password_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;密码不能少于6个字符！</span></font>');
			 $('#submit').attr({"disabled":"disabled"});
		 }else{
			 $('label#password_errors').html('<font color="green"><span>&radic;&nbsp;&nbsp;密码符合规范！</span></font>');
			 va_pass=true;
			 if(va_user&&va_pass&&va_pass2&&va_email){
				 $('#submit').removeAttr("disabled");
			 }else{
				 $('#submit').attr({"disabled":"disabled"});
			 }
		 }
	 });
	 $("input#password2").blur(function(){
		 var password = $.trim($("input#password").val());
		 var password2 = $.trim($("input#password2").val());
		 var plen =password2.length;
		 if(plen<6){
			 $('label#password2_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;密码不能少于6个字符！</span></font>');
			 $('#submit').attr({"disabled":"disabled"});
		 }else if(password==password2){
			 $('label#password2_errors').html('<font color="green"><span>&radic;&nbsp;&nbsp;两次密码一致！</span></font>');
			 va_pass2=true;
			 if(va_user&&va_pass&&va_pass2&&va_email){
				 $('#submit').removeAttr("disabled");
			 }else{
				 $('#submit').attr({"disabled":"disabled"});
			 }
		 }else{
			 $('label#password2_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;两次密码不一致，请重新输入！</span></font>');
			 $('#submit').attr({"disabled":"disabled"});
		 }
	 });
	 $("input#email").blur(function(){
		 var email_addr=$.trim($("input#email").val());
		 if (!email_addr.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
			 $('label#email_errors').html('<font color="red"><span>&times;&nbsp;&nbsp;邮箱格式不正确！</span></font>');
			 $('#submit').attr({"disabled":"disabled"});
		 }else{
			 $('label#email_errors').html('<font color="green"><span>&radic;&nbsp;&nbsp;邮箱格式正确，请提交注册信息！</span></font>');
			 va_email=true;
			 if(va_user&&va_pass&&va_pass2&&va_email){
				 $('#submit').removeAttr("disabled");
			 }else{
				 $('#submit').attr({"disabled":"disabled"});
			 }
		 }
	 }); 
	 });