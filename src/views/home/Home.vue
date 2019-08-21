<template>
  <el-container>
    <el-aside style="width:200px; height:100vh; background-color:#323745;">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main style="padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-Aside'
// import layoutHeader from '../../components/home/layout-Header'
export default {
//   components: {
//     'layout-aside': layoutAside,
//     'layout-Header': layoutHeader
//   }
}
</script>
