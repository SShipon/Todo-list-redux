import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { 
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger, 
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hooks/hook";
import { AddTodo } from "@/redux/features/todoSlice";

const AddTodoDialog = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();
  
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const RandomString = Math.random().toString(36).substring(2, 7);

        const taskDetails = {
            id: RandomString,
            title: task,
            description: description,
        };
        dispatch(AddTodo(taskDetails));
        console.log(taskDetails);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                    <DialogDescription>
                        Add your Task That you want to finish Todo 
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="sm:text-right">
                                Task
                            </Label>
                            <Input 
                                onBlur={(e) => setTask(e.target.value)}
                                id="task"
                                className="col-span-1 sm:col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="sm:text-right">
                                Description
                            </Label>
                            <Input 
                                onBlur={(e) => setDescription(e.target.value)}
                                id="description"
                                className="col-span-1 sm:col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoDialog;
