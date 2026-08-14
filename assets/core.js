(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;root.LightsCore=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
  const index=(row,col,size)=>row*size+col;
  function toggle(board,size,row,col){const next=[...board];[[row,col],[row-1,col],[row+1,col],[row,col-1],[row,col+1]].forEach(([r,c])=>{if(r>=0&&c>=0&&r<size&&c<size){const i=index(r,c,size);next[i]=next[i]?0:1;}});return next;}
  function solved(board){return board.every(value=>value===0);}
  function seeded(size,moves){let board=Array(size*size).fill(0);moves.forEach(([r,c])=>{board=toggle(board,size,r,c);});return board;}
  function findHint(board,size){for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(board[index(r,c,size)])return {row:r,col:c};return null;}
  return{toggle,solved,seeded,findHint,index};
});
