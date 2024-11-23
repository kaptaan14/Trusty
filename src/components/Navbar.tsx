import Link from "next/link";
import { Button } from "../components/Button";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-end justify-between py-4 px-2 md:px-0">
      {/* Logo */}
      <div className="text-[2rem] font-bold underline">
        <Link href="/">Trusty</Link>
      </div>

      {/* Links */}
      <ul
        className={`md:flex md:items-end md:gap-4 hidden
          `}
      >
        <li className="px-4 py-2">
          <Link href="/" className="  hover:text-secondary">
            Home
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link
            href="/services"
            className=" hover:text-secondary flex items-center gap-1 "
          >
            Services
            <FaAngleDown size={15}  />
          </Link>
        </li>
        <li className=" px-4 py-2">
          <Link href="/debtrelief" className=" hover:text-secondary">
            Debt Relief
          </Link>
        </li>
      </ul>

      <div>
        <Button>Contact us</Button>
      </div>
    </nav>
  );
}
