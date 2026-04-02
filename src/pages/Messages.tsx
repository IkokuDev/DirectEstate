import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical, Search } from 'lucide-react';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

const CONTACTS = [
  { id: 1, name: 'Sarah Jenkins', property: 'Modern Luxury Villa', lastMessage: 'Is the property still available?', time: '10:42 AM', unread: 2, online: true },
  { id: 2, name: 'Michael Okoye', property: 'Spacious 2BR Apartment', lastMessage: 'I would like to schedule an inspection.', time: 'Yesterday', unread: 0, online: false },
  { id: 3, name: 'David Smith', property: 'Commercial Office Space', lastMessage: 'Thanks for the details.', time: 'Mon', unread: 0, online: true },
];

const MESSAGES = [
  { id: 1, senderId: 1, text: 'Hello! I saw your listing for the Modern Luxury Villa.', time: '10:30 AM' },
  { id: 2, senderId: 'me', text: 'Hi Sarah! Yes, it is still available. Would you like to schedule a viewing?', time: '10:35 AM' },
  { id: 3, senderId: 1, text: 'That would be great. Are you free this Saturday?', time: '10:40 AM' },
  { id: 4, senderId: 1, text: 'Is the property still available?', time: '10:42 AM' },
];

export default function Messages() {
  const [activeContact, setActiveContact] = useState(CONTACTS[0]);
  const [messageInput, setMessageInput] = useState('');

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-gray-200 overflow-hidden flex shadow-sm">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-gray-200 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search messages..." className="pl-9 bg-gray-100 border-transparent focus-visible:ring-1" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONTACTS.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={cn(
                "p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors flex gap-3",
                activeContact.id === contact.id ? "bg-blue-50 hover:bg-blue-50 border-l-4 border-l-blue-600" : "border-l-4 border-l-transparent"
              )}
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${contact.id}`} alt={contact.name} referrerPolicy="no-referrer" />
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="font-semibold text-gray-900 truncate">{contact.name}</h4>
                  <span className="text-xs text-gray-500 shrink-0">{contact.time}</span>
                </div>
                <p className="text-xs text-blue-600 font-medium truncate mb-1">{contact.property}</p>
                <div className="flex justify-between items-center">
                  <p className={cn("text-sm truncate", contact.unread > 0 ? "text-gray-900 font-medium" : "text-gray-500")}>
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-white">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${activeContact.id}`} alt={activeContact.name} referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{activeContact.name}</h3>
              <p className="text-xs text-gray-500">{activeContact.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
          <div className="flex justify-center">
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
          </div>
          {MESSAGES.map((msg) => {
            const isMe = msg.senderId === 'me';
            return (
              <div key={msg.id} className={cn("flex", isMe ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-2.5",
                  isMe ? "bg-blue-600 text-white rounded-br-sm" : "bg-gray-100 text-gray-900 rounded-bl-sm"
                )}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={cn("text-[10px] mt-1 text-right", isMe ? "text-blue-100" : "text-gray-400")}>
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Type your message..." 
              className="flex-1 bg-gray-100 border-transparent focus-visible:ring-1 rounded-full px-4"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button className="rounded-full w-10 h-10 p-0 shrink-0 bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
