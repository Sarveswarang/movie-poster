import { useState } from 'react'
export function Color() {
    const [color, setcolor] = useState('red');
    const abc = {

      backgroundColor: color,
    }
    const [colorlist,setcolorlist]=useState(["green", "yellow", "orange"]);
    return (
      <div>
        <input style={abc} type="text" onChange={(a) => (setcolor(a.target.value))} 
        value={color}/>
        <button onClick={()=>setcolorlist([...colorlist,color])}>Add Color</button>
        {colorlist.map((nm)=><Colorbox list={nm} />)}
        
      </div>
    );
  }
  function Colorbox({list}){
    const Colorboxstyle={
      height:"20px",
      width:"auto",
      marginTop:"10px",
      background:list,

    };
    return(
      <div style={Colorboxstyle}></div>
    );

  }