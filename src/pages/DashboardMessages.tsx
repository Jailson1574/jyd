import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, Lock, Crown, MoreVertical, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  contactName: string;
  contactInitials: string;
  domain: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isPremiumContact: boolean;
  isLocked: boolean;
  status: "active" | "pending" | "closed";
}

interface Message {
  id: string;
  sender: "user" | "contact";
  content: string;
  time: string;
  isRead: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    contactName: "Carlos Mendes",
    contactInitials: "CM",
    domain: "tecnologia.com.br",
    lastMessage: "Olá! Tenho interesse no domínio. Qual o melhor preço?",
    lastMessageTime: "10:30",
    unreadCount: 2,
    isPremiumContact: true,
    isLocked: false,
    status: "active",
  },
  {
    id: "2",
    contactName: "Ana Paula",
    contactInitials: "AP",
    domain: "financas.com.br",
    lastMessage: "Podemos negociar o valor? Tenho uma contraproposta.",
    lastMessageTime: "Ontem",
    unreadCount: 0,
    isPremiumContact: false,
    isLocked: false,
    status: "active",
  },
  {
    id: "3",
    contactName: "Roberto Silva",
    contactInitials: "RS",
    domain: "saude.net.br",
    lastMessage: "Interessado no domínio. Aceita parcelamento?",
    lastMessageTime: "Há 2 dias",
    unreadCount: 1,
    isPremiumContact: false,
    isLocked: true,
    status: "pending",
  },
  {
    id: "4",
    contactName: "Mariana Costa",
    contactInitials: "MC",
    domain: "ecommerce.com.br",
    lastMessage: "Negócio fechado! Aguardando transferência.",
    lastMessageTime: "Há 3 dias",
    unreadCount: 0,
    isPremiumContact: true,
    isLocked: false,
    status: "closed",
  },
];

const mockMessages: Message[] = [
  { id: "1", sender: "contact", content: "Olá! Vi o domínio tecnologia.com.br e tenho muito interesse.", time: "10:00", isRead: true },
  { id: "2", sender: "user", content: "Olá Carlos! Obrigado pelo interesse. O domínio está disponível.", time: "10:05", isRead: true },
  { id: "3", sender: "contact", content: "Qual o valor mínimo que você aceita? Vi que está anunciado por R$ 45.000", time: "10:15", isRead: true },
  { id: "4", sender: "user", content: "Para fechamento rápido, posso fazer por R$ 42.000. Você tem interesse?", time: "10:20", isRead: true },
  { id: "5", sender: "contact", content: "Olá! Tenho interesse no domínio. Qual o melhor preço?", time: "10:30", isRead: false },
];

const DashboardMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(mockConversations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const filteredConversations = mockConversations.filter(
    conv => conv.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
           conv.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // Handle send message logic
    setNewMessage("");
  };

  return (
    <DashboardLayout title="Mensagens" subtitle="Negocie com compradores e vendedores">
      <div className="glass-card h-[calc(100vh-12rem)] flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r border-border/50 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-border/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar conversa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-muted/50 border-border/50"
              />
            </div>
          </div>

          {/* Conversations */}
          <ScrollArea className="flex-1">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => !conv.isLocked && setSelectedConversation(conv)}
                className={cn(
                  "p-4 border-b border-border/50 cursor-pointer transition-colors",
                  selectedConversation?.id === conv.id ? "bg-primary/5 border-l-2 border-l-primary" : "hover:bg-muted/30",
                  conv.isLocked && "opacity-60 cursor-not-allowed"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-secondary-purple to-secondary-pink text-foreground text-sm">
                        {conv.contactInitials}
                      </AvatarFallback>
                    </Avatar>
                    {conv.isPremiumContact && (
                      <Crown className="absolute -top-1 -right-1 w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground text-sm truncate">
                        {conv.contactName}
                      </span>
                      <span className="text-xs text-muted-foreground">{conv.lastMessageTime}</span>
                    </div>
                    <p className="text-xs text-primary mb-1">{conv.domain}</p>
                    <div className="flex items-center gap-2">
                      {conv.isLocked ? (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Lock className="w-3 h-3" />
                          <span>Assine para desbloquear</span>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      )}
                      {conv.unreadCount > 0 && !conv.isLocked && (
                        <Badge variant="default" className="h-5 w-5 p-0 flex items-center justify-center shrink-0">
                          {conv.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-secondary-purple to-secondary-pink text-foreground">
                    {selectedConversation.contactInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{selectedConversation.contactName}</span>
                    {selectedConversation.isPremiumContact && (
                      <Badge variant="default" className="h-5">
                        <Crown className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-primary">{selectedConversation.domain}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedConversation.isPremiumContact && (
                  <>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                      <Phone className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </>
                )}
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[70%] rounded-2xl px-4 py-3",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={cn(
                        "text-xs mt-1",
                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      )}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-3">
                <Textarea
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[44px] max-h-32 bg-muted/50 border-border/50 resize-none"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} className="shrink-0">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Selecione uma conversa para começar</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardMessages;
