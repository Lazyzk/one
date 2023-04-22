<template>
  <div class="money">
    <div class="content">
      <div class="card">
        <p class="card">选择提现方式：</p>
        <van-radio-group v-model="radio" direction="horizontal" class="one">
          <van-radio name="1">银行卡</van-radio>
          <van-radio name="2">支付宝</van-radio>
        </van-radio-group>
        <!-- <form>
        <input type="radio" name="zf" value="" checked>银行卡
        <input type="radio" name="zf" value="">支付宝
      </form> -->
      </div>
      <div v-show="isOk">
        <div class="card">
          <p>开户行:</p>
          <input type="text" name="kfh" placeholder="请输入开户行">
        </div>
        <div class="card">
          <p>银行卡号:</p>
          <input type="text" name="yhkh" placeholder="请输入银行卡号">
        </div>
      </div>
      <div class="card" v-show="!isOk">
        <p>支付宝账号:</p>
        <input type="text" name="kfh" placeholder="请输入支付宝账号">
      </div>
      <div class="card">
        <p>真实姓名:</p>
        <input type="text" name="kfh" placeholder="请输入真实姓名">
      </div>
      <div class="card">
        <p>预留手机号码:</p>
        <input type="text" name="kfh" placeholder="请输入预留手机号码">
      </div>
      <div class="card">
        <p>提现金额（100-5000元范围，且为100的倍数）：</p>
        <input type="number" placeholder="请输入提现金额">
      </div>
      <div class="yve">当前钱包余额：￥ 0.00
        <span>全部提现</span>
      </div>
      <button class="btn">提现</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Money',
  data() {
    return {
      radio: '1',
      isOk:true
    };
  },
  watch:{
    radio:{
      handler(newVal,oldVal){
        if (newVal=='2') {
          this.isOk=false
        }else{
          this.isOk=true
        }
      },
      immediate:true
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover,
a:visited,
a:link,
a:active {
  color: #333;
}

input {
  outline: none;
  border: none;
}

button {
  border: 0;
  background-color: none;
  outline: none;
}

::v-deep .van-radio__label {
  margin-left: 5px;
  margin-right: 12px;
  color: #606266;
  font-size: 15px;
  font-weight: 700;
}

.money {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

p {
  font-weight: 700;
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
}

.card,
.card>p {
  margin-bottom: 15px;
}

.card>input {
  width: 100%;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  padding: 15px;
  height: 50px;
  line-height: 50px;
}

.yve {
  color: #676767;
}

.yve>span {
  color: #66c8bb;
  margin-left: 10px;
}

.btn {
  width: 100%;
  line-height: 2.55555556;
  background: #2db971;
  color: #fff;
  font-size: 16px;
  padding: 7px;
  margin: 50px auto 0;
  border-radius: 5px;
  margin-bottom: 50px;
}
</style>
