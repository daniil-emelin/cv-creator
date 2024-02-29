import { useEffect } from "react";
import { Font } from "@react-pdf/renderer";

export const useFontRegister = () => {
  useEffect(() => {
    Font.register({
      family: "Open Sans",
      fonts: [
        {
          src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
          fontWeight: 600,
        },
      ],
    });
  }, []);
};
