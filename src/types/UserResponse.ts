export default interface UserResponse {
  username: string;
  name: string;
  uniqueId: string;
  role: "STUDENT" | "PROFESSOR";
}
