import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ColumnPlot = ({product}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
 
    setData(product)
  }, [product]);



  const config = {
    data,
    xField: 'name',
    yField: 'total_sale',
    seriesField: '',
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnPlot