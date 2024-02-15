import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.wrapper}>

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
      <section className={styles.eshop}>

        <Image src="/images/rec.png" width={700} height={700} className={styles.rectRight} />
        <Image src="/images/rec.png" width={700} height={700} className={styles.rectLeft} />
        <div className={styles.eshopHead}>
          <Image src="/images/yellow-man.png" width={100} height={100} className={styles.eshopImage} />
          <hr />
          <h2>Merch</h2>
        </div>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image src="/images/product.png" width={380} height={380} />
            <h3>Kappa Keepo</h3>
            <a className={styles.button}>BUY NOW</a>
          </div>
          <div className={styles.product}>
            <Image src="/images/product.png" width={380} height={380} />
            <h3>Kappa Keepo</h3>
            <a className={styles.button}>BUY NOW</a>
          </div>
          <div className={styles.product}>
            <Image src="/images/product.png" width={380} height={380} />
            <h3>Kappa Keepo</h3>
            <a className={styles.button}>BUY NOW</a>
          </div>
        </div>
      </section>



      {/* SPONSORS */}
      <section className={styles.sponsorsWrapper}>
        <div className={styles.sponsors}>
          <div className={styles.sponsorsHead}>
            <h2>Sponsors</h2>
            <hr />
            <Image src="/images/grey-man.png" width={100} height={100} className={styles.eshopImage} />
          </div>
          <div className={styles.sponsorsMain}>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/CcICbmnnsSw?si=aowO4OB3pQZLUfc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/9vJMNwCiBls?si=6_t-cTSml-df3R1P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/V6ZRnmGUE9g?si=f_Pzm6jnKr3DyGNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/FvKu0culHjw?si=DURKMsR4oWjA4HOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      </section>


      {/* TEAM */}
      <section className={styles.team}>
        <div className={styles.teamHead}>
          <Image src="/images/yellow-man.png" width={100} height={100} className={styles.eshopImage} />
          <hr />
          <h2>Team</h2>
        </div>
        <div className={styles.teamMain}>
          <div>
            <Image src="/images/image00003.png" width={220} height={300} />
            <p>@01001101_K</p>
          </div>
          <div>
            <Image src="/images/image00002.png" width={220} height={300} />
            <p>@JOHNBOURSI</p>
          </div>
          <div>
            <Image src="/images/image00001.png" width={220} height={300} />
            <p>@CS.SAKELLARIOU</p>
          </div>
          <div>
            <Image src="/images/image00004.png" width={220} height={300} />
            <p>@VIKINGBAE</p>
          </div>
          <div>
            <Image src="/images/image00005.png" width={220} height={300} />
            <p>@PARASKEVYO</p>
          </div>
          <div>
            <Image src="/images/image00006.png" width={220} height={300} />
            <p>@DKARAGOUNIS89</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <div>
            Do you wanna become <br /> <span>BOURDELO?</span>
          </div>
        </div>
        <div className={styles.newsletterRight}>
          <input />
          <a className={styles.button}>SUBMIT</a>
        </div>
      </section>

      <footer className={styles.footer}><Image src="/images/logo.png" width={80} height={80} />
        <div>Developed in love by ionpetro</div></footer>
    </main>
  );
}
