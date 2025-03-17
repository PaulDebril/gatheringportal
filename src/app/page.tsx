export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-50 blur-sm bg-cover" style={{ backgroundImage: "url('images/bg2.png')" }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Gathering Portal</h1>
        </div>
      </div>
      
    </main>
  )
}
