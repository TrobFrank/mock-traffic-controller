const trafficFlow = [
    {
      phase: 0, 
      ns: { color:'green'},
      ew: { color:'red'},
      duration: 5000
    },
    {
      phase: 1, 
      ns: { color:'yellow'},
      ew: { color:'red'},
      duration: 3000
    }, 
    {
      phase: 2, 
      ns: { color:'red'},
      ew: { color:'red', leftArrow: true},
      duration: 5000
    }, 
    {
      phase: 3, 
      ns: { color:'red'},
      ew: { color:'green'},
      duration: 5000
    },     
    {
      phase: 4, 
      ns: { color:'red'},
      ew: { color:'yellow'},
      duration: 3000
    },  
    {
      phase: 5, 
      ns: { color:'red', leftArrow: true},
      ew: { color:'red'},
      duration: 5000
    },          
  ]

export default trafficFlow;