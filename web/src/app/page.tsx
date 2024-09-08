import Coach from "@/components/ui/Coach";
import Planning from "@/components/ui/Planning";

import Training from "@/components/ui/Training";
import SeparationLine from "@/components/ui/uiElements/SeparationLine";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <Coach />
        {/* <SeparationLine author="Alessandro Barrico">
          Pour apprendre à boxer il suffit d{`'`}une nuit. Il faut une vie
          entière pour apprendre à combattre.
        </SeparationLine> */}
        <Training />
        <Planning />
      </section>
    </>
  );
}
