import Header from "@/components/header/Header";
import List from "@/components/list/List";

const tasks = [
  {
    id: '098474',
    title: 'Set up database',
    description: 'Create account on mongo DB atlas and connect it to repo.',
    dueDate: new Date(),
    isDone: false
  },
  {
    id: '09dw74',
    title: 'Create API endpoints',
    description: 'Create account on mongo DB atlas and connect it to repo.',
    dueDate: new Date(),
    isDone: false
  }
]

export default function Home() {
  return (
    <div
      className="flex flex-col w-[340px]"
    >
      <Header />
      <List list={tasks} />
      {/* all components */}
    </div>
  );
};
