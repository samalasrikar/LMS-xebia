import { useEffect, useState } from "react";
import {
  getCategories,
} from "../services/categoryService";

export default function useCategories() {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response =
          await getCategories();

        setCategories(
          response.data || []
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    categories,
    loading,
  };
}