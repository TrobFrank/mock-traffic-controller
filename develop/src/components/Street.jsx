function Street(props){
    let { 
        trafficData,
        id,
        label,
        direction,
        lanes,
        crossWalk,
        leftArrow,
    } = props;
    //console.log('Street: ', trafficData);
    return (
        <div className={`street ${id} ${direction} ${lanes} ${crossWalk} ${leftArrow}`}>
            <span className={`trafficLight ${trafficData[direction].color}`}></span>
            <span className={`streetName`}>{label}</span>
        </div>
    )
}

export default Street