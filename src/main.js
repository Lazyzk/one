import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { RadioGroup, Radio } from 'vant';
import { Button } from 'vant';
import { Cascader } from 'vant';
import { Tab, Tabs } from 'vant';
import { Field } from 'vant';
import { Popup } from 'vant';
import { Area } from 'vant';
import { Toast } from 'vant';
import { Form } from 'vant';

Vue.use(Form);
Vue.use(Toast);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cascader);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
