import sensorRepo from './sensor.repository';

export const SENSOR = 'sensor';

const repositories = {
  [SENSOR]: sensorRepo,
};

export default {
  with: (repository) => repositories[repository],
};
