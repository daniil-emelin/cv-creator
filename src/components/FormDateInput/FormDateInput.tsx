import { useController } from "react-hook-form";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import type { FieldPath, UseFormReturn } from "react-hook-form";
import type { TextFieldProps } from "@mui/material/TextField";
import type { CV } from "store/cv/types";

import "dayjs/locale/ru";

type Props = {
  name: FieldPath<CV>;
  label?: string;
  form: UseFormReturn<CV>;
  textFieldProps?: TextFieldProps;
};

export const FormDateInput = ({ name, label, form }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: form.control,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        maxDate={dayjs(new Date())}
        label={label}
        value={field.value}
        onChange={field.onChange}
        formatDensity="spacious"
        slotProps={{
          textField: {
            error: !!error,
            helperText: error ? error.message : null,
            fullWidth: true,
            variant: "filled",
          },
        }}
      />
    </LocalizationProvider>
  );
};
