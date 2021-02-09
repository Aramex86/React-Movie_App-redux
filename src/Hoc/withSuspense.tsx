import React from "react";

const withSuspense = (Wrapped: any) => {
  return function (props: any) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Wrapped {...props} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
