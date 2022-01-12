import { Moon } from "react-feather";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <header className="relative flex items-center justify-between p-4 bg-neutral-2">
        <img src="/logo.svg" alt="to-do app logo" className="h-6 w-auto tablet:h-8 desktop:h-10" />
        <Moon className="text-sky-9 tablet:h-8 tablet:w-8" />
        <span className="absolute bottom-0 left-0 right-0 border-b border-neutral-6" />
      </header>
      <main className="overflow-auto h-full bg-neutral-1">{props.children}</main>
    </>
  );
};

function App() {
  return <Layout></Layout>;
}

export default App;
