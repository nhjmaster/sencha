Ext.onReady(function(){ // jQuery의 on ready
	// 6강 컴포넌트 속성 설정 및  listner 이벤트 보는법
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		title : '6강 ExtJs title',
		renderTo : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west',
			split : true,
			collapsible : true,
			title : '좌측입니다',
			html : '<br/><p>안녕하세요</p>'
		},{
			xtype : 'panel',
			border : true,
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center',
				layout : 'center',
				items : [{
					xtype : 'button',
					text : '버튼Text 가즈아',
					listeners : {
						click : function(btn){
							alert(btn.getAutoId());
						}
					}
//					handler : function(btn){
//						alert("버튼 클릭");
//					}
				}]
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region: 'south',
				split : true
			}]
		}]
	})
})

