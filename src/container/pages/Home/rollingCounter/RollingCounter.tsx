import { useEffect, useState } from 'react'
import Index from '../../../Index';
import PagesIndex from '../../../PagesIndex';

export default function RollingCounter() {
      const [hours, setHours] = useState<number>(2);
      const [minutes, setMinutes] = useState<number>(25);
      const [seconds, setSeconds] = useState<number>(45);
      const [nextSeconds, setNextSeconds] = useState<number>(seconds - 1); // Initialize nextSeconds
      const [animate, setAnimate] = useState<boolean>(false);

      useEffect(() => {
            const interval = setInterval(() => {
                  // Calculate the next seconds value based on the current seconds
                  setNextSeconds(seconds > 0 ? seconds - 1 : 59);

                  if (seconds > 0) {
                        setTimeout(() => setSeconds(prev => prev - 1), 500);
                  } else if (minutes > 0) {
                        setMinutes(prev => prev - 1);
                        setSeconds(59);
                  } else if (hours > 0) {
                        setHours(prev => prev - 1);
                        setMinutes(59);
                        setSeconds(59);
                  }

                  // Trigger animation for the last digit
                  setAnimate(true);
                  setTimeout(() => setAnimate(false), 500); // Reset animation after 0.5 seconds
            }, 1000);

            return () => clearInterval(interval);
      }, [hours, minutes, seconds]);

      return (
            <Index.Box className="timer-main">
                  <Index.Box className="timer-flex">
                        <Index.Box className="time-box">
                              <Index.Typography id="hours" className="time-text">
                                    {String(hours).padStart(2, '0')}
                              </Index.Typography>
                              <Index.Typography className="time-label">HOURS</Index.Typography>
                        </Index.Box>
                        <Index.Box className="colon-img-box">
                              <img src={PagesIndex.Svg.colunIcon} alt="Colon" className="colon-img" />
                        </Index.Box>
                        <Index.Box className="time-box">
                              <Index.Typography id="minutes" className="time-text">
                                    {String(minutes).padStart(2, '0')}
                              </Index.Typography>
                              <Index.Typography className="time-label">MINUTES</Index.Typography>
                        </Index.Box>
                        <Index.Box className="colon-img-box">
                              <img src={PagesIndex.Svg.colunIcon} alt="Colon" className="colon-img" />
                        </Index.Box>
                        <Index.Box className="time-box">
                              <div className="digits-container">
                                    <Index.Typography className="time-text">
                                          {String(seconds).padStart(2, '0')[0]}
                                    </Index.Typography>

                                    <div className="last-digit-wrapper">
                                          <div className={`current-digit ${animate ? 'slide-up' : ''}`}>
                                                <Index.Typography className="time-text">
                                                      {String(seconds).padStart(2, '0')[1]}
                                                </Index.Typography>
                                          </div>

                                          <div className={`next-digit ${animate ? 'slide-up' : ''}`}>
                                                <Index.Typography className="time-text">
                                                      {String(nextSeconds).padStart(2, '0')[1]}
                                                </Index.Typography>
                                          </div>
                                    </div>
                              </div>
                              <Index.Typography className="time-label">SECONDS</Index.Typography>
                        </Index.Box>
                  </Index.Box>
            </Index.Box>
      );
}
