const API_URL = import.meta.env.VITE_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
