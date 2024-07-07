import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  { id: 1, user: "Alice", content: "Hey everyone! How's it going?" },
  { id: 2, user: "Bob", content: "Hi Alice! All good here, how about you?" },
  { id: 3, user: "Charlie", content: "Hello! Just joined the server. Excited to be here!" },
  { id: 4, user: "Alice", content: "Welcome Charlie! Glad to have you here." },
  { id: 5, user: "Bob", content: "Yeah, welcome! Feel free to ask if you have any questions." },
  // Add more messages as needed
];

const Index = () => {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)] p-4">
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
  );
};

export default Index;