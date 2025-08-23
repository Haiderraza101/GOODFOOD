export interface FoodData {
  name: string;
  cuisinetype: string;
  price: string;
  deliverytime: string;
  deliverprice: string;
  rating: string;
  totalorders: number;
  photourl: string;
  bgcolor:string;
}

export interface CartData {
  name: string;
  cuisinetype: string;
  price: string;
  deliverytime: string;
  deliverprice: string;
  rating: string;
  totalorders: number;
  photourl: string;
  bgcolor:string;
}


export interface OrderFoodBannerProps {
  foodData: FoodData[];
};

export interface FoodCardProps{
  food:FoodData;
}