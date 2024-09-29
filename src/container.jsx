import React from "react";
import Arr from "./header";
import B from "./body";
import data from "./data";
import Card from "./footer";
import "./style.css";

const Container = () => {
  return (
    <>
      <Arr />
      
        {data.map(x => {
          return (
            <div>
              <B src={x.src} alt={x.alt} des={x.des} dealName={x.dealName} />
            </div>
            

          )
        })}
      
      <Card />
    </>
  )
}

export default Container