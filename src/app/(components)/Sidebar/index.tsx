import React from 'react';
import { MessageCircle, Archive } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="bg-customBlue w-16 h-[calc(100vh-10px)] rounded-[15px] flex flex-col items-center justify-center space-y-8 fixed left-4 top-1/2 transform -translate-y-1/2">
            {/* Chat Icon */}
            <MessageCircle className="text-white w-8 h-8" />
            {/* Archive Icon */}
            <Archive className="text-white w-8 h-8" />
        </div>
    );
};

export default Sidebar;
