import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginForm() {

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="courseName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter course name" />
          <Form.Text className="text-muted"> let it be short name </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="courseDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter date" />
          <Form.Text className="text-muted"> it should be local time </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="courseInstructor">
          <Form.Label>Instructor name</Form.Label>
          <Form.Control type="text" placeholder="Enter instructor name" />
          <Form.Text className="text-muted">short name </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="courseContent">
          <Form.Label>Table of Content</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="courseModule">
          <Form.Label>Module name</Form.Label>
          <Form.Control type="text" placeholder="Enter module name" />
          <Form.Text className="text-muted">short name </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="courseSection">
          <Form.Label>Section name</Form.Label>
          <Form.Control type="text" placeholder="Enter section name" />
          <Form.Text className="text-muted">short name </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="courseSection">
          <Form.Label>Point-1</Form.Label>
          <Form.Control type="text" placeholder="Enter section name" />
          <Form.Text className="text-muted">short name </Form.Text>
        </Form.Group>


        <Form.Select aria-label="Content format">
          <option>Select point-1 format</option>
          <option value="1">Video</option>
          <option value="2">Audio</option>
          <option value="3">Written</option>
          <option value="3">Image</option>
        </Form.Select>


        <Form.Group controlId="formFileSm1" className="mb-3">
          <Form.Label>Section picture</Form.Label>
          <Form.Control type="file" size="sm" accept="image/*, video/*" multiple />
        </Form.Group>

        <Form.Group controlId="formFileSm2" className="mb-3">
          <Form.Label>Section video</Form.Label>
          <Form.Control type="file" size="sm" accept="image/*, video/*" multiple />
        </Form.Group>

        <Form.Group className="mb-3" controlId="courseContent">
          <Form.Label>Section text</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="courseContent">
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moduleQuestion">
          <Form.Label>Question</Form.Label>
          <Form.Control type="text" placeholder="question" />
          <Form.Check
            type='radio'
            id='answerA'
            label='A'
          />

          <Form.Check
            type='radio'
            id='answerA'
            label='B'
          />

          <Form.Check
            type='radio'
            id='answerA'
            label='C'
          />

          <Form.Check
            type='radio'
            id='answerA'
            label='D'
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="courseContent">
          <Form.Label>Assignment</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Assignment question" />
        </Form.Group>



        <Form.Group className="mb-3" controlId="courseContent">
          <Form.Label>Exam</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Examination question" />
        </Form.Group>

        <hr/><br/><br/><br/>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

     
        {['checkbox', 'radio'].map((type) => (

          <div key={`default-${type}`} className="mb-3">


            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`A ${type}`}
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`B ${type}`}
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`C ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>

        ))}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Select type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Group controlId="formFileSm1" className="mb-3">
          <Form.Label>Course picture</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group controlId="formFileSm2" className="mb-3">
          <Form.Label>Course video</Form.Label>
          <Form.Control type="file" size="sm" accept="image/*, video/*" multiple />
        </Form.Group>

        <Button variant="primary" type="submit">Submit </Button>
      </Form>
    </div>

  );
}

export default LoginForm;
