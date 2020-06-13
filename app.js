const {Project, Workspace} = require('epanet-js')
const {fs} = require('browserfs');


 const net1 = fs.readFileSync('net1.inp');

//   var fileInput1 = document.getElementById('epanetPicker');
//   if (fileInput1){
//       fileInput1.addEventListener('change', function(e) {
//         const response = await fetch(fileInput1.files[0]);
//         const data = await response.blob       
//           console.log(net1);          
//       });
//   }

  

// function runSimulation(network){
// const ws = new Workspace();
// const model = new Project(ws);

// ws.writeFile('net1.inp', network);

// model.open('net1.inp', 'report.rpt', 'out.bin');

// const n11Index = model.getNodeIndex('11')

// model.openH();
// model.initH(11);

// let tStep = Infinity;
// do {
//   const cTime = model.runH();
//   const pressure = model.getNodeValue(n11Index, 11)
//   console.log(`Current Time: - ${cTime}, Node 11 Pressure: ${pressure.toFixed(2)}`)

//   tStep = model.nextH();
// } while (tStep > 0);

// model.saveH();
// model.closeH();
// }