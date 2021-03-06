import styles from "./currencyListItem.module.css";
import { BASE_CURRENCY } from "../../config";

export default function CurrencyListItem(props) {
  const {
    countryCode,
    countryName,
    currencyCode,
    currencyName,
    exchangeRate,
  } = props;

  let flag;
  if (countryCode) {
    const flagURL = `./flags/${countryCode.toLowerCase()}.png`;
    flag = (
      <img
        data-testid="flag"
        className={styles.flagImage}
        alt=""
        src={flagURL}
      />
    );
  } else {
    flag = "";
  }
  const countryString = countryName ? countryName : "-";
  return (
    <div className={styles.container} data-testid="list-item">
      <div className={styles.flag}>{flag}</div>
      <div
        className={styles.currencyCode}
        title={currencyName ? currencyName : currencyCode}
      >
        {currencyCode}
      </div>
      <div className={styles.countryName} title={countryString}>
        {countryString}
      </div>
      <div className={styles.rate}>
        {exchangeRate ? exchangeRate.toFixed(4) : "-"}
      </div>
      <div className={styles.baseCurrency}>{BASE_CURRENCY}</div>
    </div>
  );
}
