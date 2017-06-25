Ext.define('BILL.App', {
    constructor: function (config) {
        this.createMainUI();
    },
    createMainUI: function () {
        var me = this;
        me.vp = Ext.create("Ext.container.Viewport", {layout: "fit"});

    },
    add: function (comp) {
        this.vp.add(comp);
    },
});