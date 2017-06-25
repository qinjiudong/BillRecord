// 登录界面
Ext.define("BILL.Login", {
    extend: 'Ext.window.Window',
    title: "登录 - BILL",
    modal: true,
    closable: false,
    layout: "fit",
    
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            
            items: [{
                id: "loginForm",
                xtype: "form",
                bodyPadding: 5,
                defaultType: 'textfield',
                fieldDefaults: {
                    labelWidth: 40,
                    labelAlign: "center",        
                },
                items: [{
                    id: "editLoginName",
                    fieldLabel: "用户",
                    allowBlank: false,
                    blankText: "没有输入登录名",
                    name: "name",  
                    listeners: {
                        specialkey: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                Ext.getCmp("editPassword").focus();
                            }
                        }
                    }
                }, {
                    id: "editPassword",
                    fieldLabel: "密码",
                    allowBlank: false,
                    blankText: "没有输入密码",
                    inputType: "password",
                    name: "pwd",
                    listeners: {
                        specialkey: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                if (Ext.getCmp("loginForm").getForm().isValid()) {
                                    me.onOK();
                                }
                            }
                        }
                    }
                }],
                buttons: [{
                    text: "登录",
                    formBind: true,
                    handler: me.onOK,
                    scope: me,
                    
                },{
                    text: "帮助",
                    
                    handler: function() {
                        Ext.Msg.alert('tip',"请联系123456");
                    }
                }]
            }]
        });

        me.callParent(arguments);
    },

    onOK: function () {
        var me = this;
        var f = Ext.getCmp("loginForm");
        var el = f.getEl() || Ext.getBody();
        el.mask("登录中...");
        f.getForm().submit({
            url: "Home/Index/login",
            method: "POST",
            success: function (form, action) {
               location.replace('/');
            },
            failure: function (form, action) {
    
               el.unmask();
               Ext.Msg.alert('登录失败', action.result.msg);
            }
        });
    }
});