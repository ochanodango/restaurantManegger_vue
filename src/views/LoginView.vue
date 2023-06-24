<template>
	<div id="body" >
		<el-card class="login_card">
			<login></login>
			<span >注册</span>
			<span style="float: right;">忘记密码</span>
		</el-card>
	</div>
	
</template>

<script setup>
import login from "../components/Login.vue"


</script>

<style>
#body{
	width: 100%;
	height: 100%;
	position:fixed;
	top: 0;
	left: 0;
	background-color: antiquewhite;
}	

.login_card{
	width:400px;
	margin:0 auto;
	margin-top: 10%;
	opacity: 0.7;
}
</style>