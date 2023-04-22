<template>
  <div>
    <p class="title" style="padding-top: 16px">会员升级</p>
    <div class="box">
      <div class="left" @click="choice1" ref="one">
        <p>299会员1</p>
        <p>￥299.00</p>
        <p>299会员1</p>
      </div>
      <div class="right" @click="choice2" ref="two">
        <p>万元合伙人</p>
        <p>￥10000.00</p>
        <p>万元合伙人</p>
      </div>
    </div>
    <p class="equity"><i class="verticalLine"></i>权益说明</p>
    <p class="vip" v-show="isOk">299会员1</p>
    <p class="vip" v-show="!isOk">万元合伙人</p>
    <button class="but">立即升级</button>
    <div class="explain">
      <span>升级说明：
        <br />
        卡包储值299成为年度联盟商家，储值10000成为万元合伙人。
        <br />
        1、可显示在附近联盟商家；等于给商家提供资源，带来千万人脉。
        <br />

        2、可以用自己产品促销引流；以参加项目路演，产品宣传等方式，从而实现销售盈利。
        <br />
        3、有自己的收款码，可自行收取服务费；也可以招代理，全国线上线下招商。
        <br />
        4、还可以同行业、异业联盟；扩大拓宽经营方向和思路，做到跨界打劫，多方盈利。易呗通天下，生活乐无忧！
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      isOk: true
    }
  },
  methods: {
    choice1() {
      this.$refs.one.style.border = "solid 1px #edd2a9";
      this.$refs.one.style.backgroundColor = "#fbf1e5";
      this.$refs.two.style.border = "solid 1px #f2f2f3";
      this.$refs.two.style.backgroundColor = "#fff";
      if (this.isOk == false) {
        this.isOk = !this.isOk
      }
    },
    choice2() {
      this.$refs.two.style.border = "solid 1px #edd2a9";
      this.$refs.two.style.backgroundColor = "#fbf1e5";
      this.$refs.one.style.border = "solid 1px #f2f2f3";
      this.$refs.one.style.backgroundColor = "#fff";
      if (this.isOk == true) {
        this.isOk = !this.isOk
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1f1f1;
}

button {
  border: 0;
  background-color: none;
  outline: none;
}

.title {
  padding: 16px 16px;
  font-size: 18px;
  color: #1c1c1c;
}

.box {
  position: relative;
  margin-bottom: 19px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}

.Selected1 {
  border: solid 1px #edd2a9;
  background-color: #fbf1e5;
}

/* .Selected{
  border: solid 1px #f2f2f3;
  background-color: #fff;
} */
.left {
  display: inline-block;
  position: relative;
  margin-left: 8px;
  width: 122px;
  height: 154px;
  display: flex;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border: solid 1px #edd2a9;
  background-color: #fbf1e5;
  border-radius: 6px;

}

.left :first-child {
  margin-bottom: 16px;
  font-size: 14px;
  color: #1c1c1c;
}

.left :nth-child(2) {
  font-size: 22px;
  margin-bottom: 10px;
  color: #e3be83;
}

.left :last-child {
  font-size: 12px;
  color: #a5a3a2;
}

.right {
  position: relative;
  margin-left: 8px;
  width: 122px;
  height: 154px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 6px;
  border: solid 1px #f2f2f3;
  background-color: #fff;
}

.right :first-child {
  margin-bottom: 16px;
  font-size: 14px;
  color: #1c1c1c;
}

.right :nth-child(2) {
  font-size: 22px;
  margin-bottom: 10px;

  color: #e3be83;
}

.right:last-child {
  font-size: 12px;
  color: #a5a3a2;
}

.verticalLine {
  width: 4px;
  height: 19px;
  border-radius: 2px;
  background: #e4bf85;
  margin-right: 10px;
}

.equity {
  padding: 16px 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 3px solid #f8f8f8;
  font-size: 14px;
  background-color: #fff;
}

.vip {
  padding: 11px 16px;
  line-height: 16px;
  border-bottom: 3px solid #f8f8f8;
  font-size: 14px;
  background-color: #fff;
}

.but {
  width: 90%;
  margin: 24px 16px 24px 24px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 46px;
  border-radius: 27px;
  background-image: linear-gradient(#efcf9e, #e4bf85);
}

.explain {
  font-size: 12px;
  width: 345px;
  display: block;
  margin: 50px auto 0;
}
</style>
