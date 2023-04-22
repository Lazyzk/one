<template>
  <div class="content">
    <van-form @submit="onSubmit" style="width: 345px; margin: 0 auto">
      <van-field
        v-model="business"
        name="商家名称"
        label="商家名称"
        placeholder="请输入商家名称"
        :rules="[{ required: true, message: '请输入商家名称' }]"
      />
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地理位置"
        placeholder="请选择地理位置"
        @click="show = true"
        :rules="[{ required: true, message: '请选择地理位置' }]"
      />
      <van-popup v-model="show" round position="bottom">
        <van-area
          :area-list="areaList"
          value=""
          @cancel="show = false"
          @confirm="complete"
        />
      </van-popup>
      <van-field
        v-model="address"
        name="详细地址"
        label="详细地址"
        placeholder="请输入详细地址"
        :rules="[{ required: true, message: '请输入详细地址' }]"
      />
      <div class="notes">
        <span class="note">注： 自行填写请使用腾讯地图拾取器</span>
        <div class="small">选择经纬度</div>
      </div>
      <van-field
        v-model="longitude"
        name="经度"
        label="经度"
        placeholder="请输入经度"
      />
      <van-field
        v-model="dimension"
        name="纬度"
        label="纬度"
        placeholder="请输入纬度"
      />
      <van-field
        v-model="contact"
        name="联系方式"
        label="联系方式"
        placeholder="请输入联系方式"
        :rules="[{ required: true, message: '请输入联系方式' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      show: false,
      areaList,
      business: "",
      fieldValue: "",
      address: "",
      longitude: "",
      dimension: "",
      contact: "",
    };
  },
  methods: {
    complete(res, index) {
      this.fieldValue = `${res[0].name}-${res[1].name}-${res[2].name}`;
      this.show = false;
    },
    Tips() {
      this.$toast("请输入商家名称");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

::v-deep .van-field__control::placeholder {
  color: #c0c4cc;
}

.notes {
  display: flex;
  justify-content: center;
  height: 55px;
  border-bottom: 1px solid rgb(241, 241, 241);
  color: rgb(244, 63, 59);
}

.note {
  margin: auto;
  font-size: 14px;
}

.small {
  border: none;
  margin: auto;
  background-color: #2db971;
  border-radius: 5px;
  color: white;
  width: auto;
  font-size: 11px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
}
</style>
