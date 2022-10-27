import { Paper } from "@mui/material";
import Device from "../dtos/device.dto";

interface Props {
    device: Device,
    setSelectedDevice: React.Dispatch<React.SetStateAction<Device>>,
}


const DeviceCard = (props: Props) => {

    const selectedCard = () => {
        props.setSelectedDevice(props.device);
    }
    
    return(
        <div style={{ paddingRight:"15px"}} onClick={selectedCard}>
            <Paper elevation={4} >
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"200px", width:"200px"}}>
                    <h1>{props.device.maximumHourlyConsumption}</h1>
                    <h2>{props.device.description}</h2>
                    <h3>{props.device.address}</h3>
                </div>
            </Paper>
        </div>
    );
}

export default DeviceCard;