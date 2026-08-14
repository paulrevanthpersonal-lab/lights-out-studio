const test=require("node:test"),assert=require("node:assert/strict"),vm=require("node:vm"),{readFileSync}=require("node:fs");const context={};context.globalThis=context;vm.runInNewContext(readFileSync(require.resolve("../assets/core.js"),"utf8"),context);const core=context.LightsCore;
test("center move toggles cross",()=>assert.equal(JSON.stringify(core.toggle(Array(9).fill(0),3,1,1)),JSON.stringify([0,1,0,1,1,1,0,1,0])));
test("corner move toggles three cells",()=>assert.equal(core.toggle(Array(9).fill(0),3,0,0).reduce((a,b)=>a+b),3));
test("all dark is solved",()=>assert.equal(core.solved([0,0,0,0]),true));
test("seeded random boards are deterministic and solvable",()=>{const first=core.seededRandom(5,5052026,11),second=core.seededRandom(5,5052026,11);assert.equal(JSON.stringify(first.board),JSON.stringify(second.board));const solution=core.solve(first.board,5);assert.ok(solution.length>0);let board=first.board;solution.forEach(([r,c])=>board=core.toggle(board,5,r,c));assert.equal(core.solved(board),true);});
test("hint returns the first move in a valid solution",()=>{const board=core.seeded(4,[[0,0],[2,2]]),hint=core.findHint(board,4);assert.ok(hint);assert.ok(hint.remaining>=1);});
test("score penalizes moves, time, and hints",()=>assert.ok(core.score({size:5,moves:12,seconds:40,hints:0})>core.score({size:5,moves:15,seconds:60,hints:1})));
