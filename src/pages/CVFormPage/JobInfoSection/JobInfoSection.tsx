import Stack from "@mui/material/Stack";

import { FormInput, Section } from "components";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const JobInfoSection = ({ form }: Props) => (
  <Section title="Искомая должность и зарплата">
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <FormInput name="position" label="Должность" form={form} />
      <FormInput
        name="salary"
        label="Зарплата"
        form={form}
        textFieldProps={{
          type: "number",
        }}
      />
    </Stack>
  </Section>
);
