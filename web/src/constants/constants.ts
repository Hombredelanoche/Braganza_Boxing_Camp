import { LegalConditionsLinksProps, NavLinkProps } from "@/services/interfaces";

export { navLinks, legalConditionsLinks };

const navLinks = (): NavLinkProps[] => [
  { id: "/", label: "Accueil" },
  { id: "#coach", label: "Coach" },
  { id: "#training", label: "Training" },
  { id: "#offers", label: "Nos offres" },
  { id: "#contactUs", label: "Nous contacter" },
];

const legalConditionsLinks = (): LegalConditionsLinksProps[] => [
  { href: "/contactUs", title: "contactUs", name: "Nous contacter" },
  { href: "/cookiesInfo", title: "cookiesInfo", name: "Politique des cookies" },
  {
    href: "/sellConditions",
    title: "sellConditions",
    name: "Conditions générales de vente",
  },
  { href: "/aboutUs", title: "aboutUs", name: "En savoir plus" },
];
