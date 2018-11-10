import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

const TestComponent = props => {
  const { incrementCounter: iC, decrementCounter: dC, data } = props;
  return (
    <div>
      <h1>TestComponent</h1>
      <h3>The answer is: {data}</h3>
      <Button onClick={iC} color="green" content="Increment" />
      <Button onClick={dC} color="red" content="Decrement" />
    </div>
  );
};

export default connect(
  mapState,
  actions
)(TestComponent);
