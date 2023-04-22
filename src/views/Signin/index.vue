<template>
  <div>
    <div class="top">
      <p>
        <span>返回</span>
        <span>当前交易：100.00</span>
      </p>
      <div class="top-qd">
        <span>签到</span>
        <span>送10易呗</span>
      </div>
      <ul>
        <li>今天</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <div class="baoxiang">
          <span>第30天</span>
          <img src="https://easy.yibeitong.cn/yh_shop/static/img/qd-bx.2bdcc360.svg" alt="">
          <span>超级奖励</span>
        </div>
      </ul>


    </div>
    <p class="text">已连续签到0天，每次签到奖励10易呗，连续签到30天有惊喜~</p>
    <p class="jlmx">
      签到奖励明细
    </p>
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

ul li {
  list-style: none;
}

.top {
  width: 100%;
  background: -webkit-linear-gradient(315deg, #fa791d, #ee3529 70%, #ed302a);
  background: linear-gradient(135deg, #fa791d, #ee3529 70%, #ed302a);
}

.top p {
  padding: 23px 35px 33px 29px;
  color: #fff;
  font-size: 15px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}

.top-qd {
  width: 162px;
  height: 162px;
  background: url(https://easy.yibeitong.cn/yh_shop/static/img/qd-yuan.31c6be34.svg);
  background-size: 100% 100%;
  margin: 0 auto 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.top-qd span:first-child {
  color: #dc3a29;
  font-size: 30px;
  font-weight: 700;

}

.top-qd span:last-child {

  color: #dc3a29;
  font-size: 16px;
}

.top ul {
  width: 90%;
  padding: 0 33px;
  text-align: center;
  flex-wrap: wrap;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}

.top ul li {
  width: 41px;
  height: 41px;
  background: #fff;
  border-radius: 50%;
  line-height: 41px;
  margin-right: 17px;
  margin-bottom: 18px;
  overflow: hidden;
}

.baoxiang {
  color: #fff;
  transform: translateY(-6px);
  font-size: 12px;
}

.baoxiang img {
  vertical-align: middle;
}

.text {
  font-size: 13px;
  text-align: center;
  padding: 14px 0 16px;
}

.jlmx {
  padding: 0 23px;
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  line-height: 48px;
  background: #f5f5f5;
}</style>
