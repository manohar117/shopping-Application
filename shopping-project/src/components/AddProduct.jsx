import Space from "./Space";
import react,{ useState } from "react";
import { FormControl,FormGroup,InputLabel, Input,Typography,Button ,styled} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/api";


const initialValues={
    
    name:'',
    price:'',
    quantity:''
}

const Container = styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px
}
`;



const AddProduct=()=>{


const [product,setProduct]=useState(initialValues);
const {name,price,quantity }=product;
let navigate = useNavigate();

const onValueChange=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
    
}

const addProductDetails=async()=>{
    await addProduct(product);
    navigate('/all');
}



    return (
        <div className="shoppingimg">
            <Space/>
        <Container >
            <Typography variant="h4">ADD PRODUCT</Typography>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Pid</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="id" value={id} id="my-input"/>
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input" style={{color:"black"}}>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={name} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" style={{color:"black"}}>Price</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="price" value={price} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" style={{color:"black"}}>Quantity</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="quantity" value={quantity} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button  variant="contained" color="primary" onClick={() => addProductDetails()}>ADD PRODUCT</Button>
            </FormControl>
        </Container>
        </div>
    )
}

export default AddProduct;