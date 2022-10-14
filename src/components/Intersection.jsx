import Street from "./Street"

function Intersection({intersection, trafficData}) {
  
  if (!intersection || !trafficData) return null
  return (
    <div className="intersection">
      {
        intersection.map(street => {
          
          return <Street 
              trafficData={trafficData}
              key={street.id} 
              label={street.label} 
              direction={street.direction} 
              lanes={street.lanes} 
              crossWalk={street.crossWalk} 
              leftArrow={street.leftArrow}
            />
        })
      }
    </div>
  )
  
}
export default Intersection
