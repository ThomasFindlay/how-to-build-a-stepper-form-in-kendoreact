import { Input } from "@progress/kendo-react-inputs";
import { Error } from "@progress/kendo-react-labels";

const TextField = props => {
  const { validationMessage, visited, ...fieldProps } = props;
  return (
    <div className="k-form-field-wrap">
      <Input {...fieldProps} />
      {visited && validationMessage ? <Error>{validationMessage}</Error> : null}
    </div>
  );
};

export default TextField;
