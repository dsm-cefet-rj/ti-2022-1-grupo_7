import Produto from "../components/Usuario/Produto/Produto"
import { useSelector, useDispatch } from "react-redux";

function ProdutoPag(){
    
    // let { id } = useParams();
    // id = parseInt(id);

    // const bookingFound = useSelector(state => selectBookingById(state, id))
    
    // const [newBooking, setNewBooking] = useState(id ? bookingFound ?? {} : {});

    // const [actionType, ] = useState(
    //     id ?
    //         bookingFound
    //         ? 'scheduling/updateBooking'
    //         : 'scheduling/addBooking'
    //         : 'scheduling/addBooking'
    // );
    
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // function handleInputChange(e){
    //     setNewBooking({...newBooking, [e.target.name]: e.target.value})
    // }
    
    const produto = useSelector(state=>state.box.produtos);

    return(
        <div>
            {produto.map((struct) => <Produto produto={struct}/>)}
        </div>
    )
}
// {produto.map((struct) => <Produto produto={struct}/>)}
export default ProdutoPag
