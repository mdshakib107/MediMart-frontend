"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cities } from "@/constants/cities";

const Address = () => {
    return (
        <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4  p-5 ">
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-2xl font-bold ">Address</h1>
          <p className="text-gray-500">Enter your address.</p>
          <div className="mt-5 ">
            {/* <Select onValueChange={(city) => handleCitySelect(city)}> */}
            <Select >
              <SelectTrigger className="mb-5">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm mb-2">Enter Delivery Address:</p>
            <textarea className="w-full border rounded-xl"
            //   onChange={(e) => handleShippingAddress(e.target.value)}
              rows={5}
            />
          </div>
        </div>
      </div>
    );
};

export default Address;