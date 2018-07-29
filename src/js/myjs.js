$(function() {
	$("#tj").click(function() {
		var userName1 = Boolean($("#user").val().length);
		var userName2 = Boolean($("#name").val().length);
		var userName3 = Boolean($("#pwd").val().length);
		var userName4 = Boolean($("#gro").val().length);
		var check = false;
		if(!userName1) {
			$("#user_01").html("请输入用户名！");
			check = true;
		} else {
			$("#user_01").html("");
		}
		if(!userName2) {
			$("#name_01").html("请输入姓名！");
			check = true;
		} else {
			$("#name_01").html("");
		}
		if(!userName3) {
			$("#pwd_01").html("请输入密码！");
			check = true;
		} else {
			$("#pwd_01").html("");
		}
		if(!userName4) {
			$("#gro_01").html("请先创建用户组！");
			check = true;
		} else {
			$("#gro_01").html("");
		}
		var date_before = $("#end").val();
		var date_after = $("#start").val();
		if(date_after != "" && date_before != "") {
			var d1 = new Date(date_after.replace(/\-/g, "\/"));
			var d2 = new Date(date_before.replace(/\-/g, "\/"));
			if(d1 > d2) {
				$("#end_01").html("开始时间不能在截止时间之后!");
				check = true;
			} else {
				$("#end_01").html("");
			}
		}
		var phoneNo = $("#phone").val();
		if(phoneNo != "") {
			if(!(phoneNo.length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phoneNo))) {
				$("#phone_01").html("手机号格式不对！");
				check = true;
			} else {
				$("#phone_01").html("");
			}
		}
		var idCardNo = $("#identity").val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(idCardNo != "" && !reg.test(idCardNo)) {
			$("#identity_01").html("请输入合法的身份证号码！");
			check = true;
		} else {
			$("#identity_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj").submit();
		}
	})
	$("#tj_01").click(function() {
		var userName1 = Boolean($("#user2").val().length);
		var userName2 = Boolean($("#name2").val().length);
		var userName3 = Boolean($("#pwd2").val().length);
		var userName4 = Boolean($("#gro2").val().length);
		var check = false;
		if(!userName1) {
			$("#user2_01").html("请输入用户名！");
			check = true;
		} else {
			$("#use2r_01").html("");
		}
		if(!userName2) {
			$("#name2_01").html("请输入姓名！");
			check = true;
		} else {
			$("#name2_01").html("");
		}
		if(!userName3) {
			$("#pwd2_01").html("请输入密码！");
			check = true;
		} else {
			$("#pwd2_01").html("");
		}
		if(!userName4) {
			$("#gro2_01").html("请先创建用户组！");
			check = true;
		} else {
			$("#gro2_01").html("");
		}
		var date_before = $("#end2").val();
		var date_after = $("#start2").val();
		if(date_after != "" && date_before != "") {
			var d1 = new Date(date_after.replace(/\-/g, "\/"));
			var d2 = new Date(date_before.replace(/\-/g, "\/"));
			if(d1 > d2) {
				$("#end2_01").html("开始时间不能在截止时间之后!");
				check = true;
			} else {
				$("#end2_01").html("");
			}
		}
		var phoneNo = $("#phone2").val();
		if(phoneNo != "") {
			if(!(phoneNo.length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phoneNo))) {
				$("#phone2_01").html("手机号格式不对！");
				check = true;
			} else {
				$("#phone2_01").html("");
			}
		}
		var idCardNo = $("#identity2").val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(idCardNo != "" && !reg.test(idCardNo)) {
			$("#identity2_01").html("请输入合法的身份证号码！");
			check = true;
		} else {
			$("#identity2_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj_01").submit();
		}
	})

	$("#tj01").click(function() {
		var zu_name = Boolean($("#zu_name").val().length);
		var marker = Boolean($("#marker").val().length);
		var check = false;
		if(!zu_name) {
			$("#zu_name_01").html("请输入组名称！");
			check = true;
		} else {
			$("#zu_name_01").html("");
		}
		if(!marker) {
			$("#marker_01").html("请输入组标识！");
			check = true;
		} else {
			$("#marker_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj01").submit();
		}
	})
	$("#tj01_01").click(function() {
		var zu_name = Boolean($("#zu_name2").val().length);
		var marker = Boolean($("#marker2").val().length);
		var check = false;
		if(!zu_name) {
			$("#zu_name2_01").html("请输入组名称！");
			check = true;
		} else {
			$("#zu_name2_01").html("");
		}
		if(!marker) {
			$("#marker2_01").html("请输入组标识！");
			check = true;
		} else {
			$("#marker2_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj01_01").submit();
		}
	})

	$("#tj02").click(function() {
		var biaoti = Boolean($("#biaoti").val().length);
		var lianjie = Boolean($("#lianjie").val().length);
		var check = false;
		if(!biaoti) {
			$("#biaoti_01").html("请输入标题！");
			check = true;
		} else {
			$("#biaoti_01").html("");
		}
		if(!lianjie) {
			$("#lianjie_01").html("请输入url！");
			check = true;
		} else {
			$("#lianjie_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj02").submit();
		}
	})
	$("#tj02_01").click(function() {
		var biaoti = Boolean($("#biaoti2").val().length);
		var lianjie = Boolean($("#lianjie2").val().length);
		var check = false;
		if(!biaoti) {
			$("#biaoti2_01").html("请输入标题！");
			check = true;
		} else {
			$("#biaoti2_01").html("");
		}
		if(!lianjie) {
			$("#lianjie2_01").html("请输入url！");
			check = true;
		} else {
			$("#lianjie2_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj02_01").submit();
		}
	})

	$("#tj03").click(function() {
		var xuhao = Boolean($("#xuhao").val().length);
		var resorce = Boolean($("#resorce").val().length);
		var re_marker = Boolean($("#re_marker").val().length);
		var check = false;
		if(!xuhao) {
			$("#xuhao_01").html("请输入序号！");
			check = true;
		} else {
			$("#xuhao_01").html("");
		}
		if(!resorce) {
			$("#resorce_01").html("请输入资源组名称！");
			check = true;
		} else {
			$("#resorce_01").html("");
		}
		if(!re_marker) {
			$("#re_marker_01").html("请输入资源组标识！");
			check = true;
		} else {
			$("#re_marker_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj03").submit();
		}
	})
	$("#tj03_01").click(function() {
		var xuhao = Boolean($("#xuhao2").val().length);
		var resorce = Boolean($("#resorce2").val().length);
		var re_marker = Boolean($("#re_marker2").val().length);
		var check = false;
		if(!xuhao) {
			$("#xuhao2_01").html("请输入序号！");
			check = true;
		} else {
			$("#xuhao2_01").html("");
		}
		if(!resorce) {
			$("#resorce2_01").html("请输入资源组名称！");
			check = true;
		} else {
			$("#resorce2_01").html("");
		}
		if(!re_marker) {
			$("#re_marker2_01").html("请输入资源组标识！");
			check = true;
		} else {
			$("#re_marker2_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj03_01").submit();
		}
	})

	$("#tj04").click(function() {
		var yhm = Boolean($("#yhm").val().length);
		var pwd1 = Boolean($("#pwd1").val().length);
		var jibie = Boolean($("#jibie").val().length);
		var name1 = Boolean($("#name1").val().length);
		var check = false;
		if(!yhm) {
			$("#yhm_01").html("请输入用户名！");
			check = true;
		} else {
			$("#yhm_01").html("");
		}
		if(!pwd1) {
			$("#pwd1_01").html("请输入密码！");
			check = true;
		} else {
			$("#pwd1_01").html("");
		}
		if(!jibie) {
			$("#jibie_01").html("请选择管理员级别！");
			check = true;
		} else {
			$("#jibie_01").html("");
		}
		if(!name1) {
			$("#name1_01").html("请输入姓名");
			check = true;
		} else {
			$("#name1_01").html("");
		}
		var phoneNo = $("#phone1").val();
		if(phoneNo != "") {
			if(!(phoneNo.length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phoneNo))) {
				$("#phone1_01").html("手机号格式不对！");
				check = true;
			} else {
				$("#phone1_01").html("");
			}
		}
		var idCardNo = $("#identity1").val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(idCardNo != "" && !reg.test(idCardNo)) {
			$("#identity1_01").html("请输入合法的身份证号码！");
			check = true;
		} else {
			$("#identity1_01").html("");
		}
		if(check) {
			return false;
		} else {
			$("#tj04").submit();
			alert("保存成功！");

		}
	})

	$("#cx").click(function() {
		var date_before = $("#end1").val();
		var date_after = $("#start1").val();
		var check = false;

		if(date_after != "" && date_before != "") {
			var d1 = new Date(date_after.replace(/\-/g, "\/"));
			var d2 = new Date(date_before.replace(/\-/g, "\/"));
			if(d1 > d2) {
				$("#end1_01").html("开始时间不能在截止时间之后!");
				check = true;
			} else {
				$("#end1_01").html("");
			}
		}
		if(check) {
			return false;
		} else {
			$("#cx").submit();
		}
	})

	//	$("#qr").click(function() {
	//		var pwd1 = $("#original_pwd").val();
	//		var pwd2 = $("#new_pwd").val();
	//		var pwd3=$("#new_repwd").val();
	//		var check = false;
	//		if(!pwd1) {
	//			$("#null_original_pwd").html("请输入原密码！");
	//			check = true;
	//		} else {
	//			$("#null_original_pwd").html("");
	//		}
	//		if(!pwd2) {
	//			$("#null_new_pwd").html("请输入新密码！");
	//			check = true;
	//		} else {
	//			$("#null_new_pwd").html("");
	//		}
	//		if(!pwd3) {
	//			$("#null_new_repwd").html("请再次输入新密码！");
	//			check = true;
	//		} else {
	//			if(pwd2 != pwd3) {
	//			$("#null_new_repwd").html("密码不一致！");
	//			check = true;
	//		} else {
	//			$("#null_new_repwd").html("");
	//		}			
	//		}		
	//		if(check) {
	//			return false;
	//		} else {
	//			alert("修改成功！");
	//		}
	//	})
	var check = false;
	$("#demo-form2 :input").blur(function() {
		if($(this).is("#original_pwd")) {
			if($.trim(this.value) == "") {
				$("#null_original_pwd").html("请输入原密码！");
				check = false;
			} else {
				$("#null_original_pwd").html("");
				check = true;
			}
		}
		if($(this).is("#new_pwd")) {
			if($.trim(this.value) == "") {
				$("#null_new_pwd").html("请输入新密码！");
				check = false;
			} else {
				$("#null_new_pwd").html("");
				check = true;
			}
		}
		var pwd2 = $("#new_pwd").val();
		var pwd3 = $("#new_repwd").val();
		if($(this).is("#new_repwd")) {
			if($.trim(this.value) == "") {
				$("#null_new_repwd").html("请再次输入新密码！");
				check = false;
			} else {
				if(pwd2 != pwd3) {
					$("#null_new_repwd").html("密码不一致！");
					check = false;

				} else {
					$("#null_new_repwd").html("");
					check = true;
				}

			}
		}
	}).keyup(function() {
		//triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
		$(this).triggerHandler("blur");
	})
	//点击重置按钮时，触发文本框的失去焦点事件

	$("#qr").click(function() {
		//trigger 事件执行完后，浏览器会为submit按钮获得焦点
		$("#demo-form2 .required:input").trigger("blur");
		if(!check) {
			return false;
		}
		alert("修改成功！");
	});
})

