"use client"; // This is a client component 👈🏽

import styles from "./page.module.scss";
import Hero from "../components/Hero/Hero";
import Image from "next/image";
import ParallaxText from "../components/ParallaxText/ParallaxText";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.main}>
        <div className={styles.left}>
          <span>Είμαστε οι</span>
          <h1>BOREDGAMERS</h1>
          <div className={styles.social}>
            <div className={styles.socialIcon}>
              <a
                href="https://www.instagram.com/boredgamersofficial/?hl=en"
                target="_blank"
              >
                <Image src="/images/insta.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.youtube.com/@BoredGamersOfficial"
                target="_blank"
              >
                <Image src="/images/yt.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.tiktok.com/@boredgamersofficial"
                target="_blank"
              >
                <Image src="/images/tt.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://open.spotify.com/show/46dNeISTE55Mv4TECIctam"
                target="_blank"
              >
                <Image src="/images/sp.svg" width={32} height={32} />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.facebook.com/YouUp.BoredGamers/"
                target="_blank"
              >
                <Image src="/images/fb.svg" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Hero />
        </div>
      </section>

      {/* DESCRIPTION */}
      <div
        className={styles.descriptionWrapper}
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src="/images/paper.png" className={styles.paper} />

        <section className={styles.description}>
          <Image src="/images/grey-man.png" width={250} height={250} />
          <div className={styles.descriptionContent}>
            <h3>
              Θα μας βρειτε να λeμε παραξενες ιστορiες, να τσακωνομαστε, να
              ταξιδευουμε και να επικοινωνουμε με ομορφο τροπο πραγματα που μας
              ενοχλουν...
            </h3>
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
          <Image src="/images/yellow-man.png" width={250} height={250} />
        </section>
        <img src="/images/paper.png" className={styles.paperBottom} />
      </div>

      {/* ESHOP */}
      <section className={styles.eshop} id="merch">
        <h2 className={styles.eshopHead}>MERCH</h2>
        <h3 className={styles.eshopSubhead}>
          WANT TO LOOK COOL? CHECK THIS OUT 👇
        </h3>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image src="/images/socks.png" width={380} height={380} />
            <h3>ΚΑΛΤΣΕΣ LIMITED</h3>
            <a className={`${styles.button}`}>BUY NOW</a>
          </div>
          <div className={styles.product}>
            <Image src="/images/product.png" width={380} height={380} />
            <h3>CLUB T-SHIRT</h3>
            <a className={`${styles.button} ${styles.disabled}`}>SOLD OUT</a>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <div
        className={styles.sponsorsLayout}
        style={{
          backgroundImage: "url('/images/sponsorsback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.blackTransition} />
        <section className={styles.sponsorsWrapper} id="sponsors">
          <ParallaxText baseVelocity={-2}>
            SPONSORS{" "}
            <Image src="/images/grey-man.png" width={100} height={100} />{" "}
            SPONSORS{" "}
            <Image src="/images/yellow-man.png" width={100} height={100} />
          </ParallaxText>
          <ParallaxText baseVelocity={2}>
            SPONSORS{" "}
            <Image src="/images/grey-man.png" width={100} height={100} />{" "}
            SPONSORS{" "}
            <Image src="/images/yellow-man.png" width={100} height={100} />
          </ParallaxText>

          <div className={styles.sponsorSpacing} />
          <div className={styles.sponsorsGrid}>
            <div className={styles.sponsor}>
              <div>
                <div>
                  <div>
                    <div className={styles.sponsorHead}>
                      <img src="/images/hasbro.png" width={80} height={80} />
                      <h2>Hasbro</h2>
                    </div>
                    <p>Entertain and connect generations of fans</p>
                  </div>
                  <iframe
                    className={styles.video}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SfQlBRL51Sw?si=NPyRX5JkR6eFUgt2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className={styles.sponsor}>
              <div>
                <div>
                  <div>
                    <div className={styles.sponsorHead}>
                      <img src="/images/efood.png" width={80} height={80} />
                      <h2>EFOOD</h2>
                    </div>
                    <p>Το efood είναι το delivery στην Ελλάδα!</p>
                  </div>
                  <iframe
                    className={styles.video}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SfQlBRL51Sw?si=NPyRX5JkR6eFUgt2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className={styles.sponsor}>
              <div>
                <div>
                  <div>
                    <div className={styles.sponsorHead}>
                      <img src="/images/fridays.png" width={150} height={80} />
                      <h2>Fridays</h2>
                    </div>
                    <p>In here, it's always Friday.</p>
                  </div>
                  <iframe
                    className={styles.video}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SfQlBRL51Sw?si=NPyRX5JkR6eFUgt2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className={styles.sponsor}>
              <div>
                <div>
                  <div>
                    <div className={styles.sponsorHead}>
                      <img src="/images/psixogios.png" width={80} height={80} />
                      <h2>ΨΥΧΟΓΙΟΣ</h2>
                    </div>
                    <p>Ένας κόσμος ψυχολογίας</p>
                  </div>
                  <iframe
                    className={styles.video}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SfQlBRL51Sw?si=NPyRX5JkR6eFUgt2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.workWithUs}>
          <h1>Want to work with us?</h1>
          <p>Shoot us a message and let's add you to this page.</p>

          <button className={styles.button}>Work with us</button>
        </div>

        <div className={styles.blackTransitionReverse} />
      </div>

      {/* TEAM */}
      <section className={styles.team}>
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

      <footer className={styles.footer}>
        <small>
          Developed with ❤️ by{" "}
          <a href="https://www.instagram.com/ionpetro/" target="_blank">
            <em>ionpetro</em>
          </a>
        </small>
        <small className={styles.rights}>
          © boredgamers.com, Inc. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
