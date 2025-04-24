// import { getAllUsers } from "@/services/users";
import { TrashIcon } from "lucide-react";
import Link from "next/link";
const users = [
  {
    _id: "680619dafda6ac56e47140a2",
    name: "Nina",
    email: "nina@mail.com",
    password: "$2b$12$uAtEp.zbAkYwotCC53N21unIh6ZWOvStWXpu6l9j.NNItx5JbZs1i",
    needsPasswordChange: true,
    role: "customer",
    status: "active",
    runningOrders: ["order001", "order002"],
    previousOrders: ["orderA1", "orderA2"],
    createdAt: new Date("2025-04-21T10:11:38.485Z"),
    updatedAt: new Date("2025-04-21T10:11:38.485Z"),
  },
  {
    _id: "680619dafda6ac56e47140a3",
    name: "Rafi",
    email: "rafi@mail.com",
    password: "$2b$12$abcdEp.zbAkYwotCC53RafiIh6ZWOvStWXpu6l9j.NNItx5JbRafi",
    needsPasswordChange: false,
    role: "customer",
    status: "inactive",
    runningOrders: [],
    previousOrders: ["orderB1"],
    createdAt: new Date("2025-04-20T09:05:20.000Z"),
    updatedAt: new Date("2025-04-20T09:05:20.000Z"),
  },
  {
    _id: "680619dafda6ac56e47140a4",
    name: "Tania",
    email: "tania@mail.com",
    password: "$2b$12$taniaEp.zbAkYwotCC53TaniIh6ZWOvStWXpu6l9j.NNItx5JbTani",
    needsPasswordChange: true,
    role: "customer",
    status: "active",
    runningOrders: ["order003"],
    previousOrders: ["orderC1", "orderC2", "orderC3"],
    createdAt: new Date("2025-04-19T08:00:00.000Z"),
    updatedAt: new Date("2025-04-19T08:00:00.000Z"),
  },
  {
    _id: "680619dafda6ac56e47140a5",
    name: "Hasib",
    email: "hasib@mail.com",
    password: "$2b$12$hasibEp.zbAkYwotCC53HasbIh6ZWOvStWXpu6l9j.NNItx5JbHasb",
    needsPasswordChange: false,
    role: "customer",
    status: "active",
    runningOrders: ["order004"],
    previousOrders: [],
    createdAt: new Date("2025-04-18T07:30:00.000Z"),
    updatedAt: new Date("2025-04-18T07:30:00.000Z"),
  },
  {
    _id: "680619dafda6ac56e47140a6",
    name: "Lamia",
    email: "lamia@mail.com",
    password: "$2b$12$lamiaEp.zbAkYwotCC53LamiIh6ZWOvStWXpu6l9j.NNItx5JbLami",
    needsPasswordChange: true,
    role: "customer",
    status: "inactive",
    runningOrders: [],
    previousOrders: ["orderE1", "orderE2"],
    createdAt: new Date("2025-04-17T06:15:00.000Z"),
    updatedAt: new Date("2025-04-17T06:15:00.000Z"),
  },
];

const ManageUsers = async () => {
  //   const res = await getAllUsers();
  //   console.log(res);
  return (
    <div>
      <div className="p-6 bg-white shadow-lg rounded-lg overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-center">Running Orders</th>
              <th className="px-4 py-2 text-center">Previous Orders</th>
              <th className="px-4 py-2 text-center">Update</th>
              <th className="px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 capitalize">{user.role}</td>
                <td className="px-4 py-2 text-center">
                  {user.runningOrders.length}
                </td>
                <td className="px-4 py-2 text-center">
                  {user.previousOrders.length}
                </td>
                <td className="px-4 py-2 text-center ">
                  <Link href={""}>
                    <span className="h-5 w-5 font-semibold text-orange-800 hover:text-blue-800 cursor-pointer transition">
                      📝Details{" "}
                    </span>
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">
                  <button>
                    <TrashIcon className="h-5 w-5 text-red-600 hover:text-red-800 cursor-pointer transition" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
