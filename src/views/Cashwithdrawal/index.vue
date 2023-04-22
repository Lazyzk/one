<template>
    <div class="wrapper">
      <div class="top">
        <img src="@/assets/one.png" alt="">
      </div>
      <div class="bottom">
        <span>暂无明细</span>
      </div>
    </div>
</template>
<script>
export default {};
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
