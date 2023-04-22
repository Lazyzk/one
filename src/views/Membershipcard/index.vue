<template>
  <div class="box">
    <div class="cart">
      <div class="top">
        <div class="left">
          <img class="leftImg" src="http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg" alt="">
          <div>
            <span>东方快购</span> <br>
            <span style="font-size:12px;">东方快购</span>
          </div>
        </div>
        <div class="right">
          <img class="rightImg" src="http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg" alt="">
        </div>
      </div>
      <div class="bottom">
        1234 5678 9100
      </div>

    </div>
    <div class="content">
      <div>
        <div>
          <span>积分</span><br>
          <span class="green">10</span>
        </div>
        <div @click="Grade">
          <span>等级</span><br>
          <span class="green">查看</span>
        </div>
      </div>
      <button>我的收款码</button>
    </div>
    <div class="tab">
      <ul>
        <li>
          <a href="javascript:;">易货商城</a>
          <span>在线轻松选购></span>
        </li>
        <li>
          <a href="javascript:;">分享给好友</a>
          <span>赢取更多收益></span>
        </li>
        <li>
          <a href="javascript:;">附近的门店</a>
          <span>易货门店></span>
        </li>
        <li>
          <a href="javascript:;">会员卡详情</a>
          <span>></span>
        </li>
        <li>
          <a href="javascript:;">公众号</a>
          <span>></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {

    }
  },
  methods: {
    Grade(){
      this.$router.push("/home")
    }
  },
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

.box {
  width: 90%;

  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 25px;
}

.cart {
  width: 100%;
  height: 200px;
  background-color: #2db971;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;

}

.cart .top {
  display: flex;
  justify-content: space-between;
}

.cart .top .left div {
  transform: translate(65px, -50px);
  text-align: left;
  color: white;
}

.leftImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.rightImg {
  width: 35px;
  height: 35px;
  border-radius: 5px;
}

.bottom {
  text-align: left;
  transform: translateY(45px);
  color: white;
  padding-left: 10px;
}

.content {
  width: 100%;
  border-radius: 5px;
  margin: 10px auto;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.content>div {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  color: #847575;
}

.green {
  font-size: 16px;
  color: #2db971;
}

button {
  text-align: center;
  color: rgb(5, 111, 6);
  background-color: white;
  font-size: 16px;
  padding: 10px 35px;
  margin-top: 20px;
  border: 1px solid rgb(5, 111, 6);
  border-radius: 3px;
}

.tab {
  width: 100%;
}

.tab ul {
  border-top: 1px solid #eed4d4;

}

.tab li {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  font-size: 13px;
  color: #7a8e84;
  border-bottom: 1px solid #eed4d4;
}</style>
