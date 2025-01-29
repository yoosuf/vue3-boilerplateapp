import { ref, onMounted } from "vue";

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (err) {
      error.value = "Failed to fetch data";
    }
  }

  onMounted(fetchData);
  return { data, error, fetchData };
}