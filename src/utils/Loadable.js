import React, { Suspense, lazy } from 'react'

const Loadable = (funcComponent) => {
    const LazyComponent = lazy(funcComponent);

    return (
     <Suspense fallback={null}>
         <LazyComponent />
    </Suspense>
    )
}

export default Loadable
