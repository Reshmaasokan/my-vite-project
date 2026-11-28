
import AuthProvider from "./Context/AuthProvider";
import Routers from "./Routers";

export default function Apps() {
    return (
        <>
        <AuthProvider>
            <Routers/>
        </AuthProvider>
            
     
            
        </>
    );
}