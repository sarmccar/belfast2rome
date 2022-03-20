import React, { Suspense, lazy } from 'react'

const Loadable = (funcComponent) => {
    const LazyComponent = lazy(funcComponent);
    console.log(funcComponent);

    return (
     <Suspense fallback={null}>
         <LazyComponent />
    </Suspense>
    )
}

export default Loadable
