"use cloent"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ShippingStatus } from "@/types/order";
import { useState } from "react";
  
const ManageOrder = () => {
  const [selectedStatus, setSelectedStatus] = useState<ShippingStatus | string>("");
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
    return (
      <div className="lg:w-2/3 p-6 border-2 shadow-md border-purple-600 shadow-purple-600 rounded-2xl overflow-x-auto">
      <h2 className="text-center font-bold text-3xl mb-14">
        All of your Orders
      </h2>

      <Table>
        <TableCaption className="mt-8">
          A list of your recent Orders
        </TableCaption>
        <TableHeader className="text-l">
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Update Shipping Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order.user.name}</TableCell>
              <TableCell className="font-medium">
                {order.products[0].product.name}
              </TableCell>
              <TableCell>{order?.paymentStatus}</TableCell>
              <TableCell className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="cursor-pointer" variant="outline">
                      {order?.status}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-2">
                    <DropdownMenuGroup>
                      {orderStatusOptions.map((option) => (
                        <DropdownMenuItem
                          key={option?.label}
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedStatus(option?.label);
                            setOpenStatusDialog(true);
                            setSelectedOrderId(order?._id);
                          }}
                        >
                          {option.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>{order?.totalPrice}</TableCell>
              <TableCell className="text-right">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-purple-600">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this Order data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-purple-600 hover:bg-purple-700"
                        // onClick={() => handleDeleteOrder(order._id)}
                      >
                        Confirm Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          // disabled={page === 1}
          // onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </Button>

        <span className="flex items-center font-medium text-lg">
          {/* Page {page} */}
        </span>

        <Button
          variant="outline"
          // disabled={orders.length < 5} // Disable if less than 5, assuming no more pages
          // onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
      <AlertDialog open={openStatusDialog} onOpenChange={setOpenStatusDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Status Update</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change the status to{" "}
              <span className="font-semibold text-purple-600">
                {/* {selectedStatus} */}
              </span>
              ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-purple-600 hover:bg-purple-700"
              // onClick={() => hsndleUpdateOrder(selectedOrderId, selectedStatus)}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    );
};

export default ManageOrder;