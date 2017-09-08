const votes = () => {};
const visibility = () => {};
const picks = () => {};

var apps = {
    votes,
    visibility,
    picks
};

const combine = (a) => {
  return Object.keys(a).reduce(
      (nextState, key) => {
            nextState[key] = a[key]
          return nextState;
    }, {})
};

console.log(combine(apps));