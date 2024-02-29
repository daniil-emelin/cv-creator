import { useFieldArray } from "react-hook-form";
import dayjs from "dayjs";

import { Section } from "components";
import { WorkExperienceFieldset } from "../WorkExperienceFieldset";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

export const WorkExperienceSection = ({ form }: Props) => {
  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: "experience",
  });

  const handleEducationAdd = () => {
    appendExperience({
      from: dayjs(new Date()),
      to: dayjs(new Date()),
      company: "",
      position: "",
    });
  };

  return (
    <Section title="Опыт работы" onAddItem={handleEducationAdd}>
      {experienceFields.map((field, index) => (
        <WorkExperienceFieldset
          key={field.id}
          form={form}
          remove={removeExperience}
          index={index}
        />
      ))}
    </Section>
  );
};
