import { Camper } from "@/types/camper";
import css from "./Reviews.module.css";
import { AiFillStar } from "react-icons/ai";

type ReviewsProp = {
  reviews: Camper["reviews"];
};

export default function Reviews({ reviews }: ReviewsProp) {
  if (!reviews || reviews.length === 0)
    return <p className={css.empty}>No reviews yet.</p>;

  return (
    <div className={css.container}>
      <div className={css.reviewsList}>
        {reviews.map((review, index) => (
          <div
            key={`${review.reviewer_name}-${index}`}
            className={css.reviewItem}
          >
            <div className={css.reviewerWrapper}>
              <div className={css.reviewerAvatar}>
                {review.reviewer_name[0].toUpperCase()}
              </div>

              <div className={css.reviewerInfo}>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                <div className={css.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      size={16}
                      // Логіка фарбування зірок
                      color={i < review.reviewer_rating ? "#ffc531" : "#f2f4f7"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
