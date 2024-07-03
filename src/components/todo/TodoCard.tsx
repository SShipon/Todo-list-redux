import React from 'react';
import { useDeleteTodoMutation } from "@/redux/api/api";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { deleteTodo as deleteTodoLocal } from "@/redux/features/todoSlice";

type TTodoCard = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({ _id, title, description, isCompleted, priority }: TTodoCard) => {
  const dispatch = useDispatch();
  const [deleteTodo, { error }] = useDeleteTodoMutation();

  const toggleState = () => {
    console.log('Toggle');
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(_id).unwrap();
      dispatch(deleteTodoLocal(_id)); // Update local state after successful deletion
    } catch (error) {
      console.error('Failed to delete the todo:', error);
    }
  };

  return (
    <div className="bg-white rounded-md flex flex-col sm:flex-row justify-between p-3 border items-center mb-4">
      <div className="flex items-center mb-2 sm:mb-0 gap-2">
        <input
          className="mr-3"
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id={`complete-${_id}`}
        />
        <p className="font-semibold">{title}</p>
      </div>
      <div className="flex items-center mb-2 sm:mb-0 px-4">
        <div
          className={`h-3 w-3 rounded-full mr-2
            ${priority === "high" ? "bg-red-600" : ""}
            ${priority === "medium" ? "bg-yellow-500" : ""}
            ${priority === "low" ? "bg-green-600" : ""}
          `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex items-center mb-2 sm:mb-0">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500 px-4">Pending</p>
        )}
      </div>
      <p className="flex-1 mb-2 sm:mb-0 sm:mr-4">{description}</p>
      <div className="flex items-center space-x-3">
        <Button onClick={handleDelete} className="bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <Button className="bg-primary-gradient text-xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
      {error && <p className="text-red-500">Failed to delete the todo</p>}
    </div>
  );
};

export default TodoCard;
