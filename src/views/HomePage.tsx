"use client";
import Header from "@/components/landing/Header";
import KarzarPreview from "@/components/KarzarPreview";
import { Button } from "@heroui/react";
import type { KarzarCard } from "@/types/types";

export interface HomePageProps {
  campaigns: KarzarCard[];
  classname?: string;
}

export default function HomePage({ campaigns, classname }: HomePageProps) {
  return (
    <div className={classname}>
      <Header />
      <div className="bg-primary/20 rounded-[25px] -mt-40 mx-4 sm:mx-6 md:mx-8 md:pt-40 pt-8 pb-10">
        <div className="md:max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="md:mt-20 mt-16 flex flex-col">
            <div className="flex justify-between items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-xl sm:text-2xl font-medium">
                جدیدترین کارزار ها
              </p>
              <Button color="primary" variant="light" size="sm">
                همه کارزار ها
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {campaigns.map((item) => (
                <KarzarPreview key={item.id} classname="w-full" data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
