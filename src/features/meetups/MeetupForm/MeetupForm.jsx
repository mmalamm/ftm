import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import { Segment, Form, Button } from "semantic-ui-react";
import { createMeetup, updateMeetup } from "../meetupActions";
import TextInput from "../../../app/common/form/TextInput";

const mapState = (state, ownProps) => {
  const meetupId = ownProps.match.params.id;

  let meetup = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (meetupId && state.meetups.length > 0) {
    meetup = state.meetups.find(meetup => meetup.id === meetupId);
  }

  return {
    meetup
  };
};

const actions = {
  createMeetup,
  updateMeetup
};

export class MeetupForm extends Component {
  state = {
    meetup: { ...this.props.meetup }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.meetup.id) {
      this.props.updateMeetup(this.state.meetup);
      this.props.history.goBack();
    } else {
      const newMeetup = {
        ...this.state.meetup,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createMeetup(newMeetup);
      this.props.history.push("/meetups");
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
          <Field
            name="title"
            type="text"
            component={TextInput}
            placeholder="Give your meetup a name"
          />
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
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "meetupForm" })(MeetupForm));
