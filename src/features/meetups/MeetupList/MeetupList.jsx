import React, { Component } from "react";
import MeetupListItem from "./MeetupListItem";

export class MeetupList extends Component {
  render() {
    const { meetups, deleteMeetup } = this.props;
    return (
      <div>
        {meetups.map(meetup => (
          <MeetupListItem
            key={meetup.id}
            meetup={meetup}
            deleteMeetup={deleteMeetup}
          />
        ))}
      </div>
    );
  }
}

export default MeetupList;
