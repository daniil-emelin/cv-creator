import type { Dayjs } from "dayjs";

export type CV = {
  id: string;
  name: string;
  birthDate: Dayjs;
  city: string;
  isSearchingForRemote: boolean;
  noBusinessTrip: boolean;
  isReadyToRelocate: boolean;
  phone: string;
  email: string;
  position: string;
  salary?: number;
  experience?: Array<{
    from: Dayjs;
    to: Dayjs;
    company: string;
    position: string;
  }>;
  education?: Array<{
    finalYear: string;
    speciality: string;
    organization: string;
  }>;
  imgBase64?: string;
};
