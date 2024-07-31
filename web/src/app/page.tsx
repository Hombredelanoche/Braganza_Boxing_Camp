import Coach from "@/components/ui/Coach";
import Planning from "@/components/ui/Planning";
import PresentationVideo from "@/components/ui/PresentationVideo";
import Subscription from "@/components/ui/Subscription";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <PresentationVideo />
        <Coach />
        <Planning />
        <Subscription />
      </section>
    </>
  );
}
