import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span>Loading....</span>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
