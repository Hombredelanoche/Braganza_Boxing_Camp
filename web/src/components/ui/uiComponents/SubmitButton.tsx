import Button from "@/components/ui/uiComponents/Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ disabled, ...otherProps }) => {
  const { isSubmitting, isValid } = useFormikContext();

  return (
    <Button
      disabled={disabled || isSubmitting || !isValid}
      type="submit"
      label="Valider"
      path="/"
      {...otherProps}
    />
  );
};

export default SubmitButton;
