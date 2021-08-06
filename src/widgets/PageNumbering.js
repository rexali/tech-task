import { useEffect, useState } from 'react';


function Buttons(props) {
    let [x] = useState(1)
    
    return props.data.map((_, i) => {
        let item;
            if (i%6 === 0) {
                item = <button key={i} onClick={(ev) => { props.currentPage(i) }} className="btnn"> {x} </button>; 
                x = x+1;
            }
            
        return item; 
    })
}

function PageNumbering(props) {


    

    

   


    useEffect(() => {


         

            var header = document.getElementById("myDIV");
            var btns = header.getElementsByClassName("btnn");
            var current = document.getElementsByClassName("active");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {  
                    current[0].className = current[0].className.replace(" active", " ");
                    this.className += " active";
                });
            }



    });

    return (
        <div className="d-flex  justify-content-center mt-3">
            <div id="myDIV">
                <button id="prev" className="btn btn-outline-dark">&lt;</button>
                <Buttons data={props.data}  />
                <button id="next" className="btn btn-outline-dark" >&gt;</button>
            </div>
        </div>
    );
}

export default PageNumbering;