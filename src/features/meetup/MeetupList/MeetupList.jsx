import React, { Component } from "react";
import MeetupListItem from "./MeetupListItem";

export class MeetupList extends Component {
  render() {
    return (
      <div>
        <h1>Meetup List</h1>
        <MeetupListItem />
        <MeetupListItem />
        <MeetupListItem />
      </div>
    );
  }
}

export default MeetupList;
