import { useEffect, useState } from 'react';


function Buttons(props) {
    let [x] = useState(1)
    
    return props.data.map((_, i) => {
        let item;
            if (i%6 === 0) {
                item = <button key={i} onClick={(ev) => { props.currentPage(i) }} className="btnn active"> {x} </button>; 
                x = x+1;
            }
            
        return item; 
    })
}

function PageNumbering(props) {


    // const prevPage = () => {
    //     let newData = [];


    // if (!current[0].previousSibling.classList.contains('active')) {
    //     header.disabled = true;
    // } else {
    //     let index = current[0].previousSibling.textContent;

    //         header.disabled = true;
    //         console.log(index);
    //         // newData = filterPrevData(index);
    //         // props.sendData(newData);
    //     } 

    //     });
    // }

    const nextPage = () => {
        let newData = [];
        document.getElementById("next").addEventListener("click", (ev) => {
            let header = document.getElementById("next");
            var current = header.getElementsByClassName("active");
            current[0].nextElementSibling.className += " active";
            let index = current[0].nextElementSibling.textContent;
            if (index >= props.data.length / 6) {
                header.disabled = true;
                newData = filterNextData(index);
                props.sendData(newData);
            } else {
                header.disabled = false;
                newData = filterNextData(index);
                props.sendData(newData);
            }
        });
    }

    const filterPrevData = (index) => {
        let newData = props.data.filter((_, i) => {
            return i >= ((index * 6) - 6) && i < (index * 6);
        });
        return newData;
    }

    const filterNextData = (index) => {
        let newData = props.data.filter((_, i) => {
            return i >= (index * 6) && i < ((index * 6) + 6);
        });
        return newData;

    }


    const currentPage = (index, e) => {
        // let newData
        // newData = filterPrevData(index);
        // props.sendData(newData);
    }

    useEffect(() => {


        let newData;
        let head = document.getElementById("prev");
        let bottom = document.getElementById("next");

        bottom.addEventListener("click", (ev) => {


            if (head.nextElementSibling.textContent) {
                let index = bottom.nextElementSibling.textContent;
                newData = filterPrevData(Number(index));
                console.log(newData);
                props.sendData(newData);
            } else {
                head.disabled = true
            }
        });

        head.addEventListener("click", (ev) => {
            if (head.nextElementSibling.textContent) {
                let index = head.nextElementSibling.textContent;
                newData = filterPrevData(Number(index));
                console.log(newData);
                props.sendData(newData);
            } else {
                head.disabled = true
            }
        });
         

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
                <button id="prev" className="btn btn-outline-success">&lt;</button>
                <Buttons data={props.data} currentPage={currentPage} />
                <button id="next" className="btn btn-outline-success" onClick={nextPage}>&gt;</button>
            </div>
        </div>
    );
}

export default PageNumbering;