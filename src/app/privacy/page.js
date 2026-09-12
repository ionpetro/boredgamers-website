import TrustPage from "../TrustPage";
import { PRIVACY } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const metadata = {
  title: `${PRIVACY.title} | BoredGamers`,
  description: PRIVACY.description,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
    types: { "text/markdown": `${SITE_URL}/privacy.md` },
  },
};

export default function PrivacyPage() {
  return <TrustPage page={PRIVACY} />;
}
