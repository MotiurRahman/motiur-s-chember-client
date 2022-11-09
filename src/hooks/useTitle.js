import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Motiur's-Chember`;
  }, [title]);
};

export default useTitle;
