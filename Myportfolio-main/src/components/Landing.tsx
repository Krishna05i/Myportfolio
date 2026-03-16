import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              M.Venkata Krishna
              <br />
            </h1>
          </div>
            <div className="landing-info">
              <h3>CSE (Cyber Security) Student</h3>
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">Cyber Security</div>
                <div className="landing-h2-2">Ethical Hacker</div>
              </h2>
              <h2>
                <div className="landing-h2-info">Security Analyst</div>
                <div className="landing-h2-info-1">Cyber Security Enthusiast</div>
              </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
