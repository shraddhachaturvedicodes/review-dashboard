function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-2xl">🔍</div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Guest<span className="text-orange-500">Lens</span>
          </h1>
          <p className="text-xs text-gray-400">
            Trishul Eco-Homestays · AI-03 · SIP 2026
          </p>
        </div>
      </div>
      <div className="text-xs text-orange-500 font-semibold bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
        AI-Powered
      </div>
    </header>
  )
}

export default Header