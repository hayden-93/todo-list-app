import { Moon } from "react-feather";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <header className="flex justify-between p-4 border-b border-neutral-6 bg-neutral-2">
        <img src="/logo.svg" alt="to-do app logo" className="h-6 w-auto tablet:h-8 desktop:h-10" />
        <Moon className="text-sky-9 desktop:h-8 desktop:w-8" />
      </header>
      <main className="h-full bg-neutral-1">{props.children}</main>
    </>
  );
};

function App() {
  return <Layout></Layout>;
}

export default App;
