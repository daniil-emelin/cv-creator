import { useController } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";

import type { FieldPath, UseFormReturn } from "react-hook-form";
import type { FilledInputProps } from "@mui/material/FilledInput";
import type { CV } from "store/cv/types";

type Props = {
  name: FieldPath<CV>;
  label?: string;
  form: UseFormReturn<CV>;
  textFieldProps?: FilledInputProps;
};

export const FormInput = ({
  name,
  label,
  form,
  textFieldProps,
}: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: form.control,
  });

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel>{label}</InputLabel>
      <FilledInput
        error={!!error}
        value={field.value}
        onChange={field.onChange}
        {...textFieldProps}
      />
      {error ? (
        <FormHelperText error={true}>{error?.message}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
