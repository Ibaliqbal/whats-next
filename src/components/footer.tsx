import Link from "next/link";
import { Logo } from "./icon";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-muted dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">what&apos;snext</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modern project management for teams of all sizes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm">Product</h3>
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Roadmap
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm">Company</h3>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm">Legal</h3>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-muted-foreground/20">
          <p className="text-sm text-muted-foreground">
            © 2025 what&apos;snext. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {["Facebook", "Twitter", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{social}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
