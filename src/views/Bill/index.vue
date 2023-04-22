<template>
  <div class="wrapper">
    <van-tabs v-model="active" title-active-color="#2db971" color="#2db971" line-width="20px">
      <van-tab title="充值记录">内容 1</van-tab>
      <van-tab title="到账记录">内容 2</van-tab>
      <van-tab title="消费记录">内容 3</van-tab>
      <van-tab title="奖金记录">内容 4</van-tab>
      <van-tab title="钱包消费">内容 5</van-tab>
    </van-tabs>
    <div class="top">
      <img src="@/assets/one.png" alt="">
    </div>
    <div class="bottom">
      <span>暂无明细</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrapper {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #f7f4f8;
}

.top {
  margin-top: 50px;
  padding: 0 auto;
  text-align: center;
}

img {
  text-align: center;
  width: 90px;
  height: 90px;
  margin: 0 auto;
}

.bottom {
  margin-top: 10px;
  font-size: 12px;
  color: #9c9c9c;
  letter-spacing: 2px;
  text-align: center;
}
</style>
