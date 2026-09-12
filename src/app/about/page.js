import TrustPage from "../TrustPage";
import { ABOUT } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const metadata = {
  title: `${ABOUT.title} | BoredGamers`,
  description: ABOUT.description,
  alternates: {
    canonical: `${SITE_URL}/about`,
    types: { "text/markdown": `${SITE_URL}/about.md` },
  },
};

export default function AboutPage() {
  return <TrustPage page={ABOUT} />;
}
