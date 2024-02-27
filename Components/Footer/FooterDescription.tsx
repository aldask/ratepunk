import styles from "./footerDescription.module.scss";
import RatePunkLogoSvg from "../../public/assets/logo.svg";

const FooterDescription = () => {
  return (
    <div className={styles.container}>
      <RatePunkLogoSvg />
      <p className={styles.description}>
        Ratepunk compares hotel room prices across the major online travel
        agencies. When you search for a room, Ratepunk extension scans the top
        booking sites and runs a price comparison, so you can be confident in
        knowing you're getting the best deal!
      </p>
    </div>
  );
};

export default FooterDescription;