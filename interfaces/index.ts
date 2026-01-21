interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
}

interface LayoutProps {
    children: React.ReactNode;

}

interface ReviewProps {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
}

export type { PropertyProps, LayoutProps, ReviewProps };