import { Moon } from "react-feather";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <header className="flex justify-between p-4 border-b border-neutral-6 bg-neutral-2">
        <img src="/logo.svg" alt="to-do app logo" className="h-6 w-auto" />
        <Moon className="text-sky-9" />
      </header>
      <main className="bg-neutral-1">{props.children}</main>
    </>
  );
};

function App() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-sky-9 font-body">To-Do list</h1>
    </Layout>
  );
}

export default App;
