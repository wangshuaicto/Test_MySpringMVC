Ext.Loader.setConfig({
			enabled : true
		});
Ext.Loader.setPath('Ext.ux', '/Test_MySpringMVC/js/myapp');// 按照这个urlpattern去请求服务器
Ext.require('Ext.ux.Spotlight');
Ext.Loader.setPath('MyWork.test', '/Test_MySpringMVC/js/myapp');
Ext.require('MyWork.test.Person');
Ext.Loader.setPath('My.own', '/Test_MySpringMVC/js/myapp');
Ext.require('My.own.Window');
Ext.require('My.own.WindowBottomBar');
Ext.require(['Ext.form.*', 'Ext.tip.QuickTipManager']);
Ext.application({
			name : 'HelloExt',
			launch : function() {
				/** **********************TEST****************************** */
				var person = Ext.create('MyWork.test.Person', 'SongChong');
				person.eat('JB');
				var test = Ext.create('My.own.Window', {
							Title : 'SongChong',
							bottomBar : {
								height : 60
							}
						});
				alert(test.getTitle());
				test.setTitle("艹尼玛");
				alert(test.getTitle());
				test.setTitle(null);
				test.setBottomBar({
							height : 100
						});
				alert(test.getBottomBar().getHeight());
				/** **********************TEST****************************** */
				var spot = Ext.create('Ext.ux.Spotlight', {
							easing : 'easeOut',
							duration : 300
						});

				var mywindow = Ext.create('Ext.window.Window', {
							id : 'xxx',
							draggable : true,
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
						align : 'right'
					}]
		});