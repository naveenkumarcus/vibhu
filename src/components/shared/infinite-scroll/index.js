import { CheckCircleOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";

const InfinitePageScroll = ({ next, hasMore, children, items=[] }) => {
  return (
    <InfiniteScroll
      dataLength={items.length + 20}
      next={next}
      hasMore={hasMore}
      loader={() => ""}
      endMessage={
        <p style={{ textAlign: "center", marginTop: 10 }}>
          <CheckCircleOutlined />
          {"  "}
          <b>End of Page</b>
        </p>
      }
    >
      {children || null}
    </InfiniteScroll>
  );
};

export default InfinitePageScroll;
