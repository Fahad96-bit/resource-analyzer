import "./App.css";

import "antd/dist/antd.min.css";

import Layout from "antd/lib/layout/layout";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import LinePlot from "./components/LinePlot";
import AreaPlot from "./components/AreaPlot";

function App() {
  return (
    <Layout className="app">
      <Header className="header">Revenue Analyzer</Header>
      <Content className="content">
        <div style={{ width: "45%" }}>
          <LinePlot></LinePlot>
        </div>
        <div style={{ width: "45%" }}>
          <AreaPlot className="w-50"></AreaPlot>
        </div>
      </Content>
      <Footer className="footer">Copyrights &#169; 2022-2023</Footer>
    </Layout>
  );
}

export default App;