//分页代码
//$(function() {
//	var TableData = function() {
//
//		var runDataTable = function() {
//			var oTable = $('.sample_1').dataTable({
//				"aoColumnDefs": [{
//					"aTargets": [0]
//				}],
//				"aaSorting": [
//					[1, 'asc']
//				],
//				"aLengthMenu": [
//					[5, 10, 15, 20, -1],
//					[5, 10, 15, 20, "All"] // change per page values here  
//				],
//				// 设置默认显示多少条信息  
//				"iDisplayLength": 10,
//				"oLanguage": {
//					"sProcessing": "正在加载中......",
//					"sLengthMenu": "每页显示 _MENU_ 条记录",
//					"sZeroRecords": "对不起，查询不到相关数据！",
//					"sEmptyTable": "表中无数据存在！",
//					"sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
//					"sInfoFiltered": "数据表中共为 _MAX_ 条记录",
//					"sSearch": "搜索",
//					"oPaginate": {
//						"sFirst": "首页",
//						"sPrevious": "上一页",
//						"sNext": "下一页",
//						"sLast": "末页"
//					}
//				} //多语言配置  
//			});
//			$('#sample_1_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
//
//			$('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small");
//
//			$('#sample_1_column_toggler input[type="checkbox"]').change(function() {
//
//				var iCol = parseInt($(this).attr("data-column"));
//				var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
//				oTable.fnSetColumnVis(iCol, (bVis ? false : true));
//			});
//		};
//		return {
//
//			init: function() {
//				runDataTable();
//			}
//		};
//	}();
//
//	TableData.init(); //执行  
//
//})

