import Catalogo from "../components/catalogo/Catalogo"

function Home({produto}){

    return(
        <div>
           <Catalogo
            produto={produto}/>
        </div>
    )
}

export default Home