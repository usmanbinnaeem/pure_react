import { useEffect } from "react";
function HandleClick() {
  useEffect(() => {
    const runonClick = (e) => {
      console.log("clicked", e.clientX, e.clientY);
    };

    document.addEventListener("click", runonClick);

    return () => document.removeEventListener("click", runonClick);
  }, []);

  return <div>click anywhere</div>;
}

export default HandleClick;
