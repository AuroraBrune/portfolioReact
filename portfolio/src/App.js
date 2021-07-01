import React from "react";
import "./App.css";
import { Layout } from "react-mdl";
import Main from "./components/pages/main";
import Footer from "./components/Footer/footer";
import Sidebar from "./components/Drawer/index";
import Header from "./components/Header/header";

function App() {

  return (
    <div className="demo-big-content">
      <Layout>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
