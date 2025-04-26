import '../index.css';
import {useState} from 'react';

function Calculator(){
    const[result, setResult] = useState('');
     const handleClick =(event)=>{
        setResult(result.concat(event.target.value));
     } 
     const Cleardisplay =()=>{
        setResult('');
     }
     const Calculate =()=>{
        setResult(eval(result).toString());
     }
    return(
        <div className='container mx-auto my-16 sm:my-16 lg:my-16 xl:my-16'>
            <h1 className='py-4 text-3xl font-semibold tracking-wide text-center sm:text-4xl sm:font-semibold sm:text-center sm:tracking-wide sm:py-4'>Calculator</h1>
            <div className='flex flex-col items-center justify-center sm:flex-col sm:justify-center sm:items-center'>
            <div className="max-w-[100%] sm:max-w-[50%] min-h-[400px] sm:min-h-[500px] bg-white/90 border-2 border-slate-500">
                <input type="text" placeholder="0" id="answer" value = {result} 
                className='w-[100%] sm:w-[100%] h-[100px] sm:h-[100px] bg-white/90 text-gray-600 sm:text-gray-600  sm:text-right text-right sm:p-2 p-2 text-3xl sm:text-3xl font-semibold sm:font-semibold border-2 border-slate-600'/>
                <input type="button" value = "(" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl '
                 onClick = {handleClick}/>
                <input type="button" value = ")" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl ' 
                onClick = {handleClick}/>
                <input type="button" value = "%" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = "AC" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {Cleardisplay}/>
                <input type="button" value = '7' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '8' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '9' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '/' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '4' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '5' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '6' className='w-[25%] h-[100px] bg-slate-800 text-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '*' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>  
                <input type="button" value = '1' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '2' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>  
                <input type="button" value = '3' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '-' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl'  
                onClick = {handleClick}/>
                <input type="button" value = '0' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value="." className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' onClick={handleClick} />
                <input type="button" value = '=' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {Calculate} />
                <input type="button" value = '+' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-2xl sm:text-3xl' 
                onClick = {handleClick}/>
            </div>
            </div>
        </div>
    );
};
export default Calculator;