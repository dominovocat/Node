export const pow = (base,exp)=>{
  return base**exp;
}
export const sum = (...args)=>args.reduce((res,arg)=>res+arg,0);

export const mult = (a,b)=>a*b;
 
const superSecret = 'Elon Musk';

const ssSecret =()=> superSecret;

export default ssSecret;
