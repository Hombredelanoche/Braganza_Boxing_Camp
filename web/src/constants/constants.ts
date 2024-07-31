import {
  CoachInformationsProps,
  LegalConditionsLinksProps,
  NavLinkProps,
} from "@/services/interfaces";

export { navLinks, legalConditionsLinks, coachInformations };

const navLinks = (): NavLinkProps[] => [
  { id: "#coach", label: "Coach" },
  { id: "#planning", label: "Planning" },
  { id: "#subscription", label: "Nos Forfaits" },
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

const coachInformations = (): CoachInformationsProps[] => [
  {
    title: "Coach",
    clubs: [
      "Atch Academy",
      "Fitness Park",
      "France Boxing Club",
      "Braganza Boxing Camp",
    ],
    resume: "",
  },
];
