import css from "./BookingButton.module.css";
import Link from "next/link";

interface BookingButtonProps {
  href?: string;
  handleButtonClick?: () => void;
  textBtn: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  styleBtn?: "primary" | "secondary";
}

const BookingButton = ({
  href,
  handleButtonClick,
  textBtn,
  type = "button",
  disabled = false,
  styleBtn = "primary",
}: BookingButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={css.bookingButton}>
        {textBtn}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={
        styleBtn === "primary" ? css.bookingButton : css.bookingButtonSecondary
      }
      disabled={disabled}
    >
      {textBtn}
    </button>
  );
};

export default BookingButton;
