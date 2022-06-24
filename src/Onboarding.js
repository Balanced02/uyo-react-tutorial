import { useState } from "react";
import "./App.css";
import { ControlledOnboarding } from "./components/ControlledOnboardingFlow";
import { UncontrolledOnboarding } from "./components/UncontrolledOnboarding";

const Step1 = ({ goToNext }) => (
  <div>
    <div>Step 1</div>
    <button onClick={() => goToNext({ name: "Daniel" })}> Go to step 2</button>
  </div>
);
const Step2 = ({ goToNext }) => (
  <div>
    <div>Step 2</div>
    <button onClick={() => goToNext({ age: 200 })}> Go to step 3</button>
  </div>
);
const Step3 = ({ goToNext }) => (
  <div>
    <div>Based on your age, you qualify for discount</div>
    <button onClick={() => goToNext({ color: "black" })}>
      {" "}
      Go to Last step
    </button>
  </div>
);
const Step4 = ({ goToNext }) => (
  <div>
    <div>Step 3</div>
    <button onClick={() => goToNext({ color: "black" })}> Finish</button>
  </div>
);

function Onboarding() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const updateData = {
      ...onboardingData,
      ...stepData,
    };
    console.log(updateData)
    setOnboardingData(updateData);
    setCurrentIndex((c) => c + 1);
  };

  return (
    <div className="container">
      <UncontrolledOnboarding
        onFinished={(data) => {
          console.log("finished", data);
        }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </UncontrolledOnboarding>

      <ControlledOnboarding
        currentIndex={currentIndex}
        goToNext={goToNext}
        onFinished={(data) => {
          console.log("controlled", data);
        }}
      >
        <Step1 />
        <Step2 />
        {onboardingData.age > 18 && <Step3 />}
        <Step4 />
      </ControlledOnboarding>
    </div>
  );
}

export default Onboarding;
