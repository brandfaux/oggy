"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CursorReveal from "@/components/CursorReveal";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-black text-white relative">
        {/* Hero Section */}
        <section className="w-full py-24 flex flex-col items-center text-white relative overflow-hidden" style={{ minHeight: 480 }}>
          {/* Cursor Reveal as background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <CursorReveal />
          </div>
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg leading-tight">
              Discover, Source, and Connect<br />with the Chemical Marketplace
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-center mb-10 opacity-90">
              The all-in-one platform for SMEs to access real-time market insights, demand forecasting, and direct supplier connections.
            </p>
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="bg-white text-zinc-900 font-bold hover:bg-zinc-200 shadow-lg">Get Started</Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 shadow-lg">Browse Marketplace</Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">Verified Suppliers</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">Instant Quotes</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">AI Market Insights</span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">Secure Transactions</span>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <main className="w-full max-w-7xl flex flex-col gap-16 px-4 py-16 relative z-10">
          <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Marketplace",
                content: "Browse and connect with a wide range of chemical suppliers and products."
              },
              {
                title: "Sign-In",
                content: "Access your account, manage your profile, and track your activity."
              },
              {
                title: "User Dashboard",
                content: "Fill out demand forecasting forms, add chemicals, and receive real-time quotations."
              },
              {
                title: "Market Insights",
                content: "Get AI-driven analytics and up-to-date market trends to make informed decisions."
              }
            ].map((card, index) => (
              <Card key={index} className="shadow-lg border-0 bg-zinc-900 text-white">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
              </Card>
            ))}
          </section>

          {/* CTA Section */}
          <section className="flex flex-col items-center gap-6 bg-zinc-900 rounded-xl p-10 shadow-inner">
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">Ready to transform your chemical sourcing?</h2>
            <p className="text-lg text-zinc-300 max-w-2xl text-center">
              Join Auga today and unlock access to a global network of suppliers, real-time analytics, and seamless procurement tools designed for SMEs.
            </p>
            <Button size="lg" className="bg-cyan-600 text-white font-bold hover:bg-cyan-700">Sign Up Free</Button>
          </section>
        </main>

        <footer className="mt-16 text-zinc-400 text-sm text-center pb-8">
          Inspired by <a href="https://knowde.com" target="_blank" rel="noopener noreferrer" className="underline">Knowde</a> and <a href="https://alibaba.com" target="_blank" rel="noopener noreferrer" className="underline">Alibaba</a>.
        </footer>
      </div>
    </>
  );
}