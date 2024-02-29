import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { PersonalInfoSection } from "../PersonalInfoSection";
import { AdditionalParamsSection } from "../AdditionalParamsSection";
import { ContactsSection } from "../ContactsSection";
import { JobInfoSection } from "../JobInfoSection";
import { WorkExperienceSection } from "../WorkExperienceSection";
import { EducationSection } from "../EducationSection";
import { PhotoSection } from "../PhotoSection";

import { getCvByIdSelector } from "store/cv/selectors";
import { DEFAULT_CV, CV_FORM_SCHEMA } from "../../../constants";
import { addCv, editCv } from "store/cv/slice";

import type { CV } from "store/cv/types";

import "dayjs/locale/ru";

export const CVForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  const cv = useSelector(getCvByIdSelector(id));

  const cvForm = useForm<CV>({
    defaultValues: !!id ? cv : DEFAULT_CV,
    mode: "onSubmit",
    resolver: yupResolver(CV_FORM_SCHEMA),
  });

  useEffect(() => {
    if (id.length === 0) {
      cvForm.reset(DEFAULT_CV);
    }
  }, [cvForm, id]);

  const { handleSubmit } = cvForm;

  const onSubmit = async (data: any) => {
    if (id.length === 0) {
      dispatch(addCv({ ...data, id: uuidv4() }));
    } else {
      dispatch(editCv(data));
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2} divider={<Divider />}>
        <PersonalInfoSection form={cvForm} />

        <AdditionalParamsSection form={cvForm} />

        <ContactsSection form={cvForm} />

        <JobInfoSection form={cvForm} />

        <WorkExperienceSection form={cvForm} />

        <EducationSection form={cvForm} />

        <PhotoSection form={cvForm} />

        <Button type="submit" variant="contained" size="large">
          Сохранить резюме
        </Button>
      </Stack>
    </form>
  );
};
