import { query } from "./_generated/server";

export const get=query({
    args:{},
    handler:async (ctx)=>{
        return await ctx.db.query("workspaces").collect();
    }
    
});

// jitne workspaces hai sabko show karna hai wo hi kar rhe 