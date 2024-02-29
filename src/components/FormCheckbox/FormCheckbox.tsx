import { useController } from "react-hook-form";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import type { FieldPath, UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  name: FieldPath<CV>;
  label?: string;
  form: UseFormReturn<CV>;
};

export const FormCheckbox = ({ form, name, label }: Props) => {
  const { field } = useController({
    name,
    control: form.control,
  });

  return (
    <FormControlLabel
      name={name}
      control={
        <Checkbox
          {...field}
          checked={Boolean(field.value)}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      }
      label={label}
    />
  );
};
