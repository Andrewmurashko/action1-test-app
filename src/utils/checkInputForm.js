export function checkInputForm(state) {

  const errors = {};
  if (!state.name.length) {
    errors.name = 'dont have name';
  }
  if (!state.quality.length) {
    errors.quality = 'dont have quality';
  }
  if (!state.cost.length) {
    errors.cost = 'dont have cost';
  }

  return {
    isValid: !Object.keys(errors).length,
    errors,
  };
}
