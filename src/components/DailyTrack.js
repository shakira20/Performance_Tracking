import react, { useState } from 'react';
import { Form, Input,Button,InputNumber, message ,Select} from 'antd';
import uuid from 'react-uuid';
import {employeeName,employeeIdRule,categoryRule,productName} from  './FormValidation'

const DailyTrack = (props) => {
    const[name,setName]=useState('');
    const [form] = Form.useForm();
    const[username,setUsername]=useState('');
    const[employeeId,setEmployeeId]=useState('');
    const[category,setCategory]=useState('');
    const[duration,setDuration]=useState('');
    const[status,setStatus]=useState('');
    const[packages,setPackage]=useState('');
    const[date,setDate]=useState('');
    const[disabled,setDisable]=useState(false);
    const product = JSON.parse(sessionStorage.getItem("productlist"));
    const ProductName = product && product?.map((item)=> item.title );
    console.log(ProductName)
    const performance ={
        key: uuid(),
      id:employeeId,
      name: username,
      packed_product:name,
      product_category:category,
      no_of_package:packages,
      hours:duration,
      date:date,
      Status:status,
    }
    console.log(performance,'emp-perform');
    
    function changeleftnavbar (){
        props.leftnavbar('/Performances');
        props.performance(performance);
        if(sessionStorage.getItem("performance") !== 'undefined')
    {
      const data= JSON.parse(sessionStorage.getItem("performance"));
      console.log(data,'perforamce data')
      if (!data.includes(performance) && Object.keys(performance).length ) {
        data.push(performance);
      }
      console.log(data,'perforamce data2')

      sessionStorage.setItem("performance",JSON.stringify(data));
       
    }
    window.location.href='/Performances'
    }
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
      console.log(status,'hey');
      console.log(name,'ooiiii')
    return(
    <div data-testid='dailytrack'>
        <h1>DailyTrack</h1>
        <Form   style={{marginLeft:'70px'}} form={form}  initialValues={{ remember: true }}
      onFinish={onFinish}>
             <Form.Item label="Employee Name" name="Employee name "  rules={employeeName}>
                <Input placeholder='enter your name' style={{ width: 450,marginRight:'135px' }} onChange={(e)=>setUsername(e.target.value)}
           required></Input>
            </Form.Item>
            <Form.Item label="EmployeeId" name="Employee_id"  rules={employeeIdRule}>
            <Input  placeholder="enter  your ID" style={{ width: 450 ,marginRight:'108px'}} onChange={(e)=>setEmployeeId(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Product Name" name="Product name"  rules={productName}>
                {/* <Input placeholder='enter Product name' style={{ width: 450,marginRight:'125px' }} onChange={(e)=>setName(e.target.value)}></Input> */}
                <Select onChange={(value)=>setName(value)}  style={{ width: 450 ,marginRight:'120px'}} placeholder="enter product">
    {ProductName?.map(item =>
      <option key={item} value={item}>{item}</option>
    )};
  </Select>
            </Form.Item>
            <Form.Item label="Category" name="category "  rules={categoryRule}>
                <Input placeholder='enter category' style={{ width: 450,marginRight:'93px' }} onChange={(e)=>setCategory(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="No:of Packages" name="No:of Packages"  rules={[
          {
            required: true,
          },
        ]}>
            <Input type="number" placeholder="enter  no:of packages" style={{ width: 450 ,marginRight:'125px'}} onChange={(e)=>setPackage(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Duration" name="Duration"  rules={[
          {
            required: true,
          },
        ]}>
            <Input type="number" placeholder="enter  work log" style={{ width: 450 ,marginRight:'86px'}} onChange={(e)=>setDuration(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Date" name="Date"  rules={[
          {
            required: true,
          },
        ]}>
            <Input type="date" placeholder="enter  current date" style={{ width: 450 ,marginRight:'60px'}} onChange={(e)=>setDate(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Status" name="Status"  rules={[
          {
            required: true,
          },
        ]}>
            {/* <Input  placeholder="enter  Status"  /> */}
            <Select
                showSearch={false}
                placeholder="enter status"
                optionFilterProp="children"
                onChange={(value)=>setStatus(value)}
                style={{ width: 450 ,marginRight:'65px'}}
               filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Completed',
        label: 'Completed',
      },
      {
        value: 'Not Completed',
        label: 'Not Completed',
      },
    ]}
  />
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType='submit' style={{width:'150px'}} onClick={changeleftnavbar} disabled={name&&username&&duration&&status&&category&&packages&&date&&employeeId ? false:true}> Submit
                </Button></Form.Item>
        </Form>
    </div>
)};
export default DailyTrack;
