import { create } from "zustand";

// Define the Product interface to match the Movie interface
export interface Product {
    Title: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
    Images: string[];
}

export interface CartState {
    product: Array<Product & { quantity: number }>;
    addProduct: (product: Product) => void;
    reduceProduct: (product: Product) => void;
    clearCart: () => void;
    item: number;
}

const useCartStore = create<CartState>((set) => ({
    product: [],
    item: 0,

    addProduct: (product: Product) => set((state) => {
        const existingProduct = state.product.find((p) => p.imdbID === product.imdbID);

        if (existingProduct) {
            // If product already exists in the cart, increase the quantity
            return {
                product: state.product.map((p) =>
                    p.imdbID === product.imdbID ? { ...p, quantity: p.quantity + 1 } : p
                ),
                item: state.item + 1,
            };
        } else {
            // If product doesn't exist in the cart, add it with quantity 1
            return {
                product: [...state.product, { ...product, quantity: 1 }],
                item: state.item + 1,
            };
        }
    }),

    reduceProduct: (product: Product) => set((state) => {
        const existingProduct = state.product.find((p) => p.imdbID === product.imdbID);

        if (existingProduct) {
            if (existingProduct.quantity > 1) {
                // If quantity is more than 1, reduce it by 1
                return {
                    product: state.product.map((p) =>
                        p.imdbID === product.imdbID ? { ...p, quantity: p.quantity - 1 } : p
                    ),
                    item: state.item - 1,
                };
            } else {
                // If quantity is 1, remove the product from the cart
                return {
                    product: state.product.filter((p) => p.imdbID !== product.imdbID),
                    item: state.item - 1,
                };
            }
        }
        return state;
    }),

    clearCart: () => set({
        product: [],
        item: 0,
    }),
}));

export default useCartStore;
