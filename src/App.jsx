import { Provider } from "react-redux";
import { store } from "./Store/App.store";
import Routers from "./Routers";

export default function Apps() {
    return (
        <>
        <Provider store={store}>
            <Routers />
        </Provider>
            
        </>
    );
}