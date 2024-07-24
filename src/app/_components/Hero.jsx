import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroImage from "../../../public/dashboard.png";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="pb-10 text-4xl font-semibold text-black dark:text-white">
                Manage your Money with AI-Driven Personal <br />
                <span className="text-4xl md:text-[6rem] text-primary font-bold mt-1 leading-none">
                  Finance Advisor
                </span>
              </h1>
            </>
          }>
          <Image
            src={heroImage}
            alt="hero"
            height={720}
            width={1400}
            className="object-cover object-left-top h-full mx-auto rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
}
