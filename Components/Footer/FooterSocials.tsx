import styles from "./footerSocials.module.scss";
import FooterEmailSvg from "../../public/assets/logo.svg";
import { FooterSocialsArray } from "./FooterSocialsArray";

const FooterSocials = () => {
  return (
    <div className={styles.container}>
      <h4>Contact</h4>
      <div className={styles.contacts}>
        <FooterEmailSvg />
        <p>hi@ratepunk.com</p>
      </div>
      <div className={styles.socials}>
        <h4>Social</h4>
        <div className={styles.icons}>
          {FooterSocialsArray.map((social) => (
            <div className={styles.icon} key={social.id}>
              {social.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;