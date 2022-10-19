import React, { useState, useEffect } from "react";

import { Line } from "@ant-design/plots";

const LinePlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("./plot.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default LinePlot;
