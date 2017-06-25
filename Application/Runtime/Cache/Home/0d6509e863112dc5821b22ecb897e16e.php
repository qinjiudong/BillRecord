<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <title>title</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="/Public/ext/ext-all.js"></script>
    <link rel="stylesheet" type="text/css" href="/Public/ext/resources/css/ext-all1.css" />
    <script type="text/javascript" src="/Public/ext/locale/ext-lang-zh_CN.js"></script>
    <script src="/Public/App/App.js?dt=<?php echo ($dt); ?>" type="text/javascript"></script>
    <script src="/Public/App/List.js?dt=<?php echo ($dt); ?>" type="text/javascript"></script>
    <script src="/Public/App/AddBill.js?dt=<?php echo ($dt); ?>" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript">
    Ext.onReady(function () {
		var app = Ext.create('BILL.App');
		app.add(Ext.create("BILL.List")); 
    });
</script>
</body>
</html>