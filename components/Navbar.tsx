"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home" href="#home">
              <div className="container flex items-center space-x-2">
                <span className="text-2xl font-bold">Robin</span>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                aria-label={navbar ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={navbar}
                aria-controls="primary-navigation"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} aria-hidden="true" /> : <IoMdMenu size={30} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            id="primary-navigation"
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    href={`#${item.page}`}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  type="button"
                  aria-label="Switch to light theme"
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  aria-label="Switch to dark theme"
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
