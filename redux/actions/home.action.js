export const ADD_HOME_SENSOR = 'ADD_HOME_SENSOR';

export const addHomeSensor = (newSensor, index) => {
  return { type: ADD_HOME_SENSOR, newSensor, index };
};
