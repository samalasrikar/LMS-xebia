import apiClient from "../../../services/apiClient";

export const getCourses = () =>
  apiClient.get("/courses");

export const createCourse = (data) =>
  apiClient.post("/courses", data);

export const updateCourse = (id, data) =>
  apiClient.put(`/courses/${id}`, data);

export const deleteCourse = (id) =>
  apiClient.delete(`/courses/${id}`);