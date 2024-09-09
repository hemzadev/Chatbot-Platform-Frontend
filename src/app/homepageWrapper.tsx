import React from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';

const HomepageWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default HomepageWrapper;
