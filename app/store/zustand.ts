import { create } from "zustand";
// type CartStore = {};
// enum LANG
// export const useGlobalStore = create((set) => ({
//   lang: "PLN",
//   change_lang: () => set((state) => ({ lang: state?.lang })),
// }));
type OrderStore = {
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  car_name: string;
  price: string | number;
  changeOrderStage1: (
    pickup_dat: string,
    return_date: string,
    pickupLocation: string
  ) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  pickupDate: "",
  returnDate: "",
  pickupLocation: "",
  car_name: "",
  price: "",
  changeOrderStage1: (
    pickup_dat: string,
    return_date: string,
    pickupLocation: string
  ) =>
    set(() => ({
      pickupDate: pickup_dat,
      returnDate: return_date,
      pickupLocation: pickupLocation,
    })),
}));
