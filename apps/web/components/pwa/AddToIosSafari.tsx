import { Button } from "@repo/ui/src/components";
import { ArrowDown, PlusSquare, Share } from "lucide-react";
import React from "react";

interface Props {
  closePrompt: () => void;
  doNotShowAgain: () => void;
}

export default function AddToIosSafari(props: Props) {
  const { doNotShowAgain } = props;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-[60%] px-4 pb-12 text-foreground">
      <div className="relative flex h-full flex-col items-center justify-around rounded-xl border bg-background p-4 text-center">
        <p className="text-lg text-muted-foreground">
          Install Theta Space app to your home screen!
        </p>
        <div className="flex items-center gap-2 text-lg">
          <p>Click the</p>
          <Share className="text-4xl" />
          <p>icon</p>
        </div>
        <div className="flex w-full flex-col items-center gap-2 px-4 text-lg">
          <p className="text-lg text-muted-foreground">
            Scroll down and then click:
          </p>
          <div className="flex w-full items-center justify-between rounded-lg bg-foreground/10 px-4 py-2">
            <p>Add to Home Screen</p>
            <PlusSquare className="text-2xl" />
          </div>
        </div>
        <Button onClick={doNotShowAgain}>Don&apos;t show again</Button>
        <ArrowDown className="absolute -bottom-[50px] -z-10 animate-bounce text-4xl text-blue-500" />
      </div>
    </div>
  );
}
