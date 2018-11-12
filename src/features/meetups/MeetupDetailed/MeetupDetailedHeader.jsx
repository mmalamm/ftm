import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const meetupImageStyle = {
  filter: "brightness(30%)"
};

const meetupImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const MeetupDetailedHeader = ({ meetup }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${meetup.category}.jpg`}
          fluid
          style={meetupImageStyle}
        />

        <Segment basic style={meetupImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={meetup.title}
                  style={{ color: "white" }}
                />
                <p>{meetup.date}</p>
                <p>
                  Hosted by <strong>{meetup.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${meetup.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default MeetupDetailedHeader;
