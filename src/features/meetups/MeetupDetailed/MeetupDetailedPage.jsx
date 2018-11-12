import React from "react";

import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import MeetupDetailedHeader from "./MeetupDetailedHeader";
import MeetupDetailedInfo from "./MeetupDetailedInfo";
import MeetupDetailedChat from "./MeetupDetailedChat";
import MeetupDetailedSidebar from "./MeetupDetailedSidebar";

const mapState = (state, ownProps) => {
  const meetupId = ownProps.match.params.id;

  let meetup = {};

  if (meetupId && state.meetups.length > 0) {
    meetup = state.meetups.find(meetup => meetup.id === meetupId);
  }

  return { meetup };
};

const MeetupDetailedPage = ({ meetup }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <MeetupDetailedHeader {...{ meetup }} />
        <MeetupDetailedInfo {...{ meetup }} />
        <MeetupDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <MeetupDetailedSidebar attendees={meetup.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(MeetupDetailedPage);
