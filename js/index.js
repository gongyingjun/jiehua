function Page(){

	this.init = function(){
		var myAction;
	    $('label').click(function(){
	        $(this).find("input[type=radio]").prop("checked", true)
	        var radioId = $(this).attr('name');
	        $('label').removeAttr('class') && $(this).attr('class', 'checked');
	        // $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
	    });

	    $('.active-pick a.btn').on("click",function(){
	        var name = $(this).html();
	        var tel = $(this).attr("data-tel");
	        var add = $(this).attr("data-add");

	        $("#modal h2").html(name);
	        $("#modal .add").html("地址："+add);
	        $("#modal .tel").html("电话："+tel);

	        $("#mask").show();
	        $("#modal").show();
	    });

	    $("#modal .close").on("click", function(){
	        $(this).parent().hide();
	        $("#mask").hide();
	    });

	    $("#modal form").on("submit", function(){
	        var name = $.trim($(this).find("#name").val());
	        var tel = $.trim($(this).find("#tel").val());
	        var code = $.trim($(this).find("#code").val());

	        clearTimeout(myAction);

	        var re= /^(1[0-9]{10})$/;
	        if(name === "") {
	            $("#modal-alert").html("姓名不能为空").show();
	            // $(this).find("#name").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        } else if(!re.test(tel)) {
	            $("#modal-alert").html("手机号码格式不正确").show();
	            // $(this).find("#tel").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        } else if(code === "") {
	            $("#modal-alert").html("验证码不能为空").show();
	            // $(this).find("#code").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        }
	    });

	    $(".active-register form").on("submit", function(){
	        var name = $.trim($(this).find("#name").val());
	        var tel = $.trim($(this).find("#tel").val());
	        var add = $.trim($(this).find("#add").val());
	        // alert($('input[name="status"]:checked ').val());
	        clearTimeout(myAction);

	        var re= /^(1[0-9]{10})$/;
	        if(name === "") {
	            $("#modal-alert").html("姓名不能为空").show();
	            // $(this).find("#name").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        } else if(!re.test(tel)) {
	            $("#modal-alert").html("手机号码格式不正确").show();
	            // $(this).find("#tel").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        } else if(add === "") {
	            $("#modal-alert").html("家庭地址不能为空").show();
	            // $(this).find("#add").focus();
	            myAction = setTimeout("$('#modal-alert').hide()",2000);
	            return false;
	        }
	    })
	}
}