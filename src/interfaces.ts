import { Dispatch, SetStateAction } from "react";

export interface comment {
  email: string;
  comment: string;
  comment_date: string;
  comment_time: string;
}

export interface user {
  id: string;
  email: string;
  password: string;
}

export interface eventProps {
  obj: event;
}

export interface event {
  name_event?: string;
  created_date?: string;
  start_date?: string;
  end_date?: string;
  start_time?: string;
  end_time?: string;
  description?: string;
  channel?: string;
  location?: string;
  address?: string;
  images?: number;
  id?: string;
  email?: string;
  likes?: string[];
  going?: string[];
  comments?: comment[];
}

// export interface IProps {
//   myVar: boolean;
//   setMyVar?: Dispatch<SetStateAction<boolean>>;
// }
