import Coach from "@/components/ui/Coach";
import Offres from "@/components/ui/Offres";
import Planning from "@/components/ui/Planning";

import Training from "@/components/ui/Training";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <Coach />
        <Training />
        <Planning />
        <Offres />
      </section>
    </>
  );
}
