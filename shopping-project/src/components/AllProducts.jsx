import { Table,TableHead,TableBody,TableRow,TableCell, Button ,styled} from "@mui/material";
import Space from "./Space";
import { useEffect ,useState} from "react";
import { getProducts,deleteProduct } from "../service/api";
// import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { BiEdit } from "react-icons/bi";

const StyledTable = styled(Table)`
width:90%;
margin:50px 0 0 50px;
`;

const THead =styled(TableRow)`
    &>th{
        font-size: 20px;
        background:#000000;
        color:#FFFFFF;
    }
`;

const TRow =styled(TableRow)`
    &>td{
        font-size: 20px
    }
`;

const AllProducts=()=>{

    const[products, setProducts]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[]);

    const deleteProductData=async(id)=>{
        // console.log(id);
        await deleteProduct(id);
        getAllProducts();
    }

    const getAllProducts=async(id)=>{
        let response =await getProducts(id);
        // console.log(response);
        setProducts(response.data);
    }

    
    return (
        
        <div className="shopingimg">
            {/* <Space/> */}
            <StyledTable className="bor">
                <TableHead className="bor">
                    <THead>
                        <TableCell>PID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>PRICE</TableCell>
                        <TableCell>QUANTITY</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {
                        products.map((product)=>(
                            <TRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>
                                    <Button color="primary" variant="contained" style={{marginRight:20}} startIcon={<BiEdit/>} component={Link} to={`/edit/${product.id}`}>EDIT</Button>
                                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={()=>deleteProductData(product.id)}>DELETE</Button>
                                </TableCell>
                            </TRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </div>
       
    )
}

export default AllProducts;