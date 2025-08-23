import Link from "next/link";
import { FoodData } from "@/types/FoodOrder";
import Image from "next/image";

export default function FoodOrder() {

const foodData: FoodData[] = [
  {
    name: "Margherita Pizza",
    cuisinetype: "Italian",
    price: "$12",
    deliverytime: "30 mins",
    deliverprice: "$2",
    rating: "4.6",
    totalorders: 1200,
    photourl: "https://images.unsplash.com/photo-1601924582971-df1d2f5c163e",
  },
  {
    name: "Cheeseburger",
    cuisinetype: "American",
    price: "$10",
    deliverytime: "25 mins",
    deliverprice: "$1.5",
    rating: "4.4",
    totalorders: 950,
    photourl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Chicken Biryani",
    cuisinetype: "Pakistani",
    price: "$8",
    deliverytime: "35 mins",
    deliverprice: "$1",
    rating: "4.8",
    totalorders: 2000,
    photourl: "https://images.unsplash.com/photo-1633933746847-6e4b0a9b7af9",
  },
  {
    name: "Sushi Platter",
    cuisinetype: "Japanese",
    price: "$18",
    deliverytime: "40 mins",
    deliverprice: "$3",
    rating: "4.7",
    totalorders: 750,
    photourl: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    name: "Pad Thai",
    cuisinetype: "Thai",
    price: "$14",
    deliverytime: "30 mins",
    deliverprice: "$2",
    rating: "4.5",
    totalorders: 680,
    photourl: "https://images.unsplash.com/photo-1604908176997-1c4b8a18a56d",
  },
  {
    name: "Tacos al Pastor",
    cuisinetype: "Mexican",
    price: "$9",
    deliverytime: "20 mins",
    deliverprice: "$1",
    rating: "4.3",
    totalorders: 830,
    photourl: "https://images.unsplash.com/photo-1617196039987-0d9f1f2c3560",
  },
  {
    name: "Shawarma Wrap",
    cuisinetype: "Middle Eastern",
    price: "$7",
    deliverytime: "25 mins",
    deliverprice: "$1",
    rating: "4.6",
    totalorders: 1100,
    photourl: "https://images.unsplash.com/photo-1625941344021-02a7eb7c13fd",
  },
  {
    name: "Pasta Alfredo",
    cuisinetype: "Italian",
    price: "$13",
    deliverytime: "30 mins",
    deliverprice: "$2",
    rating: "4.5",
    totalorders: 890,
    photourl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  },
  {
    name: "Falafel Bowl",
    cuisinetype: "Mediterranean",
    price: "$11",
    deliverytime: "28 mins",
    deliverprice: "$1.5",
    rating: "4.2",
    totalorders: 640,
    photourl: "https://images.unsplash.com/photo-1617196039967-cb47a1a2fdb0",
  },
  {
    name: "Butter Chicken",
    cuisinetype: "Indian",
    price: "$15",
    deliverytime: "35 mins",
    deliverprice: "$2",
    rating: "4.8",
    totalorders: 1750,
    photourl: "https://images.unsplash.com/photo-1604908177096-0085c163a09b",
  },
  {
    name: "Pho Noodle Soup",
    cuisinetype: "Vietnamese",
    price: "$12",
    deliverytime: "32 mins",
    deliverprice: "$2",
    rating: "4.6",
    totalorders: 720,
    photourl: "https://images.unsplash.com/photo-1604908176909-bd0c2e9c09ee",
  },
  {
    name: "Kebab Skewers",
    cuisinetype: "Turkish",
    price: "$14",
    deliverytime: "30 mins",
    deliverprice: "$2",
    rating: "4.7",
    totalorders: 960,
    photourl: "https://images.unsplash.com/photo-1633933746907-7f6b0d4d10b7",
  },
  {
    name: "Fried Chicken",
    cuisinetype: "American",
    price: "$11",
    deliverytime: "22 mins",
    deliverprice: "$1.5",
    rating: "4.4",
    totalorders: 1320,
    photourl: "https://images.unsplash.com/photo-1625941352493-9d7c5a1c63d5",
  },
  {
    name: "Dim Sum Platter",
    cuisinetype: "Chinese",
    price: "$16",
    deliverytime: "38 mins",
    deliverprice: "$2.5",
    rating: "4.5",
    totalorders: 810,
    photourl: "https://images.unsplash.com/photo-1589301772789-43eabf6b5af8",
  },            
  {
    name: "Greek Salad",
    cuisinetype: "Greek",
    price: "$9",
    deliverytime: "18 mins",
    deliverprice: "$1",
    rating: "4.3",
    totalorders: 540,
    photourl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];

  
 return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center lg:p-10 p-6">
        <div className="text-center lg:text-left">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">
            Order Food 
          </div>
           <div className="text-medium text-gray-400 py-4 max-w-md">
Your favorite cuisines, just a click away
          </div>
          
<div className="text-sm text-gray-400 py-2 max-w-md">
  Order now and enjoy fresh meals delivered to your doorstep. Choose from a
  variety of cuisines, freshly prepared with quality ingredients, and get your
  favorite dishes served hot and fast.
</div>
           
        </div>

        <div className="mt-6 lg:mt-0">
          <Image
            src="/scooter.png"
            height={700}
            width={700}
            alt="Scooter"
            
          />
        </div>
      </div>
    </div>
  );
}
