// components/modules/dashboard/customer/index.tsx
"use client";

import { ShoppingCartIcon, TruckIcon, PackageIcon } from "lucide-react";
import Link from "next/link";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Customer Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Orders Placed"
          value="42"
          icon={<ShoppingCartIcon className="w-8 h-8 text-white" />}
          color="from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Pending Deliveries"
          value="3"
          icon={<TruckIcon className="w-8 h-8 text-white" />}
          color="from-yellow-500 to-orange-500"
        />
        <StatCard
          title="Delivered"
          value="39"
          icon={<PackageIcon className="w-8 h-8 text-white" />}
          color="from-green-400 to-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LinkCard title="Browse Medicines" href="/medicines" />
        <LinkCard title="Track Orders" href="/customer/orders" />
        <LinkCard title="Profile Settings" href="/update-user" />
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) => (
  <div
    className={`bg-gradient-to-r ${color} text-white rounded-xl shadow-lg p-6 flex items-center justify-between`}
  >
    <div>
      <p className="text-sm">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="bg-white bg-opacity-20 p-3 rounded-full">{icon}</div>
  </div>
);

const LinkCard = ({ title, href }: { title: string; href: string }) => (
  <Link href={href}>
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all p-6 rounded-xl cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">Click to manage</p>
    </div>
  </Link>
);

export default UserDashboard;
