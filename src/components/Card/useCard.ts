import { useState } from "react";

export const useCard = () => {
  const [showMore, setShowMore] = useState(false);

  return { setShowMore, showMore };
};
