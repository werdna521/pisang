import { ADD_HOME_DEVICE } from '../actions/home.action';

const INITIAL_STATES = {
  data: [
    {
      location: 'Bedroom',
      devices: [
        {
          label: 'Temp. / Humidity',
          value: '28°C / 77%',
        },
        {
          label: 'XN Air Conditioner',
          value: '28°C',
        },
        {
          label: 'Standing Fan',
          value: 'Off',
        },
      ],
    },
    {
      location: 'Toilet',
      devices: [
        {
          label: 'Ceiling Light',
          value: 'On',
        },
        {
          label: 'Washing Machine',
          value: 'Off',
        },
      ],
    },
  ],
};

const homeReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ADD_HOME_DEVICE:
      return state.map((h, i) => {
        if (i === action.index) {
          return [...h, action.newDevice];
        }
        return h;
      });
    default:
      return state;
  }
};

export default homeReducer;
