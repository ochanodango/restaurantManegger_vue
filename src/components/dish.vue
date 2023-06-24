<template>
	<h1 style="text-align: center;">菜品表</h1>
	<el-table
	  :data="tableData"
	  style="width: 100%"
	  :row-class-name="tableRowClassName"
	>
	  <el-table-column prop="dishId" label="菜品id" align="center" />
	  <el-table-column prop="dishName" label="菜名" align="center"/>
	  <el-table-column prop="description" label="描述" align="center"/>
	  <el-table-column prop="price" label="价格" align="center"/>
	  <el-table-column align="center" label="图片" width="100">
	    <template #default="scope">
	            <el-image :src="scope.row.imageUrl" fit="contain">
	            </el-image>
	    </template>
	</el-table-column>
	  <el-table-column prop="categoryId" label="分类" align="center"/>
	  <el-table-column prop="status" label="状态" align="center"/>
	      <el-table-column align="right">
	        <template #header>
	          <el-input v-model="search" size="small" placeholder="Type to search" />
	        </template>
	        <template #default="scope">
	          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
	            >Edit</el-button
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
	
	<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
				<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
					<el-form-item label="菜品id" prop="dishId">
						<el-input v-model="editForm.dishId" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="菜名" prop="dishName">
						<el-input v-model="editForm.dishName" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="描述" prop="description">
						<el-input v-model="editForm.description" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="价格" prop="price">
						<el-input v-model="editForm.price" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="图片" prop="imageUrl">
						<el-input v-model="editForm.imageUrl" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类" prop="categoryId">
						<el-input v-model="editForm.categoryId" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status">
						<el-input v-model="editForm.status" auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click.native="editFormVisible = false">取消</el-button>
					<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交      </el-button>
				</div>
	</el-dialog>
</template>

<script setup lang="ts">
	import axios from 'axios'
	import {onMounted, ref, reactive} from 'vue';

	interface User {
	  dishId: string
	  dishName: string
	  description: string
	  price: string
	  imageUrl: string
	  categoryId: string
	  status: string
	}
	const editFormVisible = ref(false)
	
	const editForm = reactive({
		dishId: "",
		dishName: "",
		description: "",
		price: "",
		imageUrl:"",
		categoryId: "",
		status: ""
		
	})
	
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
		axios.get('api/dish/list').then(function Data(response){
			tableData.value = response.data.data
			console.log(tableData)
		})
	})
	
	

	const handleEdit = (index: number, row: User) => {
	  editForm.categoryId = row.categoryId
	  editForm.description = row.description
	  editForm.dishId = row.dishId
	  editForm.imageUrl = row.imageUrl
	  editForm.price = row.price
	  editForm.status = row.status
	  editFormVisible.value = ref(true).value
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