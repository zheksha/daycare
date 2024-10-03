import { useState } from 'react'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Delete } from 'lucide-react'

const Tablet = () => {
  const [value, setValue] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  // Handle input slot change
  const handleInputChange = (index, newValue) => {
    const otpArray = value.split('')
    otpArray[index] = newValue
    setValue(otpArray.join(''))
    if (index < 5 && newValue !== '') {
      setActiveIndex(index + 1) // move to next slot
    }
  }

  // Handle number click
  const handleNumberClick = (number: number) => {
    if (activeIndex < 6) {
      handleInputChange(activeIndex, number.toString())
    }
  }

  // Handle clearing one by one (like backspace)
  const handleClearLast = () => {
    if (activeIndex > 0 || value[activeIndex]) {
      let newActiveIndex = activeIndex
      const otpArray = value.split('')

      // Find the last filled slot if the current activeIndex is empty
      if (!value[activeIndex] && activeIndex > 0) {
        newActiveIndex = activeIndex - 1
      }

      otpArray[newActiveIndex] = '' // Clear the last filled slot
      setValue(otpArray.join(''))
      setActiveIndex(newActiveIndex) // Set focus to the cleared slot
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                value={value[index] || ''}
                onFocus={() => setActiveIndex(index)}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <div
          onClick={handleClearLast} // Clear last input on click
          className="font-medium  px-3 border text-center items-center hover:bg-slate-200 flex  justify-center content-center cursor-pointer bg-slate-200"
        >
          <Delete color="#27272a" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
          <div
            key={number}
            onClick={() => handleNumberClick(number)} // Update OTP on click
            className={`font-medium border text-center hover:bg-slate-200 p-9 cursor-pointer ${
              index === 9 ? 'col-span-3 ' : ''
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Tablet }
