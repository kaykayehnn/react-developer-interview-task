import { useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.hash);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      setLocation(window.location.hash);
    };

    window.addEventListener("hashchange", handler);

    return () => {
      window.removeEventListener("hashchange", handler);
    };
  });

  if (location.startsWith("#/page2")) {
    let array = location.split("/");
    let id = array[array.length - 1];
    return <Page2 id={id} />;
  }

  return (
    <>
      <Page1 />
    </>
  );
}

export default App;
