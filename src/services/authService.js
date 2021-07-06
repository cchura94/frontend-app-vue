import axios from "axios";

// fun simple
export async function login(params) {
    /*
    axios.post("http://localhost:8000/api/auth/login", params)
        .then(function(res) {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    */
   try{
       let res = await axios.post("http://localhost:8000/api/auth/login", params)
       console.log(res);
   }catch(error){
        console.log(error);
   }
}

// fun anonima
export const login2 = async function(params){

}

// fun flecha
export const login3 = async (params) => {

}