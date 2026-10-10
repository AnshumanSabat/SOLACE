'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/ui/input';
import { ArrowUp, Scale, FileText, ShieldAlert, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useClerk } from '@clerk/nextjs';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const ChatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

type ChatFormValues = z.infer<typeof ChatSchema>;

const promptSuggestions = [
  { text: 'Emergency Protective Orders', icon: <Scale className="text-[#3B2630]" size={16} /> },
  { text: 'Custody Rights During Crisis', icon: <FileText className="text-[#3B2630]" size={16} /> },
  { text: 'Preserving Evidence Privately', icon: <ShieldAlert className="text-[#3B2630]" size={16} /> },
  { text: 'Domestic Abuse Legal Statutes', icon: <HeartHandshake className="text-[#3B2630]" size={16} /> },
];

function Page() {
  const [messages, setMessages] = React.useState<
    {
      text: string;
      isUser: boolean;
    }[]
  >([]);

  const typingText = useTypingText('What legal guidance can we help clarify?');
  const [isThinking, setIsThinking] = React.useState<boolean>(false);

  function useTypingText(text: string, speed: number = 80) {
    const [displayedText, setDisplayedText] = React.useState('');

    React.useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(intervalId);
      }, speed);

      return () => clearInterval(intervalId);
    }, [text, speed]);

    return displayedText;
  }

  const { user } = useClerk();
  const form = useForm<ChatFormValues>({
    resolver: zodResolver(ChatSchema),
    defaultValues: { message: '' },
  });

  const onSubmit = async (data: ChatFormValues) => {
    setMessages((prev) => [...prev, { text: data.message, isUser: true }]);
    form.reset();
    setIsThinking(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ userInput: data.message }),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();
      setMessages((prev) => [...prev, { text: result.reply, isUser: false }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Unable to reach the legal knowledge base right now. Please refer to verified emergency helplines if in immediate need.',
          isUser: false,
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    form.setValue('message', prompt);
    form.handleSubmit(onSubmit)();
  };

  // EMPTY STATE / ONBOARDING SCREEN
  if (messages.length === 0) {
    return (
      <div className="flex-1 relative flex flex-col items-center justify-center p-4 lg:p-12 w-full text-center overflow-hidden">

        {/* Illustration — absolute top-right, ~40% viewport width */}
        <div className="pointer-events-none select-none absolute top-0 right-0 w-[40vw] h-auto">
          <Image
            src="/images/lawbot-editorial.svg"
            alt="Legal empowerment illustration"
            width={800}
            height={900}
            className="w-full h-auto opacity-90"
            priority
          />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal tracking-tight mb-3 relative z-10">
          {typingText}
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#766B68] font-light max-w-xl mx-auto mb-8 relative z-10">
          Confidential, plain-language guidance on domestic violence statutes, protective orders, and custody rights—without legal jargon.
        </p>

        {/* Input Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center max-w-2xl w-full gap-2 relative z-10"
        >
          <div className="rounded-full flex w-full items-center bg-[#FFF9F4] border border-[#E5DCD4] p-1.5 shadow-sm focus-within:border-[#3B2630] transition-colors">
            <Input
              {...form.register('message')}
              className="text-base text-[#3B2630] bg-transparent rounded-full px-5 py-3 border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#766B68]/60"
              placeholder="Ask about restraining orders, custody, or legal rights..."
              autoComplete="off"
            />
            <Button
              className="bg-[#3B2630] hover:bg-[#523744] text-[#FFF9F4] rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer transition-colors"
              disabled={isThinking || !form.formState.isValid}
              type="submit"
              aria-label="Send query"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </form>

        {/* Suggested Queries */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
          {promptSuggestions.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(prompt.text)}
              className="flex items-center gap-2 bg-[#FFF9F4] border border-[#E5DCD4] text-[#3B2630] rounded-full px-4 py-2 text-xs font-sans font-medium hover:border-[#3B2630] hover:bg-[#FAF0EC] transition-all"
            >
              {prompt.icon}
              <span>{prompt.text}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ACTIVE CHAT VIEW
  return (
    <div className="flex flex-col flex-1 w-full p-4 lg:px-12 justify-between">
      <div className="w-full flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            {!message.isUser && (
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/solace-logo.png"
                  alt="Solace Legal Agent"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-[80%] text-sm font-sans leading-relaxed ${
                message.isUser
                  ? 'bg-[#3B2630] text-[#FFF9F4] rounded-tr-none'
                  : 'bg-[#EFF3EB] text-[#3B2630] border border-[#E1E7D9] rounded-tl-none'
              }`}
            >
              {message.isUser ? (
                message.text
              ) : (
                <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-headings:font-serif">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.text}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            {message.isUser && (
              <div className="w-8 h-8 rounded-full bg-[#F3DCD4] border border-[#DEB3A5] flex items-center justify-center flex-shrink-0 text-xs font-semibold text-[#3B2630]">
                {user?.firstName?.[0] || 'U'}
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFF9F4] border border-[#E5DCD4] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#C2CEB5] animate-ping" />
            </div>
            <div className="p-4 rounded-2xl bg-[#EFF3EB] border border-[#E1E7D9] space-y-2">
              <Skeleton className="h-3 w-48 bg-[#E1E7D9]" />
              <Skeleton className="h-3 w-32 bg-[#E1E7D9]" />
            </div>
          </div>
        )}
      </div>

      {/* Input Row */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center w-full gap-2 pt-4 border-t border-[#E5DCD4]"
      >
        <div className="rounded-full flex w-full items-center bg-[#FFF9F4] border border-[#E5DCD4] p-1.5 shadow-sm focus-within:border-[#3B2630] transition-colors">
          <Input
            {...form.register('message')}
            className="text-sm sm:text-base text-[#3B2630] bg-transparent rounded-full px-4 py-2 border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#766B68]/60"
            placeholder="Type your question about rights, protection orders..."
            autoComplete="off"
          />
          <Button
            className="bg-[#3B2630] hover:bg-[#523744] text-[#FFF9F4] rounded-full w-9 h-9 p-0 flex items-center justify-center cursor-pointer transition-colors"
            disabled={isThinking || !form.formState.isValid}
            type="submit"
            aria-label="Send message"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
