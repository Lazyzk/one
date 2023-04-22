<template>
  <div class="content">
    <div class="top">
      <div class="top_one">
        <img src="https://easy.yibeitong.cn/yh_shop/static/images/user/qb.png" alt="">
        <p class="p_one">手续费设置</p>
        <p class="p_two">(手续费最低为5%)</p>
      </div>
      <div class="top_two">
        <van-field v-model="proportion" type="number" maxlength="3" label="手续费比例" placeholder="请输入手续费比例" />
      </div>
    </div>
    <van-button class="btn" type="primary" block @click="confirm">确认修改</van-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      proportion: 10,
      record:10
    }
  },
  methods: {
      confirm(){
        if (this.proportion == this.record) {
          this.$toast('设置失败/无修改');
        } else if (this.proportion<5||this.proportion>100) {
          this.$toast('手续费为5%-100%');
        }else{
          this.$toast.success('修改成功');
        }
        this.record = this.proportion
      }
  }
}
</script>

<style scoped>
.content {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #f5f5fa;
  box-sizing: border-box;
}

.top {
  min-height: 82vh;
}

.top_one {
  height: 204px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
}

img {
  width: 110px;
  height: 95px;
  margin: 0 auto;
}

/* .top_one>p{
  margin: 0 auto;
} */
.p_one {
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 25px;
  color: #ff4643;
  margin: 10px auto 0;
}

.p_two {
  text-align: center;
  font-size: 12px;
  color: #7c7c7c;
  line-height: 25px;
  margin: 0 auto;
}

.top_two {
  color: #333;
  font-weight: 700;
}

.btn {
  width: 80%;
  margin: auto;
}</style>
