"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-5 border shadow-sm ">
      <div>
        <span className="text-xl font-bold text-primary ">FinanceSmart</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex items-center gap-4 ">
          <Link href="/dashboard">
            <Button variant="outline" className="border-primary text-primary">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
