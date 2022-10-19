import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const MultiLinePlot = ({category}) => {
;

   const [data, setData] = useState([]);

 

  useEffect(() => {
 console.log('cateee',category)
    setData(category)
  }, [category]);
  const config = {
    data,
    xField: 'month',
    yField: 'sold',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
 
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default MultiLinePlot





// import React, { useState, useEffect } from 'react';

// import { Line } from '@ant-design/plots';

// const MultiLinePlot = ({category}) => {
//   const [data, setData] = useState([]);

 

//   useEffect(() => {
//  console.log('cateee',category)
//     setData(category)
//   }, [category]);


//   const config = {
//     data,
//     xField: 'month',
//     yField: 'sold',
//     seriesField: 'name',
//     xAxis: {
//       type: 'month',
//     },
//     yAxis: {
//       label: {
//         formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
//       },
//     },
//   };

//   return <Line {...config} />;
// };

// export default MultiLinePlot
