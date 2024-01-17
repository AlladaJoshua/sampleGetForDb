import React, { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Sandbox = () => {
  const samplePDF = "/PDF/Sample.pdf";
  const [course, setCourse] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const courseResult = await axios.get("http://localhost:8080/api/courses/4");
        setCourse(courseResult.data);

        const instructorResult = await axios.get(`http://localhost:8080/api/instructors/${courseResult.data.instructor_id}`);
        setAdditionalData(instructorResult.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    loadCourse();
  }, []);

  console.log(course.courseId);

  return (
    <div>
      {/* <div className="cert_con">
        <Document file={samplePDF}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </div> */}
      <h1>{course.courseId}</h1>
      <h1>{course.title}</h1>
      <h1>{additionalData.full_name}</h1>
    </div>
  );
};

export default Sandbox;
