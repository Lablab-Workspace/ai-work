import Board from "@/components/Board";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
    
      {/* header */}
      <Header/>
      {/* board */}
      <Board/>
      {/* <h1>AI WORK</h1> */}
      {/* footer */}
      <Footer/>
      
    </main>
  )
}
