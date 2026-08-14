(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;root.LightsCore=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
  const index=(row,col,size)=>row*size+col;
  function toggle(board,size,row,col){const next=[...board];[[row,col],[row-1,col],[row+1,col],[row,col-1],[row,col+1]].forEach(([r,c])=>{if(r>=0&&c>=0&&r<size&&c<size){const i=index(r,c,size);next[i]=next[i]?0:1;}});return next;}
  const solved=board=>board.every(value=>value===0);
  function seeded(size,moves){let board=Array(size*size).fill(0);moves.forEach(([r,c])=>{board=toggle(board,size,r,c);});return board;}
  function solve(board,size){let best=null;const possibilities=1<<size;for(let mask=0;mask<possibilities;mask++){let candidate=[...board],presses=[];for(let col=0;col<size;col++)if(mask&(1<<col)){candidate=toggle(candidate,size,0,col);presses.push([0,col]);}for(let row=1;row<size;row++)for(let col=0;col<size;col++)if(candidate[index(row-1,col,size)]){candidate=toggle(candidate,size,row,col);presses.push([row,col]);}if(solved(candidate)&&(!best||presses.length<best.length))best=presses;}return best;}
  function findHint(board,size){const solution=solve(board,size);return solution?.length?{row:solution[0][0],col:solution[0][1],remaining:solution.length}:null;}
  function seededRandom(size,seed,scramble=Math.max(7,size*2)){let value=seed>>>0,moves=[];const random=()=>{value=(value*1664525+1013904223)>>>0;return value/4294967296;};for(let i=0;i<scramble;i++)moves.push([Math.floor(random()*size),Math.floor(random()*size)]);return{board:seeded(size,moves),moves};}
  function score({size,moves,seconds,hints=0}){const base=size*size*100;return Math.max(100,Math.round(base-moves*12-seconds*2-hints*75));}
  return{toggle,solved,seeded,solve,findHint,seededRandom,score,index};
});
