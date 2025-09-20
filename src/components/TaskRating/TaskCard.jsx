import { useState } from "react";

export default function TaskCard({
  activity,
  rating,
  sendUpRating,
  itemIndex,
}) {
  const [taskRating, setTaskRating] = useState(null);

  function hadleRating(newRating) {
    setTaskRating((prev) => (prev = newRating));
    sendUpRating(newRating, itemIndex);
  }

  const momentalRating = taskRating ?? rating;

  return (
    <div>
      <div className="task-container">
        {activity} - {momentalRating}/5
        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              onClick={() => hadleRating(index + 1)}
              className={momentalRating > index ? "yes" : "no"}
            >
              ★
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
