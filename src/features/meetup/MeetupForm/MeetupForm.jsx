import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export class MeetupForm extends Component {
  state = {
    meetup: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.createMeetup(this.state.meetup);
  };

  onInputChange = e => {
    const newEvent = this.state.meetup;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      meetup: newEvent
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
