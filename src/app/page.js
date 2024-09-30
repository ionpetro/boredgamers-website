"use client"; // This is a client component 👈🏽

import styles from "./page.module.scss";
import Image from "next/image";
import ParallaxText from "../components/ParallaxText/ParallaxText";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.main}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
          style={{ filter: "grayscale(100%)", opacity: "0.2" }}
        >
          <source src="/images/background.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.mainHead}>
          <Image
            src="/images/logo.png"
            width={100}
            height={80}
            className={styles.logo}
            alt="Boredgamers logo"
          />
          <h1>BOREDGAMERS</h1>
          <div className={styles.joinButtons}>
            <button className={styles.button}>Subscribe</button>
            <button className={`${styles.button} ${styles.redButton}`}>
              Join on YT
            </button>
          </div>
        </div>

        <div className={styles.social}>
          <div className={styles.socialIcon}>
            <a
              href="https://www.instagram.com/boredgamersofficial/?hl=en"
              target="_blank"
            >
              <Image
                src="/images/instagram.svg"
                width={28}
                height={28}
                alt="Instagram icon"
              />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.youtube.com/@BoredGamersOfficial"
              target="_blank"
            >
              <Image
                src="/images/youtube.svg"
                width={28}
                height={28}
                alt="YouTube icon"
              />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.tiktok.com/@boredgamersofficial"
              target="_blank"
            >
              <Image
                src="/images/tiktok.svg"
                width={28}
                height={28}
                alt="TikTok icon"
              />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://open.spotify.com/show/46dNeISTE55Mv4TECIctam"
              target="_blank"
            >
              <Image
                src="/images/sp.svg"
                width={32}
                height={32}
                alt="Spotify icon"
              />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.facebook.com/YouUp.BoredGamers/"
              target="_blank"
            >
              <Image
                src="/images/fb.svg"
                width={32}
                height={32}
                alt="Facebook icon"
              />
            </a>
          </div>
        </div>
        <div className={styles.blackTransitionReverse} />
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
          <Image
            src="/images/grey-man.png"
            width={250}
            height={250}
            alt="Grey cartoon character"
          />
          <div className={styles.descriptionContent}>
            <h3>
              Θα μας βρειτε να λeμε παραξενες ιστορiες, να τσακωνομαστε, να
              ταξιδευουμε και να επικοινωνουμε με ομορφο τροπο πραγματα που μας
              ενοχλουν...
            </h3>
            <div className={styles.numberWrapper}>
              <div className={styles.number}>
                <Image
                  src="/images/yt.svg"
                  width={32}
                  height={32}
                  alt="YouTube icon"
                />
                <span>56.8k</span>
              </div>
              <div className={styles.number}>
                <Image
                  src="/images/insta.svg"
                  width={32}
                  height={32}
                  alt="Instagram icon"
                />
                <span>19.7k</span>
              </div>
              <div className={styles.number}>
                <Image
                  src="/images/tt.svg"
                  width={32}
                  height={32}
                  alt="TikTok icon"
                />
                <span>60.4k</span>
              </div>
            </div>
          </div>
          <Image
            src="/images/yellow-man.png"
            width={250}
            height={250}
            alt="Yellow cartoon character"
          />
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
            <Image
              src="/images/socks.png"
              width={380}
              height={380}
              alt="Limited edition socks"
            />
            <h3>ΚΑΛΤΣΕΣ LIMITED</h3>
            <a className={`${styles.button}`}>BUY NOW</a>
          </div>
          <div className={styles.product}>
            <Image
              src="/images/product.png"
              width={380}
              height={380}
              alt="Club T-shirt"
            />
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
            <Image
              src="/images/grey-man.png"
              width={100}
              height={100}
              alt="Grey cartoon character"
            />{" "}
            SPONSORS{" "}
            <Image
              src="/images/yellow-man.png"
              width={100}
              height={100}
              alt="Yellow cartoon character"
            />
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
            <Image
              src="/images/image00003.png"
              width={220}
              height={300}
              alt="Team member @01001101_K"
            />
            <p>@01001101_K</p>
          </div>
          <div>
            <Image
              src="/images/image00002.png"
              width={220}
              height={300}
              alt="Team member @JOHNBOURSI"
            />
            <p>@JOHNBOURSI</p>
          </div>
          <div>
            <Image
              src="/images/image00001.png"
              width={220}
              height={300}
              alt="Team member @CS.SAKELLARIOU"
            />
            <p>@CS.SAKELLARIOU</p>
          </div>
          <div>
            <Image
              src="/images/image00004.png"
              width={220}
              height={300}
              alt="Team member @VIKINGBAE"
            />
            <p>@VIKINGBAE</p>
          </div>
          <div>
            <Image
              src="/images/image00005.png"
              width={220}
              height={300}
              alt="Team member @PARASKEVYO"
            />
            <p>@PARASKEVYO</p>
          </div>
          <div>
            <Image
              src="/images/image00006.png"
              width={220}
              height={300}
              alt="Team member @DKARAGOUNIS89"
            />
            <p>@DKARAGOUNIS89</p>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <div
        className={styles.descriptionWrapper}
        style={{
          backgroundImage: "url('/images/backend.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src="/images/paper.png" className={styles.paper} />
        <section className={styles.join}>
          <h1>JOIN THE BOREDGAMERS</h1>
          <div className={styles.joinButtons}>
            <button className={styles.button}>Subscribe</button>
            <button className={`${styles.button} ${styles.redButton}`}>
              Join on YT
            </button>
          </div>
          <div className={styles.social}>
            <div className={styles.socialIcon}>
              <a
                href="https://www.instagram.com/boredgamersofficial/?hl=en"
                target="_blank"
              >
                <Image
                  src="/images/instagram.svg"
                  width={28}
                  height={28}
                  alt="Instagram icon"
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.youtube.com/@BoredGamersOfficial"
                target="_blank"
              >
                <Image
                  src="/images/youtube.svg"
                  width={28}
                  height={28}
                  alt="YouTube icon"
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.tiktok.com/@boredgamersofficial"
                target="_blank"
              >
                <Image
                  src="/images/tiktok.svg"
                  width={28}
                  height={28}
                  alt="TikTok icon"
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://open.spotify.com/show/46dNeISTE55Mv4TECIctam"
                target="_blank"
              >
                <Image
                  src="/images/sp.svg"
                  width={32}
                  height={32}
                  alt="Spotify icon"
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://www.facebook.com/YouUp.BoredGamers/"
                target="_blank"
              >
                <Image
                  src="/images/fb.svg"
                  width={32}
                  height={32}
                  alt="Facebook icon"
                />
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <small>
            Developed with ❤️ by{" "}
            <a href="https://www.x.com/ionpetropoulos" target="_blank">
              <em>ionpetro</em>
            </a>
          </small>
          <small className={styles.rights}>
            © boredgamers.com, Inc. All rights reserved.
          </small>
        </footer>
      </div>
    </main>
  );
}
