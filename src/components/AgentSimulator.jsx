import React, { useState, useRef, useEffect } from 'react';
import { AGENT_SIMULATOR_FAQ } from '../data/technoweraData';
import { Bot, Send, Sparkles, User, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

export default function AgentSimulator() {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: 'Hello! I am Technowera\'s Autonomous Enterprise Agent. Ask me about our Cloud FinOps, Agentic AI, Fabric Lakehouse blueprints, or 65+ Solution Accelerators.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    { label: "Cloud FinOps Savings", key: "cloud" },
    { label: "Agentic AI Orchestration", key: "ai" },
    { label: "Fabric Data Foundations", key: "data" },
    { label: "Solution Accelerators", key: "accelerators" },
    { label: "Engagement Models", key: "cost" }
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');

    setIsTyping(true);

    // Simulate Agent Thinking
    setTimeout(() => {
      let reply = "Technowera specializes in production-ready AI, multi-cloud FinOps, and data modernization. Contact our architects for a custom blueprint tailored to your enterprise stack.";
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes('cloud') || lowerQuery.includes('finops')) {
        reply = AGENT_SIMULATOR_FAQ.cloud;
      } else if (lowerQuery.includes('ai') || lowerQuery.includes('agent')) {
        reply = AGENT_SIMULATOR_FAQ.ai;
      } else if (lowerQuery.includes('data') || lowerQuery.includes('fabric')) {
        reply = AGENT_SIMULATOR_FAQ.data;
      } else if (lowerQuery.includes('accelerator') || lowerQuery.includes('blueprint')) {
        reply = AGENT_SIMULATOR_FAQ.accelerators;
      } else if (lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('model')) {
        reply = AGENT_SIMULATOR_FAQ.cost;
      }

      setMessages(prev => [...prev, { sender: 'agent', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="agent-simulator" className="py-24 relative overflow-hidden">
      <div className="max-w-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Bot className="w-3.5 h-3.5" /> Interactive Sandbox
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test Technowera's <br />
              <span className="gradient-text">Autonomous Agent</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Experience the power of our enterprise Copilots firsthand. Query our simulated AI agent to explore architectural strategies, FinOps cost optimizations, and deployment SLAs.
            </p>

            <div className="space-y-3 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Zero Data Retention & Enterprise Guardrails Active</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Sub-Second Response Latency via Azure OpenAI</span>
              </div>
            </div>
          </div>

          {/* Interactive Chat Box Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
              
              {/* Chat Header */}
              <div className="p-4 bg-[#090d16]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      Technowera Enterprise Agent <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-gray-400">Model: Azure GPT-4o-Turbo | LangGraph Agentic Engine</div>
                  </div>
                </div>

                <button 
                  onClick={() => setMessages([{ sender: 'agent', text: 'Chat reset. How can Technowera help your enterprise today?' }])}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat Message Window */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                {messages.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'agent' && (
                      <div className="w-6 h-6 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-cyan-600 text-white rounded-tr-none shadow-md'
                        : 'bg-white/10 text-gray-200 border border-white/10 rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>

                    {m.sender === 'user' && (
                      <div className="w-6 h-6 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-cyan-400 text-xs italic pl-2">
                    <Bot className="w-3.5 h-3.5 animate-spin" /> Technowera Agent is reasoning...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Questions Pills */}
              <div className="p-2.5 bg-white/5 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[10px] text-gray-400 uppercase font-bold shrink-0 pl-1">Ask:</span>
                {quickQuestions.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleSend(AGENT_SIMULATOR_FAQ[q.key])}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 text-[10px] font-semibold text-cyan-300 whitespace-nowrap transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Input Box */}
              <div className="p-3 bg-[#090d16] border-t border-white/10 flex items-center gap-2">
                <input 
                  type="text"
                  placeholder="Ask a technical or architectural question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-cyan-500 transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-md shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
