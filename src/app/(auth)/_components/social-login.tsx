"use client";
import { Button } from "@/components/ui/button";
// import { Dispatch, SetStateAction } from "react";
// import { useRouter } from "nextjs-toploader/app";
import { Google, Discord } from "@/components/icon";
import { Github } from "lucide-react";

// type Props = {
//   pending: boolean;
//   setPending: Dispatch<SetStateAction<boolean>>;
// };

const LoginGoogle = () => {

  return (
    <Button variant="outline" className="w-full">
      <Google className="mr-2 h-4 w-4" />
      Google
    </Button>
  );
};

const LoginDiscord = () => {
  return (
    <Button variant="outline" className="w-full">
      <Discord className="mr-2 h-4 w-4" />
      Discord
    </Button>
  );
};

const LoginGithub = () => {
  return (
    <Button variant="outline" className="w-full">
      <Github className="mr-2 h-4 w-4" />
      GitHub
    </Button>
  );
};

export { LoginGoogle, LoginDiscord, LoginGithub };
