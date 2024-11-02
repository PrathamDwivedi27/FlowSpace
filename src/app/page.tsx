"use client"
import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";


export default function Home() {
  const {data,isLoading}=useGetWorkspaces();
  const [open,setOpen]=useCreateWorkspaceModal();

  const workspaceId=useMemo(()=>
    data?.[0]?._id
  ,[data]);

  useEffect(()=>{
    if(isLoading) return ;

     if(workspaceId){
      console.log("Redirect to Workspace",workspaceId)
     }
     else if(!open){
       setOpen(true);
      console.log("Create a new Workspace")
     }
  },[workspaceId,isLoading,open,setOpen]);


  return (
    <div>
      <UserButton/>
    </div>
  );
}
