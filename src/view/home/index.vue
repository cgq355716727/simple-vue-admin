<template>
  <el-container class="wrapper">
    <el-header class="header">
      <div class="logo">
        <a href="#/"><img class="expanded" src="../../assets/logo.png" style="max-height:40px;" alt="Alain">
          <img class="collapsed" src="../../assets/logo4.png" style="max-height:30px;" alt="Alain"></a>
      </div>
      <div class="top-nav-wrap">
        <ul class="top-nav">
          <li>
            <div class="item">
              <i class="el-icon-menu"></i>
            </div>
          </li>
          <li>
            <a class="item" href="//github.com/cipchk/ng-alain" target="_blank">
              <i class="el-icon-share"></i>
            </a>
          </li>
          <li class="hidden-xs-only">
            <div class="item" tabindex="0">
              <i class="el-icon-success"></i>
            </div>
          </li>
          <li class="header-search__btn">
            <div class="item">
              <!-- <i class="anticon anticon-search"></i> -->
              <i class="el-icon-search"></i>
            </div>
          </li>
        </ul>
        <div class="header-search">
          <el-input size="small" placeholder="搜索：员工、文件、照片等" prefix-icon="el-icon-search">
          </el-input>
        </div>
        <ul class="top-nav">
          <li class="hidden-xs-only">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link">
                <div class="header-icon item">
                  <el-badge :value="12">
                    <i class="el-icon-bell"></i>
                  </el-badge>
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="hidden-xs-only">
            <!-- <div class="avatar">
                <img src="../../assets/avatar.png">
              </div> -->
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link">
                <div class="item">
                  <img src="../../assets/avatar.png" class="user-avatar">
                  <!-- admin -->
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </li>
        </ul>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      sysUserName: '',
      sysUserAvatar: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem('user')
          _this.$router.push('/login')
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped lang="scss">
.el-header,
.el-footer {
  background-color: #1890ff;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

// 开始模仿
.wrapper {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow-x: hidden;
}

.header .logo {
  margin-left: -16px;
  width: 200px;
  transition: width 0.2s cubic-bezier(0.25, 0, 0.15, 1);
  float: left;
}

.header .logo a {
  display: block;
  text-align: center;
}

.header .logo img {
  vertical-align: middle;
  max-width: 100%;
  -webkit-animation: 1s fadeIn;
  animation: 1s fadeIn;
}

.header .logo img.collapsed {
  display: none;
}

.header .logo img.expanded {
  display: inline;
}

.top-nav-wrap {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.top-nav {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.top-nav > li {
  display: inline-block;
  vertical-align: middle;
}

.top-nav .item {
  display: block;
  border-radius: 2px;
  text-align: center;
  line-height: 100%;
  padding: 8px 2px;
  min-width: 50px;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: 0;
}

.top-nav .item:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.top-nav .item i {
  font-size: 18px;
  line-height: 100%;
}

.top-nav .item,
.top-nav nz-badge {
  color: #fff !important;
}

.header-search {
  flex: 1;
  margin: 0 24px;
  position: relative;
  display: flex;
  align-items: center;
}

.header-search .ant-input:focus {
  box-shadow: none;
}

.header-search .ant-input,
.header-search .ant-input-group-addon {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: none;
}

.header-search .ant-input-group-addon::-webkit-input-placeholder,
.header-search .ant-input::-webkit-input-placeholder {
  color: #fff;
  opacity: 1;
}

.header-search .ant-input-group-addon i {
  transition: color 0.3s, -webkit-transform 0.4s;
  transition: color 0.3s, transform 0.4s;
  transition: color 0.3s, transform 0.4s, -webkit-transform 0.4s;
  font-size: 18px;
  color: #fff;
}

.header-search.header-search__focus .ant-input,
.header-search.header-search__focus .ant-input-group-addon {
  background-color: #f3f3f3;
  color: #736768;
}

.header-search.header-search__focus
  .ant-input-group-addon::-webkit-input-placeholder,
.header-search.header-search__focus .ant-input::-webkit-input-placeholder {
  color: #736768;
  opacity: 1;
}

.header-search.header-search__focus
  .ant-input-group-addon:-ms-input-placeholder,
.header-search.header-search__focus .ant-input:-ms-input-placeholder {
  color: #736768;
  opacity: 1;
}

.header-search.header-search__focus
  .ant-input-group-addon::-ms-input-placeholder,
.header-search.header-search__focus .ant-input::-ms-input-placeholder {
  color: #736768;
  opacity: 1;
}

.header-search.header-search__focus .ant-input-group-addon::placeholder,
.header-search.header-search__focus .ant-input::placeholder {
  color: #736768;
  opacity: 1;
}

.header-search.header-search__focus .ant-input-group-addon i {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  color: #736768;
}

.header-search.header-search__focus .ant-input-group-addon i:before {
  content: '\E61B';
}

@media (min-width: 576px) {
  .top-nav .header-search__btn {
    display: none;
  }
}

.aside-collapsed .header .logo {
  width: 64px;
}

.aside-collapsed .header .logo img.collapsed {
  display: inline;
}

.aside-collapsed .header .logo img.expanded {
  display: none;
}

// 头像
.avatar {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.user-avatar {
  width: 30px;
  height: 30px;
}
.user-avatar {
  border-radius: 12px;
  vertical-align: middle;
  max-width: 100%;
  -webkit-animation: 1s fadeIn;
  animation: 1s fadeIn;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
