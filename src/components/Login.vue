<template>
  <el-form
    ref="formRef"
    :model="loginForm"
    label-width="auto"
	hide-required-asterisk=true
    class="demo-dynamic"
	style="text-align: center;"
  >
	<h3 >登录</h3>
    <el-form-item
      prop="name"
      label="用户名"
      :rules="[
        {
          required: true,
          message: '请输入用户名！！',
          trigger: 'blur',
        },
      ]"
    >
      <el-input v-model="loginForm.name" />
    </el-form-item>
	
	<el-form-item
	  prop="password"
	  label="密码"
	  :rules="[
	    {
	      required: true,
	      message: '密码！！',
	      trigger: 'blur',
	    },
	  ]"
	>
	  <el-input v-model="loginForm.password" type="password" @keyup.enter.native="submitForm(formRef)"/>
	</el-form-item>
	
    
    <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
    
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import axios from 'axios'
import router from '../router'

const formRef = ref<FormInstance>()
const loginForm = reactive<{
  name: string,
  password: string,
}>({
  name: '',
  password: '',
})


const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  
  axios.get('api/admin/login', 
	  { params: { id: loginForm.name ,password: loginForm.password} }
      
    )
    .then(function (response) {
      console.log(response);
	  if(response.data.code == 200){
		  router.replace('/home')
	  }
	  else{
		console.log("error");
	  }
    })
    .catch(function (error) {
      console.log(error);
    });
	
	
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>
