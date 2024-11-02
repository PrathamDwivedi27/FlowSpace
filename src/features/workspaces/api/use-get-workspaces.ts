import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetWorkspaces = () => {
    const data=useQuery(api.workspaces.get);    //get all datas of the workspaces
    const isLoading=data===undefined;       //if data is loading then it shows undefined

    return {data,isLoading};
 };