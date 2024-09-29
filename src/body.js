import React from "react";
import "./style.css";
import data from "./data";

const B = (a) => {
    return (
        <div className="body">
            <div className="minbody">
                {data.map((a) => {
                    return (
                        <div className="card">
              
                            <img src={a.src} alt={a.alt} />
             
                            <div className="card-body">
                            <h1>{a.dealName}</h1>
              
              
                            <p>{a.des}</p>
                  
                            <h4>see terms</h4>
                            <button>Order Now</button>
              
                            </div>
                            </div>
          );
        })}
      </div>
    </div>
  );
}

export default B;