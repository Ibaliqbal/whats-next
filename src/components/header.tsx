import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./icon";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">What&apos;sNext</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Demo
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle align="end" />
          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
