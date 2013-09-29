Ext.define('My.own.Window', {
			isWindow : true,
			config : {
				Title : 'Default Title',
				bottomBar : {
					height : 50,
					resizable : false
				}
			},
			constructor : function(config) {
				this.initConfig(config);
			},
			applyTitle : function(title) {
				if (!Ext.isString(title) || title.length == 0) {
					Ext.Msg
							.alert("Error: Title must be a valid non-empty string");
				} else {
					return title;
				}
			},
			applyBottonBar : function(bottomBar) {
				if (bottomBar) {
					if (!this.bottomBar) {
						return Ext.create('My.own.WindowBottomBar', bottomBar);
					} else {
						this.bootomBar.setConfig(bottomBar);
					}
				}
			}
		});