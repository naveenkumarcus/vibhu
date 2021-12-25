import { BookOutlined } from "@ant-design/icons";
import { Skeleton, Card, Tag } from "antd";
const { Meta } = Card;

const Description = ({ data }) => (
  <>
    <Tag color="cyan">{data.category}</Tag>
    <div>{data.about}</div>
  </>
);

const VACard = ({ actions, onClick, loading, data }) => {
  return (
    <Card onClick={onClick} hoverable={true} style={{ minWidth: 300, borderRadius: 10 }} actions={actions}>
      <Skeleton loading={loading} avatar active>
        <Meta avatar={<BookOutlined />} title={data.title} description={<Description data={data} />} />
      </Skeleton>
    </Card>
  );
};

export default VACard;
