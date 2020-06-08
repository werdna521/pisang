import { ADD_AUTOMATION_RULE } from '../actions/automation.action';

const INITIAL_STATES = {
  security: [],
  time: [
    {
      name: 'Open Office',
    },
    {
      name: 'Close Office',
    },
  ],
  motion: [],
  temperature: [],
};

const automationReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ADD_AUTOMATION_RULE:
      const newState = { ...state };
      newState[action.category].push(action.rule);
      return newState;
    default:
      return state;
  }
};

export default automationReducer;
