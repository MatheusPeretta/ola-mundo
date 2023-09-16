import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PagPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}
