import { CREATE_MEETUP, DELETE_MEETUP, UPDATE_MEETUP } from "./meetupConstants";

export const createMeetup = meetup => {
  return {
    type: CREATE_MEETUP,
    payload: {
      meetup
    }
  };
};
export const updateMeetup = meetup => {
  return {
    type: UPDATE_MEETUP,
    payload: {
      meetup
    }
  };
};
export const deleteMeetup = meetupId => {
  return {
    type: DELETE_MEETUP,
    payload: {
      meetupId
    }
  };
};
