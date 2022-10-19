import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({product}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log('prodyct',product)
  
    setData(product)
  }, [product]);


  const config = {
    appendPadding: 10,
    data,
    angleField: 'total_sale',
    colorField: 'brand',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart 
