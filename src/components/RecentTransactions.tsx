import { Transaction } from "@/types/transaction";
import Image from "next/image";

const transactions: Transaction[] = [
  {
    id: 1,
    name: "John Doe",
    businessId: "ID: 25078965614287",
    date: "Mar 10, 2020",
    status: "Receive",
    amount: "$50.00",
    photo: "/johndoe.png",
  },
  {
    id: 2,
    name: "Emily Davis",
    businessId: "ID: 22154876545579",
    date: "Mar 10, 2020",
    status: "Receive",
    amount: "$250.00",
    photo: "/emilydavis.png",
  },
  {
    id: 3,
    name: "Mailchimp",
    description: "Subscription service",
    date: "Mar 09, 2020",
    status: "Payment",
    amount: "$20.00",
    photo: "/mailchimp.png",
  },
  {
    id: 4,
    name: "Fiverr.inc",
    description: "Marketplace payment",
    date: "Mar 02, 2020",
    status: "Receive",
    amount: "$100.00",
    photo: "/fiver.png",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:w-10/14">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between  lg:justify-start lg:gap-35 border-b last:border-b-0 pb-4 last:pb-0"
          >
    
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                {t.businessId && (
                  <p className="text-xs text-gray-500">{t.businessId}</p>
                )}
                {t.description && (
                  <p className="text-xs text-gray-500">{t.description}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-3 sm:mt-0">
              <p className="text-sm text-gray-500">{t.date}</p>
              <p
                className={`text-sm font-medium ${
                  t.status === "Receive" ? "text-green-600" : "text-red-500"
                }`}
              >
                {t.status}
              </p>
              <p className="text-sm font-semibold">{t.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
