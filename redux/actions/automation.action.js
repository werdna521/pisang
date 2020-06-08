export const ADD_AUTOMATION_RULE = 'ADD_AUTOMATION_RULE';

export const SECURITY = 'security';
export const TIME = 'time';
export const MOTION = 'motion';
export const TEMPERATURE = 'temperature';

export const addAutomationRule = (category, rule) => {
  return { type: ADD_AUTOMATION_RULE, category, rule };
};
