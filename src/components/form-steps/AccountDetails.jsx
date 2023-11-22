import { Field, FieldWrapper } from "@progress/kendo-react-form";
import TextField from "./TextField";
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = value =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const passwordValidator = value => {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < 8) {
    return "Password must have minimum 8 characters";
  }

  return "";
};

const AccountDetails = () => {
  return (
    <div>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="email"
            type="email"
            component={TextField}
            labelClassName={"k-form-label"}
            label="Email"
            validator={emailValidator}
          />
        </div>
      </FieldWrapper>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="password"
            type="password"
            component={TextField}
            labelClassName={"k-form-label"}
            label="Password"
            validator={passwordValidator}
          />
        </div>
      </FieldWrapper>
    </div>
  );
};

export default AccountDetails;
