(function(){
	"use strict";
	function preventDefault(ev) {
		ev.preventDefault();
	}
	document.addEventListener('touchmove', preventDefault, false);

	var checkbox = NE('#checkbox'),
		oCheckwrap = NE('#checkwrap'),
		loading = document.getElementById('loading'),
		tip = document.getElementById('tip'),
		check = document.getElementById('check')
		;
	var isCheck = false;

	checkbox.bind("click",function(){
		if(!isCheck){
			oCheckwrap.hide();
			loading.style.display = "block";
			setTimeout(function(){
				loading.style.display = "none";
				check.style.display = "block";
				tip.innerHTML = "I am not a robot!";
			},3000)
			isCheck = true;
		}
	});
	NE(".submit").bind("click",function(){
		if(isCheck){
			alert("提交成功");
			window.location.reload();
		}else{
			alert("请点击验证")
		}
	})
})();