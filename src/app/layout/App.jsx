import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import MeetupDashboard from "../../features/meetups/MeetupDashboard/MeetupDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import MeetupForm from "../../features/meetups/MeetupForm/MeetupForm";
import MeetupDetailedPage from "../../features/meetups/MeetupDetailed/MeetupDetailed";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/meetups" component={MeetupDashboard} />
                  <Route path="/meetup/:id" component={MeetupDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createMeetup" component={MeetupForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
