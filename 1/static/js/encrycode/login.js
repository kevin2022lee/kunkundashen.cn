$(document).ready(function() {
	var va_username=false;
	var va_password=false;
	$('input#logonname').blur(function(){
		var logonname=$.trim($('input#logonname').val());
		var ulen=logonname.length;
		if(ulen<6){
			$('label#logonname_errors').html('<font color="red"><span>&times;用户名少于6个字符</span></font>');
			va_username=false;
		}else{
			  $.get("http://{{ localip }}/MyBlog/checkuser/?username="+logonname,function(data,status){
				     if (data == "null"){
				      $('label#logonname_errors').html('<font color="red"><span>&times;不存在该用户</span></font>');	
				      va_username=false;
				     }else{
				      $('label#logonname_errors').html('<font color="green"><span>&radic;</span></font>');
				      va_username=true;				    	 
				     }});
		  }
	});
	 $("input#logonpass").blur(function(){
		 var logonpass = $.trim($("input#logonpass").val());
		 var llen =logonpass.length;
		 if(llen<6){
			 $('label#logonpass_errors').html('<font color="red"><span>&times;密码少于6个字符！</span></font>');
			 va_password=false;
		 }else{
			 $('label#logonpass_errors').html('<font color="green"><span>&radic;</span></font>');
			 va_password=true;
		 }
	 });
	 $("input#logon").click(function(pre){
		if(va_username&&va_password){
			
		}else{
			if(va_username){
				alert("请输入密码!");
				$("input#logonpass").focus();
				pre.preventDefault();//阻止表单提交
			}else if(va_password){
				alert("请输入正确的用户名!");
				$("input#logonname").focus();
				pre.preventDefault();//阻止表单提交
			}else{
				alert("用户名和密码不能为空!");
				$("input#logonname").focus();
				pre.preventDefault();//阻止表单提交
			}
		} 
	 });
});