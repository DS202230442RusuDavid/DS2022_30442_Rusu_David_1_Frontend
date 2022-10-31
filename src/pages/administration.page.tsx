import userEvent from "@testing-library/user-event";
import React from "react";
import DeviceCard from "../components/deviceCard.component";
import Layout from "../components/layout.component";
import UserCard from "../components/userCard.component";
import UserDialog from "../components/userDialog.component";
import Device from "../dtos/device.dto";
import User from "../dtos/user.dto";
import { getAllDevices } from "../services/device.service";
import { getAllUsers } from "../services/user.service";

//each card will be clickable
// device -> create/delete/alter device, location, consumption, only show who its assigned to 
// user ->(create is by signup) delete/alter email, show devices in carousel, has add button that brings up available device popup, same size as og window

const AdministrationPage = () => {
    let [selectedDevice, setSelectedDevice] = React.useState({} as Device);
    let [devices, setDevices] = React.useState([] as Device[]);
    React.useEffect(() => {
        getAllDevices().then((devices) => {
            setDevices(devices);
        });
    }, []);

    let [selectedUser,setSelectedUser] = React.useState({} as User);
    let [users, setUsers] = React.useState([] as User[]);
    React.useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    return (
        <Layout>
            <h1>Administration</h1>
            <p>Devices</p>

            <div style={{ display: "flex", maxWidth: "98vw", padding: "5px" }}>
                {devices.map((device: Device) => {
                    return (
                        <DeviceCard device={device} setSelectedDevice={setSelectedDevice} />
                    );
                })}
            </div>

            <p>Users</p>

            <div style={{ display: "flex", maxWidth: "98vw", padding: "5px" }}>
                {users.map((user: User) => {
                    return (
                        <UserCard user={user} setSelectedUser={setSelectedUser} />
                    );
                })}
            </div>

            <div>
                {selectedUser.id?<UserDialog setSelectedUser={setSelectedUser} user={selectedUser}/>:""}
                {/* {selectedDevice.id?<UserDialog/>:""} */}
            </div>

        </Layout>
    );
}

export default AdministrationPage;