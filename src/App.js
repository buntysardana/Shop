import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateCouponform from './components/CreateCouponform';
import { Routes, Route, Navigate } from "react-router-dom";
import Shop from './screens/Shop';
import SubAdmin from './screens/SubAdmin';
import Login from './screens/Login'
import Settings from './screens/admin/Settings'
import Customer from './screens/admin/Customer';
import Notification from './screens/admin/Notification'
import Coupon from './screens/admin/Coupon'
import BuisnessAnalytics from './screens/admin/BuisnessAnalytics'
import HomeScreen from './screens/admin/HomeScreen';
import Dashboard from './screens/agent/supplier/Dashboard'
import Product from './screens/agent/supplier/Product'
import Review from './screens/admin/Reviews'
import Catalog from './screens/agent/catalog/Catalog'
import Merchant from './screens/admin/Merchant'
import Admin from './routing/admin/index'
import Agent from './routing/agent/index'
import Public from './routing/index'
import PageNotFound from './screens/PageNotFound';
function App() {

  // const RoleBasedRouting = ({ role }) => {
  //   if (role === 'admin') {
  //     return (
  //       <Routes>
  //         <Route path="/admin-home" element={<HomeScreen />} />
  //         <Route path="/notification" element={<Notification />} />
  //         <Route path="/customer" element={<Customer />} />
  //         <Route path="/shop" element={<Shop />} />
  //         <Route path="/customer" element={<Customer />} />
  //         {/* <Route path="/setting" element={<Setting />} /> */}
  //         <Route path="/merchant" element={<Merchant />} />
  //         <Route path="/buisness-analytics" element={<BuisnessAnalytics />} />
  //         <Route path="/create-coupon" element={<CreateCouponform />} />
  //         <Route path="/settings" element={<Settings />} />
  //         <Route path="/coupons" element={<Coupon />} />
  //         <Route path="/sub-admin" element={<SubAdmin />} />
  //         {/* <Redirect to="/dashboard" /> */}
  //       </Routes>

  //     );
  //   } else if (role === 'agent') {
  //     return (
  //       <Routes>
  //         <Route path="/agent-home" element={<Dashboard />} />
  //         <Route path="/product" element={<Product />} />
  //         <Route path="/review" element={<Review />} />
  //         <Route path="/product" element={<Product />} />
  //         {/* <Route path="/settings" element={<Settings />} /> */}
  //         <Route path="/catalog" element={<Catalog />} />



  //         {/* <Navigate to="/agent" /> */}
  //       </Routes>
  //     );
  //   } else {
  //     // Redirect to a login page or unauthorized page for other roles
  //     return <Navigate to="/unauthorized" />;
  //   }
  // };
  const role = localStorage.getItem('role');

  return (
    <>
      <Routes>

        <Route exact path='/common/*' element={<Public />}  />
        <Route exact path='/agent/*' element={<Agent />} />
        <Route exact path='/admin/*' element={<Admin />} />
        <Route exact path='*' element={<PageNotFound />} />
        
      </Routes>
      {/* {role=='agent'?<Agent />:<Admin />} */}
      
    </>
  );
};


export default App;