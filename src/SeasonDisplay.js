import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {


  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }else{
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {

  const season = getSeason(props.lat, new Date().getMonth());

  console.log(season);

  return (
    <div>
    { season === 'winter' ? (
      <h1>Brrrr, al je ladnooo</h1>
    ) : (
      <h1>Toplo jeeee</h1>
    )
  }

      <p>{ props.lat }</p>
    </div>

  );
};


export default SeasonDisplay;
