'use client'
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import Button from "@/components/button/Button";
import { useSelector } from "react-redux";


export default function Home() {

  const tasks = useSelector((state) => state.tasks);

  return (
    <div
      className="flex flex-col w-[340px]"
    >
      <Header />
      <List list={tasks} />
      <Button type="add" label="add" />
      <Button type="delete" label="delete" />
      {/* all components */}
    </div>
  );
};
