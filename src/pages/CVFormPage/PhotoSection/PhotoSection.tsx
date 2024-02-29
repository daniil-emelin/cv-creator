import { Controller } from "react-hook-form";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Section } from "components";

import type { UseFormReturn } from "react-hook-form";
import type { CV } from "store/cv/types";

type Props = {
  form: UseFormReturn<CV>;
};

const convertBase64 = (file?: File) => {
  if (!file) {
    return;
  }

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const PhotoSection = ({ form }: Props) => {
  return (
    <Section title="Фотография">
      <Controller
        control={form.control}
        name="imgBase64"
        render={({ field: { onChange, value } }) => (
          <Stack direction="row" spacing={2}>
            {value !== undefined ? (
              <img height={56} src={value} alt="Фотография" />
            ) : null}

            <TextField
              fullWidth={true}
              type="file"
              onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                const base64 = await convertBase64(file);

                onChange(base64);
              }}
            />
          </Stack>
        )}
      />
    </Section>
  );
};
