import Negotiator from "negotiator";

export const availableLocales = ["en", "fr"];
export const defaultLocale = "fr";

export const getPreferredLocale = (request: Request) => {
  const headers = { "accept-language": request.headers.get("accept-language") };
  const languages = new Negotiator({ headers }).languages();
  return defaultLocale;
};

export const getLocaleUrlToRedirect = (request) => {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = availableLocales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    return new URL(`/${locale}/${pathname}`, request.url);
  }
};
