Ext.define('MyWork.test.Person', {
			name : 'Unknow',
			constructor : function(name) {
				if (name) {
					this.name = name;
				}
			},
			eat : function(footType) {
				alert(this.name + " is eating " + footType);
			}
		});
