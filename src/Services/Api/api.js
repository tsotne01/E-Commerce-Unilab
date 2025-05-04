const BASE_URL = "https://680b5661d5075a76d98abad7.mockapi.io/api/v1/";

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data.filter(item=> item.category === category);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await fetch(`${BASE_URL}/feedback`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const getTestimonialById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/feedback`);
    const data = await response.json();

    return data.filter((d) => d.product_id === id);
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return null;
  }
};
