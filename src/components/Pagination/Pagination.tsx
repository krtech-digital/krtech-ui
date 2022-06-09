import mitt from "next/dist/shared/lib/mitt";
import React from "react";
import "./Pagination.css";

function Pagination({numberOfPages}:any) {
  //const { variant, children, ...rest } = props;
  let num = []
  for (let index = 1; index < 12; index++) {
    num.push(index)
}

  
 
return (
    <div>
 {num.map(()=>{
    return <div>HI</div>
})}
</div>
)
}

export default Pagination;