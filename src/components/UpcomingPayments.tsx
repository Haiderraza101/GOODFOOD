import { UpcomingTransaction } from "@/types/transaction";
import Image from "next/image";

const upcomingPayments: UpcomingTransaction[] = [
  {
    id: 1,
    name: "Facebook Ads",
    description: "Ad campaign service",
    date: "Aug 28, 2025",
    status: "Pending",
    amount: "$150.00",
    photo: "/facebook.png",
  },
  {
    id: 2,
    name: "Fiverr",
    description: "Freelance service",
    date: "Aug 30, 2025",
    status: "Pending",
    amount: "$100.00",
    photo: "/fiver.png", 
  },
  {
    id: 3,
    name: "Canva Pro",
    description: "Subscription service",
    date: "Sep 01, 2025",
    status: "Pending",
    amount: "$20.00",
    photo: "/canva.jpeg",
  },
];

export default function UpComingPayments() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 ">
      <h2 className="text-lg font-semibold mb-4">Upcoming Payments</h2>
      <div className="space-y-4">
        {upcomingPayments.map((t) => (
          <div
            key={t.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b last:border-b-0 pb-4 last:pb-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-100">
                <Image src={t.photo} alt={t.name} fill className="object-cover" />
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
              <p className="text-sm font-medium text-orange-500">{t.status}</p>
              <p className="text-sm font-semibold">{t.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
