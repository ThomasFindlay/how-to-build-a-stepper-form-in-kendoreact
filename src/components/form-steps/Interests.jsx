import { Field, FieldWrapper } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";

const Interests = () => {
  return (
    <div>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="interests.movies"
            component={Input}
            labelClassName={"k-form-label"}
            label="Favourite Movie"
          />
        </div>
      </FieldWrapper>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="interests.books"
            component={Input}
            labelClassName={"k-form-label"}
            label="Favourite Book"
          />
        </div>
      </FieldWrapper>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="interests.games"
            component={Input}
            labelClassName={"k-form-label"}
            label="Favourite Game"
          />
        </div>
      </FieldWrapper>
      <FieldWrapper>
        <div className="k-form-field-wrap">
          <Field
            name="interests.activity"
            component={Input}
            labelClassName={"k-form-label"}
            label="Favourite Activity"
          />
        </div>
      </FieldWrapper>
    </div>
  );
};

export default Interests;
