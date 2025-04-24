"use client";

import { getAllProducts } from "@/services/product";
import { TMedicine } from "@/types";
import { PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ManageMedicine = () => {
  const [medicines, setMedicines] = useState<TMedicine[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAllProducts(
          page.toString(),
          limit.toString(),
          {}
        );
        setMedicines(data?.data?.result || []);
        const totalItems = data?.data?.meta?.total || 0;
        setTotalPages(Math.ceil(totalItems / limit));
      } catch (error) {
        console.error("Failed to fetch medicines:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePrev = () => {
    if (page > 1 && !isLoading) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages && !isLoading) setPage(page + 1);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        🧾 Manage All Medicines
      </h2>
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <select className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option>All</option>
          <option>Comming Soon</option>
        </select>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white dark:bg-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-indigo-600">
            <tr>
              {["Name", "Category", "Stock", "Status", "Update", "Delete"].map(
                (title) => (
                  <th
                    key={title}
                    className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    {title}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {isLoading ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500 dark:text-gray-300"
                >
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-5 h-5 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <span></span>
                  </div>
                </td>
              </tr>
            ) : medicines.length > 0 ? (
              medicines.map((med) => (
                <tr
                  key={med._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {med.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {med.dosCategory}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {med.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        med.quantity < 10
                          ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                          : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                      }`}
                    >
                      {med.quantity < 10 ? "Low Stock" : "In Stock"}
                    </span>
                  </td>
                  <td className=" text-center">
                    <Link href={`/admin/medicines/edit/${med._id}`}>
                      <PencilIcon className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer transition" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <button>
                      <TrashIcon className="h-5 w-5 text-red-600 hover:text-red-800 cursor-pointer transition" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-400">
                  No medicines found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-4 pb-6">
          <button
            onClick={handlePrev}
            disabled={page === 1 || isLoading}
            className="px-4 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded hover:bg-indigo-200 disabled:opacity-50 transition"
          >
            ⬅ Previous
          </button>
          <span className="px-4 py-2 font-medium text-gray-700 dark:text-gray-200">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages || isLoading}
            className="px-4 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded hover:bg-indigo-200 disabled:opacity-50 transition"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageMedicine;
