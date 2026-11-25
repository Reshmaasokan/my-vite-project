import Routers from "./Routers";
import MainContextprovider from "./Context/Main.context";

export default function Apps() {
    return (
        <>
            <MainContextprovider>
                <Routers />
            </MainContextprovider>
            
        </>
    );
}