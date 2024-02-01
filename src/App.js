import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const data = {
    fontFamily: "'Noto Sans', monospace",
    headerFontFamily: "'Martel Sans', sans-serif",
    background: "#fff",

    dosData: {
      title: "Do",
      info: "Take thorough look at your options taking into account your needs and budget",
      textColor: "#565656",
      background: "#E9E8E9",
      iconBg: "#90A39C",
      icon: <i className="fa-solid fa-check"></i>,
    },
    dontData: {
      title: "Don't",
      info: "Don't look at options outside you price range.It will only make the process frustrating!",
      textColor: "#565656",
      background: "#90A39C",
      iconBg: "#E9E8E9",
      icon: <i className="fa-solid fa-xmark"></i>,
    },
  };
  return (
    <div
      style={{
        fontFamily: data.fontFamily,
        "--background": data.background,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
