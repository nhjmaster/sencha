Ext.onReady(function(){ // jQuery의 on ready
//	Extjs 6강 버튼 종류 알아보기
//	(https://www.youtube.com/watch?v=qF8AKTTOIG8&list=PL2MM0GtSmRHlljMqMwZ6FPWK3uy-Hg8Nm&index=9)
//	기본버튼
//	크기별버튼
//	아이콘버튼
//	아이콘 + 텍스트버튼
//	토글버튼
//  메뉴버튼
//	분할된 메뉴버튼
//	그룹 버튼
	Ext.create("Ext.container.Viewport",{
		layout : 'border',
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'panel',
			height : 100,
			title : 'title',
			header : false,
			region : 'north',
			items : [{
				xtype : 'toolbar',
				items : [{
					xtype : 'button',
					text : 'File',
					menu : [{
						text : 'New',
						iconCls : 'x-fa fa-file'
					},{
						text : 'Open File'
					},{
						text : 'Close'
					}]
				},{
					xtype : 'splitbutton',
					text : 'Edit',
					menu : [{
						text : 'Undo Typing'
					},{
						text : 'Undo'
					},{
						text : 'Cut'
					}]					
				},{
					xtype : 'button',
					text : 'Source'
				},{
					xtype : 'segmentedbutton',
					allowMultiple : true, // 다중선택
					items : [{
						xtype : 'button',
						text : 'Refactor'
					},{
						xtype : 'button',
						text : 'Navigator'
					},{
						xtype : 'button',
						text : 'Search'
					}]
				},{
					
				}]
			},{
				xtype : 'toolbar',
				items : [{
					xtype : 'button',
					iconCls : 'x-fa fa-plus'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-floppy-o'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-desktop'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-play',
					scale : 'small'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-pause',
					scale : 'medium'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-stop',
					scale : 'large',
					enableToggle : true
				}]
			}]
		},{
			xtype : 'panel',
			width : 150,
			split : true,
			title : 'Project Explorer',
			region : 'west'
		},{
			xtype : 'panel',
			border : true,
			title : 'test',
			header : false,
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				region : 'center',
				title : 'app.js',
				flex : 2
			},{
				xtype : 'panel',
				region : 'south',
				title : 'Servers',
				flex : 1
			}]			
		}]
	});
})

