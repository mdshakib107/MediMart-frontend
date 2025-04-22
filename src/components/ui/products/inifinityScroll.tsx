"use client";

import { getAllProducts } from "@/services/Product";
import { TMedicine } from "@/types";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./productCard";

const limit = 8;

const InfiniteProductList = ({ filters }: { filters: Record<string, any> }) => {
  const [products, setProducts] = useState<TMedicine[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch all products
  const fetchProducts = async (pageNum = 1, concat = false) => {
    const res = await getAllProducts(
      pageNum.toString(),
      limit.toString(),
      filters
    );

    const newProducts = res?.data?.result || [];
    const total = res?.data?.meta?.total || 0;
    console.log(newProducts);
    if (concat) {
      setProducts((prev) => [...prev, ...newProducts]);
    } else {
      setProducts(newProducts);
    }

    setHasMore(products.length + newProducts.length < total);
  };

  // UseEffect to fetch data whenever filters change
  useEffect(() => {
    setPage(1); // Reset the page when filters change
    fetchProducts(1, false); // Fetch products with new filters
  }, [filters]); // Trigger when filters change

  const fetchMoreData = () => {
    const nextPage = page + 1;
    fetchProducts(nextPage, true);
    setPage(nextPage);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center py-4">Loading...</p>}
        endMessage={
          <p className="text-center py-4 text-gray-500">
            {products.length === 0 ? (
              <span className="text-center text-5xl text-gray-500 mt-4">
                No Product Found!!
              </span>
            ) : (
              <span className="text-center  text-gray-500 mt-4">
                Yay! You have seen it all
              </span>
            )}
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-3">
          {products.map((medicine, index) => (
            <ProductCard key={`${medicine._id}-${index}`} medicine={medicine} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteProductList;
