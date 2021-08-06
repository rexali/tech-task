import { useEffect, useState } from 'react';


function Buttons(props) {
    let [x] = useState(1)

    return props.data.map((_, i) => {
        let item;
        if (i % 6 === 0) {
            item =  <button key={i} className="btnn"> {x} </button>;
            x = x + 1;
        }

        return item;
    })
}

function PageNumbering(props) {


    const filterPrev = (index) => {
        let newData = props.data.filter((_, i) => {
            return i >= ((index * 6) - 6) && i < (index * 6);
        });
        return newData;
    }

    const filterNext = (index) => {
        let newData = props.data.filter((_, i) => {
            return i >= (index * 6) && i < ((index * 6) + 6);
        });
        return newData;
    }



    useEffect(() => {

        // set the first elemnet after prev button
        let prev = document.getElementById("prev");
        // prev.nextElementSibling.classList.add("active");
        // handle active pagination button
        var header = document.getElementById("pagination");
        var btns = header.getElementsByClassName("btnn");
        var current = document.getElementsByClassName("active");
    
        for (var i = 0; i < btns.length; i++) {
            // eslint-disable-next-line no-loop-func
            btns[i].addEventListener("click", function (evt) {
                current[0].className = current[0].className.replace(" active", " ");
                this.className += " active";
                props.sendData(filterPrev(evt.target.textContent));
                prev.nextElementSibling.classList.remove(" active");
            });
        }
        // end

        // handle previous product page
        prev.addEventListener("click", function () {
            if (Number(current[0].previousElementSibling.textContent)) {
                let index = Number(current[0].previousElementSibling.textContent);
                current[0].className = current[0].className.replace(" active", "");
                current[0].previousElementSibling.classList += " active";
                props.sendData(filterPrev(index));
            } else {
                prev.disabled = true;
            }
        });
        // end prev

        // handle next product page
        let next = document.getElementById("next");
        next.addEventListener("click", function () {
            let curr = document.getElementsByClassName("active");
            if (curr[0].nextElementSibling.textContent !== null || undefined) {
                let index = Number(curr[0].nextElementSibling.textContent);
                curr[0].nextElementSibling.classList.add("active");
                prev.nextElementSibling.classList.remove("active");
                props.sendData(filterNext(index));
            } else {
                next.disabled = true;
            }
        });
        // end next



    });

    return (
        <div className="d-flex  justify-content-center mt-3" id="pagination">
            <button id="prev" className="btn btn-outline-dark">&lt;</button>
            <Buttons data={props.data} />
            <button id="next" className="btn btn-outline-dark">&gt;</button>
        </div>
    );
}

export default PageNumbering;