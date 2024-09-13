import React from 'react';
import { MessageCircleMore, ArchiveIcon, UserIcon, LogOut } from 'lucide-react';
import { Button } from "@/app/(components)/ui/Button";

const Sidebar = () => {
  return (
    <div className="bg-light-gray-100 h-[calc(100vh-2rem)] w-16 flex flex-col items-center rounded-r-lg p-4">
      <div className="flex flex-col items-center flex-grow justify-center space-y-8">
        <Button variant="ghost" size="icon" className="bg-white rounded-full text-customBlue" aria-label="Messages">
          <MessageCircleMore className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="bg-white rounded-full text-customBlue" aria-label="Archive">
          <ArchiveIcon className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="bg-white rounded-full text-customBlue" aria-label="User Profile">
          <UserIcon className="h-6 w-6" />
        </Button>
      </div>
      <Button variant="ghost" size="icon" className="mt-auto mb-4 bg-white rounded-full text-customBlue hover:bg-gray-200" aria-label="Logout">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Sidebar;
