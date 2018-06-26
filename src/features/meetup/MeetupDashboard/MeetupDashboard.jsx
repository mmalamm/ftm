import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import MeetupList from "../MeetupList/MeetupList";
import MeetupForm from "../MeetupForm/MeetupForm";

class MeetupDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <MeetupList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content="Create Meetup" />
          <MeetupForm />
        </Grid.Column>
      </Grid>
    );
  }
}

export default MeetupDashboard;
