"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SignInFlow } from "../types"
import { useState } from "react"
  
interface SignUpCardProps{
    setState:(state:SignInFlow)=>void       //it means we passed a property which will accept state as a argument which of type SignInFlow and returns void(indicating not any meaningful value)
};

export const SignUpCard=({setState}:SignUpCardProps)=>{

    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [confirmPassword,setConfirmPassword]=useState<string>("");

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Sign up to Continue</CardTitle>
                <CardDescription>
                Use your email or another service to continue
            </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                     disabled={false}
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     placeholder="Email"
                     type="email"
                     required={true}
                    />
                    <Input
                     disabled={false}
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     placeholder="Password"
                     type="password"
                     required={true}
                    />
                    <Input
                     disabled={false}
                     value={confirmPassword}
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                     placeholder="Confirm Password"
                     type="password"
                     required={true}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator/>
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="w-full relative"                    
                        >
                        <FcGoogle className="absolute top-3 left-2.5 size-5"/>
                        Continue with Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="w-full relative"                    
                        >
                        <FaGithub className="absolute top-3 left-2.5 size-5"/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an account? <span onClick={()=>setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">Login</span>  
                </p>
            </CardContent>
        </Card>
    )
}

// signup pe click karke isliye change ho rha hai kyunki humne auth screen pe likha hai ki agar state ye rhi to ye component render karna nhi to ye