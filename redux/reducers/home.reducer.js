import { ADD_HOME_SENSOR } from '../actions/home.action';

const INITIAL_STATES = [
  {
    location: 'Bedroom',
    devices: [],
    sensors: [],
  },
];

const homeReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ADD_HOME_SENSOR:
      return state.map((h, i) => {
        if (i === action.index) {
          const newH = { ...h };
          newH.sensors.push(action.newSensor);
          return newH;
        }
        return h;
      });
    default:
      return state;
  }
};

export default homeReducer;
