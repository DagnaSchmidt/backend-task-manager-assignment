import Header from "@/components/header/Header";
import Task from "@/components/task/Task";

const task = {
  title: 'Set up database',
  description: 'Create account on mongo DB atlas and connect it to repo.',
  dueDate: new Date(),
  isDone: false
}

export default function Home() {
  return (
    <div
      className="flex flex-col w-[340px]"
    >
      <Header />
      <Task {...task} />
      {/* all components */}
    </div>
  );
};
