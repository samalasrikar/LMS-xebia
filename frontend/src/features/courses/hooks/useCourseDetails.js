import { useEffect, useState } from "react";
import {
  getCourseById
} from "../services/courseService";

export default function useCourseDetails(id) {
  const [course, setCourse] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadCourse() {
      try {
        const response =
          await getCourseById(id);

        setCourse(response.data);
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [id]);

  return {
    course,
    loading,
  };
}