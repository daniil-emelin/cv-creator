import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { FormInput } from "components";

import type { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  index: number;
  form: UseFormReturn<CV>;
  remove: UseFieldArrayRemove;
};

export const EducationFieldset = ({ form, remove, index }: Props) => (
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
    <FormInput
      name={`education.${index}.finalYear`}
      label="Год окончания"
      form={form}
    />
    <FormInput
      name={`education.${index}.speciality`}
      label="Специальность"
      form={form}
    />
    <FormInput
      name={`education.${index}.organization`}
      label="Место обучения"
      form={form}
    />
    <IconButton onClick={() => remove(index)} color="primary">
      <DeleteIcon />
    </IconButton>
  </Stack>
);
