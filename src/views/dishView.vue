<template>
  <div class="home">
    <el-affix>
      <HomeMenu></HomeMenu>
    </el-affix>

    <div class="container">
		<Order></Order>
    </div>

  </div>
</template>


<script lang="ts" setup>
import HomeMenu from "../components/HomeMenu.vue";
import Order from "../components/dish.vue"

</script>

<style>
  .home{
    margin-right: auto;
    margin-left: auto;
  }


</style>
