import {useQuery} from "react-query";
import api from "api";
import {useParams} from "react-router-dom";
import {Spin, Row, Col, Descriptions} from "antd";
import {useEffect} from "react";
import Error from "components/Error";

// Обратите внимание, здесь useQuery используется для кэширования данных
// Повторный заход на страницу персонажа не вызывает доп запроса

export default function SinglePerson() {
  const id = useParams().personId || 0;

  const { isLoading, isIdle, isError, data, refetch } = useQuery(
    ["person", id],
    () => api.getPeopleById(+id),
    { enabled: false }
  );

  useEffect(() => {
    if (isIdle) refetch();
  }, [isIdle, refetch]);

  if (isLoading)
    return (
      <Row justify={"center"}>
        <Spin />
      </Row>
    );

  if (isError) return <Error />;

  if (data)
    return (
      <Row justify={"center"}>
        <Col span={6}>
          <Descriptions column={1} title="Person Info">
            <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
            <Descriptions.Item label="Birth Year">
              {data.birth_year}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">{data.gender}</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    );
  return null;
}
