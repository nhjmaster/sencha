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
			text : '패널버튼'
		}]
	});
	Ext.create("Ext.window.Window",{
		width : 300,
		height : 300,
		minWidth : 200,
		minHeight : 200,
		autoShow : true,
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
		}],
		modal : true
		//resizable : false
	});
})