import { Form, Input,Button,InputNumber } from 'antd';
import react, { useState } from 'react';
import uuid from 'react-uuid';


const { TextArea } = Input;
const AddEmployee = (props) =>{ 
    const [name,setName]=useState('');
    const [id,setId]=useState('');
    const [age,setAge] = useState(0);
    const [email,setEmail]=useState('');
    const [phone,setPhone ]=useState('');
    const[salary,setSalary]=useState(100);
    const [address,setAddress]=useState('');
    const person = {key:uuid(),id:id,
    name: name,
    age: age,
    address: address,
    salary:salary,
    phone:`+91${phone}`,
    email:email,
    userType:'Employee'
  }
    // console.log(`+91${phone}`)
    function changeleftnavbar (){
        props.leftnavbar('Employee List')
        props.data(person);
        if(sessionStorage.getItem("employeelist") !== 'undefined')
          {
           const employeeData= JSON.parse(sessionStorage.getItem("employeelist"));
            if (!employeeData?.includes(person) && Object.keys(person).length ) {
              employeeData.push(person);
            }
            console.log(employeeData,'perforamce data2')

            sessionStorage.setItem("employeelist",JSON.stringify(employeeData));
        }
       window.location.href='/employeelist'      
    }
    return(
    <div data-testid='add-employee'>
        <h1>Add Employee Details</h1>
        <Form style={{marginLeft:'70px'}}>
            <Form.Item label="employee name" name="employee name"  rules={[
              { required: true, message: 'Please enter employee name!' },
              {pattern: /^[a-zA-Z ]{2,30}$/,
              message:'Please enter a valid name'
            }
              ]}>
                <Input placeholder='enter employee name' style={{ width: 450,marginRight:'70px' }} onChange={(e)=>setName(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="employee id" name="employee id" rules={[
          {
            required: true,
            message: 'Please enter  employee Id!'
          },
          {pattern:/^(\d{3})(\d{3})(\d{4})|([A-Z]{3})(\d{4})$/,
              message:'Please enter a valid Id'
          },
        ]}>
                <Input placeholder='enter employee id' style={{ width: 450,marginRight:'50px' }} onChange={(e)=>setId(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="Age" name="age" rules={[
          {
            required: true,
          },
          {pattern:/^(1[89]|[2-9]\d)$/,
            message:'enter a valid age'
        }
        ]}>
            <Input type="number"keyboard={true} placeholder="enter  age" style={{ width: 450 }}  onChange={(e)=>setAge(e.target.value)}/>
            </Form.Item>
            <Form.Item label="email" name="email" rules={[
          {
            required: true,
            message:'Please enter a email'
          },
          {
           pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
           message:'Please enter a valid email'
          }
        ]}>
                 <Input placeholder='enter email' style={{ width: 450 ,marginRight:'7px'  }} onChange={(e)=>setEmail(e.target.value)}></Input>
        
            </Form.Item>
            <Form.Item label="Phone number" name="phone" rules={[
          {
            required: true,
            message:'Please enter a phone number'
          },
          {
            pattern:/^[6-9]{1}[0-9]{9}$/,
            message:'Please enter a valid phone number'
          }
        ]}>
                <Input addonBefore='+91' placeholder='enter phone number' style={{ width: 450,marginRight:'60px'  }} onChange={(e)=>setPhone(e.target.value)}></Input>
            </Form.Item>
            <Form.Item label="salary" name="salary" rules={[
          {
            required: true,
          },
        ]}>
            <Input type="number" min={1000}  placeholder="enter  salary" style={{ width: 450 }}  onChange={(e)=>setSalary(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Address" name="address" rules={[
          {
            required: true,
            message:'Please enter a description'
          },
        ]}>
            <TextArea rows={4} placeholder="enter address" style={{ width: 450 ,marginRight:'20px' }} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType='submit' style={{width:'150px'}} onClick={changeleftnavbar} disabled={name&&id&&salary&&email&&phone&&address&&age ? false:true}> Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
);
}
export default AddEmployee;
