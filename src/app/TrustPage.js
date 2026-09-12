import Link from "next/link";
import styles from "./page-content.module.scss";

/**
 * Shared renderer for the About / Contact / Privacy pages. Each route passes a
 * page definition from src/content/pages.js so the HTML and the markdown
 * variant are generated from one source.
 */
export default function TrustPage({ page }) {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        <h1>{page.title}</h1>
        <p className={styles.lede}>{page.lede}</p>

        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>
                    <a href={item} target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <Link href="/" className={styles.back}>
          ← Back to boredgamers.gr
        </Link>
      </article>
    </main>
  );
}
