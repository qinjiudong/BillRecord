<?php

namespace Home\Controller;
use Think\Controller;
use Think\Model;

class IndexController extends Controller {
    public function _before_index(){

    }

    public function index(){

    	$this->assign('dt',time());
    	
    	if(session('status') == 'loginsuccess'){
    		$this->display();
    	}else{
    		$this->display('login');
    	}
        
    }   
    public function billList(){
    	$db = M();
    	$sql = "select * from bill order by id desc limit 20 ";
    	$res = $db->query($sql); 

    	$res[] = array('id'=>'合计','out'=>'');
    	$this->ajaxReturn($res);
    }  

	public function getCate(){
		$sql = "select * from cate";
		$res = M()->query($sql);
		$this->ajaxReturn($res);
	}    

	public function saveBill(){
		$data = I('request.');
		$day = I('request.day');
		$time = I('request.time');
		$data['date'] = $day.' '.$time;
		$data['year'] = substr($day,0,4);
		$data['month'] = substr($day,5,2);
		$result = M('bill')->add($data);
		$res = array('success'=>false,'msg'=>'');
		if($result){
			$res = array('success'=>true,'msg'=>'');
		}		
		$this->ajaxReturn($res);
	}

	public function login(){
		$name = I('request.name');
		$pwd = I('request.pwd');
		$res = array('success'=>false,'msg'=>'登录失败');
		if($name == 'qjd' && $pwd == '143012'){
			$res = array('success'=>true,'msg'=>'');
			session('status','loginsuccess');  
		}
    	$this->ajaxReturn($res);
        
	}		   
}