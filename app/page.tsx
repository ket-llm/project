"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, BarChart3, Copy, ExternalLink } from "lucide-react";

const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";

export default function Home() {
  const { toast } = useToast();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[url('../img/background.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl floating-shape"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl floating-shape"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">LOGO</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Button variant="ghost">Story</Button>
                <Button variant="ghost">Merch</Button>
                <Button variant="ghost">Tokenomics</Button>
                <Button className="glow-effect bg-gradient-to-r from-pink-500 to-purple-500">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex items-center justify-center p-2"
              >
                <span className="sr-only">Open main menu</span>
                {!isNavOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Button variant="ghost" className="w-full text-left">Story</Button>
              <Button variant="ghost" className="w-full text-left">Merch</Button>
              <Button variant="ghost" className="w-full text-left">Tokenomics</Button>
              <Button className="w-full glow-effect bg-gradient-to-r from-pink-500 to-purple-500">
                Buy Now
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Welcome to the Future
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Experience the next generation of decentralized innovation
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-8"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon">
                <BarChart3 className="h-6 w-6" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Contract Address - Moved to bottom */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4">
        <div className="bg-black/30 p-4 rounded-lg backdrop-blur-lg inline-flex items-center gap-4">
          <span className="text-sm md:text-base font-mono">{CONTRACT_ADDRESS}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="hover:bg-white/10"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}