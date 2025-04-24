"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */

const API_BASE = process.env.NEXT_PUBLIC_BASE_API;

export const createUser = async (payload: Record<string, any>) => {
  try {
    const res = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createAdmin = async (payload: Record<string, any>) => {
  try {
    const res = await fetch(`${API_BASE}/users/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${API_BASE}/users`, {
      cache: "no-store", // always fresh
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSingleUser = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE}/users/${id}`);
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (id: string, data: Record<string, any>) => {
  try {
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
