import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Custom404(){
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/');
        }, 2000);
    },[])

    
    return(
        <div>
            <h1 className="title-not-found">Shit Man</h1>
            <h1 className="title-not-found">No Page here</h1>
        </div>
    )
}