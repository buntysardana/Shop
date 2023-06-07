import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Notification from '../../screens/admin/Notification'
import Customer from '../../screens/admin/Customer'
import Shop from '../../screens/Shop'
import Merchant from '../../screens/admin/Merchant'
import BuisnessAnalytics from '../../screens/admin/BuisnessAnalytics'
import CreateCouponform from '../../components/CreateCouponform'
import Settings from '../../screens/admin/Settings'
import Coupon from '../../screens/admin/Coupon'
import SubAdmin from '../../screens/SubAdmin'
import HomeScreen from '../../screens/admin/HomeScreen'
import Protected from '../../screens/Protected'
import PageNotFound from '../../screens/PageNotFound';
import SpecificMerchant from '../../screens/admin/SpecificMerchant';
import SpecificShop from '../../screens/admin/SpecificShop';
export default function index() {
  return (
    <Routes>
      {/* <Route path="admin"> */}
        <Route exact path="home" element={<Protected cmp={HomeScreen} />}  />
        <Route  exact path="notification" element={<Protected cmp={Notification} />}  />
          <Route exact path="customer" element={<Protected cmp={Customer} />} />
          <Route exact path="shop" element={<Protected cmp={Shop} />}  />
          <Route exact path="customer" element={<Protected cmp={Customer} />} />
          {/* <Route exact path="/merchant" element={<Protected cmp={Merchant} />} /> */}
          <Route exact path="/specificMerchant" element={<Protected cmp={SpecificMerchant} />} />
          <Route exact path="/SpecificShop" element={<Protected cmp={SpecificShop} />} />
          <Route exact path="buisness-analytics" element={<Protected cmp={BuisnessAnalytics} />} />
          <Route exact path="create-coupon" element={<Protected cmp={CreateCouponform} />} />
          <Route exact path="settings" element={<Protected cmp={Settings} />} />
          <Route exact path="coupons" element={<Protected cmp={Coupon} />} />
          <Route exact path="sub-admin" element={<Protected cmp={SubAdmin} />}  />  


      {/* </Route> */}
    </Routes>
  )
}
