import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import MeetupListAttendee from "./MeetupListAttendee";

export class MeetupListItem extends Component {
  render() {
    const { meetup, onMeetupOpen, deleteMeetup } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={meetup.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{meetup.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{meetup.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {meetup.date} |<Icon name="marker" />
            {meetup.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {meetup.attendees &&
              meetup.attendees.map(attendee => (
                <MeetupListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{meetup.description}</span>
          <Button
            onClick={deleteMeetup(meetup.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={onMeetupOpen(meetup)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default MeetupListItem;
