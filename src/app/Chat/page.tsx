'use client';

import React, { useState } from 'react';
import Sidebar from '../(components)/Sidebar';
import { Button } from "../(components)/ui/Button";
import { Input } from "../(components)/ui/Input";
import { ScrollArea } from "../(components)/ui/ScrollArea";
import { PanelRightOpen, PanelRightClose, MessageCirclePlus, Search, Settings, Archive, Trash2, Send, Pin, Edit, MoreVertical, ArrowRight } from 'lucide-react';

const Chat = () => {
  const [isChatSidebarOpen, setIsChatSidebarOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isPinnedMessagesOpen, setIsPinnedMessagesOpen] = useState(false);

  const toggleChatSidebar = () => {
    setIsChatSidebarOpen(!isChatSidebarOpen);
  };

  const togglePinnedMessages = () => {
    setIsPinnedMessagesOpen(!isPinnedMessagesOpen);
  };

  const chatSections = [
    { title: 'Today', chats: [{ id: 1, name: 'Chat 1' }, { id: 2, name: 'Chat 2' }] },
    { title: 'Yesterday', chats: [{ id: 3, name: 'Chat 3' }] },
    { title: 'This Week', chats: [{ id: 4, name: 'Chat 4' }, { id: 5, name: 'Chat 5' }] },
    { title: 'Other', chats: [{ id: 6, name: 'Chat 6' }] },
  ];

  const messages = [
    { id: 1, sender: 'user', content: 'Hello, how are you?', timestamp: '10:00 AM', isPinned: false },
    { id: 2, sender: 'bot', content: 'I\'m doing well, thank you! How can I assist you today?', timestamp: '10:01 AM', isPinned: true },
    { id: 3, sender: 'user', content: 'I have a question about my account.', timestamp: '10:02 AM', isPinned: false },
  ];

  const pinnedMessages = messages.filter(message => message.isPinned);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className={`bg-white border-r transition-all duration-300 ease-in-out ${
        isChatSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center border-b">
            <Button variant="outline" size="icon" onClick={toggleChatSidebar} aria-label="Close Sidebar">
              <PanelRightClose className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" aria-label="New Chat">
              <MessageCirclePlus className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search chats" className="pl-8" />
            </div>
          </div>

          <ScrollArea className="flex-1 px-4">
            {chatSections.map((section) => (
              <div key={section.title} className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">{section.title}</h3>
                {section.chats.map((chat) => (
                  <div key={chat.id} className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{chat.name}</h4>
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-6 w-6" aria-label="Chat options">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                          <div className="py-1">
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <ArrowRight className="h-4 w-4 mr-2" /> Open
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <Archive className="h-4 w-4 mr-2" /> Archive
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                              <Trash2 className="h-4 w-4 mr-2" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 truncate">Last message in chat</p>
                  </div>
                ))}
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between h-14 px-4 border-b bg-white">
          <div className="flex items-center">
            {!isChatSidebarOpen && (
              <Button variant="outline" size="icon" onClick={toggleChatSidebar} className="mr-4" aria-label="Open Sidebar">
                <PanelRightOpen className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl font-semibold">Chat Page</h1>
          </div>
          <Button variant="outline" onClick={togglePinnedMessages} className="flex items-center">
            <Pin className="h-4 w-4 mr-2" />
            Pinned Messages ({pinnedMessages.length})
          </Button>
        </header>
        {isPinnedMessagesOpen && (
          <div className="bg-gray-50 p-4 border-b">
            <h2 className="font-semibold mb-2">Pinned Messages</h2>
            <ScrollArea className="h-40">
              {pinnedMessages.map((message) => (
                <div key={message.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
                  <p className="text-sm truncate">{message.content}</p>
                  <Button variant="ghost" size="sm" className="ml-2">Go to message</Button>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-300'}`} />
                  <div className={`rounded-lg p-3 ${message.sender === 'user' ? 'bg-blue-100' : 'bg-white'}`}>
                    <p className="text-sm">{message.content}</p>
                    <div className="mt-1 text-xs text-gray-500 flex justify-between items-center">
                      <span>{message.timestamp}</span>
                      <div className="relative">
                        <Button variant="ghost" size="icon" className="h-6 w-6" aria-label="Message options">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                          <div className="py-1">
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <Pin className="h-4 w-4 mr-2" /> Pin
                            </button>
                            {message.sender === 'user' && (
                              <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                <Edit className="h-4 w-4 mr-2" /> Edit
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="p-4 bg-white border-t">
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <textarea
                placeholder="Type your message here..."
                className="w-full p-2 border rounded-lg resize-none"
                rows={3}
              />
              <Button variant="primary" size="icon" className="absolute right-0 top-0 h-8 w-8">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
