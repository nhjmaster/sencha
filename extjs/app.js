Ext.onReady(function(){ // jQuery의 on ready
// 팝업 Ext.window.Window
//	var win = Ext.create("Ext.window.Window");
//	win.show();
	Ext.create("Ext.panel.Panel",{
		border : true,
		width : 300,
		height : 300,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'button',
			text : '패널버튼',
			handler : function(btn){
				var win = Ext.create("Ext.window.Window",{
							width : 300,
							height : 300,
							title : "window Title",
							items : [{
								xtype : 'button',
								text : '버튼',
								listeners : {
									click : function(btn){
										Ext.MessageBox.show({
											title : '제목',
											msg : '내용 입니다.',
											icon : Ext.MessageBox.ERROR,
											//buttons : Ext.MessageBox.YESNOCANCEL,
											buttonText : {
												ok : '오케이',
												no : '노노',
												yes : '예스',
												cancel : '캔슬'
											},
											fn : function (button){
												if(button == "ok"){
													console.log("ok선택");
												}
											}
										})
									}
								}
							},{
								xtype : 'button',
								text : '닫기',
								listeners : {
									click : function(btn){
										console.log("닫기");
									}
								}
							}],
				});
				win.show();
			}
		}]
	});
//	Ext.create("Ext.window.Window",{
//		width : 300,
//		height : 300,
//		minWidth : 200,
//		minHeight : 200,
//		maxWidth : 400,
//		maxHeight : 400,
//		autoShow : true, //자동으로 팝업 띄우기
//		title : "window Title",
//		items : [{
//			xtype : 'button',
//			text : '버튼',
//			listeners : {
//				click : function(btn){
//					Ext.MessageBox.show({
//						title : '제목',
//						msg : '내용 입니다.',
//						icon : Ext.MessageBox.ERROR,
//						//buttons : Ext.MessageBox.YESNOCANCEL,
//						buttonText : {
//							ok : '오케이',
//							no : '노노',
//							yes : '예스',
//							cancel : '캔슬'
//						},
//						fn : function (button){
//							if(button == "ok"){
//								console.log("ok선택");
//							}
//						}
//					})
//				}
//			}
//		},{
//			xtype : 'button',
//			text : '닫기',
//			listeners : {
//				click : function(btn){
//					getClosable : true
//				}
//			}
//		}],
//		//modal : true,
//		//maximizable : true // 최대화
//		//closable : false - 팝업 x 표시 제거
//		//resizable : false - 사이즈조절여부
//	});
})