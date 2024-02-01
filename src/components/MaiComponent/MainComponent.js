import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  dosData,
  dontData,

  headerFontFamily,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.dosAndDonts}>
          <div
            className={styles.dos}
            style={{
              "--textColor": dosData.textColor,
              "--background": dosData.background,
              "--iconBg": dosData.iconBg,
            }}
          >
            <div className={styles.iconContainer}>
              <div className={styles.icon}>{dosData.icon}</div>
            </div>
            <h2
              className={styles.title}
              style={{ fontFamily: headerFontFamily }}
            >
              {dosData.title}
            </h2>
            <p className={styles.info}>{dosData.info}</p>
          </div>
          <div
            className={styles.donts}
            style={{
              "--textColor": dontData.textColor,
              "--background": dontData.background,
              "--iconBg": dontData.iconBg,
            }}
          >
            <div className={styles.iconContainer}>
              <div className={styles.icon}>{dontData.icon}</div>
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
