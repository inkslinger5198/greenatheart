import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./ProgressBar.css"; // Make sure to create this CSS file

const steps = [
  {
    id: 1,
    title: "Donate",
    description: "Make your donation to help the cause.",
  },
  {
    id: 2,
    title: "Email Confirmation",
    description: "Check your email for the donation confirmation.",
  },
  {
    id: 3,
    title: "Photos",
    description: "Receive photos of the impact your donation has made.",
  },
  {
    id: 4,
    title: "Green Certificate",
    description: "Get a green certificate as a thank you.",
  },
];

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="progress-bar-container">
      <div className="step-progress">
        <div className="lap-nav-btn">
          <div className="navigation">
            <GrFormPrevious className="nav-icon" onClick={prevStep} />
          </div>
        </div>

        <div className="progress-bar">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep > index ? "completed" : ""}`}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
        <div className="lap-nav-btn">
          <div className="navigation">
            <GrFormNext className="nav-icon" onClick={nextStep} />
          </div>
        </div>
      </div>

      <div className="step-card">
        <h3>{steps[currentStep - 1].title}</h3>
        <p>{steps[currentStep - 1].description}</p>
      </div>

      <div className="phone-nav-btn">
        <div className="navigation">
          <GrFormPrevious className="nav-icon" onClick={prevStep} />
        </div>
        <div className="navigation">
          <GrFormNext className="nav-icon" onClick={nextStep} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
