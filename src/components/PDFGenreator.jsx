import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { Button } from "antd";

// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
  },
  viewerContainer: {
    overflow: "hidden",
    height: "100vh", // Set the height to the full viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewer: {
    width: "100%", // Take up full width
    height: "100%", // Take up full height
  },
  imageContainer: {
    height: "100vh", // Set the height to the full viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: 600,
  },
});

// Create Document Component
function PDFGenerator() {
  const [showPDF, setShowPDF] = useState(false);

  const generatePDF = () => {
    setShowPDF(true);
  };

  return (
    <div style={styles.viewerContainer}>
      {!showPDF ? (
        <Button
          onClick={generatePDF}
          style={{
            backgroundColor: "rgb(82, 86, 89)",
            color: "white",
          }}
        >
          Generate PDF
        </Button>
      ) : (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4">
              <View style={styles.section}>
                <Text style={{ textAlign: "center" }}>PDF Testing</Text>
              </View>
              <View style={styles.section}>
                <Text>Hello</Text>
              </View>
              <View style={styles.section}>
                <Text>World</Text>
              </View>
              <View style={styles.section}>
                <Text>I am text to PDF Generator </Text>
              </View>
            </Page>
            <Page size="A4" style={styles.imageContainer}>
              <View style={styles.section}>
                <Text style={{ textAlign: "center" }}>Second Page</Text>
              </View>
              <Image src="./us.jpg" style={styles.image} alt="img" />
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
}

export default PDFGenerator;
