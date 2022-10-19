import "./App.css";

import "antd/dist/antd.min.css";

import Layout from "antd/lib/layout/layout";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from "react";
import ColumnPlot from "./components/ColumnPlot";
import MultiLinePlot from "./components/MultiLinePlot";
import PieChart from "./components/PieChart";
import { Button } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function App() {
   const [productData,setProductData] = useState([])
   const [category,setCategoryData] = useState([])
  const [analyze,setAnalyzeType]=useState('ByProducts')

  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

  useEffect(() => {
    console.log('hellop',process.env.REACT_APP_API_KEY)
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
    });
    let db = firebase.firestore();
    db.collection("Product")
      .get()
      .then((querySnapshot) => {
        // console.log('query',querySnapshot.data())
       
          const array=[]
        querySnapshot.forEach((doc) => {
          console.log('data',doc.data())
          array.push(doc.data())
        }); 
        setProductData(array)                       // retrieve all documents from "testcol"
      });

    
      db.collection("Category_Sales")
      .get()
      .then((querySnapshot) => {

       
          const array=[]
        querySnapshot.forEach((doc) => {
          console.log('data',doc.data())
          array.push(doc.data())
        }); 
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  
        array.sort(function(a, b){
          return months.indexOf(a.month)
               - months.indexOf(b.month);
      });
        setCategoryData(array)                       // retrieve all documents from "testcol"
      });


  }, []);
const onAnalyze=(analyzeType)=>{
  setAnalyzeType(analyzeType)
}
  
  return (
    <Layout className="app">
      <Header className="header">Revenue Analyzer</Header>
    <div className="analyze-btns">
      <Button type="primary" onClick={()=>onAnalyze('ByProducts')}>Analyze By Products</Button>
      <Button type="primary" onClick={()=>onAnalyze('ByCategories')}>Analyze By Categories</Button>
      <Button type="primary" onClick={()=>onAnalyze('ByBrands')}>Analyze By Brands</Button>
      </div>
      <Content className="content">
        
       {productData.length <= 0 && <div className="spinner">
       
       <Spin  indicator={antIcon} />
  
    </div>
}
          { analyze ==='ByProducts' && productData.length > 0 && <ColumnPlot product={productData}></ColumnPlot>}
      
   
        {analyze ==='ByCategories' && category.length > 0 && <MultiLinePlot category={category}></MultiLinePlot> }

        { analyze ==='ByBrands' && productData.length > 0 && <PieChart product={productData}></PieChart>}
      
      </Content>
      <Footer className="footer">Copyrights &#169; 2022-2023</Footer>
    </Layout>
  );
}

export default App;
