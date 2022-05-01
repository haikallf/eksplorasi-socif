import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Details from "./pages/Details";
import GlobalStyles, { FlexWrapper, Wrapper } from "./styles/global.styles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import { EventState } from "./state";

function App() {
  const state = useSelector((state: EventState) => state.event);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <FlexWrapper>
        <Sidebar />
        <Wrapper className={state["toggle_sidebar"] ? "active" : ""}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/events" element={<Events />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Wrapper>
      </FlexWrapper>
    </BrowserRouter>
  );
}

export default App;
