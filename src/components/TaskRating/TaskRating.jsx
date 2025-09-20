import TaskCard from "./TaskCard";
import { useState } from "react";
const tasks = [
  { activity: "Hiking", rating: 4 },
  { activity: "Cooking", rating: 2 },
  { activity: "Reading", rating: 5 },
  { activity: "Swimming", rating: 3 },
  { activity: "Painting", rating: 1 },
  { activity: "Cycling", rating: 4 },
  { activity: "Gaming", rating: 5 },
];

export default function TaskRating() {
  const [taskList, setTaskList] = useState(tasks);

  const averageRating = (
    taskList.reduce((acc, curr) => acc + curr.rating, 0) / taskList.length
  ).toFixed(2);

  function handleNew(newRating, indexId) {
    const updatedTaskList = taskList.map((item, index) =>
      indexId === index ? { ...item, rating: newRating } : item
    );

    setTaskList(updatedTaskList);
  }
  return (
    <div className="task-rating">
      <h3>Task Average Rating: {averageRating}</h3>

      {taskList.map((task, index) => (
        <TaskCard
          key={index}
          {...task}
          itemIndex={index}
          sendUpRating={handleNew}
        />
      ))}
    </div>
  );
}
