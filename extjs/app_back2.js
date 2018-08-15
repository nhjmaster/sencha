Ext.onReady(function(){ // jQuery의 on ready
	Ext.create("Ext.container.Viewport",{
		renderTo: Ext.getBody(),
		layout : 'border',
		border : true,
		items : [{
			xtype : 'panel',
			flex : 1,
			region : 'north',
			layout : 'border',
			items : [{
				xtyep : 'panel',
				flex : 1,
				border : true,
				region : 'west'
			},{
				xtyep : 'panel',
				flex : 1,
				border : true,
				region : 'center'
			}]
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'center'
		}]
	})
})

// region 속성 north, south, center, east, west