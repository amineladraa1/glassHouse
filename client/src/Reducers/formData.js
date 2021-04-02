
const initialState = {firstName : '' , 
lastName :'' , 
email : '' , 
password : '' ,
confirmPassword : '' , 
userName : '', 
bio : '' , 
phoneNumber : '',
BirthDate : '', 
city : '' , 
profilePic : ''}
export default (formData =initialState,action) => {
    switch (action.type) {
        case 'ARTISTFIRSTFORM':
            return {...formData ,
                    firstName : action.payload.firstName ,
                    lastName :action.payload.lastName , 
                    email : action.payload.email , 
                    password : action.payload.password ,
                    confirmPassword : action.payload.confirmPassword }
        case 'ARTISTPERSONALFORM':
            return {...formData ,
                       userName : action.payload.userName, 
                       bio : action.payload.bio , 
                       phoneNumber : action.payload.phoneNumber,
                       BirthDate : action.payload.date.toDateString(), 
                       city : action.payload.city , 
                       profilePic : action.payload.profilePic}
        
        default:
            return formData;
    }  
}