import { useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Table, Pagination, Space, Row } from "antd";
import Error from "components/Error";

const columns = [
  {
    title: "ID",
    dataIndex: "url",
    key: "id",
    render: (url: string) => <>{url.replace(/\D/g, "")} </>,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Link",
    dataIndex: "url",
    key: "link",
    render: (url: string) => (
      <Link to={`/person/${url.replace(/\D/g, "")}`}>show</Link>
    ),
  },
];

export default function PeopleList() {
  const dispatch = useAppDispatch();
  const pageId = Number(useParams().pageId) || 1;
  const navigate = useNavigate();
  console.log(`debug pageId: `, pageId);
  const { loading, error } = useAppSelector(
    (state) => state.loading.models.people
  );

  const { list, count } = useAppSelector((state) => state.people);

  useEffect(() => {
    if (pageId) dispatch.people.getPeople(pageId);
  }, [dispatch, pageId]);

  if (error) return <Error />;

  return (
    <Row justify={"center"}>
      <Space direction="vertical" size="large">
        <Table
          rowKey={(record) => record.url.replace(/\D/g, "")}
          columns={columns}
          dataSource={error ? [] : list}
          pagination={false}
          loading={loading}
        />
        <Pagination
          current={Number(pageId) || 0}
          onChange={(page) => navigate(`/people/${page}`)}
          total={count}
          showSizeChanger={false}
        />
      </Space>
    </Row>
  );
}

Number(undefined);
