<template>
  <div class="cart">
    <p class="share">我的分享列表</p>
    <ul>
      <li class="list">
        <p>名字</p>
        <p>123456789</p>

      </li>
      <li class="list">
        <p>名字</p>
        <p>123456789</p>

      </li>
      <li class="list">
        <p>名字</p>
        <p>123456789</p>

      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #f6f7f9;
}

.cart {
  margin: 30px auto;
  padding: 20px 10px;
  width: 325px;
  background-color: #fff;
  border-radius: 4px;
  color: #5f5f5f;
  font-size: 14px;

}

.share {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.list {
  list-style: none;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
</style>
