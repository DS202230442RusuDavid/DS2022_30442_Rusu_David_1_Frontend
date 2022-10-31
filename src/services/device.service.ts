import axios from "axios";
import Device from "../dtos/device.dto";
import User from "../dtos/user.dto";

export const getUserDevices = async (user: User) => {
  var config = {
    method: "post",
    url: "/device/getDevices",
    data: { "user.id": user.id },
  };

  return axios(config)
    .then(function (res) {
      return res.data as Device[];
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export const getUnassignedDevices = async () => {
  var config = {
    method: "post",
    url: "/device/getDevices",
    data: { "user.id": null },
  };

  return axios(config)
    .then(function (res) {
      return res.data as Device[];
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export const getAllDevices = async () => {
  var config = {
    method: "post",
    url: "/device/getDevices",
    data: {},
  };

  return axios(config)
    .then(function (res) {
      return res.data as Device[];
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export const updateDevice = async (device: Device, user?: User) => {
  var config = {
    method: "patch",
    url: "/device/",
    data: user?{ ...device, "userId": user.id }:device,
  };

  console.log(config);

  return axios(config)
    .then(function (res) {
      
      return res.data as Device;
    })
    .catch(function (error) {
      console.log(error);
      return {} as Device;
    });
}
