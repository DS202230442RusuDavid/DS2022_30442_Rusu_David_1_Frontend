import axios from "axios";
import Device from "../dtos/device.dto";
import User from "../dtos/user.dto";

export const getUserDevices = async (user: User) => {
    var config = {
        method: 'post',
        url: '/device/getDevices',
        data : {'user.id':user.id}
      };

      return axios(config).then(function (res) {
        console.log(JSON.stringify(res.data));
        return res.data as Device[];
        })
        .catch(function (error) {
            console.log(error);
            return [];
        });

       
}