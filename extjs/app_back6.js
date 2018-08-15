Ext.onReady(function(){ // jQuery의 on ready
	// 1. ExtJs ALERT
	//Ext.Msg.alert("타이틀","바디");
	//	Ext.Msg.confirm("타이틀","바디", function(button){
	//		if(button == "yes"){
	//			
	//		}else{
	//			
	//		}
	//	});
	
	/*var cnf = confirm("컨펌입니다.");
	if(cnf){
		console.log("yes");
	}else{
		console.log("no");
	}*/
	
	// Static ,toast 종류: t, tr, tl, b, br, bl
	//	Ext.toast({
	//		html : '토스트 입니다.',
	//		align : 't'
	//	}); 
	// Ext.MessageBox.종류 
	// 아이콘 상수 : QUESTION,WARNING,INFO,ERROR
	// 버튼 상수   : OK, CANCEL, OKCANCEL, YES, NO, YESNO, YESNOCANCEL
	
	Ext.MessageBox.show({
		title : '상단제목',
		msg : '몸통내용',
		//icon : Ext.MessageBox.ERROR,
		//buttons : Ext.MessageBox.YESNOCANCEL,
		buttonText : {
			ok : '오키',
			no : '노',
			yes : '예스',
			cancel : '캔슬'
		},
		fn : function (button){
			if(button == "ok"){
				console.log('ok선택');
			}
		}
	});
})