import Calculator from "./components/Calculator"

function App() {
  
  return (
    <main className="h-full ">
      <div className="flex flex-col items-center justify-center h-full max-[800px]:h-[900px] gap-12  ">
      <h1 className="text-[#3f6465] uppercase 
      leading-7 tracking-[8px] text-lg mb-3
      max-[800px]:mobile-header">Spli<br/>tter</h1>
      <Calculator/>
      </div>

    </main>
  )
}

export default App
