"use client";

import { useEffect, useState } from "react";
import { IOrderDB } from "@/types/order";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Loading from "@/components/shared/Loading"; // Assuming you have a Loading component
import { useUser } from "@/contexts/UserContext";
import { getOrdersByUserId } from "@/services/orders";

const ViewOrders = () => {
  const [orders, setOrders] = useState<IOrderDB[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  //* user info
  const { user } = useUser();

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No auth token found.");
        return;
      }

      try {
        // Directly access user._id, no need for await
        const userId = user?._id;

        if (!userId) {
          throw new Error("User ID is missing");
        }

        const data = await getOrdersByUserId(userId as string);

        console.log("data", data);

        setOrders(data || []);
      } catch (error) {
        setIsError(true);
        console.error("Failed to fetch orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?._id) {
      fetchOrders();
    }
  }, [user]);  // <-- Added dependency on `user`

  if (isLoading) return <Loading />;
  if (isError) return <p>Failed to load orders.</p>;
  if (orders.length < 1) {
    return (
      <div>
        <h2 className="text-center font-bold text-3xl mb-14">You do not have any orders yet.</h2>
      </div>
    );
  }

  return (
    <div className=" p-6 border-2 shadow-md rounded-2xl">
      <h2 className="text-center font-bold text-3xl mb-14">All of Your Orders</h2>

      <Table>
        <TableCaption className="mt-8">A list of your recent Orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => (
            <TableRow key={order?._id}>
              <TableCell className="font-medium">
                {order.products[0]?.product?.name || "N/A"}
              </TableCell>
              <TableCell>{order.paymentStatus}</TableCell>
              <TableCell>{order.shippingStatus}</TableCell>
              <TableCell className="text-right">${order.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewOrders;