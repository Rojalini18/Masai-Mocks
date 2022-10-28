



import { GETDATA, TEST } from "../Data Actions/DataActions"


const init={
    StudentData:[],
    Test:[]
}

export const reducer=(state=init,action)=>{
    switch(action.type){
        case GETDATA:
            return{
                ...state,
                PatientData:action.payload
            }
         case TEST:
            return{
                ...state,
            Test:action.payload
            }
        default:
            return state
    }
}