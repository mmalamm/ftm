import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import MeetupList from "../MeetupList/MeetupList";
import { deleteMeetup } from "../meetupActions";

const mapState = state => ({
  meetups: state.meetups
});

const actions = {
  deleteMeetup
};

class MeetupDashboard extends Component {
  handleDeleteMeetup = meetupId => () => {
    this.props.deleteMeetup(meetupId);
  };

  render() {
    const { meetups } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <MeetupList
            deleteMeetup={this.handleDeleteMeetup}
            meetups={meetups}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(MeetupDashboard);
