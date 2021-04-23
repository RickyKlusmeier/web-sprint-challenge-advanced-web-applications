import React, { useContext, useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
      setColorList(res.data)
      history.push('/bubble-page')
    })
    .catch(err => {
      history.push('/')
    })
  },[])

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
