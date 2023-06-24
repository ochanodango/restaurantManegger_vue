<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"

      style="width: 100%"
  >
    <el-menu-item index="1">
      <router-link to="/home" style="text-decoration: none">订单</router-link>
    </el-menu-item>
    <el-menu-item index="3">
		<router-link to="/dish" style="text-decoration: none">菜品清单</router-link>
	</el-menu-item>
    <el-menu-item index="4">
		<router-link to="/category" style="text-decoration: none">菜品分类</router-link>
	</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
