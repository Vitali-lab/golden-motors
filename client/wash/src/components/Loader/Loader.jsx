import mark from "../../assets/logo-mark@2x.png";
import "./Loader.css";

export const Loader = () => {
  return (
    <div aria-label="Загрузка" role="status" className="loader">
      <img src={mark} alt="" width="34" height="48" />
      <span className="loader-brand">Golden Motors</span>
      <span className="loader-line" aria-hidden="true">
        <i />
      </span>
      <span className="sr-only">Загружаем сайт</span>
    </div>
  );
};
