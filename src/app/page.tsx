import Header from "@/components/header/Header";
import Task from "@/components/task/Task";

export default function Home() {
  return (
    <div
      className="flex flex-col w-[340px]"
    >
      <Header />
      <Task />
      {/* all components */}
    </div>
  );
};
