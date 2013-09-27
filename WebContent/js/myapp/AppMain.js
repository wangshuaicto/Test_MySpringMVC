Ext.Loader.setConfig({
			enabled : true
		});
Ext.Loader.setPath('Ext.ux', '/Test_MySpringMVC/js/myapp');// 按照这个urlpattern去请求服务器
Ext.require('Ext.ux.Spotlight');
Ext.require(['Ext.form.*', 'Ext.tip.QuickTipManager']);
Ext.application({
			name : 'HelloExt',
			launch : function() {

				var spot = Ext.create('Ext.ux.Spotlight', {
							easing : 'easeOut',
							duration : 300
						});

				var mywindow = Ext.create('Ext.window.Window', {
							id : 'xxx',
							draggable : false,
							resizable : false,
							title : '请登录',
							titleAlign : 'center',
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [panel],
							buttons : [{
										text : '登录'
									}, {
										text : '退出'
									}],
							closable : false
						});
				mywindow.show();
				// spot.show('xxx'); 动画效果
				/*
				 * Ext.WindowManager.onWindowResize(function(width,height) {
				 * alert(); if (mywindow) {
				 * mywindow.setHeight(document.body.clientHeight 0.8);
				 * mywindow.setHeight(document.body.clientWidth 0.8);
				 * mywindow.center(); } });
				 */
				Ext.EventManager.onWindowResize(function(width, height) {
							if (mywindow) {
								mywindow.center();
							}
						});
			}
		});

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>', win;
var panel = new Ext.create('Ext.form.Panel', {
			id : 'yyy',
			baseCls : ' x-plain',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [{
						xtype : 'textfield',
						fieldLabel : '用户名',
						afterLabelTextTpl : required,
						vtype : 'email',
						allowBlank : false
					}, {
						xtype : 'textfield',
						fieldLabel : '密码',
						afterLabelTextTpl : required,
						inputType : 'password',
						allowBlank : false
					}, {
						xtype : 'checkboxfield',
						boxLabel : '记住密码',
						align:'right'
					}]
		});