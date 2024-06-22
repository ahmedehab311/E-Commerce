import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriosSlice";
import { useEffect } from "react";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.Categories
  );
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const categoriesList =
    records.length > 0
      ? records.map((record) => 

          <Col
            xs={6}
            md={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category />
          </Col>
       )
      : "there are no categories";
  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
}

export default Categories;
