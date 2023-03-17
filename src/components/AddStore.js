import react, { useState } from 'react';
import { Form, Input,Button,InputNumber } from 'antd';
import uuid from 'react-uuid';

const { TextArea } = Input;
const AddStore = (props) =>{
    const [name,setName]=useState('');
    const [brand,setBrand]=useState('');
    const[category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const[stock,setStock]=useState('');
    const[description,setDescription]=useState('');
    const product = {
        key: uuid(),
      title: name,
      description:description,
      price: price,
      stock:stock,
      brand:brand,
      category:category,
      
    }
    
function changeleftnavbar (){
    props.leftnavbar('/productDetails');
    props.product(product);
    if(sessionStorage.getItem("productlist") !== 'undefined')
    {
      const productData= JSON.parse(sessionStorage.getItem("productlist"));
      if (!productData?.includes(product) && Object.keys(product).length ) {
        productData.push(product);
      }
    sessionStorage.setItem("productlist",JSON.stringify(productData));
       
    }
   window.location.href='/productDetails'
}
return (
    <div data-testid='add-store'>
        <h1>Add store</h1>
        <Form style={{marginLeft:'70px'}}>
            <Form.Item label="Product Name" name="Product name" rules={[
          {
            required: true,
            message:'Please enter a product name'
          },
        ]}>
                <Input placeholder='enter Product name' style={{ width: 450,marginRight:'125px' }} onChange={(e)=>setName(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="Brand" name="Product Brand" rules={[
          {
            required: true,
            message:'Please enter a brand name'
          },
        ]}>
                <Input placeholder='enter Brand name' style={{ width: 450,marginRight:'70px' }} onChange={(e)=>setBrand(e.target.value)}></Input>
            </Form.Item>
            
            <Form.Item label="Category" name="category " rules={[
          {
            required: true,
            message:'Please enter a product category name'
          },
        ]}>
                <Input placeholder='enter category' style={{ width: 450,marginRight:'94px' }} onChange={(e)=>setCategory(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="Price" name="price" rules={[
          {
            required: true,
            message:'Please enter a product name'
          },
        ]}>
            <Input type="number"  placeholder="enter  price" style={{ width: 450 ,marginRight:'66px'}} onChange={(e)=>setPrice(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Stock" name="Stock" rules={[
          {
            required: true,
            
          },
        ]}>
            <Input type="number" placeholder="enter  stocke" style={{ width: 450 ,marginRight:'69px'}} onChange={(e)=>setStock(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[
          {
            required: true,
            message:'Please enter a description'
          },
        ]}>
            <TextArea rows={4} placeholder="enter description" style={{ width: 450 ,marginRight:'107px' }} onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType='submit' style={{width:'150px'}} onClick={changeleftnavbar} disabled={name&&category&&stock&&price&&brand&&description?false:true}> Submit
                </Button></Form.Item>
        </Form>
    </div>
);
}
export default AddStore;
