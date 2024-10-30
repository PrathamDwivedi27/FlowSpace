import {auth } from "./auth"

import {query }from "./_generated/server"

export const current=query({
    args:{},
    handler:async(ctx)=>{
        const userId=await auth.getUserId(ctx);

        if(userId==null) return null;

        return await ctx.db.get(userId);
    }
});

// convex automatic samjh leta hai ki userId kha se chahiye humko 