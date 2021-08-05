import { useEffect, useState } from 'react';


function Buttons(props) {

    let [x] = useState(1);

    let item = props.data.map((_,i)=>{
    

    if (i % 6 === 0) {

        item = <button key={i} onClick={(ev)=>{props.currentPage(x*6,ev)}}  class="btnn"> {x} </button>;

        x = x + 1;
    }
    return item;
    
   })
   return item; 
}

function PageNumbering(props) {

    
    const prevPage = () => {
        let newData =[];
        document.getElementById("prev").addEventListener("click",(ev)=>{
            let header = document.getElementById("prev");
            var current = header.getElementsByClassName("active");
            current[0].previousElementSibling.className += " active";
            let index = current[0].previousElementSibling.textContent;
            if(index<=1){
                header.disabled = true;
                newData = filterPrevData(index);
                props.sendData(newData);
            }else{
                header.disabled = false;
                newData = filterPrevData(index);
                props.sendData(newData);
            }
        });
    }

    const nextPage = () => {
        let newData =[];
        document.getElementById("next").addEventListener("click",(ev)=>{
            let header = document.getElementById("next");
            var current = header.getElementsByClassName("active");
            current[0].nextElementSibling.className += " active";
            let index = current[0].nextElementSibling.textContent;
            if(index>=props.data.length/6){
                header.disabled = true;
                newData = filterNextData(index);
                props.sendData(newData);
            }else{
                header.disabled = false;
                newData = filterNextData(index);
                props.sendData(newData);
            }
        });
    }

    const filterPrevData = (index) => {
        let newData = props.data.filter((_, i) => {
            return i>=((index*6)-6) && i < (index * 6);
        });
        return newData;
    }

    const filterNextData = (index) => {
        let newData = props.data.filter((_, i) => {
            return i >= (index * 6) && i < ((index*6)+6) ;
        });
        return newData;
       
    }


    const currentPage = (index, e) => {
        let newData
        newData = filterPrevData(index);
        props.sendData(newData);
    }

    useEffect(()=>{
            var header = document.getElementById("myDIV");
            var btns = header.getElementsByClassName("btnn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace(" active", " ");
                    this.className += " active";
                });
            }
        });

    return (
        <div className="d-flex  justify-content-center mt-3">
        <div id="myDIV">
            <button id="prev" onClick={prevPage}>&lt;</button>
            <Buttons data={props.data} currentPage={currentPage} />
            <button id="next" onClick={nextPage}>&gt;</button>
            </div>
        </div>
    );
}

export default PageNumbering;