import Offers from "@/components/ui/uiElements/MainSections/Offers";
import PresentationPage from "@/components/ui/uiElements/MainSections/PresentationPage";
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
