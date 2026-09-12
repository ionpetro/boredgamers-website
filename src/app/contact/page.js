import TrustPage from "../TrustPage";
import { CONTACT } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const metadata = {
  title: `${CONTACT.title} | BoredGamers`,
  description: CONTACT.description,
  alternates: {
    canonical: `${SITE_URL}/contact`,
    types: { "text/markdown": `${SITE_URL}/contact.md` },
  },
};

export default function ContactPage() {
  return <TrustPage page={CONTACT} />;
}
