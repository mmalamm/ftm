import React, { Component } from "react";
import MeetupListItem from "./MeetupListItem";

export class MeetupList extends Component {
  render() {
    const { meetups } = this.props;
    return (
      <div>
        <h1>Meetup List</h1>
        {meetups.map(meetup => (
          <MeetupListItem key={meetup.id} meetup={meetup} />
        ))}
      </div>
    );
  }
}

export default MeetupList;
