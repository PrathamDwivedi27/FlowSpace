"use client"

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal"
import { useEffect, useState } from "react"

export const Modals=()=>{
    const [mounted, setMounted]=useState<boolean>(false);

    useEffect(()=>{
        setMounted(true);   // this is to solve potential hydration errors
    },[])

    if(!mounted) return null;       //All modals will show on client side rendering

    return (
        <>
        <CreateWorkspaceModal/>
        </>
    )
}