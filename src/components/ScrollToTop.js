import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const [scrollToTopVisibility, setScrollToTopVisibility] = useState(false);

  const { pathname } = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 40) {
      setScrollToTopVisibility(true);
    } else {
      setScrollToTopVisibility(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container
      className={scrollToTopVisibility ? "scrollto-top visible" : "scrollto-top hidden"}
      onClick={() => { window.scrollTo(0, 0) }}
    >
      <Button >
        <MdOutlineArrowUpward />
      </Button>
    </Container>
  );
}

export default ScrollToTop;
