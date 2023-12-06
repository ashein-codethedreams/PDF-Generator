import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { Button, Input } from "antd";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  viewerContainer: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewer: {
    width: "100%",
    height: "100%",
  },
});

// Create Document Component
function PDFGenerator() {
  const [showPDF, setShowPDF] = useState(false);
  const [userText, setUserText] = useState("");

  const generatePDF = () => {
    setShowPDF(true);
  };

  return (
    <div style={styles.viewerContainer}>
      {!showPDF ? (
        <div>
          <Input
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Enter text for PDF"
            style={{ margin: "10px", width: "300px" }}
          />
          <Button
            onClick={generatePDF}
            style={{
              backgroundColor: "rgb(82, 86, 89)",
              margin: "10px",
              color: "white",
            }}
          >
            Generate PDF
          </Button>
        </div>
      ) : (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={{ textAlign: "center", marginBottom: "20px" }}>
                <Text>PDF Generator</Text>
              </View>

              <View style={styles.section}>
                <Text>{userText}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
}

export default PDFGenerator;
