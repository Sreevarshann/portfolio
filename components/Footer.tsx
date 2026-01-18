'use client'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-lg">Sreevarshan Sathiyamurthy</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2026 Sreevarshan Sathiyamurthy. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
