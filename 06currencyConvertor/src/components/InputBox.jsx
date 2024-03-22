import React, { useId } from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  // below video for understanding why useId
  // https://www.youtube.com/watch?v=OvXEVuKtmfU&ab_channel=CodeNirbhay

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          {/* dynamic way of writing css, Use curly braces with template literals
           for dynamic styles where you want to adjust the classes based on conditions
            or user interactions. */}
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // check : exist karta h 
                  // onchange kaa matlab h jaise option change karunga usd inr toh saare changes toh honge
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled = {currencyDisable}
              >
                  {currencyOptions.map((currency) => ( 
                        // jab jsx mai loop lagate h toh react ho skta h ek element hi banaye jaa rha ho
                        // and again and again render kar rha ho toh usko 

                        // jab jsx mai same component again and again render ho rha ho 
                        // toh same component banega react error nhi dega saamne se par problem 
                        // aa skti h toh to prevent we use key
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                  ))}
              </select>
          </div>
      </div>
  );
}

export default InputBox;
