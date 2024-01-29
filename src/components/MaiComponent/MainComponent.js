import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  title,
  tagline,

  dosData,
  dontData,
  bottomTitle,
  headerFontFamily,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.dosAndDonts}>
          <div className={styles.dos}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <h2
              className={styles.title}
              style={{ fontFamily: headerFontFamily }}
            >
              {dosData.title}
            </h2>
            <p className={styles.info}>{dosData.info}</p>
          </div>
          <div className={styles.donts}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h2
              className={styles.title}
              style={{ fontFamily: headerFontFamily }}
            >
              {dontData.title}
            </h2>
            <p className={styles.info}>{dontData.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
