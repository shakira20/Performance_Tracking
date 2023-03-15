
    //add form validation rules here
     export const  login_username=[
        { required: true, message: 'Please enter user name!' },
        {pattern: /^[a-zA-Z ]{2,30}$/,
        message:'Please enter a valid name'
      }
       
    ];

    export const login_password=[{ required: true, message: 'Please enter user password!' },
];
export const employeeName = [
    { required: true, message: 'Please enter your name!' },
    {pattern: /^[a-zA-Z ]{2,30}$/,
    message:'Please enter a valid name'
  }
    ];

export const employeeId = [
    {
      required: true,
      message: 'Please enter your employee Id!'
    },
    {pattern:/^(\d{3})(\d{3})(\d{4})|([A-Z]{3})(\d{4})$/,
        message:'Please enter a valid Id'
    },
  ];
  export const productName =[
    {
      required: true,
      message:'Please enter a product name'
    },
  ];
  export const category =[
    {
      required: true,
      message:'enter category'
    },
    {pattern: /^[a-zA-Z ]{2,30}$/,
        message:'Please enter a valid category name'
      }
  ];
