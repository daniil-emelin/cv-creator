import Stack from "@mui/material/Stack";

import { FormInput, Section } from "components";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const ContactsSection = ({ form }: Props) => (
  <Section title="Контакты">
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <FormInput
        name="phone"
        label="Телефон"
        form={form}
        textFieldProps={{ type: "tel" }}
      />
      <FormInput
        name="email"
        label="Электронная почта"
        form={form}
        textFieldProps={{ type: "email" }}
      />
    </Stack>
  </Section>
);