//添加用户到列表
$("#add_userConfig").click(function() {
	var username = $("#username").val();
	var password = $("#password").val();
	var group = $("#group").val();
	var name = $("#name").val();
	var date_before = $("#date_end").val();
	var date_after = $("#date_start").val();
	var phoneNo = $("#phone").val();
	var idCardNo = $("#identity").val();
	var check = false;
	if(username == "") {
		$("#null_username").html("请输入用户名！");
		check = true;
	} else {
		$("#null_username").html("");
	}
	if(name == "") {
		$("#null_name").html("请输入姓名！");
		check = true;
	} else {
		$("#null_name").html("");
	}
	if(password == "") {
		$("#null_password").html("请输入密码！");
		check = true;
	} else {
		$("#null_password").html("");
	}
	if(group == null || group == "") {
		$("#null_group").html("请先创建用户组！");
		check = true;
	} else {
		$("#null_group").html("");
	}
	if(date_after != "" && date_before != "") {
		var d1 = new Date(date_after.replace(/\-/g, "\/"));
		var d2 = new Date(date_before.replace(/\-/g, "\/"));
		if(d1 > d2) {
			$("#error_date").html("开始时间不能在截止时间之后!");
			check = true;
		} else {
			$("#error_date").html("");
		}
	}
	if(phoneNo != "") {
		if(!(phoneNo.length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phoneNo))) {
			$("#error_phone").html("手机号格式不对！");
			check = true;
		} else {
			$("#error_phone").html("");
		}
	}
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(idCardNo != "" && !reg.test(idCardNo)) {
		$("#error_idno").html("请输入合法的身份证号码！");
		check = true;
	} else {
		$("#error_idno").html("");
	}
	if(check) {
		return false;
	} else {
		$.post("user/insertUserConfig.action", $("#form_addUserConfig").serialize(), function(data) {
			var result = eval("(" + data + ")");
			if(result.success == "success") {
				$("#searchBtn").click();
			} else {
				alert("添加用户失败" + "\r\n" + result.reason);
			}
		});
	}
})

