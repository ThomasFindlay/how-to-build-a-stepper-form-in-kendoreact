import { Field, FieldWrapper } from "@progress/kendo-react-form";
import TextField from "./TextField";

const isRequired = message => value => value ? "" : message;

const PersonalDetails = () => {
  return (
    <div>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name={"firstName"}
            component={TextField}
            labelClassName={"k-form-label"}
            label={"First name"}
            validator={isRequired("First name is required")}
          />
        </div>
      </FieldWrapper>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name={"lastName"}
            component={TextField}
            labelClassName={"k-form-label"}
            label={"Last name"}
            validator={isRequired("Last name is required")}
          />
        </div>
      </FieldWrapper>
    </div>
  );
};

export default PersonalDetails;
