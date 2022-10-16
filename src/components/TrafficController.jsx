import { useEffect, useState, useRef } from "react";
import Intersection from "./Intersection"
import intersectionData from "../mock/intersectionData";
import trafficFlow from "../mock/trafficFlow";

function TrafficController() {

  let trafficFlowIndex = useRef(0);
  let [trafficData, setTrafficData] = useState(trafficFlow[0]);

  useEffect(() => {
    let nextPhaseIndex = trafficFlowIndex.current < trafficFlow.length - 1 ? trafficFlowIndex.current + 1 : 0;
    let nextPhaseData = trafficFlow[nextPhaseIndex] !== undefined ? trafficFlow[nextPhaseIndex] : trafficFlow[0];
    let controller = setTimeout(function(){
      setTrafficData(nextPhaseData);
      trafficFlowIndex.current = nextPhaseIndex;
    }, trafficFlow[trafficFlowIndex.current].duration)

    return () => clearTimeout(controller);

  }, [trafficData])

  return (
      <div className={`intersections`} role="main" style={{display: "flex"}}>
      {
        intersectionData.map((int, i) => {
          return <Intersection intersection={int.intersection} key={i} trafficData={trafficData} />
        }) 
      }
      </div>
  )
}
export default TrafficController
