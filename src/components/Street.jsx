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
    return (
        <div className={`street ${direction}`}>
            <span className={`trafficLight ${trafficData[direction].color}`}></span>
            { direction == 'ns' ? <span className={`direction`}>N</span> : null}
            { leftArrow && trafficData[direction].leftArrow ? <span className={`leftArrow`}>{'>'}</span> : null}
        </div>
    )
}

export default Street