<template>
  <div class="layoutClassic">
        <!-- <h1> 这是诗词轩Web应用 </h1> -->
    <el-container class="layer-container">
      <el-header class="head" height="80px">
        <div class="head-left">
          <div class="head-app-icon" @click="goToHome">
            <i class="iconfont icon-wenxue"></i>
            <a class="app-icon" alt="">诗词轩</a>
          </div>
          <div
            :class="{
              'el-icon-s-fold': isCollapse,
              'el-icon-s-unfold': !isCollapse
            }"
            @click="isCollapse = !isCollapse"
          ></div>
          <div class="head-forward-backward">
            <i class="el-icon-arrow-left" @click="backward"></i>
            <i class="el-icon-arrow-right" @click="forward"></i>
          </div>
          <div class="search">
            <el-input
              placeholder="请输入作者名或者诗词名"
              v-model="searchValue"
              size="small"
              clearable
              @keyup.native="onSearch"
              class="search-input">
              <i slot="prefix" class="el-input__icon el-icon-search" @click="onSearch"></i>
            </el-input>
          </div>
        </div>
        <div class="head-right">
          <div class="head-profile">
            <img class="profile-img" :src="myImage" alt="" @click="goToProfile">
          </div>
          <el-dropdown trigger="click">
            <div class="userNameDiv" >
              <span>{{userName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息设置</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="setting" @click="onSetting">
            <i class="iconfont icon-shezhi"></i>
          </div>
        </div>
      </el-header>
      <el-container class="body-content">
        <el-aside class="aside" width="auto">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#333333"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :collapse="isCollapse">
            <el-menu-item index="/caocaoshiji">
              <i class="iconfont icon-gufengwujianzhongguofenggudaiqiwujiuqijue_huaban_huaban"></i>
              <span slot="title">曹操诗集</span>
            </el-menu-item>
            <el-menu-item index="/chuci">
              <i class="iconfont icon-gufengwujianzhongguofengshanzizheshan_huaban"></i>
              <span slot="title">楚辞</span>
            </el-menu-item>
            <el-menu-item index="/shijing">
              <i class="iconfont icon-gufengwujianzhongguofengshanzizheshan_huaban"></i>
              <span slot="title">诗经</span>
            </el-menu-item>
            <el-submenu index='/sishu'>
              <template slot="title">
                <i class="iconfont icon-gufengwujianzhongguofengshanzizheshan_huaban"></i>
                <span slot="title">四书</span>
              </template>
              <el-menu-item index="/lunyu">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">论语</span>
              </el-menu-item>
              <el-menu-item index="/mengzi">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">孟子</span>
              </el-menu-item>
              <el-menu-item index="/daxue">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">大学</span>
              </el-menu-item>
              <el-menu-item index="/zhongyong">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">中庸</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/tangshi">
              <i class="iconfont icon-bihualanhua"></i>
              <span slot="title">唐诗</span>
            </el-menu-item>
            <el-menu-item index="/songci">
              <i class="iconfont icon-bihualanhua"></i>
              <span slot="title">宋词</span>
            </el-menu-item>
            <el-menu-item index="/songshi">
              <i class="iconfont icon-bihualanhua"></i>
              <span slot="title">宋诗</span>
            </el-menu-item>
            <el-submenu index='/wudaishiguo'>
              <template slot="title">
                <i class="iconfont icon-gufengwujianzhongguofengshanzizheshan_huaban"></i>
                <span slot="title">五代十国</span>
              </template>
              <el-menu-item index="/huajianji">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">花间集</span>
              </el-menu-item>
              <el-menu-item index="/nantang">
                <i class="iconfont icon-bihualanhua"></i>
                <span slot="title">南唐二主词</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/aboutus">
              <i class="iconfont icon-bihualanhua"></i>
              <span slot="title">关于</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import profileImg from '@/assets/profile.jpg'
import logoImg from '@/assets/logoR.png'

export default {
  name: 'layoutClassic',
  components: {},
  props: {},
  data () {
    return {
      searchValue: '',
      myImage: profileImg,
      userName: 'yunxijun',
      logoImg,
      isCollapse: true
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    backward () {
      console.log('onBackwardClick')
    },
    forward () {
      console.log('onForwardClick')
    },
    onSearch (e) {
      if (e.keyCode === 13 || e.type === 'click') {
        console.log('搜索内容')
        console.log(e)
        console.log(this.searchValue)
      }
    },
    goToProfile () {
      console.log('进入我的Profile页面')
    },
    goToHome () {
      console.log('回到首页')
    },
    onSetting () {
      console.log('进入setting页面')
    }
  }
}
</script>

<style lang="less">

.layer-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // overflow: auto;
}
.body-content {
  overflow: auto;
}

.head {
  // border-bottom: 1px solid #ccc;
  // position:sticky;
  background-color: #232325f5;
  color: #ffffff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px;
  border-bottom:4px solid #c20c0c;
  .head-app-icon {
    .icon-wenxue {
      font-size: 30px;
      margin-right: 10px;
      border-radius: 60%;
      align-items: center;
    }
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .head-left {
    display: flex;
    align-items: center;
    height: 40px;
    .el-icon-s-fold {
      padding-left: 30px;
      font-size: 20px;
    }
    .el-icon-s-unfold {
      padding-left: 30px;
      font-size: 20px;
    }
  }
  .head-right {
    display: flex;
    align-items: center;
    height: 40px;
  }
  .head-forward-backward {
      // border: 1px solid #ffffff;
      margin-left: 90px;
      width: 50px;
      display: flex;
      margin-right: 20px;
      justify-content: space-between;
      .el-icon-arrow-left {
        border-radius: 50%;
        border: 1px solid #313134
        // width: 30px;
      }
      .el-icon-arrow-right {
        border-radius: 50%;
        border: 1px solid #313134
      }
  }
  .search {
    width: 193px;
    .el-input__inner {
      // background-color: #353538;
      background-color: #424245;
      border-radius: 20px;
      border: none;
      font-size: 10px;
      color: #ffffff;
      // border-style: solid;
    }
  }
}
.setting {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-right: 20px;
  color: #ccc;
}

.setting:hover {
  color: #ffffff;
}

.app-icon {
  width: 300px;
  height: 80px;
  font-size: 30px;
  font-family:"隶书";
  // font-weight: bold;
  text-align: center;
}

.app-icon:hover {
  color: #ccc;
}

.el-icon-arrow-left:hover {
  color: rgb(161, 153, 153);
}

.el-icon-arrow-right:hover {
  color: rgb(161, 153, 153);
}

.el-icon-search:hover {
  color: green;
}

.el-select .el-input {
  width: 130px;
}

.el-dropdown {
    max-width: 120px;
    // color: #ccc;
}

.userNameDiv {
  color: #ccc;
}

.userNameDiv:hover {
  color: #ffffff;
}

.head-profile {
  display: flex;
  align-items: center;
  .profile-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

.aside {
  // resize: horizontal;
  // width: none;
  background-color: #232325f5;
  border-right:1px solid #cccccc4a;
  .el-menu {
    border-right: none;
    .el-menu-item {
      font-size: 20px;
    }
  }
  .el-submenu__title {
    font-size: 20px;
  }
}

.main {
  top: 0px;
  // height: 1000px;
  // overflow: auto;
  // overflow-y: hidden;
  // background: url('./assets/bg.jpg');
  background-size: cover;
  background-color: #232325f5;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
}

.icon-gufengwujianzhongguofenggudaiqiwujiuqijue_huaban_huaban, .icon-gufengwujianzhongguofengshanzizheshan_huaban, .icon-bihualanhua{
  padding-left: 5px;
  margin-right: 8px;
  font-size: 24px;
}

</style>
