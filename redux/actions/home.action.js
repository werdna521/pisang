export const ADD_HOME_DEVICE = 'ADD_HOME_DEVICE';

export const addHomeDevice = (newDevice, index) => {
  return { type: ADD_HOME_DEVICE, newDevice, index};
};
