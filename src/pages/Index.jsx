import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", content: "Hey everyone! How's it going?" },
    { id: 2, user: "Bob", content: "Hi Alice! All good here, how about you?" },
    { id: 3, user: "Charlie", content: "Hello! Just joined the server. Excited to be here!" },
    { id: 4, user: "Alice", content: "Welcome Charlie! Glad to have you here." },
    { id: 5, user: "Bob", content: "Yeah, welcome! Feel free to ask if you have any questions." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
      setMessages([...messages, { id: newId, user: "You", content: newMessage.trim() }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                {message.user[0]}
              </div>
              <div>
                <p className="font-semibold">{message.user}</p>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default Index;