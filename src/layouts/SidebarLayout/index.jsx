import React, { useEffect, useState } from "react";
import { Icon, Menu, Layout } from "antd";
import history from "../../routers/history";
import "./style.sass";
import PATH_URL from "../../routers/path";
import Header from "../../components/Header";

const { SubMenu } = Menu;

const { Content, Sider } = Layout;

export default function CustomerLayout(props) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    getTabActive();
  }, []);

  function getTabActive() {
    const routeTab = window.location.pathname;
    const splitRoute = routeTab.split("/");
    const tabActive = splitRoute[splitRoute.length - 1];
    setActiveTab(tabActive);
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid ipay88-dashboard-wrapper">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider className="ipay88-dashboard-wrapper__children">
            <div className="ipay88-dashboard-user">
              <Menu
                mode="inline"
                defaultOpenKeys={["profile"]}
                selectedKeys={[activeTab]}
              >
                <Menu.Item
                  key="dashboard"
                  onClick={() => history.push(PATH_URL.DASHBOARD)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="appstore" />
                  Dashboard
                </Menu.Item>
                <Menu.Item
                  key="transaction"
                  onClick={() => history.push(PATH_URL.TRANSACTION)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="shopping" />
                  All Transaction
                </Menu.Item>
                <Menu.Item
                  key="recurring"
                  onClick={() => history.push(PATH_URL.RECURRING)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="retweet" />
                  Recurring
                </Menu.Item>
                <Menu.Item
                  key="tax-invoice"
                  onClick={() => history.push(PATH_URL.TAX_INVOICE)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="pay-circle" />
                  Tax Invoice
                </Menu.Item>
                <Menu.Item
                  key="virtual-cart-link"
                  onClick={() => history.push(PATH_URL.VIRTUAL_CART_LINK)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="apartment" />
                  Virtual Cart Link
                </Menu.Item>
                <Menu.Item
                  key="promotion"
                  onClick={() => history.push(PATH_URL.PROMOTION)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="audio" />
                  Promotion
                </Menu.Item>
                <Menu.Item
                  key="settings"
                  onClick={() => history.push(PATH_URL.SETTINGS)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="setting" />
                  Settings
                </Menu.Item>
                <Menu.Item
                  key="account"
                  onClick={() => history.push(PATH_URL.ACCOUNT)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="user" />
                  Account
                </Menu.Item>
                <Menu.Item
                  key="reports"
                  onClick={() => history.push(PATH_URL.REPORTS)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="message" />
                  Reports
                </Menu.Item>
                <Menu.Item
                  key="download"
                  onClick={() => history.push(PATH_URL.DOWNLOAD)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="cloud-download" />
                  Download
                </Menu.Item>
                <Menu.Item
                  key="email-payment"
                  onClick={() => history.push(PATH_URL.EMAIL_PAYMENT)}
                  className="ipay88-dashboard-user__title"
                >
                  <Icon type="mail" />
                  Email Payment
                </Menu.Item>
                {/* <SubMenu
                  className="ipay88-dashboard-user__title"
                  key={"profile"}
                  title={
                    <span>
                      <Icon type="user" style={{ fontSize: 19 }} />
                      {"strings.my_account"}
                    </span>
                  }
                >
                  <Menu.Item
                    key="profile"
                    onClick={() => history.push("PATH_URL.DASHBOARD_PROFILE")}
                  >
                    {"strings.profile"}
                  </Menu.Item>
                  <Menu.Item
                    key="address"
                    onClick={() => history.push("PATH_URL.DASHBOARD_ADDRESS")}
                  >
                    {"strings.change_address"}
                  </Menu.Item>
                  <Menu.Item
                    key="password"
                    onClick={() => history.push("PATH_URL.DASHBOARD_PASSWORD")}
                  >
                    {"strings.password"}
                  </Menu.Item>
                </SubMenu> */}
              </Menu>
            </div>
          </Sider>
          <Layout className="ipay88-dashboard-layout__content">
            <Content>{props.children}</Content>
          </Layout>
        </Layout>
      </div>
    </React.Fragment>
  );
}
