import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money'
import Home from '@/views/Home'
import Business from '@/views/Business'
import Paymentcode from '@/views/Paymentcode'
import Sharing from '@/views/Sharing'
import Member from '@/views/Member'
import Signin from '@/views/Signin'
import Membershipcard from '@/views/Membershipcard'
import Cashwithdrawal from '@/views/Cashwithdrawal'
import Bill from '@/views/Bill'
import Storedvalue from '@/views/Storedvalue'
import ServiceCharge from '@/views/ServiceCharge'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path:'/',
      component:Membershipcard
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/money',
      component:Money
    },
    {
      path:'/business',
      component:Business
    },
    {
      path:'/paymentcode',
      component:Paymentcode
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/sharing',
      component:Sharing
    },
    {
      path:'/signin',
      component:Signin
    },
    {
      path:'/cashwithdrawal',
      component:Cashwithdrawal
    },
    {
      path:'/bill',
      component:Bill
    },
    {
      path:'/storedvalue',
      component:Storedvalue
    },
    {
      path:'/servicecharge',
      component:ServiceCharge
    },
  ]
})
