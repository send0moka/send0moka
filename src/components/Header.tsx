import React from "react";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 text-white bg-[#059669] rounded-sm font-bold text-[13px] leading-none">
              <span className="ml-[1px] -translate-y-[1.5px]">/</span>
            </div>
            <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 flex items-center">
              jehian<span className="text-[#059669]">.me</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {["projects", "t.i.l", "experience", "studio", "contact"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-sm font-semibold capitalize text-[#059669] hover:opacity-80 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/send0moka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://threads.com/jehianth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              {/* Official Threads Logo - Adjusted size to match GitHub visually */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 192 192"
                fill="currentColor"
              >
                <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H96.9569C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
              </svg>
            </a>
          </div>

          <div className="h-4 w-[1px] bg-zinc-300 mx-1" />

          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white/50 backdrop-blur-sm border border-zinc-200 rounded-lg hover:bg-white transition-colors group">
            <LayoutGrid size={16} className="text-zinc-500 group-hover:text-zinc-900" />
            <span>Quick Access</span>
            <kbd className="flex items-center justify-center w-5 h-5 ml-1 text-[10px] font-bold text-zinc-400 bg-zinc-100 border border-zinc-300 rounded shadow-inner">
              Q
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
