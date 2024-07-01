import { useAppSelector } from "@/redux/hooks/hook";
import AddTodoDialog from "./AddTodoDialog";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    const { todos } = useAppSelector(state => state.todos);

    const sortedTodos = [...todos].sort((a, b) => {
        const aCompleted = a.isCompleted ?? false;
        const bCompleted = b.isCompleted ?? false;
        // Sorting logic: false (pending) comes before true (completed)
        return Number(aCompleted) - Number(bCompleted);
    });

    return (
        <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row justify-between mb-5 space-y-4 sm:space-y-0">
                <AddTodoDialog />
                <TodoFilter />
            </div>
            <div className="bg-red-500 bg-primary-gradient w-full h-full rounded-xl p-1 sm:p-2 md:p-3 lg:p-4">
                <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-7 w-full h-full rounded-lg space-y-3">
                    {sortedTodos.length > 0 ? (
                        sortedTodos.map((item) => (
                            <TodoCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                isCompleted={item.isCompleted} // Pass the isCompleted prop
                            />
                        ))
                    ) : (
                        <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
                            <p>There is no Task pending</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;