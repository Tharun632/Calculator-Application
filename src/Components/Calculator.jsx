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
            <h1 className='text-3xl sm:text-4xl font-semibold sm:font-semibold  text-center sm:text-center sm:tracking-wide tracking-wide py-4 sm:py-4'>Calculator</h1>
            <div className='flex sm:flex-col flex-col sm:justify-center justify-center sm:items-center items-center'>
            <div className="w-[40%] sm:w-[50%] min-h-[400px] sm:min-h-[600px] bg-white/90 border-2 border-slate-500">
                <input type="text" placeholder="0" id="answer" value = {result} 
                className='w-full sm:w-full h-[100px] sm:h-[100px] bg-white/90 text-gray-600 sm:text-gray-600  sm:text-right text-right sm:p-2 p-2 text-3xl sm:text-3xl font-semibold sm:font-semibold border-2 border-slate-600'/>
                <input type="button" value = "(" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl '
                 onClick = {handleClick}/>
                <input type="button" value = ")" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl ' 
                onClick = {handleClick}/>
                <input type="button" value = "%" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = "AC" className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {Cleardisplay}/>
                <input type="button" value = '7' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '8' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '9' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '/' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value = '4' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '5' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '6' className='w-[25%] h-[100px] bg-slate-800 text-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '*' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>  
                <input type="button" value = '1' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '2' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>  
                <input type="button" value = '3' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'
                 onClick = {handleClick}/>
                <input type="button" value = '-' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl'  
                onClick = {handleClick}/>
                <input type="button" value = '0' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
                <input type="button" value="." className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' onClick={handleClick} />
                <input type="button" value = '=' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {Calculate} />
                <input type="button" value = '+' className='w-[25%] h-[100px] bg-slate-800 text-white border-2 border-r-white text-3xl sm:text-3xl' 
                onClick = {handleClick}/>
            </div>
            </div>
        </div>
    );
};
export default Calculator;
