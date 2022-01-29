import { Link } from "react-router-dom";
import { Table, Pagination, Space, Row } from "antd";

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

type IProps = {
  list: any[];
  total: number;
  pageId: number;
  loading: boolean;
  handleNavigate: (x: number) => void;
};
export default function PeopleList({
  list = [],
  loading,
  pageId,
  total,
  handleNavigate,
}: IProps) {
  return (
    <Row justify={"center"}>
      <Space direction="vertical" size="large">
        <Table
          rowKey={(record) => record.url.replace(/\D/g, "")}
          columns={columns}
          dataSource={list}
          pagination={false}
          loading={loading}
        />
        <Pagination
          current={Number(pageId) || 0}
          onChange={handleNavigate}
          total={total}
          showSizeChanger={false}
        />
      </Space>
    </Row>
  );
}
