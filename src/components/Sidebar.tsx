import axios from "axios";
import { channel } from "diagnostics_channel";
import React, { useEffect, useState } from "react";
import {
  capitalizeFirstLetter,
  getAvaliableEvents,
  getChannels,
  url,
} from "../global.config";
import { AiOutlineSearch } from "react-icons/ai";
import { event } from "../interfaces";
import {
  ButtonFilterText,
  ButtonTextContainer,
  ButtonTextSpan,
  ChannelButton,
  CloseSidebar,
  DateButton,
  DateInputContainer,
  DateFlexContainer,
  DatePickerWrapperStyles,
  FilterContainer,
  FilterText,
  FilterTitle,
  LaterButtonContainer,
  SearchButton,
  SidebarContainer,
  SidebarTop,
  SidebarWrapper,
} from "../styles/sidebar.styles";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, EventState } from "../state";
import { bindActionCreators } from "redux";
import moment from "moment";
import DatePicker from "react-date-picker";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { setSearch } from "../state/action-creators";

export const dateFilter = [
  "ANYTIME",
  "TODAY",
  "TOMORROW",
  "THIS WEEK",
  "THIS MONTH",
];

const Sidebar: React.FC<{}> = () => {
  const [channels, setChannels] = useState<string[]>([
    "Music",
    "Automotive",
    "Technology",
    "Science",
  ]);
  const [clickedDate, setClickedDate] = useState<string>("ANYTIME");
  const [clickedChannel, setClickedChannel] = useState<string>("All");
  const [fromDateValue, setFromDateValue] = useState<Date>(new Date());
  const [toDateValue, setToDateValue] = useState<Date>(new Date());

  const state = useSelector((state: EventState) => state.event);
  const dispatch = useDispatch();
  const { setToggleSidebar, setSearch } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const toggleSidebar = () => {
    setToggleSidebar(false);
    // console.log(state["toggle_sidebar"]);
  };

  const dateFilterDetails = (value: string) => {
    if (value !== "LATER") {
      value = value.toLowerCase();
      return capitalizeFirstLetter(value);
    } else {
      return `From ${moment(fromDateValue).format("DD MMM YYYY")} to ${moment(
        toDateValue
      ).format("DD MMM YYYY")}`;
    }
  };

  const handleSearch = (filterDate: string, filterChannel: string) => {
    let beforeDate: string;
    let afterDate: string;
    console.log(filterDate);

    switch (filterDate) {
      case "TODAY": {
        beforeDate = moment().format();
        afterDate = moment().format();
        break;
      }
      case "TOMORROW": {
        beforeDate = moment().add(1, "days").format();
        afterDate = moment().add(1, "days").format();
        break;
      }
      case "THIS WEEK": {
        beforeDate = moment().startOf("week").format();
        afterDate = moment().add(7, "days").format();
        break;
      }
      case "THIS MONTH": {
        beforeDate = moment().clone().startOf("month").format();
        afterDate = moment().clone().endOf("month").format();
        break;
      }
      case "LATER": {
        beforeDate = moment(fromDateValue).format();
        afterDate = moment(toDateValue).format();
        break;
      }
      default: {
        beforeDate = moment().format();
        afterDate = moment().format();
        break;
      }
    }

    if (filterChannel === "All") {
      setSearch(filterDate, beforeDate, afterDate, channels);
    } else {
      setSearch(filterDate, beforeDate, afterDate, [filterChannel]);
    }
    // console.log(state);
  };

  // const getAllChannels = async () => {
  //   const response = await axios.get(url + "/events");
  //   setChannels(getChannels(response.data));
  // };

  // useEffect(() => {
  //   getAllChannels();
  // }, [channels]);

  return (
    <SidebarWrapper className={state["toggle_sidebar"] ? "active" : ""}>
      <SidebarContainer>
        <SidebarTop>
          <FilterTitle>
            <FilterText>DATE</FilterText>
          </FilterTitle>
          <FilterContainer>
            {dateFilter.map((filter: string, index: number) => (
              <DateButton
                onClick={() => setClickedDate(filter)}
                className={clickedDate === filter ? "active" : ""}
              >
                {filter}
              </DateButton>
            ))}
            <LaterButtonContainer>
              <DateButton
                onClick={() => setClickedDate("LATER")}
                className={clickedDate === "LATER" ? "active later" : ""}
              >
                LATER
              </DateButton>
              {clickedDate === "LATER" && (
                <>
                  <DateFlexContainer>
                    <DatePickerWrapperStyles />
                    <DateInputContainer>
                      <BiArrowFromLeft size={20} />
                      <DatePicker
                        value={fromDateValue}
                        onChange={setFromDateValue}
                        format="dd/MM/yy"
                        disableCalendar={true}
                        clearIcon={null}
                        className="dateinput"
                      />
                    </DateInputContainer>
                    -
                    <DateInputContainer>
                      <BiArrowFromRight size={20} />
                      <DatePicker
                        value={toDateValue}
                        onChange={setToDateValue}
                        format="dd/MM/yy"
                        disableCalendar={true}
                        clearIcon={null}
                        className="dateinput"
                      />
                    </DateInputContainer>
                  </DateFlexContainer>
                </>
              )}
            </LaterButtonContainer>
          </FilterContainer>

          <FilterTitle>
            <FilterText>CHANNEL</FilterText>
          </FilterTitle>
          <FilterContainer>
            <ChannelButton
              onClick={() => setClickedChannel("All")}
              className={clickedChannel === "All" ? "active" : ""}
            >
              All
            </ChannelButton>
            {channels.map((filter: string, index: number) => (
              <ChannelButton
                onClick={() => setClickedChannel(filter)}
                className={clickedChannel === filter ? "active" : ""}
              >
                {filter}
              </ChannelButton>
            ))}
            {/* <input type="date" id="birthday" name="birthday"></input> */}
          </FilterContainer>
        </SidebarTop>
        <CloseSidebar onClick={toggleSidebar} />
        <SearchButton onClick={() => handleSearch(clickedDate, clickedChannel)}>
          <ButtonTextContainer>
            <AiOutlineSearch /> <ButtonTextSpan>SEARCH</ButtonTextSpan>
          </ButtonTextContainer>

          <ButtonFilterText>{`${dateFilterDetails(clickedDate)} - ${
            clickedChannel === "All" ? "All Channel" : clickedChannel
          }`}</ButtonFilterText>
        </SearchButton>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
