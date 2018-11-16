import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createMeetup, updateMeetup } from "../meetupActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";

const mapState = (state, ownProps) => {
  const meetupId = ownProps.match.params.id;

  let meetup = {};

  if (meetupId && state.meetups.length > 0) {
    meetup = state.meetups.find(meetup => meetup.id === meetupId);
  }

  return {
    initialValues: meetup
  };
};

const actions = {
  createMeetup,
  updateMeetup
};

const category = [
  {
    key: "drinks",
    text: "Drinks",
    value: "drinks"
  },
  {
    key: "culture",
    text: "Culture",
    value: "culture"
  },
  {
    key: "film",
    text: "Film",
    value: "film"
  },
  {
    key: "food",
    text: "Food",
    value: "food"
  },
  {
    key: "music",
    text: "Music",
    value: "music"
  },
  {
    key: "travel",
    text: "Travel",
    value: "travel"
  }
];

export class MeetupForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateMeetup(values);
      this.props.history.goBack();
    } else {
      const newMeetup = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: 'andrew'
      };
      this.props.createMeetup(newMeetup);
      this.props.history.push("/meetups");
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Meetup details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your meetup a name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your meetup's category?"
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Tell us about your meetup"
              />
              <Header sub color="teal" content="Meetup location" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Meetup's City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Meetup Venue"
              />
              <Field
                name="date"
                type="text"
                component={TextInput}
                placeholder="Meetup Date"
              />
              <Button positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "meetupForm", enableReinitialize: true })(MeetupForm));
