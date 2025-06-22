import { useRef } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { ButtonAtom } from "./buttonAtom";

function App() {
  let ref = useRef(Array(5).fill(0))

  return (
    <RecoilRoot>
    <div>
      {Array(5).fill(1).map((x,index)=>{
        return <OtpButton reference={e => ref.current[index] = e} key={index} index={index}
        next={()=>{
          ref.current[index+1].focus();
        }}
        back={()=>{
          ref.current[index-1].focus();
        }}
        />
        
})}
    </div>
    </RecoilRoot>
  )
}

function OtpButton({reference,next,back,index}){
  let val = useRecoilValue(ButtonAtom(index))
  let setVal = useSetRecoilState(ButtonAtom(index));
  return (
    <span>
      <input type="text" value={val} ref={reference} onChange={(e)=>{
          setVal(e.target.value);
          next();
      }} onKeyUp={(e)=>{
        if(e.code == 'Backspace') back();
        return;
      }} 
      className="text-white bg-blue-800 cursor-pointer outline-none px-4 m-1 w-[40px] h-[50px] rounded-xl"/>
    </span>
  )
}

export default App
