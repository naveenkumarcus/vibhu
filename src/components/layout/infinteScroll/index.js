import { useCallback, useEffect, useRef } from "react";

const InfiniteScroll = ({ callback, children }) => {
  const interSectionRef = useRef(null);

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            callback({ type: "ADVANCE_PAGE" });
          }
        }, {threshold: 1});
      }).observe(node);
    },
    [callback]
  );

  useEffect(() => {
    if (interSectionRef.current) scrollObserver(interSectionRef.current);
  }, [scrollObserver, interSectionRef]);

  return (
    <>
      {children}
      <div
        style={{ height: "10px" }}
        id="page-bottom-boundary"
        ref={interSectionRef}
      ></div>
    </>
  );
};

export default InfiniteScroll;
