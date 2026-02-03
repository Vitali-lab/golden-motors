import { companyName } from "../../app/appInfo";
import { getCurrentYear } from "../../functions/getCurrentDate";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>
        © {getCurrentYear()} {companyName}. Все права защищены
      </p>
    </footer>
  );
};
