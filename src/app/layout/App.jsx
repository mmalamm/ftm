import React, { Component } from "react";
import MeetupDashboard from "../../features/meetups/MeetupDashboard/MeetupDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <MeetupDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
