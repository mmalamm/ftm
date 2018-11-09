import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import MeetupList from "../MeetupList/MeetupList";
import MeetupForm from "../MeetupForm/MeetupForm";

import cuid from "cuid";

const meetupsData = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class MeetupDashboard extends Component {
  state = {
    meetups: meetupsData,
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
    this.setState({
      meetups: this.state.meetups.map(meetup => {
        if (meetup.id === updatedMeetup.id) {
          return Object.assign({}, updatedMeetup);
        } else {
          return meetup;
        }
      }),
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
    const updatedMeetups = [...this.state.meetups, newMeetup];
    this.setState({
      meetups: updatedMeetups,
      isOpen: false
    });
  };

  handleDeleteMeetup = meetupId => () => {
    this.setState(prevState => {
      const updatedMeetups = prevState.meetups.filter(e => e.id !== meetupId);
      return {
        meetups: updatedMeetups
      };
    });
  };

  render() {
    const { selectedMeetup } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <MeetupList
            deleteMeetup={this.handleDeleteMeetup}
            onMeetupOpen={this.handleOpenMeetup}
            meetups={this.state.meetups}
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

export default MeetupDashboard;
