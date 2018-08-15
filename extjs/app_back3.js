Ext.onReady(function(){ // jQuery의 on ready
	Ext.create("Ext.container.Viewport",{
		// layout : 'fit' , 'border'
		// layout : 'center', 'absolute', 'accordion', 'card', hbox/vbox 
		renderTo: Ext.getBody(),
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'hbox',
			items : [{
				xtype : 'button',
				text : '등록'
			},{
				xtype : 'button',
				text : '목록'
			}]
		}]
	})
})

// region 속성 north, south, center, east, west