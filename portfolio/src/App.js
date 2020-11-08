import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer} from "react-mdl";
import Main from "./components/pages/main";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/footer";

function App() { 

  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="React Portfolio" scroll>
          <Navigation>
            <Link to="/">About</Link>
            <Link to="/portfolio">Porfolio</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer className="drawer" title="Select a Page">
          <Navigation className="drawer">
            <Link to="/">About</Link>
            <Link to="/portfolio">Porfolio</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
            <Main />
         <Footer />
      </Layout>
    </div>
  );
}

export default App;
