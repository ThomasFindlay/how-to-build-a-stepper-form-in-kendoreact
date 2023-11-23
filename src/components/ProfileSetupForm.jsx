import { useState } from "react";
import { Stepper } from "@progress/kendo-react-layout";
import { Form, FormElement } from "@progress/kendo-react-form";
import PersonalDetails from "./form-steps/PersonalDetails";
import Interests from "./form-steps/Interests";
import AccountDetails from "./form-steps/AccountDetails";
const steps = [
  {
    label: "Personal Details",
    icon: "k-i-user",
  },
  {
    label: "Interests",
    icon: "k-i-link",
  },
  {
    label: "Account",
    icon: "k-i-lock",
  },
];

const formStepComponent = {
  0: PersonalDetails,
  1: Interests,
  2: AccountDetails,
};

const ProfileSetupForm = () => {
  const [step, setStep] = useState(0);

  const FormStepComponent = formStepComponent[step];
  const isFirstStep = step === 0;
  const isLastStep = step === steps.length - 1;

  const onSubmitHandler = data => {
    console.log("SUBMIT", data);
    if (!isLastStep) {
      setStep(step => step + 1);
      return;
    }
    // Handle form submission
  };

  return (
    <div>
      <Form
        onSubmit={onSubmitHandler}
        render={formRenderProps => {
          console.log(formRenderProps);
          return (
            <FormElement className="k-display-flex k-flex-column k-justify-content-center k-ml-auto k-mr-auto k-mt-12">
              <h1 className="k-text-center k-mb-8">Profile Setup</h1>
              <Stepper
                value={step}
                onChange={e => setStep(e.value)}
                items={steps}
              />

              <div
                className="k-ml-auto k-mr-auto"
                style={{
                  width: "225px",
                }}
              >
                <FormStepComponent />
                <div className="k-form-buttons k-mt-8 k-w-full">
                  <button
                    type="button"
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-w-full"
                    disabled={isFirstStep}
                    onClick={() => {
                      setStep(step => step - 1);
                    }}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-w-full"
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            </FormElement>
          );
        }}
      />
    </div>
  );
};

export default ProfileSetupForm;
