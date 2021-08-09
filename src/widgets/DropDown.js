import  {Nav, Dropdown, Container} from 'react-bootstrap';


export function DropDown(props) {
   const { show, handleShow, save, data } = props;
   return (
      <Dropdown autoClose={false}>
         <Nav.Link onClick={handleShow} ><span className="fa fa-shopping-cart"></span></Nav.Link>
         <Dropdown.Menu show={show}>
            <DropdownItems params={[...data]} save={save} />
         </Dropdown.Menu>
      </Dropdown>
   );
}

 function DropdownItems(props) {
   return props.params.map((item, index) => {
      return (
         <Dropdown.Item key={index}>
            <Container>
               <div className="d-flex justify-content-between"><span className="text-break w-50">{item.name}<span><br/>{item.price}</span></span><img className="img-fluid w-25 h-25" src={item.image.src?item.image.src:''} alt={item.image.alt} /></div> 
            </Container>
         </Dropdown.Item>
      );
   })
}

export default DropdownItems;