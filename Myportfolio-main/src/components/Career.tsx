import "./styles/Career.css";

const Career = () => {
  return (
    <div id="projects" className="career-section section-container">
      <div className="career-container">

        <h2>My Projects</h2>

        <div className="career-info">

          <div className="career-info-box">
            <h4>AI Powered Cyber Threat Intelligence</h4>
            <p>
              AI-based threat intelligence system that analyzes security data
              and detects cyber threats using machine learning techniques.
            </p>
          </div>

          <div className="career-info-box">
            <h4>Emotion Detection System</h4>
            <p>
              A machine learning system that detects human emotions from
              facial expressions using Python, OpenCV and deep learning.
            </p>
          </div>

          <div className="career-info-box">
            <h4>DevOps CI/CD Pipeline Automation</h4>
            <p>
              Automated CI/CD pipeline that builds, tests and deploys
              applications using DevOps practices.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Career;