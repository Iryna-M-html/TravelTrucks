import css from "./ShowmoreButton.module.css";
import Link from "next/link";

interface ShowmoreButtonProps {
  href?: string;
  handleButtonClick?: () => void;
  textBtn: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  styleBtn?: "primary" | "secondary";
}

const ShowmoreButton = ({
  href,
  handleButtonClick,
  textBtn,
  type = "button",
  disabled = false,
  styleBtn = "primary",
}: ShowmoreButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={css.campButton}>
        {textBtn}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={
        styleBtn === "primary" ? css.campButton : css.campButtonSecondary
      }
      disabled={disabled}
    >
      {textBtn}
    </button>
  );
};

export default ShowmoreButton;
