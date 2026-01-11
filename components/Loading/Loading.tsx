import css from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={css.loadingContainer}>
      <div className={css.spinner}></div>
      <p className={css.loadingText}>Loading, please wait...</p>
    </div>
  );
};

export default Loading;
