import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";

function App() {
  const componentPdf = useRef();

  const generatePdf = useReactToPrint({
    content: () => componentPdf.current, // Fixed line: Use a function returning the ref
    documentTitle: "userdata",
    onAfterPrint: () => alert("PDF has been printed successfully!"),
  });

  return (
    <>
      <div ref={componentPdf} style={{ padding: "20px", fontSize: "16px" }}>
        <h1>PDF Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde
          dolores odit qui, sed, consequatur ullam debitis repellat itaque rerum
          minima. Recusandae quae quas iste ducimus ad ipsum maxime pariatur.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          repellendus asperiores, inventore modi, fugit atque obcaecati optio
          totam officiis voluptas nemo enim aut at illum. Facilis culpa laborum
          ipsa asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Impedit, eligendi esse? Maxime illum architecto reprehenderit!
          Nisi ipsa inventore error ex et molestiae quae quasi alias ipsum,
          delectus omnis ab rerum? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fuga consequuntur earum delectus atque itaque,
          similique cumque, doloribus accusantium reiciendis, vitae quos numquam
          tempora esse qui suscipit. Earum iusto quas a.
        </p>
      </div>
      <button onClick={generatePdf} style={{ marginTop: "20px" }}>
        Print PDF
      </button>
    </>
  );
}

export default App;