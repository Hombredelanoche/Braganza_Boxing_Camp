import Coach from "@/components/ui/Coach";
import Planning from "@/components/ui/Planning";
import PresentationVideo from "@/components/ui/PresentationVideo";
import Subscription from "@/components/ui/Subscription";
import Training from "@/components/ui/Training";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <Coach />
        <Training />
        <Subscription />
        <Planning />
      </section>
    </>
  );
}
