import apiClient from "../../../services/apiClient";

export const getCurriculum = (courseId) =>
  apiClient.get(`/courses/${courseId}/curriculum`);

export const saveCurriculum = (
  courseId,
  data
) =>
  apiClient.put(
    `/courses/${courseId}/curriculum`,
    data
  );

export const addSection = (
  courseId,
  data
) =>
  apiClient.post(
    `/courses/${courseId}/sections`,
    data
  );

export const deleteSection = (
  courseId,
  sectionId
) =>
  apiClient.delete(
    `/courses/${courseId}/sections/${sectionId}`
  );