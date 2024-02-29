import FormGroup from "@mui/material/FormGroup";

import { FormCheckbox, Section } from "components";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const AdditionalParamsSection = ({ form }: Props) => (
  <Section title="Дополнительные параметры">
    <FormGroup>
      <FormCheckbox
        form={form}
        name="isSearchingForRemote"
        label="Ищу удаленную работу"
      />
      <FormCheckbox
        form={form}
        name="noBusinessTrip"
        label="Не готов к командировкам"
      />
      <FormCheckbox
        form={form}
        name="isReadyToRelocate"
        label="Согласен на релокацию"
      />
    </FormGroup>
  </Section>
);
