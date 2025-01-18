"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  MessageCircle,
  BarChart3,
  Copy,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <main className="min-h-screen relative overflow-hidden bg-[#2d375b] bg-no-repeat bg-top-half">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#FBD661] blur-3xl floating-shape"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#FBD661] blur-3xl floating-shape"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FBD661]/10 backdrop-blur-lg border-b border-[#FBD661]/20">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side: Logo and Contract */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img 
                  src="/img/logo.png"
                  alt="Trumpedo Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden sm:flex items-center bg-[#2d375b]/80 px-4 py-2 rounded-full backdrop-blur-lg">
                <span className="text-sm font-mono text-[#FBD661]">
                  {CONTRACT_ADDRESS}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyToClipboard}
                  className="ml-2 hover:bg-[#FBD661]/10 rounded-full text-[#FBD661]"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side: Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10 font-originals"
                onClick={() => {
                  document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                STORIES
              </Button>
              <Button 
                variant="ghost" 
                className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10 font-originals"
                onClick={() => {
                  document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                MERCH
              </Button>
              <Button className="bg-[#FBD661] hover:bg-[#FBD661]/80 text-[#2d375b] font-originals font-semibold transition-colors">
                Buy Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex items-center justify-center p-2 text-[#FBD661]"
              >
                <span className="sr-only">Open main menu</span>
                {!isNavOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
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
            className="md:hidden bg-[#FBD661]/5"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Button 
                variant="ghost" 
                className="w-full text-left font-originals leading-relaxed-important py-2 text-[#FBD661]"
                onClick={() => {
                  document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                  setIsNavOpen(false);
                }}
              >
                STORIES
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-left font-originals leading-relaxed-important py-2 text-[#FBD661]"
                onClick={() => {
                  document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' });
                  setIsNavOpen(false);
                }}
              >
                MERCH
              </Button>
              <Button variant="ghost" className="w-full text-left font-originals leading-relaxed-important py-2 text-[#FBD661]">
                Tokenomics
              </Button>
              <Button className="w-full glow-effect bg-[#FBD661] text-[#2d375b] font-originals">
                Buy Now
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-originals text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#FBD661] to-[#FBD661]/80 text-transparent bg-clip-text backdrop-blur-sm leading-relaxed-important py-2">
            TRUMPEDO
          </h1>
          {/* <p className="text-xl md:text-2xl mb-12 text-[#FBD661]/80 font-light leading-loose-important">
            Rally with us and President Trump
          </p> */}
        </motion.div>
      </section>

      {/* Image container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-36rem)] px-4 mt-12 mb-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <img 
            src="/img/logo.png" 
            alt="Trumpedo" 
            className="w-full h-auto max-w-xl mx-auto"
          />
        </motion.div>
      </div>

      {/* Story section */}
      <section id="stories" className="px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-originals text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-[#FBD661] to-[#FBD661]/80 text-transparent bg-clip-text">
            STORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-[#FBD661]/5 border-[#FBD661]/10 backdrop-blur-lg flex flex-col h-[32rem]">
                <CardHeader>
                  <CardTitle className="font-['Gotham_Bold'] text-2xl text-[#FBD661]">LEADING THE CHARGE</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-[#FBD661]/80 text-lg font-['Matter_Medium']">Navigate the bull market with the energy and drive fo unstoppable leadership.</p>
                </CardContent>
                <div className="h-72 mt-auto">
                  <img 
                    src="/img/card-content-1.png" 
                    alt="Story 1" 
                    className="w-full h-full object-contain rounded-b-lg"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-[#FBD661]/5 border-[#FBD661]/10 backdrop-blur-lg flex flex-col h-[32rem]">
                <CardHeader>
                  <CardTitle className="font-['Gotham_Bold'] text-2xl text-[#FBD661]">PRIVACY & ANONYMITY</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-[#FBD661]/80 text-lg font-['Matter_Medium']">In a world where our digital lives are under constant threat, TRUMPEDO offers a safe haven for your privacy and anonymity.</p>
                </CardContent>
                <div className="h-72 mt-auto">
                  <img 
                    src="/img/card-content-2.png" 
                    alt="Story 2" 
                    className="w-full h-full object-contain rounded-b-lg"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-[#FBD661]/5 border-[#FBD661]/10 backdrop-blur-lg flex flex-col h-[32rem]">
                <CardHeader>
                  <CardTitle className="font-['Gotham_Bold'] text-2xl text-[#FBD661]">THE CHOSEN ONE</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-[#FBD661]/80 text-lg font-['Matter_Medium']">Divinely chosen to shepherd the bull market to glory.</p>
                </CardContent>
                <div className="h-72 mt-auto flex justify-start w-full">
                  <img 
                    src="/img/card-content-3.png" 
                    alt="Story 3" 
                    className="h-full object-contain rounded-bl-lg"
                    style={{ marginLeft: '-1px' }}
                  />
                </div>
              </Card>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-[#FBD661]/5 border-[#FBD661]/10 backdrop-blur-lg flex flex-col h-[32rem]">
                <CardHeader>
                  <CardTitle className="font-['Gotham_Bold'] text-2xl text-[#FBD661]">TRUST THE MOMENTUM</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-[#FBD661]/80 text-lg font-['Matter_Medium']">Boldness and resilience needed to dominate in a thriving market.</p>
                </CardContent>
                <div className="h-72 mt-auto">
                  <img 
                    src="/img/card-content-4.png" 
                    alt="Story 4" 
                    className="w-full h-full object-contain rounded-b-lg"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MERCH SECTION */}
      <section id="merch" className="px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-originals text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-[#FBD661] to-[#FBD661]/80 text-transparent bg-clip-text">
            MERCH
          </h2>
          
          {/* Merch Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Merch Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FBD661]/5 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <img 
                  src="/img/merch-item-1.png" 
                  alt="Trumpedo Merch Item 1" 
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <h3 className="font-['Gotham_Bold'] text-xl text-[#FBD661] mb-2">Trumpedo T-Shirt</h3>
                <p className="text-[#FBD661]/80 mb-4 font-['Matter_Medium']">Limited Edition Trumpedo Collection</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FBD661] font-bold">$??.??</span>
                  <Button className="bg-[#FBD661] hover:bg-[#FBD661]/80 text-[#2d375b] font-originals">
                    SOON
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Merch Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#FBD661]/5 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <img 
                  src="/img/merch-item-2.png" 
                  alt="Trumpedo Merch Item 2" 
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <h3 className="font-['Gotham_Bold'] text-xl text-[#FBD661] mb-2">Trumpedo Hoodie</h3>
                <p className="text-[#FBD661]/80 mb-4 font-['Matter_Medium']">Premium Trumpedo Streetwear</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FBD661] font-bold">$??.??</span>
                  <Button className="bg-[#FBD661] hover:bg-[#FBD661]/80 text-[#2d375b] font-originals">
                    SOON
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 mb-4">
        <section>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-8"
          >
            <a
              href="https://x.com/realcatwifgun"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon" className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10">
                <Twitter className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon" className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.73 3.73L2.77 11.29c-1.3.52-1.3 2.4 0 2.92l4.36 1.75 1.75 5.83c.32 1.05 1.75 1.4 2.53.62l2.92-2.92 4.68 3.51c.84.63 2.06.23 2.38-.77L23 4.87c.4-1.23-.89-2.33-2.08-1.77z"/>
                </svg>
              </Button>
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon" className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10">
                <BarChart3 className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://discord.gg/cQHfWcpx"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Button variant="ghost" size="icon" className="text-[#FBD661] hover:text-[#FBD661] hover:bg-[#FBD661]/10">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 9.28a7.17 7.17 0 0 0-1.57-2.37 6.53 6.53 0 0 0-2.38-1.56 6.25 6.25 0 0 0-5.96.38A6.83 6.83 0 0 0 5.17 9.5c-.57 2.24-.43 4.6.4 6.77.83 2.17 2.39 3.93 4.37 4.96.17.09.35.16.53.23l1.5-2.52c.5.11 1 .17 1.5.17s1-.06 1.5-.17l1.5 2.52c.18-.07.36-.14.53-.23 1.98-1.03 3.54-2.79 4.37-4.96.83-2.17.97-4.53.4-6.77A6.83 6.83 0 0 0 18 9.28Z"/>
                  <path d="M9 13h0"/>
                  <path d="M15 13h0"/>
                </svg>
              </Button>
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
