export interface NavLinkProps {
  id: string;
  label: string;
}

export interface LegalConditionsLinksProps {
  href: string;
  title: string;
  name: string;
}

export interface CreateNewUser {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  gender: string;
}
