"use client"; // This is a client component 👈🏽

import styles from "./page.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import ParallaxText from "../components/ParallaxText/ParallaxText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CHANNEL_ID = "UCAOcbyg6KNM2h99t7XNiQ8A";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [featuredVideos, setFeaturedVideos] = useState([]);

  useEffect(() => {
    if (emailCopied) {
      setTimeout(() => setEmailCopied(false), 2000);
    }
  }, [emailCopied]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const imageVariants = {
    hidden: { x: -150, y: -150, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const imageVariantsReverse = {
    hidden: { x: 150, y: 150, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=2`
      );
      const data = await response.json();
      setFeaturedVideos(data.items);
    };
    fetchData();
  }, []);

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
          poster="/images/video-poster.png"
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
            <button
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@BoredGamersOfficial?sub_confirmation=1",
                  "_blank"
                )
              }
            >
              Subscribe
            </button>
            <button
              className={`${styles.button} ${styles.redButton}`}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@BoredGamersOfficial/join",
                  "_blank"
                )
              }
            >
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

      {/* FEATURED */}
      <section className={styles.featured}>
        <h2 className={styles.featuredHead}>ΠΡΟΣΦΑΤΑ ΒΙΝΤΕΟ</h2>
        <div className={styles.featuredGrid}>
          {featuredVideos.map((video, index) => (
            <div key={index} className={styles.featuredItem}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
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
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <Image
              className={styles.descriptionImage1}
              src="/images/grey-man.png"
              width={250}
              height={250}
              alt="Grey cartoon character"
            />
          </motion.div>
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
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={imageVariantsReverse}
          >
            <Image
              className={styles.descriptionImage2}
              src="/images/yellow-man.png"
              width={250}
              height={250}
              alt="Yellow cartoon character"
            />
          </motion.div>
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
        <div className={`${styles.moreWrapper}`}>
          <a className={`${styles.button} ${styles.redButton}`}>All Products</a>
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
              <div className={styles.sponsorHead}>
                <img src="/images/hasbro.png" width={80} height={80} />
                <h2>Hasbro</h2>
              </div>
              <p>Entertain and connect generations of fans</p>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/Aq14ZW5iGH0?si=kNaF2_aPWivpBUwf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.sponsor}>
              <div className={styles.sponsorHead}>
                <img src="/images/efood.png" width={80} height={80} />
                <h2>EFOOD</h2>
              </div>
              <p>Το efood είναι το delivery στην Ελλάδα!</p>

              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/LesPE5esyIE?si=0d3_XYytG_b-Recq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.sponsor}>
              <div className={styles.sponsorHead}>
                <img src="/images/fridays.png" width={150} height={80} />
                <h2>Fridays</h2>
              </div>
              <p>In here, it's always Friday.</p>

              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/fOfiiF-hEss?si=SlOLBMNCdmCRl8Q_"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.sponsor}>
              <div className={styles.sponsorHead}>
                <img src="/images/psixogios.png" width={80} height={80} />
                <h2>ΨΥΧΟΓΙΟΣ</h2>
              </div>
              <p>Ένας κόσμος ψυχαγωγίας.</p>

              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/6I439jTP6jA?si=v4ztYhdkyGwM_Tse"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <div className={styles.workWithUs}>
          <h1>Want to work with us?</h1>
          <p>Shoot us a message and let's add you to this page.</p>

          <button
            className={styles.button}
            onClick={() =>
              (window.location.href = "mailto:bgbusinessoffers@gmail.com")
            }
          >
            Work with us
          </button>
        </div>

        <div className={styles.blackTransitionReverse} />
      </div>

      {/* TEAM */}
      <section className={styles.team}>
        <div className={styles.teamMain}>
          {[
            {
              name: "@01001101_K",
              image: "image00003.png",
              hoverImage: "mike.png",
              link: "https://www.instagram.com/01001101_k/",
            },
            {
              name: "@JOHNBOURSI",
              image: "image00002.png",
              hoverImage: "john.png",
              link: "https://www.instagram.com/johnboursi/",
            },
            {
              name: "@CS.SAKELLARIOU",
              image: "image00001.png",
              hoverImage: "chris.png",
              link: "https://www.instagram.com/cs.sakellariou/",
            },
            {
              name: "@VIKINGBAE",
              image: "image00004.png",
              hoverImage: "avi.png",
              link: "https://www.instagram.com/vikingbae/",
            },
            {
              name: "@PARASKEVYO",
              image: "image00005.png",
              hoverImage: "paraskevi.png",
              link: "https://www.instagram.com/paraskevyo/",
            },
            {
              name: "@DKARAGOUNIS89",
              image: "image00006.png",
              hoverImage: "dio.png",
              link: "https://www.instagram.com/dkaragounis89/",
            },
          ].map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imageContainer}>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/images/${member.image}`}
                    width={220}
                    height={300}
                    alt={`Team member ${member.name}`}
                    className={styles.defaultImage}
                  />
                  <Image
                    src={`/images/${member.hoverImage}`}
                    width={300}
                    height={300}
                    alt={`Hover image for ${member.name}`}
                    className={styles.hoverImage}
                  />
                </a>
              </div>
              <p className={styles.teamName}>{member.name}</p>
            </div>
          ))}
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
            <button
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@BoredGamersOfficial?sub_confirmation=1",
                  "_blank"
                )
              }
            >
              Subscribe
            </button>
            <button
              className={`${styles.button} ${styles.redButton}`}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@BoredGamersOfficial/join",
                  "_blank"
                )
              }
            >
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
            <div className={styles.socialIcon}>
              <a
                onClick={() => {
                  navigator.clipboard
                    .writeText("bgbusinessoffers@gmail.com")
                    .then(() => setEmailCopied(true))
                    .catch((err) =>
                      console.error("Failed to copy email: ", err)
                    );
                }}
              >
                <Image
                  src="/images/mail.svg"
                  width={32}
                  height={32}
                  alt="Email icon"
                />
              </a>
            </div>
          </div>
          {emailCopied && (
            <div className={styles.copyEmail}>
              <p>Email copied to clipboard 📧</p>
            </div>
          )}
        </section>

        <footer className={styles.footer}>
          <div>
            Developed with 🥐 and ☕ by{" "}
            <a href="https://ionpetro.com" target="_blank">
              <em>ionpetro</em>
            </a>
          </div>
          <div className={styles.rights}>
            © boredgamers.com, Inc. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
