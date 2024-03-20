import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ComponentOne from './ComponentOne';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComponentTwo from './ComponentTwo';

const queryClient = new QueryClient();
export default function index() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <ComponentOne />
                <ComponentTwo />
                {/* <ReactQueryDevtools/> */}
            </div>
        </QueryClientProvider>
    )
}
