Ext.onReady(function(){ // jQuery의 on ready
	Ext.create("Ext.container.Viewport",{
		renderTo: Ext.getBody(),
		layout : 'border',
		border : true,
		items : [{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'north',
			title : '패널 north',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'center',
				title : 'center type'
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'west',
				title : 'west type'
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'east',
				title : 'east type'
			}]
			
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'center',
			title : '패널 center'
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'west',
			title : '패널 west'
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'east',
			title : '패널 east'
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'south',
			title : '패널 south'
		}]
	})
})

// region 속성 north, south, center, east, west