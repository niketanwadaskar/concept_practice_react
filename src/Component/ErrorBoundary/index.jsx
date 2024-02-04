import React from 'react'
import ErrorBoundary from './ErrorBoundaryClass'
import ComponentWithError from './ComponentWithError'

export default function Index() {
    return (
      
            <ErrorBoundary>
                <ComponentWithError />
            </ErrorBoundary>
    
    )
}
