import {useState, useCallback, useEffect, useRef} from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is used for memoization 
  // it prevents re rendering of code again and again
  // ye function ko sirf run karne ke liye nhi mainly memoization ke liye h cache mai rkhta h

  // ye callback h ki jinpe aapki dependency h and possible run hoga toh uss method ko memoize karlo  
  const passWordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "`~!@#$%^&*(){}[]";
    for(let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])
  // By including setPassword as a dependency, you ensure that the callback always uses the most up-to-date
  // reference of setPassword. This prevents potential issues with closures where an outdated version of setPassword might be used.

  useEffect(passWordGenerator, [length, numberAllowed, charAllowed, passWordGenerator]);
  // ye sbse phle at the time of page reload ye run hota h sbse phle
  // uske baad dependency array mai kisi mai bhi change hota h toh run honga

  // agar imme kuch bhi changes honge toh dubara run kar do
  // Infinite Loop Potential: While including passWordGenerator itself in the dependency 
  // array might appear to cause an infinite loop, it's essential to remember that functions
  //  in JavaScript are first-class citizens. This means they behave like any other value and
  //   are not re-created on every render. Therefore, including passWordGenerator in the
  //  array won't trigger the callback for changes within the function itself.

  const copyPasswordToClipboard = () => {
    // passwordRef.current?.select(); 
    // passwordref use hi user kaaa experience bdhane ke liye h to give satisfaction ki copy hua h
    window.navigator.clipboard.writeText(password);
  }

  // useref hook : kisi bhi cheez kaa reference lena ho toh use hota h
  const passwordRef = useRef(null); // iske bina bhi copy paste possible h just for better exoerience in ui


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
           />

           <button
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           >
            Copy
           </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex gap-3">
            <div className='flex items-center gap-x-1'>
              <input 
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    // setNumberAllowed(true);
                    // isse change thodi hoga har baar same true mai jaega 
                    // learning h ye how to change value in events propagation
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={() => {
                        setCharAllowed((prev) => !prev )
                    }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
