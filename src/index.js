import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import UiElementsPage from "./pages/ui-elements/UiElementsPage";
import MotionPage from "./pages/motion/MotionPage";
import SpacingPage from "./pages/spacing/SpacingPage";
import LayoutPage from "./pages/layout/LayoutPage";
import TypographyPage from "./pages/typography/TypographyPage";
import ColorPage from "./pages/color/ColorPage";
import ElevationPage from "./pages/elevation/ElevationPage";
import BorderPage from "./pages/border/BorderPage";
import ShapePage from "./pages/shape/ShapePage";
import IconographyPage from "./pages/iconography/IconographyPage";
import HomePage from "./pages/_home/HomePage";

import "./_styles.scss";

const NavList = styled.ul`
  list-style: none;
  padding-left: 24px;
`;

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <NavList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/color/">Color</Link>
              </li>
              <li>
                <Link to="/typography/">Typography</Link>
              </li>
              <li>
                <Link to="/spacing/">Spacing</Link>
              </li>
              <li>
                <Link to="/border/">Border</Link>
              </li>
              <li>
                <Link to="/shape/">Shape</Link>
              </li>
              <li>
                <Link to="/elevation/">Elevation</Link>
              </li>
              <li>
                <Link to="/iconography/">Iconography</Link>
              </li>
              <li>
                <Link to="/motion/">Motion</Link>
              </li>
              <li>
                <Link to="/layout/">Layout</Link>
              </li>
              <li>
                <Link to="/ui-elements/">UI Elements</Link>
              </li>
            </NavList>
          </nav>

          <Route path="/ui-elements/" exact component={UiElementsPage} />
          <Route path="/color/" component={ColorPage} />
          <Route path="/typography/" component={TypographyPage} />
          <Route path="/motion/" component={MotionPage} />
          <Route path="/spacing/" component={SpacingPage} />
          <Route path="/layout/" component={LayoutPage} />
          <Route path="/elevation/" component={ElevationPage} />
          <Route path="/border/" component={BorderPage} />
          <Route path="/shape/" component={ShapePage} />
          <Route path="/iconography/" component={IconographyPage} />
          <Route path="/" component={HomePage} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
