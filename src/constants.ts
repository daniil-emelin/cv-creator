import dayjs from "dayjs";
import { array, boolean, object, string, mixed, number } from "yup";

import type { Dayjs } from "dayjs";
import type { CV } from "./store/cv/types";

export const DEFAULT_CV: CV = {
  id: "",
  name: "",
  birthDate: dayjs(new Date()),
  city: "",
  isSearchingForRemote: false,
  noBusinessTrip: false,
  isReadyToRelocate: false,
  phone: "",
  email: "",
  position: "",
  salary: 35000,
  experience: [
    {
      company: "",
      from: dayjs(new Date()),
      to: dayjs(new Date()),
      position: "",
    },
  ],
  education: [
    {
      finalYear: "",
      speciality: "",
      organization: "",
    },
  ],
};
const REQUIRED_FIELD_MESSAGE = "Заполните поле";

export const CV_FORM_SCHEMA = object({
  id: string().default(""),
  name: string().default("").required(REQUIRED_FIELD_MESSAGE),
  birthDate: mixed<Dayjs>()
    .default(dayjs(new Date()))
    .required(REQUIRED_FIELD_MESSAGE),
  city: string().default("").required(REQUIRED_FIELD_MESSAGE),
  isSearchingForRemote: boolean().default(false).required(),
  noBusinessTrip: boolean().default(false).required(),
  isReadyToRelocate: boolean().default(false).required(),
  phone: string().default("").required(REQUIRED_FIELD_MESSAGE),
  email: string().email().default("").required(REQUIRED_FIELD_MESSAGE),
  position: string().default("").required(REQUIRED_FIELD_MESSAGE),
  salary: number().min(0),
  experience: array()
    .default([])
    .of(
      object({
        company: string().default("").required(REQUIRED_FIELD_MESSAGE),
        from: mixed<Dayjs>().required(REQUIRED_FIELD_MESSAGE),
        to: mixed<Dayjs>().required(REQUIRED_FIELD_MESSAGE),
        position: string().default("").required(REQUIRED_FIELD_MESSAGE),
      })
    ),
  education: array()
    .default([])
    .of(
      object({
        finalYear: string().required(REQUIRED_FIELD_MESSAGE),
        speciality: string().required(REQUIRED_FIELD_MESSAGE),
        organization: string().required(REQUIRED_FIELD_MESSAGE),
      })
    ),
});

export const EXAMPLE_CV = {
  id: "example",
  name: "Иван Иванов",
  birthDate: dayjs(new Date()),
  city: "Москва",
  isSearchingForRemote: false,
  noBusinessTrip: false,
  isReadyToRelocate: false,
  phone: "12345",
  email: "test@test.test",
  position: "Web Developer",
  salary: 100000,
  experience: [
    {
      from: dayjs(new Date('2000-01-01')),
      to: dayjs(new Date('2002-01-01')),
      company: "Google",
      position: "Junior Web Developer",
    },
    {
      from: dayjs(new Date('2002-01-01')),
      to: dayjs(new Date('2005-01-01')),
      company: "Google",
      position: "Middle Web Developer",
    },
  ],
  education: [
    {
      finalYear: "2022",
      speciality: "Разработчик приложений",
      organization: "Массачусетский технологический институт",
    },
  ],
};
