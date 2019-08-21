<template>
   <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="6" class="left-header">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="layout-right" :span="3">
      <img :src="user.photo ? user.photo : defaultImg" alt />
      <!-- 两个插槽  匿名插槽  具名插槽 -->
      <el-dropdown trigger="click" @command="commandAction">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          {{user.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 dropdown-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='account'>个人信息</el-dropdown-item>
          <el-dropdown-item command='git'>git地址</el-dropdown-item>
          <el-dropdown-item command='out'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data () {
    return {
      user: {

      },
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.user = result.data
      })
    },
    commandAction (command) {
      if (command === 'account') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/1349076280/81heimatoutiao'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
  .layout-header {
    padding: 12px 0;
    .left-header {
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        margin-right: 4px;
      }
    }
  }
  .layout-right {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px
    }
  }

</style>
