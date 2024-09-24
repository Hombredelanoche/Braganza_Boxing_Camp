import PresentationPage from "@/components/ui/PresentationPage";
import Offers from "@/components/ui/uiElements/MainSections/Offers";
import Training from "@/components/ui/uiElements/MainSections/Training";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <PresentationPage />
        <Training />
        <Offers />
        {/* <article className="md:max-w-7xl mx-auto"></article> */}
      </section>
    </>
  );
}
