import { Container } from "react-bootstrap"

function name(params) {

    return (
< Container>
               <Card style={{ width: '18rem', marginTop: '5px' }} >
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                     <Card.Title>HTML Developer</Card.Title>
                     <Card.Text>
                        You will learn HTML, CSS  and JS. With these skills you'll be able to design web pages
                     </Card.Text>
                     <Button variant="primary">Start now</Button>
                  </Card.Body>
               </Card>
            </Container>
            <ContentTable />
            <LoginForm />
</Container >
);
}