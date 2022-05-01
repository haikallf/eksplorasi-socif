import React from "react";
import {
  NavbarContainer,
  NavbarIcons,
  UserIcon,
} from "../styles/navbar.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { CatIcon } from "../styles/navbar.styles";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { getInitial } from "../global.config";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, EventState } from "../state";
import { bindActionCreators } from "redux";

const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useSelector((state: EventState) => state.event);
  const dispatch = useDispatch();
  const { setToggleSidebar } = bindActionCreators(actionCreators, dispatch);

  const toggleSidebar = () => {
    setToggleSidebar(!state["toggle_sidebar"]);
  };

  if (location.pathname === "/login") {
    return <></>;
  }

  return (
    <NavbarContainer>
      <NavbarIcons>
        {location.pathname === "/events" || location.pathname === "/" ? (
          <>
            <AiOutlineSearch size={30} onClick={toggleSidebar} />
          </>
        ) : (
          <>
            <AiFillHome size={30} onClick={() => navigate("/")} />
          </>
        )}
        <CatIcon />
        <UserIcon onClick={() => navigate("/profile")}>
          {getInitial(localStorage.getItem("current_user")!)}
        </UserIcon>
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
