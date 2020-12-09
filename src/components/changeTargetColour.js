const changeTargetColour = (boardType, box) => {
  let targetClassName;
  let dataID;
  if (boardType === "pc") {
    if (box === "ship") {
      targetClassName = "grid-circle-ship-pc";
      dataID = "data-ship-pc";
    } else if (box === "hit") {
      targetClassName="grid-circle-hit";
      dataID=`data-hit-pc`;
    } else if (box === "miss") {
      targetClassName="grid-circle-miss";
      dataID=`data-miss-pc`;
    } else {
      dataID = "grid-box-id";
      targetClassName = "";
    }
  } else {
    if (box === "ship") {
      targetClassName = "grid-circle-ship-player";
      dataID = "data-ship-player";
    } else if (box === "hit") {
      targetClassName = "grid-circle-hit"; 
      dataID = "data-hit-player";
    } else if (box === "miss") {
      targetClassName="grid-circle-miss";
      dataID=`data-miss-player`;
    } else {
      targetClassName = "";
      dataID = "grid-box-id";
    }
  };
  
  return {
    targetClassName, dataID
  };
};

export default changeTargetColour;