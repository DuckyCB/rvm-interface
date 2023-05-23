import { useState } from "react";
import "./App.css";
import { Keypad } from "./pages/Keypad";
import { Welcome } from "./pages/Welcome";
import { NewBottle } from "./pages/NewBottle";
import { End } from "./pages/End";

export enum Pages {
  Welcome = 0,
  NewBottle = 1,
  Keypad = 2,
  End = 3,
}

export type BottleType = {
  brand: string;
  points: number;
}

function App() {
  // const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [page, setPage] = useState<Pages>(Pages.Welcome);

  // const handleFullscreen = () => {
  //   if (!isFullscreen) {
  //     const elem = document.documentElement;
  //     elem.requestFullscreen();
  //   } else {
  //     document.exitFullscreen();
  //   }
  //   setIsFullscreen(currentFullScreen => !currentFullScreen);
  // };

  const handleNextPage = () => {
    if (page === Pages.End) {
      setPage(Pages.Welcome)
    } else {
      setPage(actualPage => actualPage + 1)
    }
  }

  const handleFinish = () => {
    // TODO: guardar las cosas agregadas por el usuario
    handleNextPage();
  }

  const newBottle: BottleType = {brand: 'Mastra', points: 15}

  const pageRouter = () => {
    switch (page) {
      case Pages.Welcome:
        return <Welcome />;
      case Pages.Keypad:
        return <Keypad/>;
      case Pages.NewBottle:
        return <NewBottle newBottle={newBottle} handleFinish={handleFinish}/>
      case Pages.End:
        return <End/>
      default:
        return <Welcome />
    }
  }

  return (
    <>
      {/* <button onClick={handleFullscreen}>
        {isFullscreen ? "x" : "f"}
      </button> */}
      <button style={{
        fontSize: '1rem', 
        position: 'absolute',
        top: 0,
        right: 0,
      }} onClick={handleNextPage}>
        Next
      </button>
      {pageRouter()}
    </>
  );
}

export default App;
