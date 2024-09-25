'use client'
import Header from "../components/header/Header";
import List from "../components/list/List";
import Form from "../components/form/Form";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setTasks } from "../lib/features/tasks/tasksSlice";


export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(setTasks());
  }, []);

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
