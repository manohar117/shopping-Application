import Space from "./Space";
import { useEffect, useState } from "react";
import { FormControl,FormGroup,InputLabel, Input,Typography,Button ,styled} from "@mui/material";
import { useNavigate,useParams } from "react-router-dom";
// import { addProduct } from "../service/api";
import {getProducts,editProduct} from '../service/api';

const initialValue={
    
    name:'',
    price:'',
    quantity:''
}

const Container = styled(FormGroup)`
width: 50%;
margin:5% 0 0 25%;
& > div{
    margin-top:20px
}
`;



const EditProduct=()=>{


const [product,setProduct]=useState(initialValue);
const{ name,price,quantity }=product;
const { pid }=useParams();


let navigate = useNavigate();

useEffect(()=>{
    loadProductDetails();
},  []);

const loadProductDetails=async()=>{
   const response= await getProducts(pid);
//    console.log(response);
   setProduct(response.data);
}

const editProductDetails=async()=>{
    const response=await editProduct(pid,product);
    // setProduct(response.product);
    navigate('/all');
}

const onValueChange=(e)=>{
    console.log(e.target.value);
    setProduct({...product,[e.target.name]:e.target.value})
    
}






    return (
        <div>
            <Space/>
        <Container >
            <Typography variant="h4">EDIT PRODUCT</Typography>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Pid</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="pid"  value={pid} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={name} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="price" value={price} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantity</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="quantity" value={quantity} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editProductDetails()} > SAVE EDIT </Button>
            </FormControl>
        </Container>
        </div>
    )
}

export default EditProduct;