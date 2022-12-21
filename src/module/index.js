import React, { Component } from "react";
import Pets from "./pets";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      menuKey: "1",
    };
  }
  setCollapsed = (visible) => {
    this.setState({ collapsed: visible });
  };
  menuClickView = (e) => {
    this.setState({ menuKey: e });
  };
  render() {
    const { menuKey } = this.state;
    const { pathname } = window.location;
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div
              className="logo"
              style={{ marginBottom: "60px", color: "#fff" }}
            >
              {/* Pets View */}
            </div>
            <Menu
              selectedKeys={[menuKey]}
              defaultOpenKeys={pathname.includes("pets") ? ["2"] : ["2"]}
              theme="dark"
              mode="vertical"
              onClick={(e) => this.menuClickView(e.key)}
            >
              <Menu.Item key={"1"} title={"Pets"}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key={"2"} title={"Pets"}>
                <Link to="/pets">Pets</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
              }}
            />
            <Content
              style={{
                margin: "24px 16px 0",
              }}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: 410,
                }}
              >
                <Route>
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/pets" component={Pets} />
                  </Switch>
                </Route>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              Created by Kt UED
            </Footer>
          </Layout>
        </Layout>
        {/* <Layout>
          <Header
            style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
          >
            <Menu theme="dark" mode="horizontal" def>
              <Menu.Item key={"1"} title={"Pets"}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key={"2"} title={"Pets"}>
                <Link to="/pets">Pets</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: "0 50px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 450,
              }}
            >
              <Router>
                <Switch>
                  <Route exact path="/" component={Pets} />
                  <Route exact path="/pets" component={Pets} />
                </Switch>
              </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Created by kt UED</Footer>
        </Layout> */}
      </Router>
    );
  }
}

export default index;
