import Catalogo from "../components/catalogo/Catalogo"
import { useSelector } from "react-redux";

function Home(){

    const produto = useSelector(state=>state.box);

    return(
        <div>
           <Catalogo produto = {produto}/>
        </div>
    )
}

export default Home