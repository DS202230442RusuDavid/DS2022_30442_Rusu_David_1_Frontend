import React from "react";
import Device from "../dtos/device.dto";
import BarGraph from "./barGraph.component";
import CalendarComp from "./calendar.component";

interface Props {
    device: Device,
}

//TODO, get data from db, add state to this component and pass it to the calander

const getDeviceData = async (device: Device) => {
    //Data will have to be sorted by date
    const data = [
        { x:'2014-06-13', y: 35 },
        { x: '2014-06-14', y: 10 },
        { x:'2014-06-15', y: 15 },
        { x: '2014-06-16', y: 30 },
        { x: '2014-06-17', y: 10 },
        { x: '2014-06-18', y: 15 },
        { x: '2014-06-19', y: 13 },
        { x: '2013-06-1', y: 8 },
        { x: '2011-08-2', y: 5 },
        { x: '2014-06-3', y: 2 },
        { x: '2010-07-4', y: 1 },
    ];

    //sort by date
    data.sort((a, b) => {
        return new Date(a.x).getTime() - new Date(b.x).getTime();
    });

    return data;
}

const DeviceView = (props: Props) => {
    const device = props.device;

    React.useEffect(() => {
        getDeviceData(device).then((data) => {
            setDeviceData(data);
        });
    }, []);

    const [deviceData, setDeviceData] = React.useState([] as { x: string, y: number }[]);

    return (
        <div>
            {device.id ?
                <div style={{width:"90vw"}}>
                    <div style={{textAlign:'center'}}>
                        <h1>{device.description}</h1>
                    </div>

                    <div style={{ display: "flex", alignContent: "space-between", flexDirection: "row" }}>
                        <div style={{width:"70%"}}>
                            <BarGraph data={deviceData} />
                        </div>
                        <div style={{padding:"5%"}}>
                            <CalendarComp />   
                        </div>
                    </div>
                </div>
                : <h1>No device selected</h1>}
        </div>
    );
}

export default DeviceView;