const test=require("node:test"),assert=require("node:assert/strict"),core=require("../assets/core.js");
test("center move toggles cross",()=>assert.deepEqual(core.toggle(Array(9).fill(0),3,1,1),[0,1,0,1,1,1,0,1,0]));
test("corner move toggles three cells",()=>assert.equal(core.toggle(Array(9).fill(0),3,0,0).reduce((a,b)=>a+b),3));
test("all dark is solved",()=>assert.equal(core.solved([0,0,0,0]),true));
test("seeded boards remain solvable by reversing moves",()=>{const moves=[[0,0],[1,1],[2,2]];let board=core.seeded(3,moves);moves.reverse().forEach(([r,c])=>board=core.toggle(board,3,r,c));assert.equal(core.solved(board),true);});
