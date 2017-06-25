Ext.define('BILL.AddBill', {
    extend: "Ext.window.Window",
    config: {
        parentForm: null,
    },    
    initComponent: function () {
        var me = this;
        Ext.define('CateList',{
        	extend: 'Ext.data.Model',
        	fields:['id','name']
        });

        me.form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            defaultType: 'textfield',
            url: '/Home/Index/saveBill',
            buttons: [{
                text: '重置',
                handler: function () {
                	me.form.getForm().reset();
                }
            }, {
                text: '保存',
                formBind: true, 
                //disabled: true,
                handler: function () {
                    var form = me.form.getForm();
                    if (form.isValid()) {
                        form.submit({
                            success: function (form, action) {
                                // Ext.Msg.alert('保存成功', action.result.msg);
                                form.reset();
                              
						    	var parent = me.getParentForm();
						    	parent.refreshList();                                
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert('操作失败', action.result.msg);
                            }
                        });
                    }
                }
            }],
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: '日期',
                    name: 'day',
                    format: 'Y-m-d',
                    allowBlank : false,
                },
                {
                    xtype: 'timefield',
                    fieldLabel: '时间',
                    name: 'time',
                    format: 'H:i:s',
                    allowBlank : false,
                }, {
                    xtype: 'numberfield',
                    fieldLabel: '金额',
                    name: 'out',
                    allowBlank : false,
                }, {
                    xtype: 'combo',
                    fieldLabel: '类型',
                    store: Ext.create('Ext.data.Store', {
						model: 'CateList',
						proxy: {
						 type: 'ajax',
						 url: '/Home/Index/getCate',
						
						},
						autoLoad: true
                    }),
                    value:'1',
                    editable : false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    name: 'cate',
                }, {
                    xtype: 'textfield',
                    fieldLabel: '备注',
                    name: 'remark',
                }
            ]
        });

        Ext.apply(me, {
            title: '新增',
            modal: true,
            items: [me.form]
        });
        me.callParent(arguments);
    },

});