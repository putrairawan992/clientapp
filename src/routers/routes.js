import PATH_URL from "./path";
import Login from "../pages/Login";
import CustomerLayout from "../layouts/SidebarLayout";
import FullLayout from "../layouts/FullLayout";
import Dashboard from "../pages/Dashboard";
import Transaction from "../pages/Transaction";
import Recurring from "../pages/Recurring";
import TaxInvoice from "../pages/Tax Invoice";
import VirtualCartLink from "../pages/Virtual Cart Link";
import Promotion from "../pages/Promotion";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Reports from "../pages/Reports";
import Download from "../pages/Download";
import EmailPayment from "../pages/Email Payment";
import Admin from "../layouts/Admin.js";
import TableList from "views/TableList/TableList";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
const routes = [
  {
    path: PATH_URL.LOGIN,
    component: Login,
    layout: FullLayout,
    needAuthenticated: false
  },
  {
    path: "/admin/dashboard",
    component: Admin,
    layout: FullLayout
  },
  {
    path: "/admin/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    component: Admin,
    layout: FullLayout
  },
  {
    path: "/admin/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    
    component: Admin,
   layout: FullLayout
  },
  {
    path: "/admin/typography",
    name: "Typography",
    rtlName: "طباعة",
   
    component: Admin,
   layout: FullLayout
  },
  {
    path: "/admin/icons",
    name: "Icons",
    rtlName: "الرموز",
 
    component: Admin,
   layout: FullLayout
  },
  {
    path: "/admin/maps",
    name: "Maps",
    rtlName: "خرائط",
  
    component: Admin,
   layout: FullLayout
  },
  {
    path: "/admin/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
 
    component: Admin,
   layout: FullLayout
  },
  {
    path: "/admin/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",

    component: Admin,
    layout: "/rtl"
  },
  {
    path: "/admin/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
  
    component: Admin,
   layout: FullLayout
  },
  {
    path: PATH_URL.DASHBOARD,
    component: Dashboard,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.TRANSACTION,
    component: Transaction,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.RECURRING,
    component: Recurring,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.TAX_INVOICE,
    component: TaxInvoice,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.VIRTUAL_CART_LINK,
    component: VirtualCartLink,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.PROMOTION,
    component: Promotion,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.SETTINGS,
    component: Settings,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.ACCOUNT,
    component: Account,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.REPORTS,
    component: Reports,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.DOWNLOAD,
    component: Download,
    layout: CustomerLayout
  },
  {
    path: PATH_URL.EMAIL_PAYMENT,
    component: EmailPayment,
    layout: CustomerLayout
  }
];

export default routes;
