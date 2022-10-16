import { useEffect, useState, useRef } from "react";
import Intersection from "./Intersection"
import intersectionData from "../mock/intersectionData";
import trafficFlow from "../mock/trafficFlow";


function TrafficController() {

  let trafficFlowIndex          = useRef(0);
  let [trafficData, setTrafficData] = useState(trafficFlow[0]);

  useEffect(() => {
    let nextPhaseIndex = trafficFlowIndex.current < 5 ? trafficFlowIndex.current + 1 : 0;
    //if (nextPhaseIndex > 5 || nextPhaseIndex < 0){nextPhaseIndex = 0}
    let nextPhaseData = trafficFlow[nextPhaseIndex];
    setTimeout(function(){
      setTrafficData(nextPhaseData);
      trafficFlowIndex.current = nextPhaseIndex;
    }, trafficFlow[trafficFlowIndex.current].duration)

    
  }, [trafficData])


  return (
      <div>
      {
        intersectionData.map(index => {
          return <Intersection intersection={index.intersection} key={index} trafficData={trafficData} />
        }) 
      }
      </div>
  )
}
export default TrafficController
