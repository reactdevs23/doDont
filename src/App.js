import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const data = {
    fontFamily: "'Noto Sans', monospace",
    headerFontFamily: "'Martel Sans', sans-serif",
    primaryColor: "#E9E8E9",
    secondaryColor: "#90A39C",
    textColor: "#565656",

    dosData: {
      title: "Do",
      info: "Take thorough look at your options taking into account your needs and budget",
    },
    dontData: {
      title: "Don't",
      info: "Don't look at options outside you price range.It will only make the process frustrating!",
    },
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,
        "--secondaryColor": data.secondaryColor,
        "--textColor": data.textColor,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
