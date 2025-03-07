import Image from "next/image";

const Demo = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            See what&apos;snext in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how our platform can transform your team&apos;s productivity.
          </p>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="what'snext Demo Video"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
