import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <nav className={styles.navbar}>
        <Image src="/images/red-line.png" width={280} height={30} />
        <Image src="/images/logo.png" width={100} height={100} />
        <Image src="/images/yellow-line.png" width={280} height={30} />
      </nav>

      {/* HERO */}
      <section className={styles.main}>
        <div className={styles.left}>
          <span>Welcome to the</span>
          <h1>BORED GAMERS</h1>
          <span className={styles.rightText}>Official website</span>
          <div className={styles.social}>
            <div className={styles.socialIcon}>
              <a href="https://www.instagram.com/boredgamersofficial/?hl=en" target="_blank">
                <Image src="/images/insta.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://www.youtube.com/@BoredGamersOfficial" target="_blank">
                <Image src="/images/yt.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://www.tiktok.com/@boredgamersofficial" target="_blank">
                <Image src="/images/tt.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://open.spotify.com/show/46dNeISTE55Mv4TECIctam" target="_blank">
                <Image src="/images/sp.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://www.facebook.com/YouUp.BoredGamers/" target="_blank">
                <Image src="/images/fb.svg" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className={styles.description}>
        <Image src="/images/grey-man.png" width={350} height={350} />
        <div className={styles.descriptionContent}>
          <h3>ειμαστε οι BoredGamers... Θα μας βρειτε να λeμε παραξενες ιστορiες, να τσακωνομαστε,
            να ταξιδευουμε και να επικοινωνουμε με ομορφο τροπο πραγματα που μας ενοχλουν...</h3>
          <div className={styles.numberWrapper}>
            <div className={styles.number}>
              <Image src="/images/yt.svg" width={32} height={32} />
              <span>56.8k</span>
            </div>
            <div className={styles.number}>
              <Image src="/images/insta.svg" width={32} height={32} />
              <span>19.7k</span>
            </div>
            <div className={styles.number}>
              <Image src="/images/tt.svg" width={32} height={32} />
              <span>60.4k</span>
            </div>

          </div>
        </div>
        <Image src="/images/yellow-man.png" width={350} height={350} />
      </section>

      {/* ESHOP */}
      <section>eshop</section>


      {/* SPONSORS */}
      <section>SPONSORS</section>


      {/* TEAM */}
      <section>TEAM</section>

      {/* NEWSLETTER */}
      <section>NEWSLETTER</section>
    </main>
  );
}
