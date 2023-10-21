import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
    bgColors: {
        "0":"tomato",
        "0.5":"tomato",
        "1.0":"tomato",
    }
}) 

const Loading = () => {
  return (
    <TopBarProgress/>
  )
}

export default Loading;