import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { useFontRegister } from "hooks/useFontRegister";

import type { CV } from "store/cv/types";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#E4E4E4",
  },
  section: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "light",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Open Sans",
    backgroundColor: "#E4E4E4",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Open Sans",
    backgroundColor: "#E4E4E4",
    marginBottom: 20,
  },
  headingRow: {
    paddingVertical: 10,
    borderBottom: "2px solid grey",
  },
  description: {
    fontSize: 12,
    color: "#313335",
  },
  marginBottom: {
    marginBottom: 20,
  },
});

type Props = {
  cv: CV;
};

export const CVPreview = ({ cv }: Props) => {
  useFontRegister();

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={[styles.column, styles.headingRow]}>
            <Text>{cv.name}</Text>
            <Text style={styles.description}>{cv.position}</Text>
          </View>
          <View style={[styles.row, styles.marginBottom]}>
            <View style={styles.section}>
              {cv.imgBase64 ? (
                <Image
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                  src={cv.imgBase64}
                />
              ) : null}
            </View>
            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.heading}>Дата рождения:</Text>
                <Text style={styles.text}>
                  {dayjs(cv.birthDate).format("DD.MM.YYYY")}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Место проживания:</Text>
                <Text style={styles.text}>{cv.city}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Зарплатные ожидания:</Text>
                <Text style={styles.text}>{cv.salary}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Телефон:</Text>
                <Text style={styles.text}>{cv.phone}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Email:</Text>
                <Text style={styles.text}>{cv.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Образование:</Text>
            <>
              {cv.education?.map((education) => {
                return (
                  <Text
                    style={styles.text}
                  >{`${education.finalYear} - ${education.organization}, специальность: ${education.speciality}`}</Text>
                );
              })}
            </>
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Опыт работы:</Text>
            <>
              {cv.experience?.map((experience) => {
                return (
                  <View style={[styles.column, styles.marginBottom]}>
                    <Text
                      style={styles.text}
                    >{`${experience.position}, ${experience.company}`}</Text>
                    <Text style={styles.text}>{`${dayjs(experience.from).format(
                      "DD.MM.YYYY"
                    )} - ${dayjs(experience.to).format("DD.MM.YYYY")}`}</Text>
                  </View>
                );
              })}
            </>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
