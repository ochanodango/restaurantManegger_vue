<template>
	<h1 style="text-align: center;">菜品分类表</h1>
	<el-table
	  :data="tableData"
	  style="width: 100%"
	  :row-class-name="tableRowClassName"
	>
	  <el-table-column prop="categroyId" label="分类id" align="center"  />
	  <el-table-column prop="type" label="类型" align="center"/>
	  <el-table-column align="right" key="slot">
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
	<!-- <el-button size="small" type="danger">add</el-button> -->
	
	<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
				<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
					<el-form-item label="分类id" prop="id">
						<el-input v-model="editForm.id" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类">
						<el-input v-model="editForm.type" auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click.native="editFormVisible = false">取消</el-button>
					<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交      </el-button>
				</div>
	</el-dialog>
	
	<el-dialog title="编辑" v-model="editVisible" :close-on-click-modal="false">
				<span>确认删除？</span>
				<div slot="footer" class="dialog-footer">
					<el-button @click.native="editVisible = false">取消</el-button>
					<el-button type="primary" @click.native="editSubmit" :loading="editLoading">
						确认</el-button>
				</div>
	</el-dialog>
</template>

<script setup lang="ts">
	import axios from 'axios'
	import {onMounted, ref, computed, reactive} from 'vue';

	interface User {
	  categroyId: string
	  type: string
	}
	
	const editFormVisible = ref(false)
	
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
		axios.get('api/category/list').then(function Data(response){
			tableData.value = response.data.data
			console.log(tableData)
		})
	})
	
	const search = ref('')
	const TableData = computed(() =>
	  tableData.filter(
	    (data) =>
	      !search.value ||
	      data.name.toLowerCase().includes(search.value.toLowerCase())
	  )
	)

	const editForm = reactive({
		id: "",
		type: ""
	})
	

	const handleEdit = (index: number, row: User) => {
	  editFormVisible.value = ref(true).value
	  editForm.id = row.categroyId
	  editForm.type = row.type
	  console.log(index, row)
	}
	const handleDelete = (index: number, row: User) => {
	  // axios.get('api/category/delete', { params: {type: row.type} }).then(function Data(response){
	  // })
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