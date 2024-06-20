import { Link,useRouteError,isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";
function Error() {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
}

export default Error;
