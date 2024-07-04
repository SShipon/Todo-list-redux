import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";


const Todo = () => {
    return (
        <Container>
<h2 className="text-center text-sm md:text-2xl lg:text-3xl font-semibold my-10 md:max-w-screen-md md:mx-auto">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 block md:inline-block">
        Write the history of your life,
    </span><br className="md:hidden" />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 block md:inline-block">
        your good sides and bad sides
    </span>
</h2>


            <TodoContainer />
        </Container>
    );
};

export default Todo;