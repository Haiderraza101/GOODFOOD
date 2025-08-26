export interface Transaction {
  id: number;
  name: string;
  businessId?: string;
  date: string;
  status: "Receive" | "Payment";
  amount: string;
  photo: string;
  description?: string;
};

export interface UpcomingTransaction {
  id: number;
  name: string;
  businessId?: string;
  date: string;
  status: string;
  amount: string;
  photo: string;
  description?: string;
};