$(function() {
	//获取class为caname的元素 
	$(".edit_user").each(function(i) {
		$(this).click(function() {
			//编辑用户
			var userId = this.name;
			var userId2 = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var username = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			var userGroup = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(3)").text();
			var name = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(4)").text();
			var phoneNo = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(5)").text();
			var idCardNo = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(6)").text();
			var pwd = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(7)").text();
			var start = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(8)").text();
			var end = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(9)").text();
			$("input[id=user2]").val(username);
			$("input[id=name2]").val(name);
			$("input[id=pwd2]").val(pwd);
			$("input[id=gro2]").val(userGroup);
			$("input[id=start2]").val(start);
			$("input[id=end2]").val(end);
			$("input[id=phone2]").val(phoneNo);
			$("input[id=identity2]").val(idCardNo);
			//编辑组
			var groupName = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var groupMarker = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			var describe = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(3)").text();
			$("input[id=zu_name2]").val(groupName);
			$("input[id=marker2]").val(groupMarker);
			$("input[id=describe]").val(describe);
			//编辑接口
			var resource = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var resourceVal = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			$("input[id=resource]").val(resource);
			$("textarea[id=resource_val]").val(resourceVal);
			//编辑资源		
			var hide = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var title = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			var userrl = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(3)").text();
			var resGroup = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(4)").text();
			$("input[id=hide]").val(hide);
			$("input[id=biaoti2]").val(title);
			$("input[id=lianjie2]").val(userrl);
			$("#heard").val(resGroup);
			//编辑资源组
			var Number = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var resourceName = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			var resourceMaeker = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(3)").text();
			$("input[id=xuhao2]").val(Number);
			$("input[id=resorce2]").val(resourceName);
			$("input[id=re_marker2]").val(resourceMaeker);

			var Account = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(1)").text();
			var Grade = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(2)").text();
			var Name = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(3)").text();
			var Password = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(4)").text();
			var Phone = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(5)").text();
			var Identity = $("#tbody_userConfig tr[name=" + userId + "] td:nth-child(6)").text();
			$("#yhm").val(Account);
			$("#jibie").val(Grade);
			$("#name1").val(Name);
			$("#pwd1").val(Password);
			$("#phone1").val(Phone);
			$("#identity1").val(Identity);
		})
	})
	$("#tj_01").click(function() {
		$.post("user/updateUserConfig.action", $("#from_editUser").serialize(), function(data) {
			var result = eval("(" + data + ")");
			if(result.success == "success") {
				//用户更新成功
			} else {
				alert("提交失败" + "\r\n" + result.reason);
			}
		})
	})
})