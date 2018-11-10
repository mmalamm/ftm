import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyMeetup = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

export class MeetupForm extends Component {
  state = {
    meetup: emptyMeetup
  };

  componentDidMount() {
    if (this.props.selectedMeetup !== null) {
      this.setState({
        meetup: this.props.selectedMeetup
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMeetup !== this.props.selectedMeetup) {
      this.setState({
        meetup: nextProps.selectedMeetup || emptyMeetup
      });
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.meetup.id) {
      this.props.updateMeetup(this.state.meetup);
    } else {
      this.props.createMeetup(this.state.meetup);
    }
  };

  onInputChange = e => {
    const newMeetup = this.state.meetup;
    newMeetup[e.target.name] = e.target.value;
    this.setState({
      meetup: newMeetup
    });
  };
  render() {
    const { handleCancel } = this.props;
    const { meetup } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={meetup.title}
              placeholder="Meetup Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={meetup.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={meetup.city}
              placeholder="City meetup is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={meetup.venue}
              placeholder="Enter the Venue of the meetup"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={meetup.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default MeetupForm;
