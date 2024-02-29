import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { FormDateInput, FormInput } from "components";

import type { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  index: number;
  form: UseFormReturn<CV>;
  remove: UseFieldArrayRemove;
};

export const WorkExperienceFieldset = ({ form, remove, index }: Props) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
    <FormDateInput
      name={`experience.${index}.from`}
      label="Начало работы"
      form={form}
    />
    <FormDateInput
      name={`experience.${index}.to`}
      label="Конец работы"
      form={form}
    />
    <FormInput
      name={`experience.${index}.company`}
      label="Компания"
      form={form}
    />
    <FormInput
      name={`experience.${index}.position`}
      label="Должность"
      form={form}
    />
    <IconButton onClick={() => remove(index)} color="primary">
      <DeleteIcon />
    </IconButton>
  </Stack>
);
