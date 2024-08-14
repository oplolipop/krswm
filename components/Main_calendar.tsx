
"use client"
import { add, eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameMonth, isToday, parse, startOfMonth, startOfToday } from 'date-fns'
import React, { useState } from 'react'

const Main_calendar = () => {
  
  let count = 0
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    return count = count - 1
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    return count = count + 1
  }
  
  function addevent() {
    <div className="lg:flex lg:h-full lg:flex-col ">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
            {format(firstDayCurrentMonth, 'MMM yyyy')}
        </h1>
      </header>
    </div>
  }

  return (
    
    <div className="lg:flex lg:h-full lg:flex-col ">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          {format(firstDayCurrentMonth, 'MMM yyyy')}
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button onClick={previousMonth} type="button" className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50">
              <span className="sr-only">Previous month</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </button>
            {/*TODO: write function for switching from previous/next month to current month*/}
            <button type="button" className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block">Today</button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button onClick={nextMonth} type="button" className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50">
              <span className="sr-only">Next month</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="relative">
              <button type="button" className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                Month view
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
              
            </div>
            <div className="ml-6 h-6 w-px bg-gray-300"></div>
            {/*TODO: write addevent function to add tasks directly to the calendar*/}
            <button onClick={addevent} type="button" className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Add event</button>
          </div>
          <div className="relative ml-6 md:hidden">
            <button type="button" className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open menu</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </button>

            
            <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabIndex="-1">
              <div className="py-1" role="none">
                
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-0">Create event</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-1">Go to today</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-2">Day view</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-3">Week view</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-4">Month view</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-5">Year view</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-white text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span>Sun</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Mon</span> 
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Tue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Wed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Thu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Fri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>Sat</span>
          </div>
          
        </div>
        <div className="flex text-xs leading-6 text-gray-700 lg:flex-auto"> {/* calendar background */}
          <div className="w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            
            {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      'py-10' // overall calendar height
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && 'text-white',
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          'text-red-500',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-900',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-400',
                        isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          'bg-gray-900',
                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>
                  </div>
                )
              )
            }
            
            
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Main_calendar