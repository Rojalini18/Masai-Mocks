import axios from 'axios'
export const GETDATA="GETDATA"
export const TEST="TEST"

const Getstudents=(details)=>({
    type:GETDATA,
    payload:details
})

const Test=(data)=>({
    type:GETDATA,
    payload:data
})

export const GetData=(obj)=>(dispatch)=>{
    axios.post(`https://masai-mock12.herokuapp.com/student/get`,obj)
    .then((res)=>{
       dispatch(Getstudents(res.data.data))
    })
}

//create
export const CreateStudents=(data,navigate,alert)=>(dispatch)=>{
    axios.post(`https://masai-mock12.herokuapp.com/create`,data,)
    .then((res)=>{
        if(res.data.message==="student created"){
            alert.success("task created")
            navigate("/home")
        }
    })
}

export const StudentsTests=(data,navigate,alert)=>(dispatch)=>{
    axios.post(`https://masai-mock12.herokuapp.com/student/tests/get`,data,)
    .then((res)=>{
        if(res.data.message==="test gave successfully"){
           dispatch(Test)
        }
    })
}


export const DeleteStudent=(id)=>(dispatch)=>{
    console.log(id);
    axios.delete(`https://masai-mock12.herokuapp.com/student/delete/${id}`)
    .then((res)=>{
        dispatch(GetData())
        console.log(res.data);
    })
}


export const Deletetest=(id)=>(dispatch)=>{
    axios.delete(`https://masai-mock12.herokuapp.com/tests/delete/${id}`,)
    .then((res)=>{
        console.log(res.data);
    })
}

export const CreateTest=(data,navigate,alert)=>()=>{
    axios.post(`https://masai-mock12.herokuapp.com/student/tests/get`,data,)
    .then((res)=>{
        if(res.data.message==="test Updated"){
            alert.success("test Updated")
            navigate("/home")
        }
    })
}


