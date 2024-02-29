import { useFieldArray } from "react-hook-form";

import { Section } from "components";

import { EducationFieldset } from "../EducationFieldset";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const EducationSection = ({ form }: Props) => {
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: form.control,
    name: "education",
  });

  const handleEducationAdd = () => {
    appendEducation({
      finalYear: "",
      speciality: "",
      organization: "",
    });
  };

  return (
    <Section title="Образование" onAddItem={handleEducationAdd}>
      {educationFields.map((field, index) => (
        <EducationFieldset
          key={field.id}
          form={form}
          remove={removeEducation}
          index={index}
        />
      ))}
    </Section>
  );
};
