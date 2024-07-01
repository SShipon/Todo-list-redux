
import { useAppSelector } from "@/redux/hooks/hook";
import AddTodoDialog from "./AddTodoDialog";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    const {todos} = useAppSelector(state => state.todos)
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoDialog />
                <TodoFilter />
            </div>
            <div className="bg-red-500 bg-primary-gradient w-full  h-full rounded-xl p-[5px]">
                 <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                   {
                    todos.map((item)=>(<TodoCard id={item.id} title={item.title} description={item.description}/>))
                   }
                 </div>
                   {/* <div className="bg-white tex-2xl font-bold p-5 flex justify-center items-center rounded-md">
                    <p>There is no Task pending </p>
                   </div> */}
                  
            </div>
        </div>
    );
};

export default TodoContainer;