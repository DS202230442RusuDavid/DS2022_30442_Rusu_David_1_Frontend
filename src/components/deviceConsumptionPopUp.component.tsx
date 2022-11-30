import Device from "../dtos/device.dto";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io();

const DeviceConsumptionPopUp = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
  
    useEffect(() => {
      socket.on('connect', () => {
        setIsConnected(true);
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('alert', msg => {
        console.log(msg);
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
  
    const sendPing = () => {
      socket.emit("message",'ping');
    }
  
    return (
      <div>
        <p>Connected: { '' + isConnected }</p>
        
        <button onClick={ sendPing }>Send ping</button>
      </div>
    );
}

export default DeviceConsumptionPopUp;