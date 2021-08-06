import { useEffect, useState } from 'react';


function Buttons(props) {
    let [x] = useState(1)

    return props.data.map((_, i) => {
        let item;
        if (i % 6 === 0) {
            item = <button key={i} onClick={(ev) => { props.currentPage(i) }} className="btnn"> {x} </button>;
            x = x + 1;
        }

        return item;
    })
}

function PageNumbering(props) {


    const filterPrev = (index) => { }
    const filterNext = (index) => { }

    useEffect(() => {

        // set the first elemnet after prev button
        let prev = document.getElementById("prev");
        prev.nextElementSibling.classList += " active";
        // handle active pagination button
        var header = document.getElementById("pagination");
        var btns = header.getElementsByClassName("btnn");
        var current = document.getElementsByClassName("active");


        for (var i = 0; i < btns.length; i++) {
            // eslint-disable-next-line no-loop-func
            btns[i].addEventListener("click", function () {
                current[0].className = current[0].className.replace(" active", " ");
                this.className += " active";
                props.sendFilteredData(filterPrev(btns[i].nodeValue));

            });
        }

        // handle previous product page
        prev.addEventListner("click", function () {
            if ((Number(current[0].textContent) - 1)) {
                let index = Number(current[0].textContent) - 1;
                current[0].className = current[0].className.replace(" active", "");
                current[0].previousElementSibling.className += " active";
                props.sendFilteredData(filterPrev(index));
            } else {
                prev.disabled = true;
            }
        });

        // handle next product page
        let next = document.getElementById("next");
        next.addEventListner("click", function () {
            if ((Number(current[0].textContent) + 1)) {
                let index = Number(current[0].textContent);
                current[0].className = current[0].className.replace(" active", "");
                current[0].nextElementSibling.className += " active";
                props.sendFilteredData(filterNext(index));
            } else {
                next.disabled = true;
            }
        });



    });

    return (
        <div className="d-flex  justify-content-center mt-3" id="pagination">
            <button id="prev" className="btn btn-outline-dark">&lt;</button>
            <Buttons data={props.data} />
            <button id="next" className="btn btn-outline-dark" >&gt;</button>
        </div>
    );
}

export default PageNumbering;