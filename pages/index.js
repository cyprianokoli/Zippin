export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-whiteZippin text-blackZippin px-6 text-center">
      {/* Header */}
      <header className="py-6">
        <h1 className="text-4xl font-bold text-purpleZippin">Zippin</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Zippin — Affordable Scooter Rentals, Coming Soon!
        </h2>
        <p className="text-lg mb-6 max-w-xl">
          Providing affordable, eco-friendly, and convenient mobility for Canadian communities.
        </p>

        {/* Email Signup (non-functional for now) */}
        <form className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none"
          />
          <button className="bg-purpleZippin text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
            Notify Me
          </button>
        </form>

        {/* App Links */}
        <div className="flex gap-4 mb-6">
          <a href="#" className="bg-black text-white px-4 py-2 rounded-lg">iOS App</a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-lg">Android App</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-300 w-full text-center text-sm">
        <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a> |
        <a href="/terms" className="mx-2 hover:underline">Terms of Service</a>
      </footer>
    </div>
  );
}
