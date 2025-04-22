"use server";

// get all products with filters
export const getAllProducts = async (
  page: string,
  limit: string,
  filters: Record<string, any>
) => {
  try {
    // Initialize query parameters
    const queryParams = new URLSearchParams();

    // Append filters to the query parameters
    if (filters.searchTerm)
      queryParams.append("searchTerm", filters.searchTerm);
    if (filters.category) queryParams.append("dosCategory", filters.category);
    if (filters.symptoms) queryParams.append("symptoms", filters.symptoms);

    queryParams.append("limit", limit);
    queryParams.append("page", page);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines?${queryParams.toString()}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get all products No Pagination
export const getAllProductsNoPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines/all`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines/${productId}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
