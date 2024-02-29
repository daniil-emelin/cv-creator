import Stack from "@mui/material/Stack";

import { Section, FormInput, FormDateInput } from "components";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const PersonalInfoSection = ({ form }: Props) => (
  <Section title="Личные данные">
    <FormInput name="name" label="Имя" form={form} />
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <FormDateInput name="birthDate" label="Дата рождения" form={form} />
      <FormInput name="city" label="Город проживания" form={form} />
    </Stack>
  </Section>
);
