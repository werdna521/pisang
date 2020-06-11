import { ADD_AUTOMATION_RULE } from '../actions/automation.action';

const INITIAL_STATES = {
  security: [],
  time: [
    {
      name: 'Rise and Shine',
      time: 'Everyday, 07:00',
      todo: 'Turn off AC at Bedroom',
    },
    {
      name: 'Time to Rest',
      time: 'Everyday, 18:00',
      todo: 'Turn on AC at Bedroom, set to 16°C',
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
