<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title></title>
    <meta charset="utf-8">
    <script type="text/javascript" src="/Public/ext/ext-all.js"></script>
    <link rel="stylesheet" type="text/css" href="/Public/ext/resources/css/ext-all1.css" />
    <script type="text/javascript" src="/Public/ext/locale/ext-lang-zh_CN.js"></script>
    <script src="/Public/App/Login.js?dt=<?php echo ($dt); ?>" type="text/javascript"></script>

</head>
<body background="/Public/background.jpg" style="background-size: cover">
<script type="text/javascript">
    Ext.onReady(function () {
		var login = Ext.create('BILL.Login');
		// app.add(Ext.create("BILL.List"));

        login.show();
 
    });
</script>

</body>
</html>