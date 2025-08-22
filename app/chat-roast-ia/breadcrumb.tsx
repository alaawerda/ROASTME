import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb() {
  return (
    <nav className="bg-white/60 backdrop-blur-sm border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              href="/" 
              className="flex items-center text-gray-500 hover:text-flame-orange transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Accueil
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            <span className="text-flame-orange font-medium">
              Chat Roast IA
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}
