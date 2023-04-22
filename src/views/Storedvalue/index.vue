<template>
  <div class="box">
    <div class="content">
      <div class="price">
        <div class="price_item" v-for="(item, index) in priceList" :key="index" :class="current === index ? 'active' : ''"
          @click="addTo(index)">
          {{ item.price + '元' }}
        </div>
      </div>
      <div class="details">
        <p class="details_one">付款金额（元）</p>
        <div class="details_two">
          <input class="details_in" type="text" :value="amountOfMoney" placeholder="￥ 选择或输入金额" />
        </div>
        <div class="detailMsg">
          <p>储值消费299元成为年度联盟商家，储值消费10000元加入合伙人。</p>
          <p style="margin-top: 10px;">门店、代理服务费金额请在线储值或直接付款到:</p>
          <div class="detailMsg_img">
            <img src="https://easy.yibeitong.cn/yh_shop/static/img/pay.7c5aea21.svg" alt="" />
            <p>微信支付</p>
          </div>
          <p>微信商户：易呗国际易货交易中心</p>
          <div class="detailMsg_img">
            <img src="https://easy.yibeitong.cn/yh_shop/static/img/yhk.f9c30436.svg" alt="" />
            <p> 网银支付</p>
          </div>
          <p>开户名称：北京易呗通易货科技有限公司</p>
          <p>开户银行: 中国农业银行北京青年路支行</p>
          <p>银行账户: 11090601040004091</p>
        </div>
      </div>
    </div>
    <button class="bottom">立即储值</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      priceList: [
        { price: 299 },
        { price: 600 },
        { price: 3980 },
        { price: 10000 },
        { price: 20000 },
        { price: 50000 },
        { price: 100000 }
      ],
      current: '',
      amountOfMoney:'',
    };
  },
  methods: {
    addTo(index){
      this.current = index;
      this.amountOfMoney = this.priceList[index].price
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  border: 0;
  background-color: none;
  outline: none;
}

input {
  outline: none;
  border: none;
  text-decoration: inherit;
}

.box {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #303133;
  font-size: 14px;
  background-color: #f6f7f9;
}

.content {
  min-height: 87vh;
}

.price {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #d3d3d5;
}

.price_item {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  margin-top: 25px;
  margin-left: 12.5px;
  margin-right: 12.5px;
  border: 1px solid #d3d3d5;
}

.active {
  border: 1px solid #2db971;
  color: #2db971;
}

.details {
  width: 345px;
  margin: 26px auto 10px;
  background: #fff;
  padding: 15px 15px;
}

.details_one {
  font-size: 12px;
}

.details_two {
  font-size: 28px;
  line-height: 62px;
  height: 62px;
  color: #646464;
  border-bottom: 1px solid #f3f3f3;
}

.details_in {
  position: relative;
  display: block;
  height: 100%;
  background: none;
  color: inherit;
  opacity: 1;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-transform: inherit;
  text-shadow: inherit;

}

.detailMsg {
  color: #b6b6b6;
  font-size: 12px;
  margin-top: 10px;
  letter-spacing: 0.5px;
}

.detailMsg_img {
  display: flex;
}

.detailMsg_img>img {
  width: 41px;
  height: 41px;
  margin-right: 5px;
}

.detailMsg_img>p {
  margin: auto 0;
}

.bottom {
  width: 350px;
  height: 50px;
  text-align: center;
  line-height: 52px;
  color: #fff;
  font-size: 15px;
  background: #2db971;
  border-radius: 4px;
  margin: 20px auto;
}
</style>
