import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Demo from "./_components/demo";
import Features from "./_components/features";

const Page = () => {
  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline Your Projects with{" "}
            <span className="text-primary">what&apos;snext</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Empower your team, boost productivity, and deliver results faster
            with our intuitive project management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Features />

      <Demo />

      <section className="py-20">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to supercharge your team?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Join thousands of teams already using what&apos;snext to deliver
            projects on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
