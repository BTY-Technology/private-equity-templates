export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 sm:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl text-center">
        <div
          className="text-2xl font-light tracking-widest text-white/60 mb-4 font-heading"
        >
          APEX CAPITAL
        </div>
        <p className="text-xs font-light tracking-widest text-neutral-600">
          © {currentYear} Apex Capital Partners — Building Exceptional
          Businesses
        </p>
      </div>
    </footer>
  );
}
