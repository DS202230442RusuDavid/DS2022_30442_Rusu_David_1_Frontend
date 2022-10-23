import axios from 'axios';
import Role from '../dtos/role.dto';

export const register = async (email: string, password: string, role: Role) => {
    console.log({email, password, role});
    try{
        const response = await axios.post('/authentication/register', {email, password, role});
        return {data: response.data, status: response.status};
    }catch(error: any){
        return {data: error, status: error.response.status};
    }
}


export const login = async (email: string, password: string) => {
    try{
        console.log('login');
        const res = await axios.post(`/authentication/log-in`, { email, password });
        console.log(res);
        return res;
        
    }catch(err){
        console.log(err);
        return null;
    }
};

export const logout = async () => {
    try{
        console.log('logout');
        const res = await axios.post(`/authentication/log-out`);
        console.log(res);
        return res;
        
    }catch(err){
        console.log(err);
        return null;
    }
};