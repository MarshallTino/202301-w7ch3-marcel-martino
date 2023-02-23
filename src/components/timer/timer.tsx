import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RocketAnimation from "../rocketAnimation/rocketanimation";
import { RootState } from "../../store";
import {
  decrementCountdown,
  launchRocket,
  reset,
} from "../../store/features/rocket/rocketsSlice";

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const countdown = useSelector(
    (state: RootState) => state.rocketLaunch.countdown
  );
  const launching = useSelector(
    (state: RootState) => state.rocketLaunch.launching
  );

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        dispatch(decrementCountdown());
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!launching) {
      dispatch(launchRocket());
    }
  }, [countdown, launching, dispatch]);

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="rocket-launch">
      {launching ? (
        <RocketAnimation />
      ) : (
        <>
          <h1>Countdown: {countdown}</h1>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Timer;
