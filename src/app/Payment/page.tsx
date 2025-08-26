import Balance from "@/components/Balance";
import Deposit from "@/components/Deposit";
import PaymentAnalytics from "@/components/PaymentAnalytics";
import QuickTransfer from "@/components/QuickTransfer";
import RecentTransactions from "@/components/RecentTransactions";
import UpComingPayments from "@/components/UpcomingPayments";
import Image from "next/image";


export default function Payment() {
  return (
    <div className="p-2 bg-white lg:bg-violet-50 min-h-screen mr-10 lg:mr-0">
      <div className=" grid 
  grid-cols-1           
  sm:grid-cols-2       
  md:grid-cols-3   
  lg:grid-cols-6 
  xl:grid-cols-9
  gap-2">

       <Balance/>
        <QuickTransfer/>
        <Deposit/>
        
      </div>
     <div>
      
     </div >
      <div className="p-4 lg:py-8 lg:flex lg:pl-10">
        <RecentTransactions/>

        <div className="">
        <PaymentAnalytics/>
      </div>
      </div>

      <div className="sm:px-10 lg:pl-15">
        <UpComingPayments/>
      </div>
      
    </div>
  );
}
