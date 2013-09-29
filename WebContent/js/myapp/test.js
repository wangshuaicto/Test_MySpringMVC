Ext.onReady(function() {
/*
			Ext.create('Ext.panel.Panel', {
						renderTo : Ext.getBody(),
						width : 400,
						height : 300,
						title : 'Container Panel',
						items : [{
									xtype : 'panel',
									title : 'Child Panel 1',
									height : 100,
									width : '75%'
								}, {
									xtype : 'panel',
									title : 'Child Panel 2',
									height : 100,
									width : '75%'
								}]
					});
					*/
	/*
	Ext.create('Ext.panel.Panel', {
						renderTo : Ext.getBody(),
						width : 400,
						height : 200,
						title : 'Container Panel',
						layout : 'column',
						items : [{
									xtype : 'panel',
									title : 'Child Panel 1',
									height : 100,
									columnWidth : 0.5
								}, {
									xtype : 'panel',
									title : 'Child Panel 2',
									height : 100,
									columnWidth : 0.5
								}]
					});
					*/
	/*
	
	var childPanel1 = Ext.create('Ext.panel.Panel', {
						title : 'Child Panel 1',
						html : 'A Panel'
					});

			var childPanel2 = Ext.create('Ext.panel.Panel', {
						title : 'Child Panel 2',
						html : 'Another Panel'
					});

			Ext.create('Ext.container.Viewport', {
						items : [childPanel1, childPanel2]
					});
					*/
	
	var tabPanel = Ext.create('Ext.tab.Panel', {
						renderTo : Ext.getBody(),
						height : 100,
						width : 200,
						items : [{
							// Explicitly define the xtype of this Component
							// configuration.
							// This tells the Container (the tab panel in this
							// case)
							// to instantiate a Ext.panel.Panel when it deems
							// necessary
							xtype : 'panel',
							title : 'Tab One',
							html : 'The first tab',
							listeners : {
								render : function() {
									Ext.MessageBox.alert('Rendered One',
											'Tab One was rendered.');
								}
							}
						}, {
							// this component configuration does not have an
							// xtype since 'panel' is the default
							// xtype for all Component configurations in a
							// Container
							title : 'Tab Two',
							html : 'The second tab',
							listeners : {
								render : function() {
									Ext.MessageBox.alert('Rendered One',
											'Tab Two was rendered.');
								}
							}
						}]
					});
			tabPanel.add({
							// this component configuration does not have an
							// xtype since 'panel' is the default
							// xtype for all Component configurations in a
							// Container
							title : 'Tab Three',
							html : 'The second tab',
							listeners : {
								render : function() {
									Ext.MessageBox.alert('Rendered One',
											'Tab Two was rendered.');
								}
							}
						});
		});