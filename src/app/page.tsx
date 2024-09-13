'use client'
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import Form from "@/components/form/Form";
import { useSelector } from "react-redux";


export default function Home() {

  const tasks = useSelector((state) => state.tasks);

  return (
    <div
      className="flex flex-col w-[340px]"
    >
      <Header />
      <List list={tasks} />
      <Form />
    </div>
  );
};
