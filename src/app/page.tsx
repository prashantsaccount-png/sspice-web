// src/app/page.tsx
import Image from "next/image";

export const metadata = {
  title: "SSPICE Pizza — Badlapur",
  description: "Local-first pizza ordering — Badlapur only. Coming soon!",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amber-50 p-6">
      <div className="w-full max-w-3xl rounded-2xl shadow-xl bg-white/90 backdrop-blur p-8">
        <header className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl font-bold">
            SP
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">SSPICE Pizza</h1>
            <p className="text-sm text-gray-600">Fresh local pizzas — Badlapur delivery only (pincode 421503)</p>
          </div>
        </header>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Ordering — Coming Soon</h2>
            <p className="mt-3 text-gray-600">
              We’re setting up online ordering. For now, you can explore the menu and sign up for early access.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="text-gray-700">• Menu management & images</li>
              <li className="text-gray-700">• Secure payments (Razorpay / Paytm)</li>
              <li className="text-gray-700">• Real-time order tracking</li>
              <li className="text-gray-700">• Loyalty & wallet</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-block px-5 py-2 rounded-lg bg-amber-600 text-white font-semibold shadow"
              >
                Get notified
              </a>
              <a
                href="#"
                className="inline-block px-5 py-2 rounded-lg border border-amber-600 text-amber-600 font-semibold"
              >
                View demo
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-2xl bg-amber-100 flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-amber-700">🍕</div>
              <p className="mt-4 text-gray-700 text-center px-4">Hot & fresh — Badlapur delivery</p>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SSPICE Pizza — Badlapur. Built for local deliveries.</p>
        </footer>
      </div>
    </main>
  );
}
