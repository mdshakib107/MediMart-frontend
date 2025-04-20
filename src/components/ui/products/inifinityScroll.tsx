"use client";

import { getAllProducts } from "@/services/Product";
import { TMedicine } from "@/types";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./productCard";

const InfiniteProductList = () => {
  const [products, setProducts] = useState<TMedicine[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 8;

  const fetchMoreProducts = async () => {
    const res = await getAllProducts(page.toString(), limit.toString());
    const newProducts: TMedicine[] = res?.data?.result || [];
    const totalProducts = res?.data?.meta?.total || 0;

    setProducts((prev) => [...prev, ...newProducts]);
    setPage((prev) => prev + 1);

    // Check if we've loaded all products
    if (products.length + newProducts.length >= totalProducts) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMoreProducts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreProducts}
      hasMore={hasMore}
      loader={<p className="text-center py-4">Loading...</p>}
      endMessage={
        <p className="text-center text-gray-500 py-4">
          No more products to show
        </p>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((medicine) => (
          <ProductCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteProductList;
