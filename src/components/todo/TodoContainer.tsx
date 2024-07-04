
import { useGetTodosQuery } from "@/redux/api/api";
import TodoCard from "./TodoCard";
import AddTodoDialog from "./AddTodoDialog";
import TodoFilter from "./TodoFilter";
import Loading from "@/pages/Loading";
import FidgetSpinnerLoading from "@/pages/FidgetSpinnerLoading";
import PuffSpinners from "@/pages/PuffSpinners";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean,
  priority:string

};

const TodoContainer = () => {
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(todos)

  if (isLoading) {
    return <PuffSpinners />
  }

  if (isError) {
    return <FidgetSpinnerLoading />
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoDialog />
        <TodoFilter />
      </div>
      <div className="bg-red-500 bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        {todos?.data?.length > 0 ? (
            todos.data.map((item: Todo) => <TodoCard key={item._id} {...item} />)
          ) : (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
              <p> <Loading /> There is no history here. Please add your history </p>
            </div>
          )}
          </div>
      </div>
    </div>
  );
};

export default TodoContainer;
