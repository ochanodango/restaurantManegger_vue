<template>
	<h1 style="text-align: center;">订单表</h1>
	<el-table
	  :data="tableData"
	  style="width: 100%"
	  :row-class-name="tableRowClassName"
	>
	  <el-table-column prop="orderId" label="分类id"  align="center"/>
	  <el-table-column prop="tableId" label="桌号" align="center"/>
	  <el-table-column prop="totalPrice" label="总价" align="center"/>
	  <el-table-column prop="status" label="是否支付" align="center"/>
	  <el-table-column prop="createTime" label="开始时间" align="center"/>
	      <el-table-column align="right">
	        <template #header>
	          <el-input v-model="search" size="small" placeholder="Type to search" />
	        </template>
	        <template #default="scope">
	          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
	            >paied</el-button
	          >
	          <el-button
	            size="small"
	            type="danger"
	            @click="handleDelete(scope.$index, scope.row)"
	            >Delete</el-button
	          >
	        </template>
	      </el-table-column>
	</el-table>
	
	
</template>

<script setup lang="ts">
	import axios from 'axios'
	import {onMounted, ref} from 'vue';

	interface User {
	  orderId: string
	  tableId: string
	  totalPrice: string
	  status: string
	  createTime: string
	  updateTime: string
	  remarkmessage: string
	  content: string
	}
	
	
	const tableRowClassName = ({
	  row,
	  index,
	}: {
	  row: User
	  index: number
	}) => {
	  if (index%2 === 1) {
	    return 'warning-row'
	  } else if (index%2 === 0) {
	    return 'success-row'
	  }
	  return ''
	}
	
	
	const tableData = ref([])
	
	onMounted(()=>{
		axios.get('api/order/list').then(function Data(response){
			tableData.value = response.data.data
			console.log(tableData)
		})
	})
	
	const handleEdit = (index: number, row: User) => {
	  row.status = "1";
	  console.log(index, row)
	}
	const handleDelete = (index: number, row: User) => {
	  console.log(index, row)
	}
</script>

<style>
	.el-table .warning-row {
	  --el-table-tr-bg-color: var(--el-color-warning-light-9);
	}
	.el-table .success-row {
	  --el-table-tr-bg-color: var(--el-color-success-light-9);
	}
</style>