<template>
  <div class="box">
    <div class="content">
      <div class="wapper">
        <div class="page">
          <img
            src="https://easy.yibeitong.cn/yhsc_api/public/static/set/20230313/f02fb8467fb2130c226decc3e849c7a0.jpg"
            draggable="true"
          />
        </div>
        <div class="right">
          <p>名字</p>
          <p>会员卡</p>
        </div>
      </div>
      <div class="money">
        <div class="money-son">
          <p>易呗</p>
          <p>100.00</p>
        </div>
        <div class="money-son">
          <p @click="one">钱包</p>
          <p>0.00</p>
        </div>
      </div>
      <div class="tab">
        <ul>
          <li @click="share">我的个人分享</li>
          <li @click="Collection">收款码</li>
          <li @click="union">联盟商家</li>
          <li @click="member">会员升级</li>
          <li @click="withdrawal">提现记录</li>
          <li @click="bill">账单记录</li>
          <li @click="signIn">签到中心</li>
          <li style="color: red">清除缓存</li>
        </ul>
      </div>
    </div>
    <div class="but">
        <button @click="storedvalue">立即储值</button>
      </div>
      <div style="min-height: 15vh;"></div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    one() {
      this.$router.push("/money");
    },
    union(){
      this.$router.push("/business");
    },
    Collection(){
      this.$router.push("/paymentcode")
    },
    share(){
      this.$router.push("/sharing")
    },
    member(){
      this.$router.push("/member")
    },
    signIn(){
      this.$router.push("/signin")
    },
    withdrawal(){
      this.$router.push("/cashwithdrawal")
    },
    bill(){
      this.$router.push("/bill")
    },
    storedvalue(){
      this.$router.push("/storedvalue")
    }
  },
};
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
}
.box{
    width: 100%;
    /* height: 100%; */
    background: #f6f7f9;
    position: absolute;
    top: 0px;
    left: 0px;  
    overflow: hidden;
}
.content{
    width: 100%;
    min-height: 87vh;
}
ul li {
    list-style: none;
}
.wapper{
    background: #2db971;
    color: #fff;
    font-size: 17px;
    padding: 20px;
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 100%;
}
.page{
    width: 85px;
    height: 85px;
    margin-right: 16px;
    border-radius: 50%;
    display: inline-block;
}
img{
    height: 100%;
    width: 100%;
    border-radius: 45px;
}
.right{
    display: inline-block;
    width: 200px;
    position: relative;
    top: -20px;
}
.right p {
    margin: 0;
    margin-top: 10px;
}
.money{
    background: #2db971;
    color: #fff;
    font-size: 17px;
    text-align: center;
    display: flex;
    width: 105%;
}
.money .money-son {
    border-right: 1px solid #fff; 
    -webkit-box-flex: 1;
    flex: 1;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 70px;

}
.money .money-son p{
    display: block; 
    margin-bottom: 9px;
}
.money .money-son:last-child{
    border-right: none;
} 

.tab li{
    width: 100%;
    padding: 15px;
    font-size: 15px;
    color: #595959;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.but{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

}
button {
    width: 350px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 15px;
    background: #2db971;
    border: none;
    border-radius: 4px;
    margin: 20px;
}

</style>
