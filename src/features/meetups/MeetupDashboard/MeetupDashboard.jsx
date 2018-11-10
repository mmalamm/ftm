import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import MeetupList from "../MeetupList/MeetupList";
import MeetupForm from "../MeetupForm/MeetupForm";
import { createMeetup, deleteMeetup, updateMeetup } from "../meetupActions";

import cuid from "cuid";

const mapState = state => ({
  meetups: state.meetups
});

const actions = {
  createMeetup,
  updateMeetup,
  deleteMeetup
};

class MeetupDashboard extends Component {
  state = {
    isOpen: false,
    selectedMeetup: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedMeetup: null
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateMeetup = updatedMeetup => {
    this.props.updateMeetup(updatedMeetup);
    this.setState({
      isOpen: false,
      selectedMeetup: null
    });
  };

  handleOpenMeetup = meetupToOpen => () => {
    this.setState({
      selectedMeetup: meetupToOpen,
      isOpen: true
    });
  };

  handleCreateMeetup = newMeetup => {
    newMeetup.id = cuid();
    newMeetup.hostPhotoURL = "/assets/user.png";
    this.props.createMeetup(newMeetup);
    this.setState({
      isOpen: false
    });
  };

  handleDeleteMeetup = meetupId => () => {
    this.props.deleteMeetup(meetupId);
  };

  render() {
    const { selectedMeetup } = this.state;
    const { meetups } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <MeetupList
            deleteMeetup={this.handleDeleteMeetup}
            onMeetupOpen={this.handleOpenMeetup}
            meetups={meetups}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Meetup"
          />
          {this.state.isOpen && (
            <MeetupForm
              updateMeetup={this.handleUpdateMeetup}
              createMeetup={this.handleCreateMeetup}
              handleCancel={this.handleCancel}
              selectedMeetup={selectedMeetup}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(MeetupDashboard);
