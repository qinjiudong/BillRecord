Ext.define('BILL.List', {
    extend: "Ext.grid.Panel",
    initComponent: function () {
        var me = this;
        Ext.define("list", {
            extend: "Ext.data.Model",
            fields: ["id", "date", "out", "cate", "year", "month", "remark"]
        });

        var store = Ext.create("Ext.data.Store", {
            model: "list",
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/Home/Index/billList',
            },
        });

        Ext.apply(me, {
            title: '随手记',
            store: store,
            tbar: [{xtype: 'button', text: '新增', handler: me.addBill, scope: me}],
            forceFit: true,
            columns: [
                {header: '编号', dataIndex: 'id', menuDisabled: true, flex: 0.3,},
                {header: '日期', dataIndex: 'date', menuDisabled: true, flex: 1},
                {header: '支出', dataIndex: 'out', menuDisabled: true, flex: 0.5,},
                {header: '分类', dataIndex: 'cate', menuDisabled: true, flex: 0.5},
                {header: '年', dataIndex: 'year', menuDisabled: true, flex: 0.5},
                {header: '月', dataIndex: 'month', menuDisabled: true, flex: 0.2},
                {header: '备注', dataIndex: 'remark', menuDisabled: true, flex: 1},
            ],
        });
        me.callParent(arguments);
    },
    addBill: function () {
        var win = Ext.create('BILL.AddBill',{parentForm: this});
        
        win.show();
    },
  
    refreshList:function(){
    	var me = this;
    	var store = me.getStore();
    	store.reload();
    },
});