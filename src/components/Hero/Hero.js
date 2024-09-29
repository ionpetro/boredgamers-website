import styles from "./Hero.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [showVideoText, setShowVideoText] = useState("none");
  const [showSponsorsText, setShowSponsorsText] = useState("none");
  const [showMerchText, setShowMerchText] = useState("none");

  return (
    <div className={styles.wrapper}>
      <Image src="/images/yellow.png" width={80} height={80} />
      <Image src="/images/hero/image00001.png" width={90} height={90} />
      <Image src="/images/hero/image00002.png" width={100} height={100} />
      <Image src="/images/hero/image00003.png" width={80} height={80} />
      <Image src="/images/hero/image00004.png" width={90} height={120} />
      <Image src="/images/hero/image00005.png" width={80} height={80} />
      <Image src="/images/hero/image00006.png" width={100} height={100} />

      <a
        target="_blank"
        href="https://www.youtube.com/@BoredGamersOfficial/videos"
        rel="noopener noreferrer"
      >
        <div
          className={styles.item}
          onMouseEnter={(e) => setShowVideoText("block")}
          onMouseLeave={(e) => setShowVideoText("none")}
        >
          <Image src="/images/vids.png" width={500} height={250} priority />
          <h3 className={styles.text} style={{ display: showVideoText }}>
            Videos
          </h3>
        </div>
      </a>
      <div className={styles.row2}>
        <div className={styles.spoImage}>
          <Link href="#sponsors">
            <div
              className={styles.item}
              onMouseEnter={(e) => setShowSponsorsText("block")}
              onMouseLeave={(e) => setShowSponsorsText("none")}
            >
              <Image
                src="/images/sponsors.png"
                width={250}
                height={150}
                priority
              />
              <h3 className={styles.text} style={{ display: showSponsorsText }}>
                Sponsors
              </h3>
            </div>
          </Link>
        </div>
        <Link href="#merch">
          <div
            className={styles.item}
            onMouseEnter={(e) => setShowMerchText("block")}
            onMouseLeave={(e) => setShowMerchText("none")}
          >
            <Image src="/images/mer.png" width={300} height={250} priority />
            <h3 className={styles.text} style={{ display: showMerchText }}>
              Merch
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
