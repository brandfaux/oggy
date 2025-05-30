"use client";

import { Input } from "@/components/ui/input";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from 'next/link';
import CursorReveal from '@/components/CursorReveal';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
  

export default function Home() {
  return (
    <>
      <CursorReveal />
      <main>
      <div className="container flex flex-col items-center justify-center min-h-screen">

      <div className="pt-[8rem] flex flex-col items-center w-full z-10">
        <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent font-semibold">
          AUGMEN
        </h1>
        <h3 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 text-transparent font-semibold mb-8">
          SOLUTIONS
        </h3>
      </div>

      <div className="w-full flex justify-center z-10 mb-8">
        <div className="w-[22rem]">
          <Input 
            type="text" 
            placeholder="Search products..." 
            className="border-2 border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          />
        </div>
      </div>

            {/* Button without extra min-h-screen */}
            <div className="flex items-center justify-center mb-12">
              <Link href="/form">
                <button className="relative overflow-hidden px-8 py-4 text-white font-semibold rounded-xl shadow-lg bg-gradient-to-r from-[#3edbb7] to-[#167e67] transition-all duration-200 group">
                  <span className="absolute left-0 top-0 w-0 h-full bg-[#167e67] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"></span>
                  <span className="relative z-10">Get Started</span>
                </button>
              </Link>
            </div>

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Chemical
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Raw Material
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Marijuana
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Special from Pune
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://images.unsplash.com/photo-1558010089-ff6fd29ea39a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>


    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Solvent
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Straight from Gulf
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    </div>

    <div className="w-full px-4 z-10 mb-8">
        <HoverEffect
          items={[
            {
              title: "Smart Inventory",
              description: "Optimize stock with AI predictions.",
              link: "#",
            },
            {
              title: "Supplier Matching",
              description: "Connect to verified suppliers instantly.",
              link: "#",
            },
            {
              title: "Analytics Dashboard",
              description: "Visualize your business trends in real time.",
              link: "#",
            },
          ]}
        />
      </div>
      </main>
    </>
  );
}