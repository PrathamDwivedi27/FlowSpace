import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCurrentUser = () => {
    const data=useQuery(api.user.current);
    const isLoading=data===undefined;       // documentation mein likha hai ki agar data undefined hai iska matlab abhi data load ho rha hai 

    return {data,isLoading}
};