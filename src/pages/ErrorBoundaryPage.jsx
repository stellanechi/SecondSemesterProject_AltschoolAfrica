import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import StudentProfileCard from "../components/StudentProfileCard";
import studentProfiles from "../assets/data/students";
import ErrorFallback from "../components/ErrorFallback";

const DEFAULT_STUDENT = {
  name: "",
};

const checkIfStudentIsvalid = ({ courseOfStudy, description, imageURL }) => {
  if (!courseOfStudy || !description || !imageURL) return false;
  return true;
};

const ErrorBoundaryPage = () => {
  const [activeStudent, setActiveStudent] = useState(DEFAULT_STUDENT);
  const [isError, setIsError] = useState(false);

  return (
    <main className="w-full">
      <div className="p-4 rounded-lg shadow-md max-w-3xl mx-auto flex flex-col gap-3  bg-white">
        <h2 className="app-title text-center"> Error Boundary Demonstration</h2>

        <h3 className="font-medium">
          This page demonstrates the use of error boundaries to prevent errors
          from crashing applications.
        </h3>
        <p>
          To see how it works, select one of the student profiles. Valid student
          profiles will be displayed, but clicking on an invalid student profile
          will break the application. However, the error boundary will prevent
          the application from crashing completely, and you will see a message
          indicating that the selected profile is invalid.
        </p>
      </div>

      <hr className="h-px my-8 border-0 bg-gray-400 w-full" />

      <h1 className="app-title mt-2 mb-7 text-center">
        Fellow Students in cohort profile{" "}
      </h1>

      <select
        value={activeStudent.name}
        onChange={(e) => {
          // find a student that has the same name
          const student = studentProfiles.find(
            (value) => value.name === e.target.value
          );

          if (!!student) {
            setActiveStudent(student);
            setIsError(false);
          } else setActiveStudent(DEFAULT_STUDENT);
        }}
        className=" w-full block p-3 outline-0 rounded-xl shadow-xl text-base font-medium max-w-sm mx-auto"
      >
        <option value={DEFAULT_STUDENT}> Please select a student</option>
        {studentProfiles.map(
          ({ name, courseOfStudy, description, imageURL }, key) => {
            return (
              <option key={key} value={name}>
                {name}{" "}
                {!checkIfStudentIsvalid({
                  courseOfStudy,
                  description,
                  imageURL,
                }) && "(Invalid)"}
              </option>
            );
          }
        )}
      </select>

      <section className="max-w-3xl w-full mx-auto flex my-6 ">
        {activeStudent.name !== DEFAULT_STUDENT.name && (
          <ErrorBoundary
            onReset={() => {
              if (isError) setActiveStudent(DEFAULT_STUDENT);
            }}
            onError={() => setIsError(true)}
            resetKeys={[activeStudent.name]}
            FallbackComponent={ErrorFallback}
          >
            <StudentProfileCard studentData={activeStudent} />
          </ErrorBoundary>
        )}
      </section>
    </main>
  );
};

export default ErrorBoundaryPage;
