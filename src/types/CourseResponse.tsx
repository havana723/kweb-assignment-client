import LectureResponse from "./LectureResponse";
import UserResponse from "./UserResponse";

export default interface CourseResponse {
  courseId: string;
  courseName: string;
  professorName: string;
  lectures: LectureResponse[];
  students?: UserResponse[];
}
