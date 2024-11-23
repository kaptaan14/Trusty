import BreakLine from "@/components/Breakline";
import { Button } from "@/components/Button";
import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import Debt from "../../public/debtpocket.png"
import Budget from "../../public/budget.png"
import Evaluate from "../../public/evaluate.png"
import Finalize from "../../public/finalize.png"
import Harrasment from "../../public/harrasment.png"
import Legal from "../../public/legal.png"
import Negotiate from "../../public/negotiate.png"
import DebtFree from "../../public/debt.png"



export default function Home() {
  return (
    <>
      <div className="flex-col-reverse flex md:flex-row justify-between items-center md:my-20">
        <div className="font-bold flex flex-col gap-7 md:gap-14 md:w-1/2 ">
          <div className="text-center md:text-start">
            <h1 className="text-6xl md:mt-20 ">
              Reduce Your Debt Balance with{" "}
              <span className="underline">Trusty</span>{" "}
            </h1>
          </div>
          <div className="pl-1">
            <p className="hidden md:flex">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              numquam, ullam ducimus voluptatum sed magnam iste odit laborum
              hic? Pariatur, fugit quo. Libero, non. Aperiam aspernatur omnis
              in, necessitatibus ratione quibusdam, dolore fugiat, ea a mollitia
              voluptatem nisi iure quae! Reiciendis reprehenderit voluptatem
              consequuntur sed officia, tempore asperiores molestiae? Libero,
              aperiam molestias. Nostrum ut repudiandae, deleniti recusandae
              asperiores est. Ad?
            </p>
          </div>
          <div className="pl-1 px-2 md:px-0">
            <div className="flex flex-row  bg-white pl-6 pr-2 py-2 rounded-xl ">
              <input
                className="outline-none p-2 text-black w-full"
                placeholder="Enter your email address..."
                type="text"
              />
              <Button variant="secondary">Sign Up</Button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image width={500} height={500} className="" src={Debt} alt="" />
        </div>
      </div>

      <BreakLine />

      <div></div>

      <div className="flex py-10 flex-col items-center">
        <h1 className="md:py-10  text-6xl font-bold text-center">
          Take Control of your Debt Today
        </h1>
        <div className="flex flex-col md:flex-row justify-between py-10">
          <SmallCard imageSource={Evaluate} title="We evaluate" />
          <SmallCard imageSource={Budget} title="We budget" />
          <SmallCard imageSource={Negotiate} title="We negotiate" />
          <SmallCard imageSource={Finalize} title="We finalize" />
        </div>
      </div>

      <BreakLine />

      <div className="flex py-10 flex-col items-center">
        <h1 className="py-10  text-6xl font-bold text-center">Services</h1>
        <div className="flex flex-col md:flex-row justify-between md:py-10 ">
          <SmallCard imageSource={DebtFree} title="Debt free solutions" />
          <SmallCard imageSource={Harrasment} title="Relief from Creditor’s Harrasment" />
          <SmallCard imageSource={Legal} title="Legal Advisory" />
        </div>
      </div>
    </>
  );
}
