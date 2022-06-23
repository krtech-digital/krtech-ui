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
  <>
  <section className='container'>
            <ul className='list'>
          
            </ul>
            <div className='paginationWrapper'>
              <section className='paginationItems'>
                <button className='customButton' onclick={()=>{
                  nextPage()
                }}>
                    <img src="assets/leftArrow.png" className="arrowImage" />
                </button>
                <ul className='paginationPages'>
          
                </ul>
                <button className='customButton' onclick='nextPage()'>
                    <img src="assets/rightArrow.png" className="arrowImage" />
                </button>
              </section>
            </div>
          </section>
          </>
)
}

export default Pagination;