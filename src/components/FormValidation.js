
    //add form validation rules here
     export const  login_username=[
        { required: true, message: 'Please enter user name!' },
        {pattern: /^[a-zA-Z ]{2,30}$/,
        message:'Please enter a valid name'
      }
       
    ];
    
    export const login_password=[{ required: true, message: 'Please enter user password!' },
]
