import Board from "@/components/Board";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className=''>
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
