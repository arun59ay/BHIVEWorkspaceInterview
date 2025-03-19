export interface Center {
  id: number;
  name: string;
  address: string;
  description: string;
  images: string[];
  amenities: string[];
  seats: Seat[];
}

export interface Seat {
  id: number;
  name: string;
  type: string;
  price: number;
  isAvailable: boolean;
}

export interface RootState {
  centers: {
    data: Center[];
    loading: boolean;
    error: string | null;
  };
  selectedCenter: Center | null;
}