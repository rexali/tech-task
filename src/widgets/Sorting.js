import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sorting.css';


function Sorting(props) {

    const getSortValue = ()=>{
        let value = document.getElementById("sortProductValue").value;
        sortProducts(value);

    }


    const ascendingPrice = (params) => {
         
       let fromLowest = params.sort((a, b) => {
            return a.price - b.price
        });

        props.sendData(fromLowest);
        }

    const descendingPrice = (params) => {
        let fromHighest =params.sort((a, b) => {
            return b.price - a.price;
        });
        props.sendData(fromHighest);
    }

    const ascendingName = (params) => {
         
        let ascendingName_A_Z = params.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            return 0;
        });

        props.sendData(ascendingName_A_Z);
    }

    const descendingName = (params) => {
        let descendingName_Z_A = params.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            return 0;
        });
        descendingName_Z_A = descendingName_Z_A.reverse();
        props.sendData(descendingName_Z_A)

    }

    const sortProducts = (key) => {
        switch (key) {
            case 0:

                break;

            case 1:
                ascendingPrice(props.data)
                break;

            case 2:
                descendingPrice(props.data)
                break;

            case 3:
                ascendingName(props.data)
                break;

            case 4:
                descendingName(props.data)
                break;

            default:
                break;
        }
    }

    return (
        <div className="filterMe">
            <select className="m-2" id="sortProduct" onClick={getSortValue}>
                <option value="0">SORT</option>
                <option value="1">ASC</option>
                <option value="2">DESC</option>
                <option value="3">A-Z</option>
                <option value="4">Z-A</option>
            </select>
        </div>
    );
}

export default Sorting;