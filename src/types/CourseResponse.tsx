import LectureResponse from "./LectureResponse";

export default interface CourseResponse {
  courseId: string;
  courseName: string;
  professorName: string;
  lectures: LectureResponse[];
}
