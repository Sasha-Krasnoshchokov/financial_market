import { useSelector, useDispatch } from 'react-redux';

import { switcherIntervals } from './states/intervalsState';

export default function useIntervals() {
  const intervals = useSelector((state) => state.intervals.value);

  const dispatch = useDispatch();
  const switchIntervals = (name) => dispatch(switcherIntervals(name));

  return ({
    intervals,
    switchIntervals,
  });
}
