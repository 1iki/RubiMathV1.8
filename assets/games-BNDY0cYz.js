import{u as se,a as xe,r as a,j as e,R as fe,m as le,H as Oe,b as Qe}from"./vendor-TSQaGVAF.js";const Ue=()=>{const i=se(),n=xe(),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState(!1),[b,g]=a.useState([]),[w,f]=a.useState(null),[q,A]=a.useState(null),[T,P]=a.useState("Bab 0 Level 1 Penjumlahan"),$=5;a.useEffect(()=>{const c=n.pathname.split("/");let s=0,r=0;n.state&&n.state.babIndex!==void 0?(s=n.state.babIndex,r=n.state.levelIndex||0):c.length>=4&&(s=parseInt(c[c.length-2])||0,r=parseInt(c[c.length-1])||0);const h=new URLSearchParams(n.search),d=h.get("chapter"),S=h.get("level");d!==null&&S!==null&&(s=parseInt(d),r=parseInt(S)),P(`Bab ${s+1} Level ${r+1} Penjumlahan`);const o=`bab${s}_level${r}`;localStorage.setItem("currentLevelKey",o);const u=localStorage.getItem("selectedAvatar");if(u){const C=`avatar_${JSON.parse(u).name}_operations`,M=JSON.parse(localStorage.getItem(C))||{};M[o]="addition",localStorage.setItem(C,JSON.stringify(M)),localStorage.setItem("currentOperation","addition")}},[n]),a.useEffect(()=>{const c=[];for(let s=0;s<$;s++){const r=Math.floor(Math.random()*20)+1,h=Math.floor(Math.random()*10)+1,d=r+h;let S=[];for(;S.length<3;){const u=Math.floor(Math.random()*40)+1;u!==d&&!S.includes(u)&&S.push(u)}const o=[d,...S];for(let u=o.length-1;u>0;u--){const p=Math.floor(Math.random()*(u+1));[o[u],o[p]]=[o[p],o[u]]}c.push({num1:r,num2:h,correctAnswer:d,options:o})}g(c)},[]);const y=c=>{f(c);const s=c===b[t].correctAnswer;A(s),s&&w!==c?(j(!0),v(x+1),new Audio("/src/assets/ding.mp3").play().catch(h=>console.log("Audio play failed:",h))):!s&&w!==c&&new Audio("/src/assets/fail.mp3").play().catch(h=>console.log("Audio play failed:",h)),setTimeout(()=>{j(!1)},2e3)},B=()=>{f(null),A(null),t<$-1?m(t+1):i(`/hasil/${x}`,{state:{score:x,totalQuestions:$}})};if(b.length===0)return e.jsx("div",{className:"loading",children:"Loading..."});const l=b[t];return e.jsxs("div",{className:"game-container",style:{backgroundColor:"#FF5722"},children:[N&&e.jsx(fe,{recycle:!1}),e.jsx("div",{className:"close-button",children:e.jsx("button",{onClick:()=>i("/category"),children:"×"})}),e.jsxs("div",{className:"question-section",children:[e.jsx("h1",{className:"game-title",style:{color:"white",fontSize:"1.5rem",marginBottom:"10px"},children:T}),e.jsxs("h2",{className:"question-count",children:["Pertanyaan ",t+1," dari ",$]}),e.jsx("div",{className:"question-text",children:e.jsxs("h1",{children:[l.num1,"+",l.num2,"=?"]})}),e.jsx("div",{className:"answer-options",children:l.options.map((c,s)=>e.jsx(le.button,{className:`answer-button ${w===c?c===l.correctAnswer?"correct":"incorrect":""}`,onClick:()=>y(c),whileHover:{scale:1.1},whileTap:{scale:.9},children:c},s))}),e.jsx("div",{className:"next-btn-container",children:e.jsx(le.button,{className:`next-button ${w===null?"disabled":""}`,onClick:B,disabled:w===null,children:"Pertanyaan Selanjutnya"})})]})]})},Ve=()=>{const i=se(),n=xe(),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState(!1),[b,g]=a.useState([]),[w,f]=a.useState(null),[q,A]=a.useState(null),[T,P]=a.useState("Bab 3 Level 1 Pembagian"),$=5;a.useEffect(()=>{const c=n.pathname.split("/");let s=0,r=0;n.state&&n.state.babIndex!==void 0?(s=n.state.babIndex,r=n.state.levelIndex||0):c.length>=4&&(s=parseInt(c[c.length-2])||0,r=parseInt(c[c.length-1])||0);const h=new URLSearchParams(n.search),d=h.get("chapter"),S=h.get("level");d!==null&&S!==null&&(s=parseInt(d),r=parseInt(S)),P(`Bab ${s+1} Level ${r+1} Pembagian`);const o=`bab${s}_level${r}`;localStorage.setItem("currentLevelKey",o);const u=localStorage.getItem("selectedAvatar");if(u){const C=`avatar_${JSON.parse(u).name}_operations`,M=JSON.parse(localStorage.getItem(C))||{};M[o]="division",localStorage.setItem(C,JSON.stringify(M)),localStorage.setItem("currentOperation","division")}},[n]),a.useEffect(()=>{const c=[];for(let s=0;s<$;s++){const r=Math.floor(Math.random()*10)+2,h=Math.floor(Math.random()*12)+1,d=r*h,S=h;let o=[S,S*2,(S+.05).toFixed(2),(S+.01).toFixed(2)];for(let u=o.length-1;u>0;u--){const p=Math.floor(Math.random()*(u+1));[o[u],o[p]]=[o[p],o[u]]}c.push({dividend:d,divisor:r,correctAnswer:S,options:o})}g(c)},[]);const y=c=>{const s=parseFloat(c),r=b[t].correctAnswer;f(s);const h=s===r;A(h),h&&w!==s?(j(!0),v(x+1),new Audio("/src/assets/ding.mp3").play().catch(S=>console.log("Audio play failed:",S))):!h&&w!==s&&new Audio("/src/assets/fail.mp3").play().catch(S=>console.log("Audio play failed:",S)),setTimeout(()=>{j(!1)},2e3)},B=()=>{f(null),A(null),t<$-1?m(t+1):i(`/hasil/${x}`,{state:{score:x,totalQuestions:$}})};if(b.length===0)return e.jsx("div",{className:"loading",children:"Loading..."});const l=b[t];return e.jsxs("div",{className:"game-container",style:{backgroundColor:"#4CD137"},children:[N&&e.jsx(fe,{recycle:!1}),e.jsx("div",{className:"close-button",children:e.jsx("button",{onClick:()=>i("/category"),children:"×"})}),e.jsxs("div",{className:"question-section",children:[e.jsxs("h2",{className:"question-count",children:["Pertanyaan ",t+1," dari ",$]}),e.jsx("div",{className:"question-text",children:e.jsxs("h1",{children:[l.dividend,"/",l.divisor,"=?"]})}),e.jsx("div",{className:"answer-options",children:l.options.map((c,s)=>e.jsx(le.button,{className:`answer-button circle-button ${w===parseFloat(c)?parseFloat(c)===l.correctAnswer?"correct":"incorrect":""}`,onClick:()=>y(c),whileHover:{scale:1.1},whileTap:{scale:.9},children:c},s))}),e.jsx("div",{className:"next-btn-container",children:e.jsx(le.button,{className:`next-button ${w===null?"disabled":""}`,onClick:B,disabled:w===null,children:"Pertanyaan Selanjutnya"})})]}),e.jsx("div",{className:"title-section",children:e.jsx("h1",{children:T})})]})},Xe=()=>{const i=se(),n=xe(),[t,m]=a.useState(1),[x]=a.useState(5),[v,N]=a.useState(0),[j,b]=a.useState({num1:0,num2:0}),[g,w]=a.useState(null),[f,q]=a.useState([]),[A,T]=a.useState(null),[P,$]=a.useState(null),[y,B]=a.useState(!1),[l,c]=a.useState("Bab 1 Level 1 Pengurangan"),[s,r]=a.useState({run:!1,recycle:!0,numberOfPieces:500,gravity:.3});a.useEffect(()=>{const p=n.pathname.split("/");let C=0,M=0;n.state&&n.state.babIndex!==void 0?(C=n.state.babIndex,M=n.state.levelIndex||0):p.length>=4&&(C=parseInt(p[p.length-2])||0,M=parseInt(p[p.length-1])||0);const K=new URLSearchParams(n.search),L=K.get("chapter"),D=K.get("level");L!==null&&D!==null&&(C=parseInt(L),M=parseInt(D)),c(`Bab ${C+1} Level ${M+1} Pengurangan`);const J=`bab${C}_level${M}`;localStorage.setItem("currentLevelKey",J);const Q=localStorage.getItem("selectedAvatar");if(Q){const z=`avatar_${JSON.parse(Q).name}_operations`,I=JSON.parse(localStorage.getItem(z))||{};I[J]="subtraction",localStorage.setItem(z,JSON.stringify(I)),localStorage.setItem("currentOperation","subtraction")}},[n]),a.useEffect(()=>{h()},[]);const h=()=>{const p=Math.floor(Math.random()*30)+10,C=Math.floor(Math.random()*9)+1;b({num1:p,num2:C});const M=p-C;let K=[M,M+1,M-1,M+2];for(K=[...new Set(K)];K.length<4;){const L=M+Math.floor(Math.random()*6)-3;K.includes(L)||K.push(L)}q(d(K))},d=p=>p.sort(()=>Math.random()-.5),S=p=>{w(p),$(g);const C=p===j.num1-j.num2;T(C),C?(B(!0),r({...s,run:!0,recycle:!0,numberOfPieces:500}),setTimeout(()=>{r({...s,run:!1}),setTimeout(()=>{B(!1)},500)},4e3),(!P||P!==j.num1-j.num2)&&N(v+1)):P&&P===j.num1-j.num2&&N(v-1)},o=()=>{t<x?(m(t+1),h(),w(null),T(null)):i(`/hasil/${v}`,{state:{score:v,totalQuestions:x}})},u=()=>{i("/category")};return e.jsxs("div",{className:"game-page",style:{background:"linear-gradient(to bottom, #00c6fb, #005bea)",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px"},children:[e.jsx("button",{className:"close-button",onClick:u,children:e.jsx("span",{className:"close-button-text",children:"×"})}),y&&e.jsx(fe,{width:window.innerWidth,height:window.innerHeight,recycle:s.recycle,run:s.run,numberOfPieces:s.numberOfPieces,gravity:s.gravity}),e.jsxs("div",{style:{marginBottom:"30px",textAlign:"center"},children:[e.jsx("h1",{style:{color:"white",fontSize:"1.8rem",fontWeight:"700",marginBottom:"10px"},children:l}),e.jsxs("h2",{style:{color:"white",fontSize:"1.2rem"},children:["Pertanyaan ",t," dari ",x]})]}),e.jsxs("div",{style:{fontSize:"5rem",color:"white",fontWeight:"bold",marginBottom:"60px",textAlign:"center"},children:[j.num1,"-",j.num2,"=?"]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"30px",maxWidth:"650px"},children:f.map((p,C)=>e.jsx("button",{onClick:()=>S(p),style:{backgroundColor:g===p?"#65b4ff":"#7ad0ff",color:"white",borderRadius:"50%",width:"90px",height:"90px",fontSize:"2.5rem",fontWeight:"bold",boxShadow:"0 5px 15px rgba(0,0,0,0.2)",border:"none",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",outline:g===p?"4px solid rgba(255,255,255,0.5)":"none"},children:p},C))}),e.jsx("button",{onClick:o,disabled:g===null,style:{padding:"15px 40px",backgroundColor:g===null?"rgba(230, 230, 230, 0.5)":"rgba(230, 230, 230, 0.9)",color:g===null?"#888":"#333",border:"none",borderRadius:"10px",fontSize:"1.2rem",fontWeight:"bold",marginTop:"60px",cursor:g===null?"not-allowed":"pointer",boxShadow:"0 4px 8px rgba(0,0,0,0.2)",opacity:g===null?"0.7":"1"},children:"Pertanyaan Selanjutnya"})]})},Ze=()=>{const i=se(),n=xe(),[t,m]=a.useState(1),[x]=a.useState(5),[v,N]=a.useState(0),[j,b]=a.useState({num1:0,num2:0}),[g,w]=a.useState(null),[f,q]=a.useState([]),[A,T]=a.useState(null),[P,$]=a.useState(null),[y,B]=a.useState(!1),[l,c]=a.useState("Bab 2 Level 1 Perkalian"),[s,r]=a.useState({run:!1,recycle:!0,numberOfPieces:500,gravity:.3});a.useEffect(()=>{const u=n.pathname.split("/");let p=0,C=0;n.state&&n.state.babIndex!==void 0?(p=n.state.babIndex,C=n.state.levelIndex||0):u.length>=4&&(p=parseInt(u[u.length-2])||0,C=parseInt(u[u.length-1])||0);const M=new URLSearchParams(n.search),K=M.get("chapter"),L=M.get("level");K!==null&&L!==null&&(p=parseInt(K),C=parseInt(L)),c(`Bab ${p+1} Level ${C+1} Perkalian`);const D=`bab${p}_level${C}`;localStorage.setItem("currentLevelKey",D);const J=localStorage.getItem("selectedAvatar");if(J){const k=`avatar_${JSON.parse(J).name}_operations`,z=JSON.parse(localStorage.getItem(k))||{};z[D]="multiplication",localStorage.setItem(k,JSON.stringify(z)),localStorage.setItem("currentOperation","multiplication")}},[n]),a.useEffect(()=>{h()},[]);const h=()=>{const u=Math.floor(Math.random()*10)+1,p=Math.floor(Math.random()*10)+1;b({num1:u,num2:p});const C=u*p,M=Array.from({length:3},()=>{let L;do L=Math.floor(Math.random()*100)+1;while(L===C);return L}),K=[C,...M].sort(()=>Math.random()-.5);q(K)},d=u=>{w(u),$(g);const p=u===j.num1*j.num2;T(p),p?(B(!0),r({...s,run:!0,recycle:!0,numberOfPieces:500}),setTimeout(()=>{r({...s,run:!1}),setTimeout(()=>{B(!1)},500)},4e3),(!P||P!==j.num1*j.num2)&&N(v+1)):P&&P===j.num1*j.num2&&N(v-1)},S=()=>{t<x?(m(t+1),h(),w(null),T(null)):i(`/hasil/${v}`,{state:{score:v,totalQuestions:x}})},o=()=>{i("/category")};return e.jsxs("div",{className:"game-page multiplication-game",style:{background:"linear-gradient(180deg, #5BCEFA 0%, #FF9DD3 100%)",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative"},children:[e.jsx(le.button,{className:"close-button",onClick:o,whileHover:{scale:1.1},whileTap:{scale:.9},style:{position:"absolute",top:"20px",left:"20px",width:"40px",height:"40px",borderRadius:"50%",background:"#32323e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",border:"none",cursor:"pointer",fontSize:"20px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.3)",zIndex:10},children:"✕"}),y&&e.jsx(fe,{width:window.innerWidth,height:window.innerHeight,recycle:s.recycle,run:s.run,numberOfPieces:s.numberOfPieces,gravity:s.gravity}),e.jsxs("div",{className:"question-container",style:{marginBottom:"40px",textAlign:"center"},children:[e.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:"700",color:"white",marginBottom:"20px"},children:l}),e.jsxs("h2",{style:{fontSize:"1.2rem",fontWeight:"500",color:"white",marginBottom:"20px"},children:["Pertanyaan ",t," dari ",x]}),e.jsxs("div",{style:{fontSize:"4rem",fontWeight:"bold",color:"white"},children:[j.num1,"X",j.num2,"=?"]})]}),e.jsx("div",{className:"options-container",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",maxWidth:"600px",margin:"0 auto 30px auto"},children:f.map((u,p)=>e.jsx(le.button,{className:`option-button ${g===u?A?"correct":"incorrect":""}`,onClick:()=>d(u),whileHover:{scale:1.05},whileTap:{scale:.95},style:{width:"100px",height:"100px",borderRadius:"50%",background:"#FF4FA7",color:"white",fontSize:"2rem",fontWeight:"bold",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"all 0.2s ease"},children:u},p))}),e.jsx("button",{className:"next-button",onClick:S,disabled:g===null,style:{padding:"12px 30px",fontSize:"1.2rem",backgroundColor:"#F3CAE6",color:"#666",border:"none",borderRadius:"30px",cursor:g===null?"not-allowed":"pointer",opacity:g===null?.7:1,boxShadow:"0 3px 5px rgba(0, 0, 0, 0.1)"},children:"Pertanyaan Selanjutnya"})]})},ea=()=>{const i=se(),n=xe(),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState(!1),[b,g]=a.useState([]),[w,f]=a.useState(null),[q,A]=a.useState(null),[T,P]=a.useState("Bab 4 Level 1 Pengukuran Luas"),$=5;a.useEffect(()=>{const c=n.pathname.split("/");let s=3,r=0;n.state&&n.state.babIndex!==void 0?(s=n.state.babIndex,r=n.state.levelIndex||0):c.length>=4&&(s=parseInt(c[c.length-2])||3,r=parseInt(c[c.length-1])||0);const h=new URLSearchParams(n.search),d=h.get("chapter"),S=h.get("level");d!==null&&S!==null&&(s=parseInt(d),r=parseInt(S)),P(`Bab ${s+1} Level ${r+1} Pengukuran Luas`);const o=`bab${s}_level${r}`;localStorage.setItem("currentLevelKey",o);const u=localStorage.getItem("selectedAvatar");if(u){const C=`avatar_${JSON.parse(u).name}_operations`,M=JSON.parse(localStorage.getItem(C))||{};M[o]="area_measurement",localStorage.setItem(C,JSON.stringify(M)),localStorage.setItem("currentOperation","area_measurement")}},[n]),a.useEffect(()=>{g((()=>{const s=[{question:"Berapa luas persegi dengan sisi 4 cm?",correctAnswer:"16 cm²",options:["12 cm²","16 cm²","8 cm²","20 cm²"],image:"/src/assets/pengukuran/persegi.png"},{question:"Berapa luas persegi panjang dengan panjang 5 cm dan lebar 3 cm?",correctAnswer:"15 cm²",options:["15 cm²","8 cm²","12 cm²","18 cm²"],image:"/src/assets/pengukuran/persegi-panjang.png"},{question:"Area pada gambar ini diukur dengan satuan persegi kecil. Berapa luas area tersebut?",correctAnswer:"9 satuan",options:["9 satuan","7 satuan","8 satuan","10 satuan"],image:"/src/assets/pengukuran/area-kotak.png"},{question:"Berapa luas segitiga dengan alas 6 cm dan tinggi 4 cm?",correctAnswer:"12 cm²",options:["10 cm²","12 cm²","14 cm²","24 cm²"],image:"/src/assets/pengukuran/segitiga.png"},{question:"Jika 1 ubin memiliki luas 1 m², berapa ubin yang dibutuhkan untuk menutupi lantai dengan panjang 3 m dan lebar 4 m?",correctAnswer:"12 ubin",options:["7 ubin","10 ubin","12 ubin","14 ubin"],image:"/src/assets/pengukuran/lantai.png"}];for(let r=s.length-1;r>0;r--){const h=Math.floor(Math.random()*(r+1));[s[r],s[h]]=[s[h],s[r]]}return s})())},[]);const y=c=>{f(c);const s=c===b[t].correctAnswer;A(s),s&&w!==c?(j(!0),v(x+1),new Audio("/src/assets/ding.mp3").play().catch(h=>console.log("Audio play failed:",h))):!s&&w!==c&&new Audio("/src/assets/fail.mp3").play().catch(h=>console.log("Audio play failed:",h)),setTimeout(()=>{j(!1)},2e3)},B=()=>{f(null),A(null),t<$-1?m(t+1):i(`/hasil/${x}`,{state:{score:x,totalQuestions:$}})};if(b.length===0)return e.jsx("div",{className:"loading",children:"Loading..."});const l=b[t];return e.jsxs("div",{className:"game-container",style:{backgroundColor:"#4CAF50"},children:[N&&e.jsx(fe,{recycle:!1}),e.jsx("div",{className:"close-button",children:e.jsx("button",{onClick:()=>i("/category4_bab4"),style:{width:"35px",height:"35px",fontSize:"18px",borderRadius:"50%",background:"#32323e",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.3)"},children:"×"})}),e.jsxs("div",{className:"question-section",children:[e.jsx("h1",{className:"game-title",style:{color:"white",fontSize:"1.3rem",marginBottom:"10px"},children:T}),e.jsxs("h2",{className:"question-count",style:{fontSize:"1rem"},children:["Pertanyaan ",t+1," dari ",$]}),e.jsxs("div",{className:"question-text",children:[e.jsx("h2",{style:{fontSize:"1.1rem",lineHeight:"1.4"},children:l.question}),l.image&&e.jsx("img",{src:l.image,alt:"Gambar soal",style:{maxWidth:"280px",maxHeight:"280px",margin:"15px 0"}})]}),e.jsx("div",{className:"answer-options",children:l.options.map((c,s)=>e.jsx(le.button,{className:`answer-button ${w===c?c===l.correctAnswer?"correct":"incorrect":""}`,onClick:()=>y(c),whileHover:{scale:1.1},whileTap:{scale:.9},style:{fontSize:"0.9rem",padding:"8px 12px"},children:c},s))}),e.jsx("div",{className:"next-btn-container",children:e.jsx(le.button,{className:`next-button ${w===null?"disabled":""}`,onClick:B,disabled:w===null,style:{fontSize:"0.9rem",padding:"10px 20px"},children:"Pertanyaan Selanjutnya"})})]})]})},aa=()=>{const i=se(),n=xe(),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState(!1),[b,g]=a.useState([]),[w,f]=a.useState(null),[q,A]=a.useState(null),[T,P]=a.useState("Bab 4 Level 2 Pengukuran Volume"),$=5,[y,B]=a.useState({run:!1,recycle:!0,numberOfPieces:500,gravity:.3});a.useEffect(()=>{const h=n.pathname.split("/");let d=3,S=1;n.state&&n.state.babIndex!==void 0?(d=n.state.babIndex,S=n.state.levelIndex||1):h.length>=4&&(d=parseInt(h[h.length-2])||3,S=parseInt(h[h.length-1])||1);const o=new URLSearchParams(n.search),u=o.get("chapter"),p=o.get("level");u!==null&&p!==null&&(d=parseInt(u),S=parseInt(p)),P(`Bab ${d+1} Level ${S+1} Pengukuran Volume`);const C=`bab${d}_level${S}`;localStorage.setItem("currentLevelKey",C);const M=localStorage.getItem("selectedAvatar");if(M){const L=`avatar_${JSON.parse(M).name}_operations`,D=JSON.parse(localStorage.getItem(L))||{};D[C]="volume_measurement",localStorage.setItem(L,JSON.stringify(D)),localStorage.setItem("currentOperation","volume_measurement")}},[n]),a.useEffect(()=>{g((()=>{const d=[{question:"Berapa volume kubus dengan panjang sisi 3 cm?",correctAnswer:"27 cm³",options:["9 cm³","18 cm³","27 cm³","36 cm³"],image:"/src/assets/pengukuran/kubus.png"},{question:"Berapa volume balok dengan panjang 4 cm, lebar 3 cm, dan tinggi 2 cm?",correctAnswer:"24 cm³",options:["18 cm³","24 cm³","30 cm³","36 cm³"],image:"/src/assets/pengukuran/balok.png"},{question:"Jika sebuah gelas berbentuk silinder dengan jari-jari 3 cm dan tinggi 10 cm, berapakah volume gelas tersebut? (π = 3)",correctAnswer:"270 cm³",options:["90 cm³","180 cm³","270 cm³","360 cm³"],image:"/src/assets/pengukuran/gelas.png"},{question:"Berapa kubus satuan yang dibutuhkan untuk membentuk balok dengan panjang 3 kubus, lebar 2 kubus, dan tinggi 4 kubus?",correctAnswer:"24 kubus",options:["14 kubus","18 kubus","24 kubus","30 kubus"],image:"/src/assets/pengukuran/kubus-satuan.png"},{question:"Sebuah akuarium berbentuk balok memiliki panjang 50 cm, lebar 30 cm, dan tinggi 40 cm. Berapa liter air yang dapat ditampung akuarium tersebut? (1 liter = 1000 cm³)",correctAnswer:"60 liter",options:["40 liter","50 liter","60 liter","70 liter"],image:"/src/assets/pengukuran/akuarium.png"}];for(let S=d.length-1;S>0;S--){const o=Math.floor(Math.random()*(S+1));[d[S],d[o]]=[d[o],d[S]]}return d})())},[]);const l=h=>{f(h);const d=h===b[t].correctAnswer;A(d),d&&w!==h?(j(!0),B({...y,run:!0,recycle:!0,numberOfPieces:500}),v(x+1),new Audio("/src/assets/ding.mp3").play().catch(o=>console.log("Audio play failed:",o)),setTimeout(()=>{B({...y,run:!1}),setTimeout(()=>{j(!1)},500)},2e3)):!d&&w!==h&&new Audio("/src/assets/fail.mp3").play().catch(o=>console.log("Audio play failed:",o))},c=()=>{t<$-1?(m(t+1),f(null),A(null)):i(`/hasil/${x}`,{state:{score:x,totalQuestions:$}})},s=()=>{i("/category4_bab4")};if(b.length===0)return e.jsx("div",{className:"loading",children:"Loading..."});const r=b[t];return e.jsxs("div",{className:"game-page volume-game",style:{background:"linear-gradient(180deg, #2196F3 0%, #64B5F6 100%)",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative"},children:["      ",e.jsx(le.button,{className:"close-button",onClick:s,whileHover:{scale:1.1},whileTap:{scale:.9},style:{position:"absolute",top:"15px",left:"15px",width:"35px",height:"35px",borderRadius:"50%",background:"#32323e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",border:"none",cursor:"pointer",fontSize:"18px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.3)",zIndex:10},children:"✕"}),N&&e.jsx(fe,{width:window.innerWidth,height:window.innerHeight,recycle:y.recycle,run:y.run,numberOfPieces:y.numberOfPieces,gravity:y.gravity}),e.jsxs("div",{className:"question-container",style:{marginBottom:"25px",textAlign:"center"},children:[e.jsx("h1",{style:{fontSize:"1.4rem",fontWeight:"700",color:"white",marginBottom:"15px"},children:T}),e.jsxs("h2",{style:{fontSize:"1rem",fontWeight:"500",color:"white",marginBottom:"15px"},children:["Pertanyaan ",t+1," dari ",$]}),e.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"white",marginBottom:"15px",lineHeight:"1.4"},children:r.question}),"        ",r.image&&e.jsx("img",{src:r.image,alt:"Gambar soal",style:{maxWidth:"200px",maxHeight:"200px",margin:"0 auto 15px auto",display:"block",borderRadius:"8px",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.2)"}})]}),e.jsx("div",{className:"options-container",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"15px",maxWidth:"550px",margin:"0 auto 25px auto"},children:r.options.map((h,d)=>e.jsx(le.button,{className:`option-button ${w===h?q?"correct":"incorrect":""}`,onClick:()=>l(h),whileHover:{scale:1.05},whileTap:{scale:.95},style:{width:"110px",height:"70px",borderRadius:"12px",background:"#3F51B5",color:"white",fontSize:"0.9rem",fontWeight:"bold",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.2)",transition:"all 0.2s ease"},children:h},d))}),e.jsx("button",{className:"next-button",onClick:c,disabled:w===null,style:{padding:"10px 25px",fontSize:"0.9rem",backgroundColor:"#E3F2FD",color:"#2196F3",border:"none",borderRadius:"25px",cursor:w===null?"not-allowed":"pointer",opacity:w===null?.7:1,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:"Pertanyaan Selanjutnya"})]})};function ta(){const[i,n]=a.useState(0),[t,m]=a.useState("read"),[x,v]=a.useState(0),[N,j]=a.useState(0),[b,g]=a.useState(0),[w,f]=a.useState(0),[q,A]=a.useState(0),[T,P]=a.useState(!1),[$,y]=a.useState(!1),[B,l]=a.useState(!1),[c,s]=a.useState(!1),[r,h]=a.useState([]),[d,S]=a.useState([]),o={read:[{number:"6.786",options:["Enam ribu tujuh ratus delapan puluh enam","Enam ribu tujuh ratus delapan enam","Enam ribu tujuh delapan puluh enam"],answer:0},{number:"9.302",options:["Sembilan ribu tiga ratus dua","Sembilan ribu tiga puluh dua","Sembilan ratus tiga puluh dua"],answer:0}],write:[{words:"Delapan ribu empat ratus lima puluh",answer:"8450"},{words:"Dua ribu tiga ratus tujuh belas",answer:"2317"}],compare:[{num1:"1.234",num2:"1.235",answer:"right"},{num1:"5.678",num2:"5.678",answer:"equal"},{num1:"9.999",num2:"1.000",answer:"left"}],order:[{numbers:["2.345","1.999","2.450","2.100"],answer:["1.999","2.100","2.345","2.450"]},{numbers:["5.555","5.055","5.505","5.550"],answer:["5.055","5.505","5.550","5.555"]},{numbers:["3.001","3.010","3.100","3.000"],answer:["3.000","3.001","3.010","3.100"]}]},[u,p]=a.useState({message:"",isCorrect:null}),[C,M]=a.useState({message:"",isCorrect:null}),[K,L]=a.useState({message:"",isCorrect:null}),[D,J]=a.useState({message:"",isCorrect:null}),[Q,k]=a.useState(""),[z,I]=a.useState(!1),[Y,re]=a.useState(!1),[de,je]=a.useState(!1),[qe,Se]=a.useState(!1),[Me,ye]=a.useState(!1),[ve,Ce]=a.useState(!1),[F,E]=a.useState(!1),_=()=>{p({message:"",isCorrect:null}),M({message:"",isCorrect:null}),L({message:"",isCorrect:null}),J({message:"",isCorrect:null}),v(x+1),t==="read"?(m("write"),je(!0)):t==="write"?(m("compare"),Se(!0)):t==="compare"?(m("order"),ye(!0)):t==="order"&&(Ce(!0),E(!0))},V=()=>{m("read"),v(0),je(!1),Se(!1),ye(!1),Ce(!1),E(!1),j(0),g(0),f(0),A(0),n(0)},ee=G=>{if(T)return;const W=o.read[N];G===W.answer?(p({message:"Benar! 🎉",isCorrect:!0}),n(ae=>ae+10),Be(),Ae()):p({message:`Salah! Jawaban yang benar: ${W.options[W.answer]}`,isCorrect:!1}),P(!0)},te=()=>{if(!T){p({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}N<o.read.length-1?(j(N+1),p({message:"",isCorrect:null}),P(!1)):_()},ne=()=>{if($)return;if(!Q.trim()){M({message:"Harap masukkan jawaban terlebih dahulu!",isCorrect:!1});return}const G=o.write[b];Q===G.answer?(M({message:"Benar! 🎉",isCorrect:!0}),n(W=>W+10),Be(),Ae()):M({message:`Salah! Jawaban yang benar: ${G.answer}`,isCorrect:!1}),y(!0)},X=()=>{if(!$){M({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}b<o.write.length-1?(g(b+1),k(""),M({message:"",isCorrect:null}),y(!1)):_()},U=G=>{if(B)return;const W=o.compare[w];if(G===W.answer)L({message:"Benar! 🎉",isCorrect:!0}),n(ae=>ae+10),Be(),Ae();else{let ae="";W.answer==="left"?ae=`${W.num1} lebih besar dari ${W.num2}`:W.answer==="right"?ae=`${W.num2} lebih besar dari ${W.num1}`:ae="Kedua bilangan sama besar",L({message:`Salah! ${ae}`,isCorrect:!1})}l(!0)},oe=()=>{if(!B){L({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}w<o.compare.length-1?(f(w+1),L({message:"",isCorrect:null}),l(!1)):_()};a.useEffect(()=>{if(t==="order"){const W=[...o.order[q].numbers].sort(()=>Math.random()-.5);h(W),S([])}},[t,q]);const ke=G=>{h(r.filter(W=>W!==G)),S([...d,G])},Pe=G=>{S(d.filter(W=>W!==G)),h([...r,G])},Ne=()=>{if(c)return;const G=o.order[q];if(d.length!==G.numbers.length){J({message:"Masukkan semua bilangan ke kotak!",isCorrect:!1});return}let W=!0;for(let ae=0;ae<d.length;ae++)if(d[ae]!==G.answer[ae]){W=!1;break}W?(J({message:"Benar! 🎉",isCorrect:!0}),n(ae=>ae+10),Be(),Ae()):J({message:`Salah! Urutan yang benar: ${G.answer.join(" → ")}`,isCorrect:!1}),s(!0)},Ke=()=>{if(!c){J({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}q<o.order.length-1?(A(q+1),J({message:"",isCorrect:null}),s(!1)):_()},Be=()=>{I(!0),setTimeout(()=>{I(!1)},500)},Ae=()=>{re(!0),setTimeout(()=>{re(!1)},1500)};return a.useEffect(()=>{t==="write"&&k("")},[t,b]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4",children:[e.jsxs("div",{className:"max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("h1",{className:"text-3xl font-bold text-pink-500",children:"Petualangan Bilangan Cacah"}),e.jsx("div",{className:"text-3xl",children:"🔢"})]}),e.jsx("p",{className:"text-gray-700 text-lg mb-6",children:"Ayo belajar bilangan dengan cara menyenangkan!"}),e.jsxs("div",{className:"flex justify-between items-center mb-6 bg-gray-100 rounded-full p-2",children:[e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${t==="read"||de?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-book-open mr-2"})," Membaca"]}),e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${t==="write"||qe?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-pencil-alt mr-2"})," Menulis"]}),e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${t==="compare"||Me?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-balance-scale mr-2"})," Membanding"]}),e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${t==="order"||ve?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-sort-amount-up mr-2"})," Urut"]})]}),F&&e.jsxs("div",{className:"game-section animate-fadeIn text-center",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-trophy text-yellow-300"})," Selamat!"]}),e.jsx("p",{className:"text-xl mb-4",children:"Kamu telah menyelesaikan semua permainan!"}),e.jsx("div",{className:"mb-6 py-4 px-6 bg-green-100 rounded-lg shadow inline-block",children:e.jsxs("p",{className:"text-2xl font-bold text-green-700",children:["Skor Akhir: ",i]})}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:translate-y-1 transform transition-all font-bold",onClick:V,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-redo"})," Main Lagi"]})}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{className:"bg-gray-100 text-gray-700 px-5 py-2 rounded-full shadow hover:shadow-md transition-all",onClick:()=>window.location.href="/category4_bab1",children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(Oe,{size:18})," Kembali ke Kategori"]})})})]}),!F&&t==="read"&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-book-open"})," Membaca Bilangan"]}),e.jsx("div",{className:"text-3xl font-bold my-5 p-5 bg-gray-50 rounded-xl inline-block shadow",children:o.read[N].number}),e.jsx("p",{className:"mb-4",children:"Bagaimana cara membaca bilangan di atas?"}),e.jsx("div",{className:"flex flex-col gap-2 mb-4",children:o.read[N].options.map((G,W)=>e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all my-1",onClick:()=>ee(W),children:G},W))}),u.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${u.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:u.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:te,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",N<o.read.length-1?"Soal Selanjutnya":"Lanjut ke Menulis Bilangan"]})})]}),!F&&t==="write"&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-pencil-alt"})," Menulis Bilangan"]}),e.jsx("div",{className:"text-3xl font-bold my-5 p-5 bg-gray-50 rounded-xl inline-block shadow",children:o.write[b].words}),e.jsx("p",{className:"mb-4",children:"Tuliskan bilangan di atas dalam angka:"}),e.jsx("input",{type:"text",value:Q,onChange:G=>k(G.target.value),className:"p-4 text-xl w-64 border-2 border-gray-300 rounded-lg text-center mb-4",placeholder:"Contoh: 1234"}),e.jsx("div",{children:e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:ne,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-check"})," Periksa Jawaban"]})})}),C.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${C.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:C.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold mt-4",onClick:X,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",b<o.write.length-1?"Soal Selanjutnya":"Lanjut ke Membandingkan Bilangan"]})})]}),!F&&t==="compare"&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-balance-scale"})," Membandingkan Bilangan"]}),e.jsxs("div",{className:"text-2xl my-5 flex justify-center items-center gap-5",children:[e.jsx("span",{className:"bg-pink-400 p-4 rounded-lg shadow text-white font-bold",children:o.compare[w].num1}),e.jsx("span",{className:"font-bold",children:"vs"}),e.jsx("span",{className:"bg-teal-400 p-4 rounded-lg shadow text-white font-bold",children:o.compare[w].num2})]}),e.jsx("p",{className:"mb-4",children:"Manakah yang lebih besar?"}),e.jsxs("div",{className:"flex justify-center gap-3 my-5",children:[e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all",onClick:()=>U("left"),children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-angle-double-left"})," Pertama"]})}),e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all",onClick:()=>U("equal"),children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-equals"})," Sama"]})}),e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all",onClick:()=>U("right"),children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:["Kedua ",e.jsx("i",{className:"fas fa-angle-double-right"})]})})]}),K.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${K.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:K.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:oe,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",w<o.compare.length-1?"Soal Selanjutnya":"Lanjut ke Mengurutkan Bilangan"]})})]}),!F&&t==="order"&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-sort-amount-up"})," Mengurutkan Bilangan"]}),e.jsx("p",{className:"mb-4",children:"Susunlah bilangan berikut dari yang terkecil ke terbesar:"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-4",children:r.map((G,W)=>e.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-lg shadow hover:scale-105 cursor-pointer transition-all",onClick:()=>ke(G),children:G},W))}),e.jsx("div",{className:"min-h-40 border-3 border-dashed border-teal-400 rounded-lg p-5 mb-4 bg-teal-50 flex flex-wrap gap-2 items-center justify-center",children:d.length===0?e.jsx("p",{className:"text-teal-600",children:"Pilih bilangan di atas untuk mengurutkan"}):d.map((G,W)=>e.jsx("div",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-6 py-3 rounded-lg shadow hover:scale-105 cursor-pointer transition-all",onClick:()=>Pe(G),children:G},W))}),e.jsx("button",{className:"bg-gradient-to-r from-teal-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:Ne,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-check"})," Periksa Jawaban"]})}),D.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${D.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:D.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold mt-4",onClick:Ke,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",q<o.order.length-1?"Soal Selanjutnya":"Selesai"]})})]}),e.jsxs("div",{className:"my-5 font-bold text-xl inline-block px-5 py-2 bg-yellow-300 rounded-full text-gray-800 shadow",children:["⭐ Skor: ",i]}),e.jsx("img",{src:"/api/placeholder/100/120",alt:"Character",className:`absolute w-24 bottom-5 right-5 transition-all duration-500 ${z?"transform -translate-y-12":""}`}),Y&&e.jsx("div",{className:"confetti-container",children:[...Array(50)].map((G,W)=>{const ae=Math.random()*100,Le=Math.random()*100,$e=Math.random()*10+5,Re=`hsl(${Math.random()*360}, 100%, 50%)`,Fe=`translate(${Math.random()*200-100}px, ${Math.random()*200}px) rotate(${Math.random()*360}deg)`,We=Math.random()*1+.5;return e.jsx("div",{className:"absolute w-3 h-3 opacity-100 transition-all",style:{left:`${ae}%`,top:`${Le}%`,width:`${$e}px`,height:`${$e}px`,backgroundColor:Re,transform:Fe,transition:`all ${We}s ease-out`}},W)})})]}),e.jsx("style",{jsx:!0,children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `})]})}function na(){const i=se(),[n,t]=a.useState(0),[m,x]=a.useState("composition"),[v,N]=a.useState(0),[j,b]=a.useState(10),[g,w]=a.useState(0),[f,q]=a.useState(0),[A,T]=a.useState(!1),[P,$]=a.useState(!1),[y,B]=a.useState(""),[l,c]=a.useState(!1),[s,r]=a.useState(!1),[h,d]=a.useState(!1),[S,o]=a.useState(!1),[u,p]=a.useState(!1),[C,M]=a.useState({message:"",isCorrect:null}),[K,L]=a.useState({message:"",isCorrect:null}),[D,J]=a.useState([]),[Q,k]=a.useState([]);a.useEffect(()=>{z()},[]);const z=()=>{const F=[];for(let _=0;_<5;_++){const V=Math.floor(Math.random()*9e3)+1e3,ee=Math.floor(V/1e3),te=Math.floor(V%1e3/100),ne=Math.floor(V%100/10),X=V%10,U=`${V}`,oe=I(ee,te,ne,X),ke=Y(ee,te,ne,X);F.push({number:V,question:U,correctAnswer:oe,options:ke})}const E=[];for(let _=0;_<5;_++){const V=Math.floor(Math.random()*900)+100,ee=Math.floor(Math.random()*V),te=V-ee,ne=[];for(;ne.length<3;){const U=te+(Math.floor(Math.random()*20)-10);U!==te&&U>=0&&!ne.includes(U)&&ne.push(U)}const X=[te,...ne];for(let U=X.length-1;U>0;U--){const oe=Math.floor(Math.random()*(U+1));[X[U],X[oe]]=[X[oe],X[U]]}E.push({num1:V,num2:ee,correctAnswer:te,options:X})}J(F),k(E)},I=(F,E,_,V)=>{let ee="";return F>0&&(ee+=`${F} ribu `),E>0&&(ee+=`${E} ratus `),_>0&&(ee+=`${_} puluh `),(V>0||F===0&&E===0&&_===0)&&(ee+=`${V}`),ee.trim()},Y=(F,E,_,V)=>{const ee=I(F,E,_,V),te=[];te.push(I(F,E,V,_)),te.push(I(E,F,_,V)),te.push(I(F+1,E,_,V-1));const ne=[...new Set([ee,...te])];for(;ne.length<4;){const U=Math.max(0,F+Math.floor(Math.random()*3)-1),oe=Math.max(0,E+Math.floor(Math.random()*3)-1),ke=Math.max(0,_+Math.floor(Math.random()*3)-1),Pe=Math.max(0,V+Math.floor(Math.random()*3)-1),Ne=I(U,oe,ke,Pe);ne.includes(Ne)||ne.push(Ne)}const X=[...ne];for(let U=X.length-1;U>0;U--){const oe=Math.floor(Math.random()*(U+1));[X[U],X[oe]]=[X[oe],X[U]]}return X.slice(0,4)},re=()=>{M({message:"",isCorrect:null}),L({message:"",isCorrect:null}),N(v+1),m==="composition"?(x("subtraction"),d(!0)):m==="subtraction"&&(o(!0),p(!0))},de=()=>{x("composition"),N(0),d(!1),o(!1),p(!1),w(0),q(0),t(0),z()},je=F=>{if(A)return;const E=D[g];F===E.correctAnswer?(M({message:"Benar! 🎉",isCorrect:!0}),t(_=>_+10),ye(),ve()):M({message:`Salah! Jawaban yang benar: ${E.correctAnswer}`,isCorrect:!1}),T(!0)},qe=()=>{if(!A){M({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}g<D.length-1?(w(g+1),M({message:"",isCorrect:null}),T(!1)):re()},Se=F=>{if(P)return;const E=Q[f];F===E.correctAnswer?(L({message:"Benar! 🎉",isCorrect:!0}),t(_=>_+10),ye(),ve()):L({message:`Salah! Jawaban yang benar: ${E.correctAnswer}`,isCorrect:!1}),$(!0)},Me=()=>{if(!P){L({message:"Anda harus menjawab pertanyaan terlebih dahulu!",isCorrect:!1});return}f<Q.length-1?(q(f+1),L({message:"",isCorrect:null}),$(!1)):re()},ye=()=>{c(!0),setTimeout(()=>{c(!1)},500)},ve=()=>{r(!0),setTimeout(()=>{r(!1)},1500)},Ce=()=>{i("/category4_bab1")};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4",children:[e.jsxs("div",{className:"max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center gap-4",children:e.jsx("h1",{className:"text-3xl font-bold text-pink-500",children:m==="composition"?"Komposisi Bilangan Cacah":"Pengurangan Bilangan Cacah"})}),e.jsx("p",{className:"text-gray-700 text-lg mb-6",children:m==="composition"?"Ayo mengenal komposisi bilangan cacah sampai 10.000!":"Ayo berlatih pengurangan bilangan cacah sampai 1.000!"}),e.jsxs("div",{className:"flex justify-between items-center mb-6 bg-gray-100 rounded-full p-2",children:[e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${m==="composition"||h?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-puzzle-piece mr-2"})," Komposisi"]}),e.jsxs("div",{className:`px-4 py-2 rounded-full text-center transition-all ${m==="subtraction"||S?"bg-pink-400 text-white":"bg-gray-200"}`,style:{flex:1},children:[e.jsx("i",{className:"fas fa-minus mr-2"})," Pengurangan"]})]}),u&&e.jsxs("div",{className:"game-section animate-fadeIn text-center",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-trophy text-yellow-300"})," Selamat!"]}),e.jsx("p",{className:"text-xl mb-4",children:"Kamu telah menyelesaikan semua permainan!"}),e.jsx("div",{className:"mb-6 py-4 px-6 bg-green-100 rounded-lg shadow inline-block",children:e.jsxs("p",{className:"text-2xl font-bold text-green-700",children:["Skor Akhir: ",n]})}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:translate-y-1 transform transition-all font-bold",onClick:de,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-redo"})," Main Lagi"]})}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{className:"bg-gray-100 text-gray-700 px-5 py-2 rounded-full shadow hover:shadow-md transition-all",onClick:Ce,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-home"})," Kembali ke Kategori"]})})})]}),!u&&m==="composition"&&D.length>0&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-puzzle-piece"})," Komposisi Bilangan Cacah"]}),e.jsx("div",{className:"text-3xl font-bold my-5 p-5 bg-gray-50 rounded-xl inline-block shadow",children:D[g].question}),e.jsx("p",{className:"mb-4",children:"Bagaimana komposisi bilangan di atas?"}),e.jsx("div",{className:"flex flex-col gap-2 mb-4",children:D[g].options.map((F,E)=>e.jsx("button",{className:`bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all my-1 ${A&&F===D[g].correctAnswer?"border-2 border-green-700":""}`,onClick:()=>je(F),disabled:A,children:F},E))}),C.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${C.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:C.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:qe,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",g<D.length-1?"Soal Selanjutnya":"Lanjut ke Pengurangan"]})})]}),!u&&m==="subtraction"&&Q.length>0&&e.jsxs("div",{className:"game-section animate-fadeIn",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:[e.jsx("i",{className:"fas fa-minus"})," Pengurangan Bilangan Cacah"]}),e.jsxs("div",{className:"text-2xl my-5 p-5 bg-gray-50 rounded-xl inline-block shadow",children:[Q[f].num1," - ",Q[f].num2," = ?"]}),e.jsx("p",{className:"mb-4",children:"Berapakah hasil pengurangan di atas?"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-4",children:Q[f].options.map((F,E)=>e.jsx("button",{className:`bg-gradient-to-r from-teal-500 to-teal-400 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition-all ${P&&F===Q[f].correctAnswer?"border-2 border-green-700":""}`,onClick:()=>Se(F),disabled:P,children:F},E))}),K.message&&e.jsx("div",{className:`p-4 rounded-lg shadow my-4 ${K.isCorrect?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:K.message}),e.jsx("button",{className:"bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-bold",onClick:Me,children:e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("i",{className:"fas fa-arrow-right"})," ",f<Q.length-1?"Soal Selanjutnya":"Selesai"]})})]}),e.jsxs("div",{className:"my-5 font-bold text-xl inline-block px-5 py-2 bg-yellow-300 rounded-full text-gray-800 shadow",children:["⭐ Skor: ",n]}),e.jsx("img",{src:"/src/assets/kelinci.png",alt:"Character",className:`absolute w-24 bottom-5 right-5 transition-all duration-500 ${l?"transform -translate-y-12":""}`}),s&&e.jsx("div",{className:"confetti-container",children:[...Array(50)].map((F,E)=>{const _=Math.random()*100,V=Math.random()*100,ee=Math.random()*10+5,te=`hsl(${Math.random()*360}, 100%, 50%)`,ne=`translate(${Math.random()*200-100}px, ${Math.random()*200}px) rotate(${Math.random()*360}deg)`,X=Math.random()*1+.5;return e.jsx("div",{className:"absolute w-3 h-3 opacity-100 transition-all",style:{left:`${_}%`,top:`${V}%`,width:`${ee}px`,height:`${ee}px`,backgroundColor:te,transform:ne,transition:`all ${X}s ease-out`}},E)})})]}),e.jsx("style",{jsx:!0,children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `})]})}const Ge=[{q:"125 × 4 = ?",a:500},{q:"900 ÷ 3 = ?",a:300},{q:"56 × 7 = ?",a:392},{q:"864 ÷ 12 = ?",a:72},{q:"35 × 25 = ?",a:875},{q:"720 ÷ 8 = ?",a:90},{q:"44 × 23 = ?",a:1012},{q:"945 ÷ 9 = ?",a:105},{q:"18 × 56 = ?",a:1008},{q:"680 ÷ 4 = ?",a:170}];function De(i){const n=[...i];for(let t=n.length-1;t>0;t--){const m=Math.floor(Math.random()*(t+1));[n[t],n[m]]=[n[m],n[t]]}return n}function He(i){const n=new Set;for(n.add(i);n.size<4;){const t=Math.floor(Math.random()*60)+1,m=Math.random()>.5?1:-1,x=i+m*t;x>0&&n.add(x)}return De(Array.from(n))}const Je=({active:i})=>{const n=Array.from({length:50},(m,x)=>x),t=m=>{const x=Math.random()*100,v=Math.random()*8+6,N=(Math.random()*2).toFixed(1),j=Math.random()*360,b=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff"],g=b[Math.floor(Math.random()*b.length)];return{width:`${v}px`,height:`${v}px`,backgroundColor:g,left:`${x}%`,transform:`rotate(${j}deg)`,animationDelay:`${N}s`,animationDuration:`${Math.random()*2+2}s`,position:"absolute",top:"-10px",opacity:i?1:0,zIndex:5,borderRadius:"50%",animation:i?"confetti-fall 3s linear forwards":"none"}};return e.jsxs("div",{className:"confetti-container",children:[n.map(m=>e.jsx("div",{className:"confetti-piece",style:t()},m)),e.jsx("style",{jsx:"true",children:`
        @keyframes confetti-fall {
          0% {
            top: -10px;
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }
      `})]})};function sa(){const i=se(),[n,t]=a.useState(0),[m,x]=a.useState(0),[v,N]=a.useState(null),[j,b]=a.useState(""),[g,w]=a.useState(!1),[f,q]=a.useState(!1),[A,T]=a.useState(!1),[P,$]=a.useState(!1),[y]=a.useState(()=>De([...Ge])),B=y[n],l=a.useMemo(()=>He((B==null?void 0:B.a)||0),[B]);function c(I){f||(N(I),q(!0),T(!0),I===B.a?(x(Y=>Y+10),b("Benar! 🎉 +10 poin"),$(!0),setTimeout(()=>$(!1),2e3)):b(`Salah! Jawaban yang benar: ${B.a}`),setTimeout(()=>{b(""),T(!1),N(null),q(!1),n+1<y.length?t(Y=>Y+1):w(!0)},1800))}function s(){window.location.reload()}function r(){i("/category4_bab1")}const h=()=>m===100?"Sempurna! 🏆":m>=80?"Hebat! 🎉":m>=60?"Bagus! 👍":m>=40?"Cukup baik. 😊":"Ayo berlatih lagi! 💪",d={minHeight:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#e6f2ff"},S={width:"90%",maxWidth:"650px",margin:"0 auto",padding:"2rem",backgroundColor:"white",borderRadius:"20px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},o={fontSize:"2.5rem",color:"#F06292",textAlign:"center",marginBottom:"1rem",fontWeight:"bold"},u={fontSize:"1.5rem",color:"#666",textAlign:"center",marginBottom:"2rem"},p={display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1.5rem"},C={backgroundColor:"#f0fff0",padding:"2rem",borderRadius:"15px",marginBottom:"2rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},M={fontSize:"2.8rem",fontWeight:"bold",textAlign:"center"},K={display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem",marginBottom:"2rem"},L={padding:"1.5rem",fontSize:"2rem",fontWeight:"bold",border:"2px solid #ddd",borderRadius:"15px",backgroundColor:"#f8f9fa",cursor:"pointer",transition:"all 0.3s ease"},D={textAlign:"center",marginTop:"2rem",fontSize:"1.2rem",color:"#666"},J={fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},Q={display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},k={background:"linear-gradient(to right, #FF5F6D, #FFC371)",color:"white",padding:"1rem 2.5rem",fontSize:"1.5rem",fontWeight:"bold",border:"none",borderRadius:"50px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease, box-shadow 0.2s ease",width:"100%",maxWidth:"350px"},z={background:"linear-gradient(to right, #2193b0, #6dd5ed)",color:"white",padding:"1rem 2.5rem",fontSize:"1.5rem",fontWeight:"bold",border:"none",borderRadius:"50px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease, box-shadow 0.2s ease",width:"100%",maxWidth:"350px"};return e.jsxs("div",{style:d,children:[e.jsx(Je,{active:P}),e.jsxs("div",{style:S,children:[e.jsx("h1",{style:o,children:"Game Matematika"}),e.jsx("p",{style:u,children:"Perkalian & Pembagian Sampai 1.000"}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:p,children:e.jsx("p",{style:J,children:`Soal ${n+1} dari ${y.length}`})}),e.jsx("div",{style:C,children:e.jsx("p",{style:M,children:B.q})}),e.jsx("div",{style:K,children:l.map(I=>{const Y=v===I&&I===B.a,re=v===I&&I!==B.a,de={...L,backgroundColor:Y?"#d4edda":re?"#f8d7da":"#f8f9fa",color:Y?"#155724":re?"#721c24":"#333",transform:Y?"scale(1.05)":"scale(1)",borderColor:Y?"#c3e6cb":re?"#f5c6cb":"#ddd"};return e.jsx("button",{style:de,onClick:()=>c(I),disabled:f,children:I},I)})}),e.jsx("div",{style:{textAlign:"center",minHeight:"50px",opacity:A?1:0,transition:"opacity 0.3s ease"},children:e.jsx("p",{style:{fontSize:"1.8rem",fontWeight:"bold",color:j.startsWith("Benar")?"#155724":"#721c24"},children:j})})]}),g&&e.jsxs("div",{style:{textAlign:"center",padding:"2rem 0"},children:[e.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:"bold",marginBottom:"1rem"},children:"Permainan Selesai!"}),e.jsxs("div",{style:{backgroundColor:"#f0f9ff",padding:"2rem",borderRadius:"15px",marginBottom:"2rem"},children:[e.jsxs("p",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#F06292",marginBottom:"1rem"},children:["Skor Anda: ",m," dari 100"]}),e.jsx("p",{style:{fontSize:"1.8rem",color:"#4CAF50"},children:h()})]}),e.jsxs("div",{style:Q,children:[e.jsx("button",{onClick:s,style:k,onMouseOver:I=>{I.currentTarget.style.transform="translateY(-3px)",I.currentTarget.style.boxShadow="0 8px 15px rgba(0, 0, 0, 0.15)"},onMouseOut:I=>{I.currentTarget.style.transform="translateY(0)",I.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"},children:"Mulai Ulang Permainan"}),e.jsx("button",{onClick:r,style:z,onMouseOver:I=>{I.currentTarget.style.transform="translateY(-3px)",I.currentTarget.style.boxShadow="0 8px 15px rgba(0, 0, 0, 0.15)"},onMouseOut:I=>{I.currentTarget.style.transform="translateY(0)",I.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"},children:"Kembali ke Kategori"})]})]}),e.jsx("footer",{style:D,children:"Selamat belajar! 🎓"})]})]})}function ra(){const i=[{number:12,type:"faktor",cand:[1,2,3,4,5,6,7,8,9,12],correct:[1,2,3,4,6,12]},{number:5,type:"kelipatan",cand:[2,5,8,10,12,15,20],correct:[5,10,15,20]},{number:18,type:"faktor",cand:[1,2,3,4,6,9,12,18,24],correct:[1,2,3,6,9,12,18]},{number:3,type:"kelipatan",cand:[1,3,5,6,9,11,12,15,18,21,24,27,30],correct:[3,6,9,12,15,18,21,24,27,30]},{number:20,type:"faktor",cand:[1,2,4,5,7,10,15,20,40],correct:[1,2,4,5,10,20]},{number:4,type:"kelipatan",cand:[2,4,8,9,12,14,16,20,24],correct:[4,8,12,16,20,24]},{number:7,type:"faktor",cand:[1,5,7,14,21,28],correct:[1,7]},{number:10,type:"kelipatan",cand:[5,10,20,25,30,35,40,50],correct:[10,20,30,40,50]},{number:15,type:"faktor",cand:[1,3,5,6,9,10,15,20],correct:[1,3,5,15]},{number:2,type:"kelipatan",cand:[2,3,4,5,6,7,8,10,12,14,15,16,18,20],correct:[2,4,6,8,10,12,14,16,18,20]}],n=i.length,t=10,[m,x]=a.useState(0),[v,N]=a.useState(0),[j,b]=a.useState([]),[g,w]=a.useState({}),[f,q]=a.useState({text:"",type:""}),[A,T]=a.useState(!1),[P,$]=a.useState(null),y=a.useRef(null),B=a.useRef(null);function l(k){let z=k.slice();for(let I=z.length-1;I>0;I--){const Y=Math.floor(Math.random()*(I+1));[z[I],z[Y]]=[z[Y],z[I]]}return z}a.useEffect(()=>{if(m<n&&i[m]){let k=i[m],z=l(k.cand);b(z);const I={};z.forEach(Y=>{I[Y]="candidates"}),w(I),q({text:"",type:""}),T(!1),$(null)}},[m]);function c(k,z){$(z),k.dataTransfer.effectAllowed="move"}function s(){$(null)}function r(k){k.preventDefault()}function h(k){P!==null&&(w(z=>{if(z[P]===k)return z;const I={...z};return I[P]=k,I}),$(null))}const d=Object.values(g).length===j.length&&Object.values(g).every(k=>k==="correct"||k==="incorrect");function S(){if(!d)return;const k=i[m],z=new Set(k.correct);let I=!0;for(const[Y,re]of Object.entries(g)){const de=+Y;if(re==="correct"&&!z.has(de)){I=!1;break}if(re==="incorrect"&&z.has(de)){I=!1;break}}I?(N(Y=>Y+t),q({text:"👍 Jawaban benar! Kamu mendapatkan 10 poin.",type:"correct"})):q({text:"❌ Jawaban kurang tepat. Jangan menyerah, coba pada soal berikutnya ya!",type:"incorrect"}),T(!0),m===n-1&&setTimeout(()=>{x(n)},2e3)}function o(){m<n-1?x(k=>k+1):x(n)}function u(){x(0),N(0),q({text:"",type:""}),T(!1)}const[p,C]=a.useState(null);function M(k,z){(k.key===" "||k.key==="Enter")&&(k.preventDefault(),p?p===z&&(C(null),q({text:"",type:""})):(C(z),q({text:"Gunakan Tab untuk pilih kotak faktor atau bukan faktor, lalu tekan Enter untuk menjatuhkan.",type:""}),y.current.focus()))}function K(k,z){p&&(k.key===" "||k.key==="Enter")&&(k.preventDefault(),w(I=>{if(I[p]===z)return I;const Y={...I};return Y[p]=z,Y}),C(null),q({text:"",type:""}))}const L=j.filter(k=>g[k]==="candidates"),D=j.filter(k=>g[k]==="correct"),J=j.filter(k=>g[k]==="incorrect"),Q=m>=n;if(!(m>=n)){if(!i[m])return e.jsxs("div",{style:{textAlign:"center",padding:"50px 20px",fontFamily:"Nunito, sans-serif",color:"#1e506f"},children:[e.jsx("h2",{children:"Terjadi kesalahan saat memuat soal"}),e.jsx("p",{children:"Silakan coba refresh halaman ini atau kembali ke halaman kategori."}),e.jsx("button",{onClick:()=>window.location.href="/category4_bab1",style:{background:"linear-gradient(to bottom, #29a0e0, #1e87c2)",color:"white",border:"none",padding:"12px 30px",borderRadius:"50px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",boxShadow:"0 3px 10px rgba(31, 94, 120, 0.2)",marginTop:"20px"},children:"Kembali ke Kategori"})]})}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        html {
          font-size: 18px;
        }
        body {
          margin: 0;
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f0ff 100%);
          font-family: 'Nunito', sans-serif;
          color: #2a3d45;
          user-select: none;
        }
        .container {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          max-width: 840px;
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(31, 94, 120, 0.15), 
                     0 5px 15px rgba(42, 125, 160, 0.1),
                     0 0 80px rgba(90, 164, 194, 0.07);
          padding: 40px 42px 60px;
          box-sizing: border-box;
          text-align: center;
          margin: 40px auto 80px;
          overflow: hidden;
          background-image: 
            radial-gradient(circle at 10% 10%, rgba(200, 230, 255, 0.5) 0%, transparent 30%),
            radial-gradient(circle at 90% 90%, rgba(220, 240, 250, 0.7) 0%, transparent 30%);
        }
        .container:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #4ca5d0, #2c88bf, #1e6d9e);
          z-index: 10;
        }
        h1 {
          position: relative;
          font-weight: 800;
          font-size: 2.6rem;
          margin-bottom: 30px;
          color: #1a4971;
          text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.8);
          padding-bottom: 15px;
          letter-spacing: -0.02em;
        }
        h1:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4ca5d0, transparent);
        }
        .progress {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #3d5a60;
          gap: 8px;
        }
        .progress-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0 0 24px;
        }
        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d0e3f0;
          transition: all 0.3s ease;
        }
        .progress-dot.active {
          width: 14px;
          height: 14px;
          background: #3d99d6;
          box-shadow: 0 0 0 2px rgba(61, 153, 214, 0.3);
        }
        .progress-dot.completed {
          background: #22c55e;
        }
        .scoreboard {
          position: relative;
          font-weight: 800;
          font-size: 1.5rem;
          margin: 10px 0 30px 0;
          color: #1e6d9e;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 10px 30px;
          border-radius: 50px;
          background: linear-gradient(to bottom, rgba(240, 249, 255, 0.9), rgba(214, 240, 253, 0.6));
          box-shadow: 0 3px 10px rgba(31, 94, 120, 0.1), 
                     0 1px 3px rgba(0, 0, 0, 0.05),
                     inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        .scoreboard .bee-icon {
          font-size: 1.2rem;
          display: inline-block;
          margin: 0 6px;
          transform: translateY(1px);
        }
        .question-text {
          position: relative;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 42px;
          color: #1e506f;
          padding: 15px 25px;
          border-radius: 16px;
          background: rgba(220, 240, 255, 0.5);
          box-shadow: 0 3px 8px rgba(42, 125, 160, 0.1);
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .question-text strong {
          color: #1766a5;
          font-size: 110%;
          padding: 0 4px;
        }
        .candidates-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-bottom: 50px;
          min-height: 80px;
          perspective: 1000px;
        }
        .candidate {
          background: linear-gradient(to bottom, #bbdefb, #90caf9);
          color: #09407e;
          font-weight: 700;
          font-size: 1.5rem;
          border-radius: 16px;
          padding: 12px 28px;
          user-select: none;
          cursor: grab;
          box-shadow: 0 4px 10px rgba(30, 129, 176, 0.2),
                     0 2px 4px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.6);
          transition:
            transform 0.2s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 70px;
          z-index: 5;
          animation: candidateAppear 0.4s backwards;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .candidate:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
          border-radius: 16px 16px 0 0;
        }
        .candidate:nth-child(1) { animation-delay: 0.05s; }
        .candidate:nth-child(2) { animation-delay: 0.1s; }
        .candidate:nth-child(3) { animation-delay: 0.15s; }
        .candidate:nth-child(4) { animation-delay: 0.2s; }
        .candidate:nth-child(5) { animation-delay: 0.25s; }
        .candidate:nth-child(6) { animation-delay: 0.3s; }
        .candidate:nth-child(7) { animation-delay: 0.35s; }
        .candidate:nth-child(8) { animation-delay: 0.4s; }
        .candidate:nth-child(9) { animation-delay: 0.45s; }
        .candidate:nth-child(10) { animation-delay: 0.5s; }
        
        @keyframes candidateAppear {
          0% { opacity: 0; transform: scale(0.8) translateY(20px) rotateX(15deg); }
          70% { opacity: 1; transform: scale(1.05) translateY(-5px) rotateX(-5deg); }
          100% { opacity: 1; transform: scale(1) translateY(0) rotateX(0); }
        }
        
        .candidate:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 15px rgba(30, 129, 176, 0.3),
                     0 4px 6px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.8);
          background: linear-gradient(to bottom, #c5e4ff, #a5d6fa);
        }
        .candidate:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(30, 129, 176, 0.2),
                     0 1px 3px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.6);
          background: linear-gradient(to bottom, #90caf9, #64b5f6);
        }
        .candidate.dragging {
          animation: wiggle 0.8s infinite ease;
          opacity: 0.8;
          transform: scale(1.1);
          box-shadow: 0 15px 25px rgba(30, 129, 176, 0.25),
                     0 5px 10px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.8);
          background: linear-gradient(to bottom, #c5e4ff, #a5d6fa);
          z-index: 100;
        }
        @keyframes wiggle {
          0%, 100% { transform: scale(1.1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-1deg); }
          75% { transform: scale(1.1) rotate(1deg); }
        }
        .candidate:focus-visible {
          outline: 3px solid #1976d2;
          outline-offset: 3px;
          background: linear-gradient(to bottom, #c5e4ff, #a5d6fa);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(30, 129, 176, 0.25),
                     0 3px 5px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.8);
        }
        .dropzones {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 48px;
          user-select: none;
          perspective: 1000px;
        }
        .dropzone {
          flex: 1 1 280px;
          min-height: 180px;
          background: linear-gradient(165deg, rgba(240, 249, 255, 0.9), rgba(214, 240, 253, 0.7));
          border: 3px dashed #7dbde7;
          border-radius: 24px;
          padding: 25px 20px 20px;
          box-sizing: border-box;
          user-select: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #11698e;
          transition: all 0.3s ease;
          outline-offset: 3px;
          box-shadow: 0 6px 15px rgba(31, 94, 120, 0.08);
          transform-style: preserve-3d;
          animation: dropzoneAppear 0.6s backwards;
        }
        .dropzone:nth-child(1) { animation-delay: 0.2s; }
        .dropzone:nth-child(2) { animation-delay: 0.3s; }
        
        @keyframes dropzoneAppear {
          0% { opacity: 0; transform: translateY(20px) rotateX(5deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        
        .dropzone.highlight, .dropzone:focus-visible {
          background: linear-gradient(165deg, rgba(226, 246, 255, 0.95), rgba(194, 231, 252, 0.85));
          border-color: #3d99d6;
          border-width: 3px;
          border-style: dashed;
          box-shadow: 0 0 0 6px rgba(61, 153, 214, 0.1),
                     0 10px 25px rgba(31, 94, 120, 0.15);
          transform: translateY(-4px);
        }
        .dropzone:focus-visible {
          outline: 3px solid #1976d2;
        }
        .dropzone h3 {
          margin: 0 0 22px 0;
          font-weight: 800;
          color: #0c3d57;
          font-size: 1.5rem;
          letter-spacing: 0.02em;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8);
          position: relative;
          display: inline-block;
        }
        .dropzone h3:after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(12, 61, 87, 0.3), transparent);
        }
        .dropzone .items {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          min-height: 90px;
          width: 100%;
          padding: 10px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: inset 0 2px 6px rgba(31, 94, 120, 0.1);
        }
        .dropzone .items .candidate {
          cursor: default;
          margin: 0;
          background: linear-gradient(to bottom, #7ac0f1, #5ba4da);
          color: #05305c;
          box-shadow: 0 3px 8px rgba(30, 129, 176, 0.15),
                     inset 0 1px 1px rgba(255, 255, 255, 0.5);
          padding: 8px 22px;
          font-weight: 700;
          min-width: 50px;
          user-select: none;
          animation: dropItemAppear 0.35s backwards;
        }
        
        @keyframes dropItemAppear {
          0% { opacity: 0; transform: scale(0.7); }
          70% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .button-group {
          margin-top: 48px;
          display: flex;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        button {
          background: linear-gradient(to bottom, #29a0e0, #1e87c2);
          color: white;
          border: none;
          padding: 14px 44px;
          font-size: 1.3rem;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(31, 94, 120, 0.3),
                     0 3px 5px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.3);
          transition: all 0.25s ease;
          user-select: none;
          position: relative;
          overflow: hidden;
        }
        button.home-button {
          background: linear-gradient(to bottom, #4CAF50, #388E3C);
        }
        button.home-button:hover:not([disabled]) {
          background: linear-gradient(to bottom, #388E3C, #2E7D32);
          box-shadow: 0 7px 18px rgba(46, 125, 50, 0.35),
                     0 4px 6px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }
        button.home-button:active:not([disabled]) {
          background: linear-gradient(to bottom, #2E7D32, #1B5E20);
        }
        button[disabled] {
          background: linear-gradient(to bottom, #90c4de, #80b7d3);
          cursor: not-allowed;
          box-shadow: 0 2px 5px rgba(31, 94, 120, 0.1);
          transform: none !important;
        }
        button:hover:not([disabled]) {
          background: linear-gradient(to bottom, #1e8ccc, #1774ae);
          box-shadow: 0 7px 18px rgba(31, 94, 120, 0.35),
                     0 4px 6px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }
        button:active:not([disabled]) {
          transform: translateY(0);
          box-shadow: 0 3px 8px rgba(31, 94, 120, 0.2),
                     0 2px 4px rgba(0, 0, 0, 0.1),
                     inset 0 1px 1px rgba(255, 255, 255, 0.3);
          background: linear-gradient(to bottom, #1774ae, #156699);
        }
        button:focus-visible {
          outline: 3px solid #1496bb;
          outline-offset: 3px;
        }
        .feedback {
          margin-top: 36px;
          font-size: 1.5rem;
          font-weight: 700;
          min-height: 44px;
          user-select: none;
          animation: feedbackAppear 0.5s ease-out;
          padding: 12px 20px;
          border-radius: 10px;
        }
        @keyframes feedbackAppear {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .feedback.correct {
          color: #22c55e;
          text-shadow: 0 0 15px rgba(22, 163, 74, 0.5);
          animation: pulseGreen 1.5s infinite ease-in-out, feedbackAppear 0.5s ease-out;
          background-color: rgba(34, 197, 94, 0.1);
        }
        .feedback.incorrect {
          color: white;
          text-shadow: 0 0 12px rgba(185, 28, 28, 0.5);
          animation: pulseRed 1.5s infinite ease-in-out, feedbackAppear 0.5s ease-out;
          background-color: #ef4444;
          border: 2px solid #b91c1c;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.3);
        }
        @keyframes pulseGreen {
          0%, 100% { text-shadow: 0 0 15px rgba(22, 163, 74, 0.5); }
          50% { text-shadow: 0 0 32px rgba(34, 197, 94, 0.7); }
        }
        @keyframes pulseRed {
          0%, 100% { text-shadow: 0 0 12px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 28px rgba(255, 255, 255, 0.7); }
        }
        
        .confetti {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }
        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 20px;
          background: #ffd700;
          top: 0;
          opacity: 0;
        }
        
        .results-container {
          animation: resultsAppear 0.8s ease-out;
        }
        @keyframes resultsAppear {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .result-emoji {
          font-size: 5rem;
          margin: 0 0 20px;
          animation: emojiPop 1s ease-out;
        }
        @keyframes emojiPop {
          0% { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.2); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* Responsive tweaks */
        @media (max-width: 760px) {
          html {
            font-size: 16px;
          }
          .container {
            padding: 30px 20px 40px;
            margin: 20px auto 40px;
            border-radius: 20px;
          }
          h1 {
            font-size: 2.2rem;
          }
          .dropzones {
            flex-direction: column;
            gap: 30px;
            align-items: center;
          }
          .dropzone {
            width: 100%;
            max-width: 320px;
          }
          .button-group {
            gap: 16px;
          }
          button {
            padding: 12px 32px;
            font-size: 1.2rem;
          }
          .candidate {
            font-size: 1.3rem;
            padding: 10px 22px;
          }
        }
      `}),e.jsxs("div",{className:"container",role:"main","aria-live":"polite","aria-label":"Game Faktor dan Kelipatan, ramah untuk anak berkebutuhan khusus",children:[e.jsx("h1",{children:"Game Faktor dan Kelipatan"}),!Q&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"progress","aria-live":"polite","aria-atomic":"true",children:["Soal ",m+1," dari ",n]}),e.jsx("div",{className:"progress-dots","aria-hidden":"true",children:Array.from({length:n}).map((k,z)=>e.jsx("div",{className:`progress-dot ${z===m?"active":""} ${z<m?"completed":""}`},z))}),e.jsxs("p",{className:"scoreboard","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"bee-icon","aria-hidden":"true",children:"🐝"}),"Skor: ",v,e.jsx("span",{className:"bee-icon","aria-hidden":"true",children:"🐝"})]}),e.jsxs("p",{className:"question-text",tabIndex:0,children:["Pilih dan seret angka yang merupakan ",e.jsx("strong",{children:i[m].type==="faktor"?"faktor":"kelipatan"})," dari ",e.jsx("strong",{children:i[m].number})]}),e.jsxs("section",{"aria-label":"Daftar angka yang dapat diseret",className:"candidates-container",tabIndex:0,"aria-describedby":"descCandidates",children:[e.jsx("p",{id:"descCandidates",className:"sr-only",children:"Daftar angka yang dapat diseret ke area Faktor atau Bukan Faktor"}),L.map((k,z)=>e.jsx("div",{className:"candidate"+(P===k?" dragging":""),draggable:!A,tabIndex:0,role:"option","aria-grabbed":P===k,onDragStart:I=>c(I,k),onDragEnd:s,onKeyDown:I=>M(I,k),style:{animationDelay:`${.05*z}s`},children:k},k))]}),e.jsxs("section",{className:"dropzones","aria-label":"Tempat meletakkan angka",children:[e.jsxs("div",{className:"dropzone",ref:y,"aria-dropeffect":"move","aria-label":i[m].type==="faktor"?"Kotak faktor":"Kotak kelipatan",tabIndex:0,onDragOver:r,onDragEnter:k=>{k.preventDefault(),k.currentTarget.classList.add("highlight")},onDragLeave:k=>k.currentTarget.classList.remove("highlight"),onDrop:k=>{k.preventDefault(),k.currentTarget.classList.remove("highlight"),h("correct")},onKeyDown:k=>K(k,"correct"),children:[e.jsx("h3",{children:i[m].type==="faktor"?"Faktor":"Kelipatan"}),e.jsx("div",{className:"items","aria-live":"polite","aria-relevant":"additions",children:D.map((k,z)=>e.jsx("div",{className:"candidate",tabIndex:-1,"aria-grabbed":"false",role:"option",style:{animationDelay:`${.05*z}s`},children:k},k))})]}),e.jsxs("div",{className:"dropzone",ref:B,"aria-dropeffect":"move","aria-label":i[m].type==="faktor"?"Kotak bukan faktor":"Kotak bukan kelipatan",tabIndex:0,onDragOver:r,onDragEnter:k=>{k.preventDefault(),k.currentTarget.classList.add("highlight")},onDragLeave:k=>k.currentTarget.classList.remove("highlight"),onDrop:k=>{k.preventDefault(),k.currentTarget.classList.remove("highlight"),h("incorrect")},onKeyDown:k=>K(k,"incorrect"),children:[e.jsx("h3",{children:i[m].type==="faktor"?"Bukan Faktor":"Bukan Kelipatan"}),e.jsx("div",{className:"items","aria-live":"polite","aria-relevant":"additions",children:J.map((k,z)=>e.jsx("div",{className:"candidate",tabIndex:-1,"aria-grabbed":"false",role:"option",style:{animationDelay:`${.05*z}s`},children:k},k))})]})]}),e.jsxs("div",{className:"button-group",children:[e.jsx("button",{onClick:S,disabled:!d||A,"aria-disabled":!d||A,"aria-label":"Kirim jawaban",type:"button",children:"Kirim"}),e.jsx("button",{onClick:o,style:{display:A?"inline-block":"none"},"aria-label":"Soal berikutnya",type:"button",children:"Soal Berikutnya"})]})]}),Q&&e.jsxs("div",{className:"results-container",children:[e.jsx("div",{className:"result-emoji","aria-hidden":"true",children:v===n*t?"🎉":v>=n*t*.7?"👍":"😊"}),e.jsx("div",{className:"progress","aria-live":"polite","aria-atomic":"true",children:"Kamu sudah menyelesaikan semua soal!"}),e.jsxs("p",{className:"scoreboard","aria-live":"polite","aria-atomic":"true",style:{color:v===n*t?"#22c55e":v>=n*t*.7?"#0e7490":"#ef4444",textShadow:v===n*t?"0 0 20px rgba(22, 163, 74, 0.4), 0 0 30px rgba(34, 197, 94, 0.3)":v>=n*t*.7?"0 0 18px rgba(21, 94, 117, 0.4)":"0 0 15px rgba(185, 28, 28, 0.3)",fontSize:"1.7rem",padding:"15px 40px"},children:[e.jsx("span",{className:"bee-icon","aria-hidden":"true",children:"🐝"}),"Skor akhir kamu: ",v," dari ",n*t," poin",e.jsx("span",{className:"bee-icon","aria-hidden":"true",children:"🐝"})]}),e.jsx("p",{className:"feedback",role:"alert","aria-live":"assertive",style:{fontSize:"1.6rem"},children:v===n*t?"🌟 Nilai sempurna! Hebat sekali! 🌟":v>=n*t*.7?"👍 Bagus! Tetap semangat belajar!":"😊 Terus berlatih ya!"}),e.jsxs("div",{className:"button-group",children:[e.jsx("button",{onClick:u,"aria-label":"Main lagi",type:"button",children:"Main Lagi"}),e.jsx("button",{className:"home-button",onClick:()=>window.location.href="/category4_bab1","aria-label":"Kembali ke halaman kategori",type:"button",children:"Kembali ke Kategori"})]})]}),f.text&&!Q&&e.jsxs("p",{className:`feedback ${f.type}`,role:"alert","aria-live":"assertive",style:{marginTop:"36px"},children:[f.type==="incorrect"?e.jsx("span",{style:{marginRight:"10px"},children:"❌"}):"",f.text]})]})]})}const ue=[{story:"Di sebuah ladang, ada 4 petani. Masing-masing petani mengambil bagian dari ladang yang sama. Jika pembilangnya satu dan penyebutnya 4, berapa bagian ladang yang diambil oleh satu petani?",questionText:"Berapa pecahan yang menunjukkan bagian satu petani?",choices:["1/2","1/4","1/3","1/5"],answer:"1/4"},{story:"Luna mempunyai 5 kue yang dibagi sama rata kepada teman-temannya. Jika Luna memberikan satu potong kue, pecahan yang menunjukkan bagian kue yang Luna berikan adalah?",questionText:"Bagian kue yang diberikan Luna adalah?",choices:["1/5","1/4","1/6","2/5"],answer:"1/5"},{story:"Pak Budi memotong 6 batang kayu menjadi bagian yang sama, lalu memberikan satu bagian kepada tetangganya. Berapakah pecahan yang mewakili bagian kayu yang diberikan kepada tetangga?",questionText:"Pecahan bagian kayu yang diberikan adalah?",choices:["1/6","1/5","1/4","2/6"],answer:"1/6"},{story:"Di kelas ada 8 pensil yang dibagi sama kepada 8 anak. Satu anak mendapat satu pensil. Pecahan yang menunjukkan bagian pensil satu anak adalah?",questionText:"Bagian pensil yang didapat satu anak adalah?",choices:["1/8","1/4","1/7","2/8"],answer:"1/8"},{story:"Siti memotong sebuah roti menjadi 3 bagian yang sama besar. Siti kemudian mengambil satu bagian roti untuk dimakan. Pecahan yang menunjukkan bagian roti yang diambil Siti adalah?",questionText:"Bagian roti yang diambil Siti adalah?",choices:["1/3","2/3","1/2","3/3"],answer:"1/3"},{story:"Ada 7 buah bola yang dibagikan sama rata kepada 7 pemain. Setiap pemain mendapat satu bola. Pecahan bola yang diterima satu pemain adalah?",questionText:"Pecahan yang tepat untuk satu bola pemain adalah?",choices:["1/7","2/7","1/6","3/7"],answer:"1/7"},{story:"Pak Andi memiliki 9 jeruk, lalu ia membagikan satu jeruk kepada setiap murid. Pecahan yang menyatakan satu jeruk dari jeruk yang dimiliki Pak Andi adalah?",questionText:"Bagian jeruk yang dibagikan adalah?",choices:["1/9","1/8","1/7","2/9"],answer:"1/9"},{story:"Sebuah pizza dibagi menjadi 10 potongan sama besar. Lina makan satu potong pizza. Pecahan yang menunjukkan pizza yang dimakan Lina adalah?",questionText:"Pizza yang dimakan Lina adalah bagian?",choices:["1/10","1/9","2/10","3/10"],answer:"1/10"},{story:"Dalam sebuah perlombaan, hadiah utama dibagi menjadi 12 bagian sama besar. Hadi mendapatkan satu bagian hadiah. Pecahan bagian hadiah Hadi adalah?",questionText:"Berapa pecahan bagian hadiah Hadi?",choices:["1/12","1/11","2/12","1/10"],answer:"1/12"},{story:"Sebuah kue tart dipotong menjadi 15 bagian yang sama. Rina mengambil satu potong kue tersebut. Pecahan yang tepat untuk bagian kue yang diambil Rina adalah?",questionText:"Bagian kue Rina adalah?",choices:["1/15","2/15","1/14","3/15"],answer:"1/15"}],Ee=`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    background: #a6e887;
    font-family: 'Comic Neue', cursive, Arial, sans-serif;
    color: #2d3436;
    user-select: none;
    min-height: 100vh;
    position: relative;
    font-size: 18px; /* Base font size increased */
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
  header {
    background-color: #00a2ff;
    padding: 20px 15px;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 2.6em;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    z-index: 2;
  }
  main {
    max-width: 1200px;
    width: 80%;
    margin: 30px auto;
    background: white;
    border-radius: 15px;
    padding: 40px 50px 45px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
  .scoreboard {
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 25px;
    text-align: right;
    color: #00a2ff;
  }
  .story {
    font-size: 1.6em;
    margin-bottom: 30px;
    line-height: 1.6;
    font-weight: 500;
    color: #2d3436;
  }
  .question {
    font-weight: 700;
    font-size: 1.7em;
    margin-bottom: 30px;
    color: #2d3436;
    text-align: center;
  }
  .choices {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    justify-content: center;
    margin-bottom: 30px;
  }
  button.choice-btn {
    background: #00c9c0;
    border: none;
    border-radius: 10px;
    padding: 25px 0;
    font-size: 1.8em;
    font-weight: 700;
    color: white;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0,201,192,0.4);
    transition: all 0.2s ease;
    user-select: none;
  }
  button.choice-btn:hover:not(:disabled),
  button.choice-btn:focus-visible:not(:disabled) {
    background: #00b3aa;
    outline: none;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,179,170,0.6);
  }
  button.choice-btn:disabled {
    cursor: default;
    opacity: 0.9;
  }
  .correct {
    background-color:rgb(0, 125, 52) !important;
    box-shadow: 0 6px 16px rgba(39,174,96,0.5) !important;
  }
  .wrong {
    background-color: #e74c3c !important;
    box-shadow: 0 6px 16px rgba(214,48,49,0.5) !important;
  }
  .feedback {
    text-align: center;
    font-weight: 700;
    font-size: 1.6em;
    margin-bottom: 28px;
    min-height: 40px;
    color: #2d3436;
  }
  .next-btn {
    display: block;
    margin: 0 auto;
    background: #00a2ff;
    color: white;
    font-weight: 700;
    font-size: 1.6em;
    border: none;
    padding: 20px 40px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(9,132,227,0.4);
    transition: all 0.2s ease;
    user-select: none;
  }
  .next-btn:hover,
  .next-btn:focus-visible {
    background: #0088dd;
    outline: none;
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(9,132,227,0.6);
  }
  .hidden {
    display: none;
  }
  .final-score {
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    margin: 20px 0;
    color: #00a2ff;
    white-space: pre-line;
    line-height: 1.4;
  }
  /* Background bubbles */
  .background-bubbles {
    position: fixed;
    top: 0; left: 0; 
    width: 100vw; 
    height: 100vh; 
    pointer-events: none; 
    z-index: 0;
    overflow: hidden;
  }
  .bubble {
    position: absolute;
    bottom: -100px;
    background: rgba(9,132,227,0.1);
    border-radius: 50%;
    opacity: 0.5;
    animation-name: rise;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes rise {
    from {
      bottom: -100px;
      opacity: 0.5;
    }
    to {
      bottom: 110vh;
      opacity: 0;
    }
  }
  /* Badge styles */
  .badge-container {
    margin: 40px auto;
    text-align: center;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .badge {
    display: flex;
    background: linear-gradient(135deg, #f6e27f, #d4af37);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    box-shadow:
      0 0 15px #fff8b8,
      0 0 20px #d4af37;
    position: relative;
    animation: glow 3s ease-in-out infinite alternate;
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0 15px #d4af37;
    margin: 0 auto;
  }
  @keyframes glow {
    0% { box-shadow:
      0 0 15px #fff8b8,
      0 0 20px #d4af37; }
    100% { box-shadow:
      0 0 20px #fff8b8,
      0 0 30px #d4af37;}
  }
  .badge-text {
    margin-top: 15px;
    font-weight: 700;
    font-size: 1.4rem;
    color: #996515;
    text-shadow: 0 0 5px #fff8b8;
    text-align: center;
  }
  
  .game-complete-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 1400px) {
    main {
      width: 85%;
    }
  }
  
  @media screen and (max-width: 992px) {
    main {
      width: 90%;
    }
    .choices {
      grid-template-columns: 1fr;
    }
    button.choice-btn {
      padding: 20px 0;
      font-size: 1.6em;
    }
  }
  
  @media screen and (max-width: 768px) {
    body {
      font-size: 16px;
    }
    main {
      width: 95%;
      padding: 30px 35px;
    }
    header {
      font-size: 2.2em;
      padding: 15px 10px;
    }
  }
`;function _e(i){for(let n=i.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[i[n],i[t]]=[i[t],i[n]]}}function ia(){const[i,n]=a.useState(0),[t,m]=a.useState(0),[x,v]=a.useState(""),[N,j]=a.useState(!1),[b,g]=a.useState(null),[w,f]=a.useState([]),[q,A]=a.useState(!1),T=a.useRef(null),P=se();a.useEffect(()=>{if(i<ue.length){const l=[...ue[i].choices];_e(l),f(l),g(null),v(""),j(!1)}},[i]),a.useEffect(()=>{const l=document.getElementById("background-bubbles");if(!l)return;l.innerHTML="";const c=15;for(let s=0;s<c;s++){const r=document.createElement("div");r.className="bubble";const h=Math.random()*80+20;r.style.width=`${h}px`,r.style.height=`${h}px`,r.style.left=`${Math.random()*100}vw`;const d=Math.random()*15+15;r.style.animationDuration=`${d}s`,r.style.animationDelay=`${Math.random()*15}s`,l.appendChild(r)}return()=>{l&&(l.innerHTML="")}},[]);const $=l=>{if(N)return;const c=ue[i].answer;g(l),l===c?(m(s=>s+10),v("Betul sekali! Kamu dapat 10 poin!")):v(`Wah, belum tepat. Jawaban yang benar adalah ${c}. Ayo coba soal berikutnya!`),j(!0),setTimeout(()=>{T.current&&T.current.focus()},100)},y=()=>{if(i<ue.length-1)n(i+1);else{A(!0);const l=JSON.parse(localStorage.getItem("selectedAvatar"));if(l){const c=`avatar_${l.name}_levels_progress`,s=JSON.parse(localStorage.getItem(c))||{};s.level_1={completed:!0,score:t,completedAt:new Date().toISOString()},localStorage.setItem(c,JSON.stringify(s))}}},B=()=>{P("/category4_bab2")};return e.jsxs("div",{className:"app-container",children:[e.jsx("style",{children:Ee}),e.jsx("header",{role:"banner",children:"Petualangan Pecahan Seru + Interaktif"}),e.jsxs("main",{role:"main","aria-live":"polite","aria-atomic":"true",children:[e.jsxs("div",{className:"scoreboard","aria-label":"Skor saat ini",children:["Skor: ",t," / 100"]}),q?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"final-score",tabIndex:0,children:`Selamat! Kamu sudah menyelesaikan petualangan pecahan ini!

Skor Akhir Kamu: ${t} / 100

Terima kasih sudah bermain! Kamu luar biasa!`}),e.jsxs("div",{className:"badge-container",children:[e.jsx("div",{className:"badge",children:"🏅"}),e.jsx("div",{className:"badge-text",children:"Selamat! Kamu Mendapatkan Lencana Keberhasilan!"})]}),e.jsx("button",{className:"next-btn",onClick:B,style:{marginTop:"20px"},"aria-label":"Kembali ke Kategori",children:"Kembali ke Kategori"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"story",children:ue[i].story}),e.jsx("div",{className:"question",children:ue[i].questionText}),e.jsx("div",{className:"choices",role:"list","aria-label":"Pilihan jawaban",children:w.map((l,c)=>{const s=l===ue[i].answer,r=l===b;let h="choice-btn";return N&&(s?h+=" correct":r&&!s&&(h+=" wrong")),e.jsx("button",{className:h,onClick:()=>$(l),disabled:N,role:"listitem",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),N||$(l))},children:l},l)})}),e.jsx("div",{className:"feedback","aria-live":"assertive","aria-atomic":"true",children:x}),N&&e.jsx("button",{className:"next-btn",onClick:y,ref:T,"aria-label":"Soal Berikutnya",onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),y())},children:i<ue.length-1?"Soal Berikutnya ▶":"Selesai ✓"})]})]}),e.jsx("div",{id:"background-bubbles",className:"background-bubbles","aria-hidden":"true"})]})}const H={body:{background:"linear-gradient(135deg, #fceabb, #f8b500)",fontFamily:"'Poppins', sans-serif",margin:0,padding:0,color:"#222",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},gameContainer:{background:"#fff",borderRadius:20,padding:"25px 30px 40px 30px",maxWidth:480,width:"90vw",boxShadow:"0 15px 40px rgba(0,0,0,0.2)",textAlign:"center"},heading:{marginBottom:15,color:"#f79a00",textShadow:"1px 1px 4px #dd7700",userSelect:"none"},instructions:{fontSize:"1.05rem",marginBottom:20,color:"#444"},questionNumber:{fontSize:"1rem",marginBottom:10,fontWeight:600,color:"#f79a00"},questionText:{fontSize:"1.3rem",marginBottom:25,fontWeight:600},answers:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:15},answerBtn:{background:"#f8b500",border:"none",borderRadius:12,padding:"15px 20px",fontSize:"1.15rem",color:"#fff",cursor:"pointer",boxShadow:"0 6px #c28c00",transition:"all 0.3s ease",userSelect:"none",minWidth:110,margin:"5px"},feedback:{marginTop:20,fontSize:"1.2rem",fontWeight:700,height:32,color:"#222",userSelect:"none",minHeight:24},nextBtn:{marginTop:25,backgroundColor:"#f79a00",border:"none",padding:"12px 30px",borderRadius:30,fontSize:"1.15rem",cursor:"pointer",color:"white",boxShadow:"0 6px #c27100",userSelect:"none",display:"inline-block",transition:"background-color 0.3s"},progressBarContainer:{width:"100%",backgroundColor:"#f0f0f0",borderRadius:10,overflow:"hidden",height:15,marginBottom:20,boxShadow:"inset 0 1px 3px rgb(0 0 0 / 0.1)"},progressBar:{height:"100%",background:"#f79a00",width:"0%",transition:"width 0.4s ease"},score:{marginTop:15,fontWeight:600,fontSize:"1.1rem",color:"#444",userSelect:"none"},fraction:{display:"inline-block",textAlign:"center",verticalAlign:"middle",fontWeight:700,lineHeight:1,userSelect:"none"},fractionTop:{borderBottom:"2px solid #222",fontSize:"1.2rem",color:"#2c3e50",padding:"0 6px"},fractionBottom:{fontSize:"1.2rem",color:"#2c3e50",padding:"0 6px"},startBtn:{fontSize:"1.5rem",backgroundColor:"#f79a00",border:"none",color:"white",padding:"20px 40px",borderRadius:35,cursor:"pointer",boxShadow:"0 8px #c27100",transition:"background-color 0.3s ease",marginTop:30,userSelect:"none"},categoryBtn:{fontSize:"1.2rem",backgroundColor:"#4E6BFF",border:"none",color:"white",padding:"15px 30px",borderRadius:35,cursor:"pointer",boxShadow:"0 6px #3a50c2",transition:"background-color 0.3s ease",marginTop:15,userSelect:"none"}};function Ie({num:i,den:n}){return n===1?e.jsx("span",{"aria-label":`${i}`,children:i}):e.jsxs("span",{style:H.fraction,role:"img","aria-label":`${i} per ${n}`,children:[e.jsx("span",{style:H.fractionTop,children:i}),e.jsx("span",{style:H.fractionBottom,children:n})]})}function ze(i){let n=i.slice(),t=n.length,m;for(;t!==0;)m=Math.floor(Math.random()*t),t--,[n[t],n[m]]=[n[m],n[t]];return n}class O{constructor(n,t){this.num=n,this.den=t}value(){return this.num/this.den}equals(n){const t=(g,w)=>w?t(w,g%w):g,m=t(this.num,this.den),x=t(n.num,n.den),v=this.num/m,N=this.den/m,j=n.num/x,b=n.den/x;return v===j&&N===b}approxEquals(n){return Math.abs(this.value()-n.value())<1e-4}toString(){return`${this.num}/${this.den}`}}const me=[{type:"order",prompt:"Urutkan pecahan berikut dari yang terkecil ke terbesar:",fractions:[new O(3,8),new O(1,4),new O(1,2)]},{type:"order",prompt:"Urutkan pecahan berikut dari yang terkecil ke terbesar:",fractions:[new O(2,3),new O(1,5),new O(1,2)]},{type:"compare",prompt:"Pilih pecahan yang lebih besar:",fractions:[new O(2,5),new O(3,8)]},{type:"compare",prompt:"Pilih pecahan yang lebih besar:",fractions:[new O(2,3),new O(3,5)]},{type:"equivalent",prompt:"Pilih pecahan yang senilai dengan ",base:new O(2,5),choices:[new O(4,10),new O(3,6),new O(1,3)]},{type:"equivalent",prompt:"Pilih pecahan yang senilai dengan ",base:new O(1,3),choices:[new O(2,6),new O(2,5),new O(3,8)]},{type:"order",prompt:"Urutkan pecahan berikut dari yang terkecil ke terbesar:",fractions:[new O(5,6),new O(1,3),new O(1,2)]},{type:"compare",prompt:"Pilih pecahan yang lebih besar:",fractions:[new O(4,7),new O(3,5)]},{type:"equivalent",prompt:"Pilih pecahan yang senilai dengan ",base:new O(3,4),choices:[new O(6,8),new O(4,6),new O(5,7)]},{type:"equivalent",prompt:"Pilih pecahan yang senilai dengan ",base:new O(2,5),choices:[new O(4,10),new O(4,7),new O(3,10)]}];function oa(){const[i,n]=a.useState(!1),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState([]),[b,g]=a.useState(!1),[w,f]=a.useState(""),[q,A]=a.useState(new Set),[T,P]=a.useState(new Set),$=se(),y=10;function B(){n(!0),m(0),v(0),j([]),g(!1),f(""),A(new Set),P(new Set)}const l=me[t]||null;function c(o){b||j(u=>{if(u.some(C=>C.num===o.num&&C.den===o.den))return u;const p=[...u,o];if(p.length===l.fractions.length){let C=[...l.fractions].sort((D,J)=>D.value()-J.value());const M=new Set,K=new Set;let L=!0;for(let D=0;D<p.length;D++)p[D].equals(C[D])?M.add(`${p[D].num}-${p[D].den}`):(K.add(`${p[D].num}-${p[D].den}`),L=!1);L?(v(D=>D+y),f("Yay! Jawaban benar 🎉")):f("Coba lagi ya! Jawaban kurang tepat."),A(M),P(K),g(!0)}return p})}function s(o){if(b)return;let u=l.fractions[0].value()>l.fractions[1].value()?l.fractions[0]:l.fractions[1];const p=`${o.num}-${o.den}`,C=`${u.num}-${u.den}`;o.equals(u)?(v(M=>M+y),f("Betul! Pecahan ini lebih besar 👍"),A(new Set([p]))):(f("Ups, yang benar pecahan yang satunya ya."),P(new Set([p])),A(new Set([C]))),g(!0)}function r(o){if(b)return;const u=`${o.num}-${o.den}`,p=(J,Q)=>Q?p(Q,J%Q):J,C=p(l.base.num,l.base.den),M={num:l.base.num/C,den:l.base.den/C},K=p(o.num,o.den),L={num:o.num/K,den:o.den/K};if(M.num===L.num&&M.den===L.den)v(J=>J+y),f("Hebat! Itu pecahan senilai 😊"),A(new Set([u]));else{f("Bukan itu, ini bukan pecahan senilai."),P(new Set([u]));const J=l.choices.filter(k=>{const z=p(k.num,k.den),I={num:k.num/z,den:k.den/z};return M.num===I.num&&M.den===I.den}),Q=new Set;J.forEach(k=>{Q.add(`${k.num}-${k.den}`)}),A(Q)}g(!0)}function h(){m(o=>o+1),j([]),g(!1),f(""),A(new Set),P(new Set)}function d(){$("/category4_bab2")}if(!i)return e.jsx("main",{style:H.body,children:e.jsxs("div",{style:H.gameContainer,"aria-label":"Game pecahan seru untuk anak kelas 4 SD",children:[e.jsx("h1",{style:H.heading,children:"Game Pecahan Seru!"}),e.jsxs("div",{style:H.instructions,"aria-live":"polite",children:["Yuk belajar pecahan dengan cara yang seru dan interaktif!",e.jsx("br",{}),"Kamu akan menjawab 10 soal tentang mengurutkan, membandingkan, dan pecahan senilai."]}),e.jsx("button",{style:H.startBtn,onClick:B,"aria-label":"Mulai permainan",type:"button",children:"Mulai Game"})]})});if(t>=me.length){let o="";const u=me.length*y,p=x/u*100;return p===100?o="Hebat sekali! Kamu sangat pintar dalam pecahan!":p>=70?o="Bagus! Terus berlatih dan kamu pasti semakin hebat!":o="Jangan menyerah! Pelajari lagi dan coba lagi ya!",e.jsx("main",{style:H.body,children:e.jsxs("div",{style:H.gameContainer,"aria-label":"Game pecahan seru untuk anak kelas 4 SD",children:[e.jsx("h1",{style:H.heading,children:"Game Pecahan Seru!"}),e.jsx("p",{style:{fontWeight:"bold",fontSize:24},children:"🎉 Kamu sudah selesai! 🎉"}),e.jsxs("p",{style:{fontSize:20,marginTop:15},children:["Skor kamu: ",e.jsx("strong",{children:x})," dari ",e.jsx("strong",{children:u})]}),e.jsx("p",{style:{marginTop:20,fontSize:18,color:"#f79a00"},children:o}),e.jsx("button",{style:H.startBtn,onClick:B,"aria-label":"Mainkan lagi",type:"button",children:"Mainkan Lagi"}),e.jsx("button",{style:H.categoryBtn,onClick:d,"aria-label":"Kembali ke kategori",type:"button",onMouseOver:C=>C.currentTarget.style.backgroundColor="#3a50c2",onMouseOut:C=>C.currentTarget.style.backgroundColor="#4E6BFF",children:"Kembali ke Kategori"})]})})}const S=t/me.length*100;return e.jsx("main",{style:H.body,children:e.jsxs("div",{style:H.gameContainer,"aria-label":"Game pecahan seru untuk anak kelas 4 SD",children:[e.jsx("h1",{style:H.heading,children:"Game Pecahan Seru!"}),e.jsx("div",{"aria-hidden":"true",style:H.progressBarContainer,children:e.jsx("div",{style:{...H.progressBar,width:`${S}%`}})}),e.jsxs("div",{style:H.questionNumber,children:["Soal ",t+1," dari ",me.length]}),e.jsxs("div",{style:H.score,children:["Skor: ",x," dari ",me.length*y]}),e.jsxs("div",{style:H.questionText,children:[l.prompt,l.type==="equivalent"&&e.jsx(Ie,{num:l.base.num,den:l.base.den})]}),e.jsxs("div",{style:H.answers,role:"listbox","aria-label":"Pilihan jawaban",children:[l.type==="order"&&ze(l.fractions).map(o=>{const u=N.some(K=>K.num===o.num&&K.den===o.den),p=`${o.num}-${o.den}`,C=q.has(p),M=T.has(p);return e.jsx("button",{style:{...H.answerBtn,backgroundColor:b?C?"#4caf50":M?"#e53935":"#f8b500":"#f8b500",boxShadow:b?C?"0 6px #357a38":M?"0 6px #a32b2b":"0 6px #c28c00":"0 6px #c28c00",opacity:u&&!b||b&&!C&&!M?.5:1},type:"button",disabled:b||u,"aria-label":`Pecahan ${o.num} per ${o.den}`,onClick:()=>c(o),children:e.jsx(Ie,{num:o.num,den:o.den})},p)}),l.type==="compare"&&l.fractions.map(o=>{const u=`${o.num}-${o.den}`,p=q.has(u),C=T.has(u);return e.jsx("button",{style:{...H.answerBtn,backgroundColor:b?p?"#4caf50":C?"#e53935":"#f8b500":"#f8b500",boxShadow:b?p?"0 6px #357a38":C?"0 6px #a32b2b":"0 6px #c28c00":"0 6px #c28c00",opacity:b&&!p&&!C?.5:1},type:"button",disabled:b,"aria-label":`Pecahan ${o.num} per ${o.den}`,onClick:()=>s(o),children:e.jsx(Ie,{num:o.num,den:o.den})},u)}),l.type==="equivalent"&&ze(l.choices).map(o=>{const u=`${o.num}-${o.den}`,p=q.has(u),C=T.has(u);return e.jsx("button",{style:{...H.answerBtn,backgroundColor:b?p?"#4caf50":C?"#e53935":"#f8b500":"#f8b500",boxShadow:b?p?"0 6px #357a38":C?"0 6px #a32b2b":"0 6px #c28c00":"0 6px #c28c00",opacity:b&&!p&&!C?.5:1},type:"button",disabled:b,"aria-label":`Pecahan ${o.num} per ${o.den}`,onClick:()=>r(o),children:e.jsx(Ie,{num:o.num,den:o.den})},u)})]}),e.jsx("div",{style:H.feedback,"aria-live":"assertive",children:w}),b&&t<me.length-1&&e.jsx("button",{type:"button",style:H.nextBtn,"aria-label":"Tombol soal berikutnya",onClick:h,onMouseOver:o=>o.currentTarget.style.backgroundColor="#dd7f00",onMouseOut:o=>o.currentTarget.style.backgroundColor="#f79a00",children:"Soal Berikutnya"}),b&&t===me.length-1&&e.jsx("button",{type:"button",style:H.nextBtn,"aria-label":"Tombol lihat hasil akhir",onClick:h,onMouseOver:o=>o.currentTarget.style.backgroundColor="#dd7f00",onMouseOut:o=>o.currentTarget.style.backgroundColor="#f79a00",children:"Lihat Hasil Akhir"})]})})}const ge=[{question:"Berapakah hasil dari 0,3 + 0,6?",answers:["0,9","0,8","1,0","0,7"],correct:"0,9"},{question:"Jika kamu memiliki 0,7 kg apel dan menambah 0,2 kg lagi, berapa berat apel sekarang?",answers:["0,5 kg","0,9 kg","0,8 kg","0,6 kg"],correct:"0,9 kg"},{question:"Berapa nilai 0,5 dikurangi 0,3?",answers:["0,8","0,2","0,3","0,6"],correct:"0,2"},{question:"0,4 + 0,2 sama dengan ...?",answers:["0,6","0,42","0,8","0,7"],correct:"0,6"},{question:"Pecahan desimal manakah yang sama dengan tiga per sepuluh?",answers:["0,03","0,3","0,30","Semua benar"],correct:"Semua benar"},{question:"Jumlahkan 0,1 + 0,1 + 0,1. Berapa hasilnya?",answers:["0,2","0,3","0,01","1,3"],correct:"0,3"},{question:"Berapakah hasil dari 1 dikurangi 0,4?",answers:["0,6","0,4","1,4","0,5"],correct:"0,6"},{question:"Jika 0,7 liter air dikurangi 0,2 liter, sisa air berapa liter?",answers:["0,9","0,5","0,4","0,6"],correct:"0,5"},{question:"0,9 + 0,1 sama dengan ...?",answers:["1,0","0,01","10","9,1"],correct:"1,0"},{question:"Pecahan desimal untuk lima per sepuluh adalah ...?",answers:["0,5","0,05","5,0","0,50"],correct:"0,5"}],Z={container:{maxWidth:600,margin:"40px auto",background:"white",borderRadius:20,boxShadow:"0 10px 30px rgba(0,0,0,0.1)",padding:30,textAlign:"center",fontFamily:"'Poppins', sans-serif"},title:{color:"#ff6f61",fontSize:"2.5rem",marginBottom:10},subtitle:{fontSize:"1.2rem",color:"#444",marginBottom:25},questionNumber:{fontSize:"1rem",marginBottom:15,fontWeight:600,color:"#777"},questionText:{fontSize:"1.4rem",marginBottom:25,fontWeight:600,color:"#333"},answers:{display:"flex",flexDirection:"column",gap:15,marginBottom:25},answerBtn:{background:"#ffbaba",border:"none",borderRadius:12,padding:"15px 20px",fontSize:"1.1rem",cursor:"pointer",color:"#5a2120",transition:"background 0.3s ease"},answerCorrect:{background:"#a2f7a2",color:"#285428",cursor:"default"},answerWrong:{background:"#f79a9a",color:"#810000",cursor:"default"},feedback:{fontSize:"1.2rem",fontWeight:600,marginBottom:25,minHeight:28},score:{fontSize:"1.25rem",fontWeight:600,color:"#e25822"},nextBtn:{background:"#ff6f61",color:"white",border:"none",borderRadius:15,padding:"15px 35px",fontSize:"1.2rem",cursor:"pointer",transition:"background 0.3s ease"},resultContainer:{fontSize:"1.5rem",fontWeight:600},emoji:{fontSize:"3rem",marginBottom:20},award:{margin:"30px auto",maxWidth:200,background:"#fff5e6",border:"3px solid #ffcc80",borderRadius:15,padding:20,boxShadow:"0 6px 15px rgba(255, 153, 0, 0.2)"},awardIcon:{fontSize:"4rem",marginBottom:10},awardText:{color:"#ff8c00",fontSize:"1.2rem",fontWeight:700},categoryBtn:{background:"#4E6BFF",color:"white",border:"none",borderRadius:15,padding:"15px 35px",fontSize:"1.2rem",marginTop:20,cursor:"pointer",transition:"background 0.3s ease"}};function la(){const[i,n]=a.useState(0),[t,m]=a.useState(null),[x,v]=a.useState(0),[N,j]=a.useState(!1),[b,g]=a.useState(!1),w=se();function f(l){return l.map(c=>({sort:Math.random(),value:c})).sort((c,s)=>c.sort-s.sort).map(c=>c.value)}const q=ge[i],A=f(q.answers);function T(l){N||(m(l),j(!0),l===q.correct&&v(c=>c+10))}function P(){m(null),j(!1),i+1<ge.length?n(l=>l+1):g(!0)}function $(){n(0),m(null),v(0),j(!1),g(!1)}function y(){w("/category4_bab2")}function B(){const l=ge.length*10,c=x/l*100;return c===100?{icon:"🏆",text:"Medali Emas",description:"Kamu menguasai pecahan desimal dengan sempurna!"}:c>=80?{icon:"🥈",text:"Medali Perak",description:"Kamu sangat baik dalam pecahan desimal!"}:c>=60?{icon:"🥉",text:"Medali Perunggu",description:"Kamu cukup baik dengan pecahan desimal!"}:{icon:"🌟",text:"Bintang Partisipasi",description:"Terus berlatih ya!"}}return e.jsxs("div",{style:Z.container,children:[e.jsx("h1",{style:Z.title,children:"Game Pecahan Desimal"}),e.jsx("div",{style:Z.subtitle,children:"Menghitung Pecahan Desimal Sampai Persepuluhan"}),b?e.jsxs("div",{style:Z.resultContainer,children:[e.jsx("div",{style:Z.emoji,children:x===ge.length*10?"🌟🎉 Sempurna! Kamu hebat! 🎉🌟":x>=ge.length*7?"👍 Bagus! Terus belajar ya!":"🤔 Jangan menyerah, coba lagi ya!"}),e.jsxs("div",{style:Z.score,children:["Skor kamu adalah ",x," dari ",ge.length*10,"."]}),e.jsxs("div",{style:Z.award,children:[e.jsx("div",{style:Z.awardIcon,children:B().icon}),e.jsx("div",{style:Z.awardText,children:B().text}),e.jsx("div",{style:{fontSize:"1rem",marginTop:10,color:"#666"},children:B().description})]}),e.jsx("button",{style:{...Z.nextBtn,marginTop:30},onClick:$,onMouseOver:l=>{l.target.style.background="#d94e47"},onMouseOut:l=>{l.target.style.background="#ff6f61"},children:"Mainkan Lagi"}),e.jsx("button",{style:Z.categoryBtn,onClick:y,onMouseOver:l=>{l.target.style.background="#3a50c2"},onMouseOut:l=>{l.target.style.background="#4E6BFF"},children:"Kembali ke Kategori"})]}):e.jsxs("div",{children:[e.jsxs("div",{style:Z.questionNumber,children:["Soal ",i+1," dari ",ge.length]}),e.jsx("div",{style:Z.questionText,children:q.question}),e.jsx("div",{style:Z.answers,children:A.map((l,c)=>{const s=l===q.correct,r=l===t;let h={...Z.answerBtn};return N&&(h.cursor="default",s?h={...h,...Z.answerCorrect}:r&&!s?h={...h,...Z.answerWrong}:h.opacity=.6),e.jsx("button",{style:h,onClick:()=>T(l),disabled:N,onMouseOver:d=>{N||(d.target.style.background="#ff7b79",d.target.style.color="white")},onMouseOut:d=>{N||(d.target.style.background="#ffbaba",d.target.style.color="#5a2120")},children:l},c)})}),e.jsxs("div",{style:Z.feedback,children:[N&&t===q.correct&&e.jsx("span",{style:{color:"#285428"},children:"✅ Benar! Bagus sekali. +10 poin"}),N&&t!==q.correct&&e.jsxs("span",{style:{color:"#810000"},children:['❌ Salah! Jawaban yang benar adalah "',q.correct,'". +0 poin']})]}),e.jsx("button",{style:Z.nextBtn,onClick:P,disabled:!N,onMouseOver:l=>{l.target.style.background="#d94e47"},onMouseOut:l=>{l.target.style.background="#ff6f61"},children:i+1===ge.length?"Lihat Hasil":"Soal Berikutnya"})]})]})}const he=[{decimal:"0,25",percent:"25%"},{decimal:"0,1",percent:"10%"},{decimal:"0,75",percent:"75%"},{decimal:"0,03",percent:"3%"},{decimal:"0,5",percent:"50%"},{decimal:"0,09",percent:"9%"},{decimal:"0,40",percent:"40%"},{decimal:"0,01",percent:"1%"},{decimal:"0,60",percent:"60%"},{decimal:"0,90",percent:"90%"}],Te=i=>{const n=i.slice();for(let t=n.length-1;t>0;t--){const m=Math.floor(Math.random()*(t+1));[n[t],n[m]]=[n[m],n[t]]}return n},ca=()=>{const[i,n]=a.useState(he),[t,m]=a.useState([]),[x,v]=a.useState([]),[N,j]=a.useState(0),[b,g]=a.useState(!1),w=a.useRef(null),f=se();a.useEffect(()=>{q()},[]);const q=()=>{j(0),g(!1);let y=Te(he.map(l=>l.decimal)),B=Te(he.map(l=>l.percent));m(y),v(B.map(l=>({percent:l,status:"empty"})))},A=(y,B)=>{w.current=B,y.dataTransfer.effectAllowed="move"},T=y=>{y.preventDefault(),y.dataTransfer.dropEffect="move"},P=(y,B)=>{y.preventDefault();let l=w.current;if(!l)return;he.find(s=>s.decimal===l&&s.percent===B)?(v(s=>s.map(r=>r.percent===B?{...r,status:"correct"}:r)),m(s=>s.filter(r=>r!==l)),j(s=>{const r=s+1;return r===he.length&&g(!0),r})):(v(s=>s.map(r=>r.percent===B?{...r,status:"incorrect"}:r)),setTimeout(()=>{v(s=>s.map(r=>r.percent===B?{...r,status:"empty"}:r))},1e3)),w.current=null},$=()=>{w.current=null};return e.jsxs("div",{style:{fontFamily:"'Baloo 2', cursive",background:"linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",padding:30,color:"#222"},children:[e.jsx("h1",{style:{color:"#FF6F61",textShadow:"1px 1px 2px #d86052",marginBottom:10,userSelect:"none"},children:"Game Cocokkan Pecahan Desimal & Persen"}),e.jsx("div",{style:{color:"#1c3c72",marginBottom:30,fontWeight:600,userSelect:"none",fontSize:18,textAlign:"center",maxWidth:600},children:"Seret pecahan desimal ke persen yang tepat!"}),e.jsxs("div",{style:{maxWidth:600,background:"white",borderRadius:20,boxShadow:"0 12px 25px rgba(0,0,0,0.18)",padding:30,width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",userSelect:"none"},children:[e.jsxs("div",{style:{width:"45%",display:"flex",flexDirection:"column",gap:15},children:[e.jsx("h2",{style:{marginBottom:15,color:"#205072",fontWeight:700},children:"Pecahan Desimal"}),t.length===0&&!b&&e.jsx("div",{style:{fontSize:16,color:"#888"},children:"Tidak ada pecahan tersisa."}),t.map(y=>e.jsx("div",{draggable:!b,onDragStart:B=>A(B,y),onDragEnd:$,tabIndex:0,role:"option","aria-grabbed":"false",style:{backgroundColor:"#FFBC42",borderRadius:12,padding:"15px 20px",fontSize:20,textAlign:"center",boxShadow:"0 6px 12px rgba(255, 188, 66, 0.6)",cursor:b?"default":"grab",userSelect:"none"},onKeyDown:B=>{b||(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),w.current=y)},children:y},y))]}),e.jsxs("div",{style:{width:"45%",display:"flex",flexDirection:"column",gap:15},children:[e.jsx("h2",{style:{marginBottom:15,color:"#205072",fontWeight:700},children:"Persen"}),x.map(y=>e.jsxs("div",{onDragOver:T,onDrop:B=>P(B,y.percent),tabIndex:0,role:"listitem","aria-dropeffect":"move",onKeyDown:B=>{(B.key==="Enter"||B.key===" ")&&w.current&&P(B,y.percent)},style:{backgroundColor:y.status==="correct"?"#55efc4":y.status==="incorrect"?"#ff7675":"#dfe6e9",boxShadow:y.status==="correct"?"0 0 14px #00b894":y.status==="incorrect"?"0 0 14px #d63031":"inset 0 0 8px #b2bec3",color:y.status==="correct"?"#056952":y.status==="incorrect"?"#6e1500":"#222",fontWeight:y.status==="correct"||y.status==="incorrect"?700:400,minHeight:52,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:12,fontSize:20,userSelect:"none",cursor:"default",transition:"background-color 0.3s ease"},children:[y.percent," ",y.status==="correct"?"✔️":y.status==="incorrect"?"✘":""]},y.percent))]})]}),e.jsxs("div",{style:{marginTop:25,fontSize:24,fontWeight:700,color:"#FF6F61",userSelect:"none"},children:["Cocokkan yang benar: ",N," dari ",he.length]}),b&&e.jsx("button",{onClick:()=>q(),style:{marginTop:20,backgroundColor:"#FF6F61",padding:"12px 30px",border:"none",borderRadius:25,color:"white",fontWeight:700,fontSize:18,cursor:"pointer",boxShadow:"0 8px 18px rgba(255,111,97,0.7)",userSelect:"none"},children:"Main Lagi"}),e.jsx("button",{onClick:()=>f("/category4_bab2"),style:{marginTop:15,backgroundColor:"#3498db",padding:"12px 30px",border:"none",borderRadius:25,color:"white",fontWeight:700,fontSize:18,cursor:"pointer",boxShadow:"0 8px 18px rgba(52,152,219,0.7)",userSelect:"none"},children:"Kembali ke Kategori"})]})},be=[{question:"Apa gambar berikutnya dalam pola ini?",pattern:["⭐","🐱","⭐","🐱","⭐"],options:["🐶","🐱","⭐","🌈"],correctAnswer:"🐱",type:"berulang"},{question:"Pola ini bertumbuh. Apa gambar berikutnya?",pattern:["🌱","🌿","🌳"],options:["🌻","🌳","🌲","🏵️"],correctAnswer:"🌲",type:"bertumbuh"},{question:"Pola ini berganti warna. Apa yang berikutnya?",pattern:["🔴","🔵","🔴","🔵"],options:["🟢","🔵","🔴","🟡"],correctAnswer:"🔴",type:"berganti"},{question:"Lanjutkan pola berulang ini:",pattern:["🍎","🍌","🍎","🍌"],options:["🍎","🍓","🍌","🍇"],correctAnswer:"🍎",type:"berulang"},{question:"Pola bertumbuh. Apa yang berikutnya?",pattern:["🐛","🥚","🦋"],options:["🐦","🦋","🐛","🦄"],correctAnswer:"🐦",type:"bertumbuh"},{question:"Pola berganti bentuk. Lanjutkan:",pattern:["▲","●","▲","●"],options:["■","▲","●","★"],correctAnswer:"▲",type:"berganti"},{question:"Apa yang melengkapi pola berulang ini?",pattern:["1","A","2","B","3"],options:["A","B","C","4"],correctAnswer:"C",type:"berulang"},{question:"Pola bertumbuh. Apa berikutnya?",pattern:["🌕","🌖","🌗","🌘"],options:["🌑","🌓","🌔","🌕"],correctAnswer:"🌑",type:"bertumbuh"},{question:"Lanjutkan pola berganti ini:",pattern:["⚽","🏀","⚽","🏀"],options:["⚾","🏀","⚽","🎾"],correctAnswer:"⚽",type:"berganti"},{question:"Apa yang melengkapi pola berulang ini?",pattern:["😊","😢","😊","😢"],options:["😡","😊","😢","😍"],correctAnswer:"😊",type:"berulang"}];function da(){const[i,n]=a.useState(0),[t,m]=a.useState(0),[x,v]=a.useState(!1),[N,j]=a.useState({text:"",isCorrect:null}),[b,g]=a.useState(!1),[w,f]=a.useState(!1),q=se(),A=y=>{const B=be[i];f(!0),y===B.correctAnswer?(j({text:"Benar! 🎉",isCorrect:!0}),m(t+10)):j({text:`Salah! Jawaban benar: ${B.correctAnswer}`,isCorrect:!1}),g(!0)},T=()=>{const y=i+1;y<be.length?(n(y),j({text:"",isCorrect:null}),g(!1),f(!1)):v(!0)},P=()=>{n(0),m(0),v(!1),j({text:"",isCorrect:null}),g(!1),f(!1)},$=()=>t===100?`Luar biasa! Kamu ahli pola! 🏆
Semua jawaban benar!`:t>=80?`Hebat! 🌟
Hampir sempurna!`:t>=60?`Bagus! 😊
Tetap semangat belajar!`:`Terus berlatih! 👍
Kamu pasti bisa lebih baik!`;return e.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-50",style:{backgroundImage:"radial-gradient(circle, #9BE36D 1px, transparent 1px)",backgroundSize:"20px 20px"},children:[e.jsx("header",{className:"w-full text-center py-4 bg-green-600 text-white shadow-md mb-8",children:e.jsx("h1",{className:"text-2xl font-bold",style:{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.2)"},children:"Petualangan Pola Gambar"})}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 md:p-8 w-11/12 max-w-3xl mb-8 text-center",children:[e.jsxs("div",{className:"text-xl mb-4 text-green-700 font-bold",children:["Poin: ",e.jsx("span",{className:"text-2xl",children:t}),"/100"]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-lg mb-4 overflow-hidden",children:e.jsx("div",{className:"h-5 bg-green-600 transition-all duration-500",style:{width:`${i/be.length*100}%`}})}),x?e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl text-green-600 mb-4",children:"Selesai!"}),e.jsx("div",{className:"text-5xl font-bold text-yellow-500 mb-6",children:t}),e.jsx("div",{className:"mb-6 whitespace-pre-line text-gray-700",children:$()}),e.jsx("button",{className:`px-6 py-3 bg-yellow-500 text-gray-800 rounded-full shadow-md text-lg font-bold \r
                transition-all hover:bg-yellow-600 hover:-translate-y-1 mb-4`,onClick:P,children:"Main Lagi"}),e.jsx("div",{children:e.jsx("button",{className:`px-6 py-3 bg-blue-500 text-grey rounded-full shadow-md text-lg font-bold \r
                  transition-all hover:bg-blue-600 hover:-translate-y-1`,onClick:()=>q("/category4_bab3"),children:"Kembali ke kategori"})})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"text-lg mb-4 font-semibold text-gray-800 px-4 py-2 bg-green-100 rounded-lg inline-block",children:be[i].question}),e.jsxs("div",{className:"flex justify-center items-center flex-wrap gap-3 mb-6 min-h-24 py-2",children:[be[i].pattern.map((y,B)=>e.jsx("div",{className:"w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-3xl bg-white rounded-lg shadow-md transition-transform hover:scale-110 border-2 border-green-200",children:y},B)),e.jsx("div",{className:"w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-2xl bg-yellow-100 rounded-lg shadow-md border-2 border-yellow-300 animate-pulse",children:"?"})]}),e.jsx("div",{className:`text-lg font-bold mb-4 h-8 ${N.isCorrect===!0?"text-green-600":N.isCorrect===!1?"text-red-600":""}`,children:N.text})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-6",children:be[i].options.map((y,B)=>e.jsx("button",{className:`w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-3xl bg-white rounded-lg shadow-md transition-all
                    ${w?"opacity-70 cursor-not-allowed border-2 border-gray-200":"hover:bg-green-100 hover:-translate-y-1 border-2 border-green-300"}`,onClick:()=>!w&&A(y),disabled:w,children:y},B))}),b&&e.jsx("button",{className:`px-6 py-3 bg-yellow-500 text-gray-800 rounded-full shadow-md text-lg font-bold \r
                  transition-all hover:bg-yellow-600 hover:-translate-y-1`,onClick:T,children:"Lanjut"})]})]})]})}const pe=[{type:"ganjil",question:"Lanjutkan pola bilangan ganjil berikut: 1, 3, 5, 7, ...",example:"Contoh: 1, 3, 5 adalah 3 bilangan ganjil pertama",answer:[9,11],options:[4,8,9,10,11,12]},{type:"genap",question:"Lanjutkan pola bilangan genap berikut: 2, 4, 6, 8, ...",example:"Contoh: 2, 4, 6 adalah 3 bilangan genap pertama",answer:[10,12],options:[5,7,9,10,11,12]},{type:"segitiga",question:"Lanjutkan pola bilangan segitiga berikut: 1, 3, 6, 10, ...",example:"Contoh: Angka 3 adalah bilangan segitiga ke-2 (1+2)",answer:[15,21],options:[12,14,15,16,20,21]},{type:"fibonacci",question:"Lanjutkan pola Fibonacci berikut: 1, 1, 2, 3, ...",example:"Contoh: 1, 1, 2 adalah 3 bilangan Fibonacci pertama",answer:[5,8],options:[4,5,6,7,8,9]},{type:"ganjil",question:"Tentukan 2 bilangan ganjil berikutnya: 13, 15, 17, ...",example:"Contoh: 11, 13 adalah dua bilangan ganjil berurutan",answer:[19,21],options:[18,19,20,21,22,23]},{type:"genap",question:"Tentukan 2 bilangan genap berikutnya: 10, 12, 14, ...",example:"Contoh: 6, 8 adalah dua bilangan genap berurutan",answer:[16,18],options:[15,16,17,18,19,20]},{type:"segitiga",question:"Lanjutkan pola bilangan segitiga: 10, 15, 21, 28, ...",example:"Contoh: 6 adalah bilangan segitiga ke-3 (1+2+3)",answer:[36,45],options:[30,35,36,40,45,50]},{type:"fibonacci",question:"Lanjutkan pola Fibonacci: 5, 8, 13, 21, ...",example:"Contoh: 3, 5, 8 adalah tiga bilangan Fibonacci berurutan",answer:[34,55],options:[25,30,34,42,55,60]},{type:"segitiga",question:"Tentukan bilangan segitiga ke-6 dan ke-7 (setelah 1, 3, 6, 10, 15)",example:"Contoh: 10 adalah bilangan segitiga ke-4",answer:[21,28],options:[18,20,21,25,28,30]},{type:"fibonacci",question:"Tentukan 2 bilangan Fibonacci setelah 34 dan 55",example:"Contoh: 13 dan 21 adalah dua bilangan Fibonacci berurutan",answer:[89,144],options:[60,75,89,100,120,144]}];function ua(){const[i,n]=a.useState("start"),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState([]),[b,g]=a.useState([]),[w,f]=a.useState({message:"",type:""}),[q,A]=a.useState(!1),T=se();a.useEffect(()=>{i==="playing"&&(j(new Array(pe[t].answer.length).fill(null)),g([]),f({message:"",type:""}),A(!1))},[t,i]);const P=()=>{n("playing"),m(0),v(0)},$=()=>{n("playing"),m(0),v(0)},y=()=>{T("/category4_bab3")},B=(d,S)=>{const o=N.findIndex(u=>u===null);if(o!==-1){const u=[...N];u[o]=d,j(u),g([...b,S]),u.includes(null)||setTimeout(()=>c(u),300)}},l=d=>{if(N[d]!==null){const S=N[d],o=pe[t].options;let u=b.find(C=>o[C]===S);const p=[...N];p[d]=null,j(p),g(b.filter(C=>C!==u))}},c=d=>{const S=pe[t].answer;let o=!0;for(let u=0;u<S.length;u++)if(d[u]!==S[u]){o=!1;break}o?(v(u=>u+10),f({message:"Jawabanmu benar! +10 poin",type:"correct"})):f({message:`Jawabanmu belum tepat. Jawaban yang benar adalah: ${S.join(", ")}`,type:"incorrect"}),A(!0),setTimeout(()=>{t<pe.length-1?m(u=>u+1):n("end")},2e3)},s=()=>{if(i!=="playing")return null;const d=pe[t].options;return Array.from({length:d.length},(o,u)=>u).map(o=>{const u=d[o],p=b.includes(o);return e.jsx("button",{className:`number-piece ${p?"invisible":""}`,onClick:()=>B(u,o),disabled:p,children:u},o)})},r=()=>i!=="playing"?null:N.map((d,S)=>e.jsx("div",{className:`answer-slot ${d!==null?"filled-slot":""}`,onClick:()=>l(S),children:d!==null&&d},S)),h=()=>{const d=i==="end"?100:t/pe.length*100;return e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress",style:{width:`${d}%`}})})};return e.jsxs("div",{className:"polaBilangan-container",children:[e.jsx("h1",{children:"Puzzle Pola Bilangan"}),e.jsx("p",{className:"subtitle",children:"Tebak pola bilangan dan dapatkan nilai tertinggi!"}),i!=="start"&&h(),i!=="start"&&e.jsxs("p",{style:{fontSize:"1.2em",margin:"0 0 20px 0"},children:["Skor: ",e.jsx("span",{children:x})," / 100"]}),i==="start"&&e.jsxs("div",{id:"start-screen",children:[e.jsx("p",{children:"Game ini akan menguji pemahamanmu tentang berbagai pola bilangan. Ada 10 soal dengan nilai 10 poin setiap soal."}),e.jsx("p",{children:"Jenis pola bilangan yang akan kamu temui:"}),e.jsxs("div",{className:"pattern-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Pola Bilangan Ganjil:"})," 1, 3, 5, 7, 9, ..."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pola Bilangan Genap:"})," 2, 4, 6, 8, 10, ..."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pola Bilangan Segitiga:"})," 1, 3, 6, 10, 15, ..."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pola Fibonacci:"})," 1, 1, 2, 3, 5, 8, ..."]})]}),e.jsx("button",{onClick:P,children:"Mulai Game"})]}),i==="playing"&&e.jsx("div",{className:"game-area",children:e.jsxs("div",{className:"question-card",children:[e.jsx("div",{className:"question",children:pe[t].question}),e.jsx("div",{className:"example",children:pe[t].example}),e.jsx("div",{className:"answer-area",children:r()}),e.jsx("div",{className:"answer-options",children:s()}),q&&e.jsx("div",{className:`feedback ${w.type}`,children:w.message})]})}),i==="end"&&e.jsxs("div",{className:"end-screen",children:[e.jsxs("div",{className:"game-over",children:[e.jsx("p",{children:"Permainan Selesai!"}),e.jsxs("p",{children:["Skor akhir kamu: ",e.jsx("span",{children:x})," / 100"]}),x>=80&&e.jsx("div",{className:"celebration",children:"🎉"})]}),e.jsx("button",{onClick:$,children:"Main Lagi"}),e.jsx("button",{onClick:y,className:"back-to-category",children:"Kembali ke kategori"})]})]})}const R={container:{minHeight:"100vh",width:"100%",backgroundImage:"linear-gradient(to bottom, #f0f9ff, #e1f5fe, #b3e5fc)",fontFamily:"Arial, sans-serif",color:"#333",padding:"0",margin:"0",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",overflow:"hidden"},backgroundPatterns:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.7) 20%, transparent 20%), radial-gradient(circle, rgba(255,255,255,0.7) 20%, transparent 20%)",backgroundSize:"40px 40px",backgroundPosition:"0 0, 20px 20px",zIndex:1,opacity:.5},gameContainer:{maxWidth:"800px",width:"100%",padding:"25px",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:2},header:{textAlign:"center",color:"#267F45",borderBottom:"2px solid #267F45",width:"100%",paddingBottom:"10px",marginBottom:"20px",fontWeight:"bold",fontSize:"24px"},scoreDisplay:{textAlign:"right",width:"100%",fontWeight:"bold",marginBottom:"15px",fontSize:"16px",color:"#333"},questionText:{marginBottom:"20px",fontSize:"16px",width:"100%",textAlign:"left",lineHeight:"1.5",padding:"15px",backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",border:"1px solid #e0e0e0"},optionsGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",width:"100%",marginBottom:"20px"},optionButton:{padding:"12px 15px",border:"1px solid #e0e0e0",borderRadius:"6px",cursor:"pointer",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"#333",fontSize:"15px",textAlign:"left",transition:"all 0.2s",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",position:"relative",overflow:"hidden"},optionButtonHover:{backgroundColor:"#edf7f0",borderColor:"#267F45",transform:"translateY(-2px)",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},optionButtonCorrect:{backgroundColor:"#d4edda",borderColor:"#28a745",color:"#155724"},optionButtonIncorrect:{backgroundColor:"#f8d7da",borderColor:"#dc3545",color:"#721c24"},nextButton:{backgroundColor:"#267F45",color:"white",border:"none",padding:"12px 25px",borderRadius:"6px",cursor:"pointer",marginTop:"15px",fontWeight:"bold",boxShadow:"0 3px 6px rgba(0,0,0,0.1)",transition:"all 0.2s"},nextButtonHover:{backgroundColor:"#1d6935",transform:"translateY(-2px)",boxShadow:"0 5px 10px rgba(0,0,0,0.15)"},resultMessage:{marginTop:"15px",textAlign:"center",fontSize:"16px",fontWeight:"bold",padding:"10px",borderRadius:"6px",width:"100%"},iconContainer:{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"20px"},emoji:{fontSize:"24px",padding:"5px",backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",border:"2px solid #eaeaea"},progressContainer:{width:"100%",marginBottom:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)",borderRadius:"10px",padding:"10px",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},progressBar:{width:"100%",height:"10px",backgroundColor:"#e0e0e0",borderRadius:"5px",overflow:"hidden",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.1)"},progressFill:{height:"100%",backgroundColor:"#267F45",borderRadius:"5px",transition:"width 0.3s ease-in-out"},introContainer:{textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"30px",borderRadius:"15px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)",marginBottom:"20px",border:"1px solid #e0e0e0",position:"relative",overflow:"hidden"},introPattern:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(circle at 10% 20%, rgba(38, 127, 69, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(38, 127, 69, 0.1) 0%, transparent 20%)",zIndex:0},introContent:{position:"relative",zIndex:1},finishedContainer:{textAlign:"center",width:"100%",backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"35px",borderRadius:"15px",boxShadow:"0 4px 20px rgba(0,0,0,0.1)",position:"relative",overflow:"hidden"},gameTitle:{fontWeight:"bold",color:"#267F45",marginBottom:"15px",fontSize:"28px",textShadow:"1px 1px 2px rgba(0,0,0,0.05)"},decorationTop:{position:"absolute",top:0,left:0,width:"100%",height:"8px",background:"linear-gradient(90deg, #267F45, #4CAF50, #8BC34A, #267F45)"},decorationBottom:{position:"absolute",bottom:0,left:0,width:"100%",height:"8px",background:"linear-gradient(90deg, #267F45, #4CAF50, #8BC34A, #267F45)"},badge:{display:"inline-block",backgroundColor:"#267F45",color:"white",borderRadius:"30px",padding:"5px 15px",fontSize:"14px",fontWeight:"bold",margin:"5px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},confetti:{position:"absolute",width:"10px",height:"10px",backgroundColor:"#ff0000",borderRadius:"50%",animation:"confetti-fall 5s ease-in-out infinite"}},ce=[{question:"1. Ibu mengukur lebar meja dengan jengkal tangan. Ini adalah contoh pengukuran dengan satuan...",options:["Baku","Tidak baku","Internasional","Panjang"],correctAnswer:1},{question:"2. Manakah yang termasuk satuan baku untuk mengukur panjang?",options:["Jengkal","Depa","Sentimeter","Tali"],correctAnswer:2},{question:"3. Bima mengukur tepung menggunakan gelas belimbing. Ini adalah contoh satuan...",options:["Baku untuk berat","Tidak baku untuk volume","Baku untuk volume","Tidak baku untuk panjang"],correctAnswer:1},{question:"4. Jika panjang buku 20 cm, manakah yang benar?",options:["Lebih pendek dari 1 jengkal orang dewasa","Lebih panjang dari 1 meter","Sama dengan 1 depa","Lebih pendek dari 1 pensil"],correctAnswer:0},{question:"5. Satuan manakah yang TIDAK digunakan untuk mengukur berat?",options:["Kilogram","Ons","Liter","Gram"],correctAnswer:2},{question:"6. Untuk mengukur panjang lapangan, satuan yang paling tepat adalah...",options:["Jengkal","Meter","Centimeter","Gelas"],correctAnswer:1},{question:"7. Manakah yang termasuk satuan tidak baku untuk volume?",options:["Liter","Mililiter","Gelas","Meter kubik"],correctAnswer:2},{question:"8. 1 kilogram sama dengan...",options:["10 gram","100 gram","1000 gram","10000 gram"],correctAnswer:2},{question:"9. Untuk mengukur air dalam akuarium kecil, satuan yang tepat adalah...",options:["Gelas","Depa","Liter","Kilogram"],correctAnswer:2},{question:"10. Manakah pernyataan yang BENAR tentang satuan baku?",options:["Bisa berbeda-beda tiap orang","Hanya ada di Indonesia","Nilainya tetap sama di mana saja","Hanya untuk mengukur panjang"],correctAnswer:2}];function ma(){const[i,n]=a.useState("intro"),[t,m]=a.useState(0),[x,v]=a.useState(0),[N,j]=a.useState([]),[b,g]=a.useState({message:"",isCorrect:!1}),[w,f]=a.useState(null),[q,A]=a.useState(!1),T=()=>{n("playing"),m(0),v(0),j([]),g({message:"",isCorrect:!1})},P=c=>{if(b.message!=="")return;const s=ce[t],r=[...N];r[t]=c,j(r),c===s.correctAnswer?(v(x+10),g({message:"Benar! (+10 poin)",isCorrect:!0})):g({message:`Salah! Jawaban benar: ${s.options[s.correctAnswer]}`,isCorrect:!1})},$=()=>{t<ce.length-1?(m(t+1),g({message:"",isCorrect:!1})):n("finished")},y=()=>x>=80?"Hebat! Kamu benar-benar menguasai pengukuran!":x>=60?"Bagus! Kamu sudah paham banyak tentang pengukuran.":x>=40?"Cukup baik. Coba pelajari lagi satuan baku dan tidak baku ya!":"Jangan menyerah! Pelajari lagi tentang pengukuran dan coba lagi!",B=c=>({top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}),l=c=>{const s=[];for(let r=0;r<c;r++){const h=B();s.push(e.jsx("div",{style:{...R.confetti,top:h.top,left:h.left,animationDelay:h.animationDelay,backgroundColor:["#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800"][r%5]}},`deco-${r}`))}return s};return e.jsxs("div",{style:R.container,children:[e.jsx("div",{style:R.backgroundPatterns}),e.jsxs("div",{style:R.gameContainer,children:[e.jsxs("div",{style:R.iconContainer,children:[e.jsx("div",{style:R.emoji,children:"😀"}),e.jsx("div",{style:R.emoji,children:"🔍"})]}),e.jsx("h1",{style:R.header,children:"Petualangan Pengukuran Bersama Bima"}),i==="intro"&&e.jsxs("div",{style:R.introContainer,children:[e.jsx("div",{style:R.introPattern}),e.jsx("div",{style:R.decorationTop}),e.jsxs("div",{style:R.introContent,children:[e.jsx("h2",{style:R.gameTitle,children:"Siap Berpetualang?"}),e.jsx("p",{style:{marginBottom:"15px",lineHeight:"1.5"},children:"Bima sedang menyiapkan bahan untuk membuat kue. Bantu Bima mengukur bahan-bahan menggunakan satuan baku dan tidak baku!"}),e.jsxs("div",{style:{margin:"20px 0"},children:[e.jsx("span",{style:R.badge,children:"Pengetahuan"}),e.jsx("span",{style:R.badge,children:"Pengukuran"}),e.jsx("span",{style:R.badge,children:"Kelas 4"})]}),e.jsx("p",{style:{marginBottom:"25px",fontWeight:"bold"},children:"Setiap jawaban benar memberi kamu 10 poin. Total skor maksimal adalah 100!"}),e.jsx("button",{onClick:T,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{...R.nextButton,...q?R.nextButtonHover:{}},children:"Mulai Petualangan!"})]}),e.jsx("div",{style:R.decorationBottom})]}),i==="playing"&&e.jsxs("div",{style:{width:"100%"},children:[e.jsxs("div",{style:R.scoreDisplay,children:["Skor: ",x,"/100"]}),e.jsx("div",{style:R.progressContainer,children:e.jsx("div",{style:R.progressBar,children:e.jsx("div",{style:{...R.progressFill,width:`${(t+1)/ce.length*100}%`}})})}),e.jsx("div",{style:R.questionText,children:ce[t].question}),e.jsx("div",{style:R.optionsGrid,children:ce[t].options.map((c,s)=>e.jsx("button",{onClick:()=>P(s),onMouseEnter:()=>b.message===""&&f(s),onMouseLeave:()=>f(null),disabled:b.message!=="",style:{...R.optionButton,...w===s&&b.message===""?R.optionButtonHover:{},...b.message!==""&&s===ce[t].correctAnswer?R.optionButtonCorrect:{},...b.message!==""&&s===N[t]&&s!==ce[t].correctAnswer?R.optionButtonIncorrect:{},...b.message!==""&&s!==ce[t].correctAnswer&&s!==N[t]?{opacity:.7}:{}},children:c},s))}),b.message&&e.jsx("div",{style:{...R.resultMessage,backgroundColor:b.isCorrect?"#d4edda":"#f8d7da",color:b.isCorrect?"#155724":"#721c24",border:`1px solid ${b.isCorrect?"#c3e6cb":"#f5c6cb"}`},children:b.message}),b.message&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx("button",{onClick:$,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{...R.nextButton,...q?R.nextButtonHover:{}},children:t<ce.length-1?"Lanjut":"Lihat Hasil"})})]}),i==="finished"&&e.jsxs("div",{style:R.finishedContainer,children:[l(20),e.jsx("div",{style:R.decorationTop}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"15px",color:"#267F45"},children:"Hasil Akhir"}),e.jsxs("div",{style:{fontSize:"48px",fontWeight:"bold",margin:"20px 0",color:x>=70?"#28a745":x>=40?"#ffc107":"#dc3545",textShadow:"2px 2px 4px rgba(0,0,0,0.1)"},children:[x,"/100"]}),e.jsx("div",{style:{padding:"15px",backgroundColor:x>=70?"#d4edda":x>=40?"#fff3cd":"#f8d7da",borderRadius:"8px",marginBottom:"25px",color:x>=70?"#155724":x>=40?"#856404":"#721c24",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},children:y()}),e.jsx("button",{onClick:T,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{...R.nextButton,...q?R.nextButtonHover:{},backgroundColor:"#d9534f"},children:"Main Lagi"}),e.jsx("div",{style:R.decorationBottom})]})]})]})}const we=[{question:"1. Rani mengisi ember dengan gelas plastik. Jika ember terisi penuh setelah 5 gelas, berapa volume ember tersebut?",options:["5 gelas plastik","3 gelas plastik","7 gelas plastik","10 gelas plastik"],answer:0,feedback:"Benar! Volume ember adalah 5 gelas plastik karena butuh 5 gelas untuk mengisi penuh ember tersebut."},{question:"2. Satuan baku untuk mengukur volume adalah...",options:["Gelas dan sendok","Liter dan mililiter","Baskom dan ember","Botol dan kaleng"],answer:1,feedback:"Benar! Liter dan mililiter adalah satuan baku untuk mengukur volume."},{question:"3. Ibu membuat jus jeruk sebanyak 1.5 liter. Berapa mililiter jus yang dibuat ibu? (1 liter = 1000 ml)",options:["150 ml","1.500 ml","15.000 ml","150.000 ml"],answer:1,feedback:"Benar! 1.5 liter = 1.500 mililiter."},{question:"4. Manakah yang termasuk satuan tidak baku untuk mengukur volume?",options:["Mililiter","Liter","Gelas","Meter kubik"],answer:2,feedback:"Benar! Gelas adalah satuan tidak baku karena ukuran gelas bisa berbeda-beda."},{question:"5. Volume akuarium kecil adalah 20 liter. Jika diukur dengan ember kecil yang volumenya 5 liter, berapa ember kecil yang dibutuhkan untuk mengisi penuh akuarium?",options:["2 ember","4 ember","5 ember","10 ember"],answer:1,feedback:"Benar! 20 liter ÷ 5 liter/ember = 4 ember."},{question:"6. 3.000 mililiter sama dengan...",options:["3 liter","30 liter","300 liter","0.3 liter"],answer:0,feedback:"Benar! 1.000 mililiter = 1 liter, jadi 3.000 mililiter = 3 liter."},{question:"7. Andi mengisi bak mandi dengan 8 ember air. Jika volume 1 ember adalah 5 liter, berapa liter volume air dalam bak mandi?",options:["13 liter","20 liter","40 liter","58 liter"],answer:2,feedback:"Benar! 8 ember × 5 liter/ember = 40 liter."},{question:"8. Manakah yang memiliki volume paling besar?",options:["1 gelas air","1 botol minum (600 ml)","1 ember (10 liter)","1 sendok makan"],answer:2,feedback:"Benar! 1 ember (10 liter) memiliki volume paling besar dibanding pilihan lainnya."},{question:"9. Sebuah jerigen berisi 5 liter minyak goreng. Jika sudah digunakan 2.500 ml, berapa liter sisa minyak dalam jerigen?",options:["1 liter","2.5 liter","3 liter","7.5 liter"],answer:1,feedback:"Benar! 2.500 ml = 2.5 liter. 5 liter - 2.5 liter = 2.5 liter."},{question:"10. Jika sebuah teko dapat diisi dengan 4 gelas air, dan volume 1 gelas adalah 250 ml, berapa liter volume teko tersebut?",options:["0.5 liter","1 liter","1.5 liter","2 liter"],answer:1,feedback:"Benar! 4 gelas × 250 ml = 1.000 ml = 1 liter."}];function ga(){const[i,n]=a.useState(0),[t,m]=a.useState(0),[x,v]=a.useState(!1),[N,j]=a.useState(null),[b,g]=a.useState(!1),[w,f]=a.useState(!1),q=se();a.useEffect(()=>{const d=i/we.length*100;document.getElementById("progress").style.width=`${d}%`},[i]);const A=d=>{if(x)return;j(d),v(!0);const S=we[i];d===S.answer&&(m(o=>o+10),f(!0),setTimeout(()=>f(!1),1e3))},T=()=>{i===we.length-1?(g(!0),document.getElementById("progress").style.width="100%"):(n(d=>d+1),v(!1),j(null))},P=()=>{n(0),m(0),v(!1),j(null),g(!1)},$=()=>{q("/category4_bab4")},y=()=>t===100?{title:"Luar Biasa! 🎉",message:`Kamu mendapatkan nilai sempurna ${t} dari 100! Kamu benar-benar menguasai pengukuran volume.`}:t>=70?{title:"Bagus! 👏",message:`Kamu mendapatkan ${t} dari 100! Hanya sedikit lagi untuk mencapai nilai sempurna.`}:t>=50?{title:"Cukup Baik! 👍",message:`Kamu mendapatkan ${t} dari 100. Terus berlatih ya!`}:{title:"Ayo Belajar Lagi! 💪",message:`Kamu mendapatkan ${t} dari 100. Jangan menyerah, terus berlatih!`},B=d=>{switch(d){case 0:return{icon:"🥤",label:"Gelas dan ember"};case 4:return{icon:"🐠",label:"Akuarium"};case 7:return{icon:"🧊",label:"Volume"};default:return{icon:"📏",label:"Pengukuran"}}},l=we[i],c=y(),s=B(i),r={container:{fontFamily:"'Comic Sans MS', cursive, sans-serif",backgroundImage:"linear-gradient(120deg, #e0f7fa 0%, #bbdefb 100%)",margin:0,padding:"20px",color:"#37474f",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},gameCard:{maxWidth:"800px",width:"100%",margin:"0 auto",background:"white",padding:"30px",borderRadius:"20px",boxShadow:"0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.05)",position:"relative",overflow:"hidden",paddingBottom:"100px"},title:{textAlign:"center",marginBottom:"20px",fontSize:"2.5rem",fontWeight:"bold",background:"linear-gradient(45deg, #ff7043, #ff5722)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:"2px 2px 4px rgba(0,0,0,0.1)"},instruction:{background:"linear-gradient(to right, #fff9c4, #fff59d)",padding:"15px 20px",borderRadius:"12px",marginBottom:"20px",borderLeft:"6px solid #ffca28",fontSize:"1.1rem",position:"relative"},instructionBubble:{position:"absolute",right:"-10px",top:"-10px",background:"#ffca28",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",transform:"rotate(15deg)"},progressContainer:{height:"10px",background:"#e0e0e0",borderRadius:"10px",marginBottom:"20px",overflow:"hidden"},progressBar:{height:"100%",background:"linear-gradient(to right, #4fc3f7, #2196f3)",width:"0%",transition:"width 0.5s ease",borderRadius:"10px"},scoreContainer:{textAlign:"center",fontSize:"1.5rem",marginBottom:"20px",fontWeight:"bold",color:"#1976d2",display:"flex",alignItems:"center",justifyContent:"center"},scoreValue:{display:"inline-block",transition:"transform 0.3s ease",transform:w?"scale(1.3)":"scale(1)"},scoreLabel:{marginRight:"10px"},questionCard:{background:"rgba(236, 239, 241, 0.7)",padding:"25px",borderRadius:"15px",marginBottom:"70px",border:"3px solid #bbdefb",position:"relative",zIndex:"1",boxShadow:"0 6px 12px rgba(0,0,0,0.1)"},questionNumber:{fontWeight:"bold",marginBottom:"15px",fontSize:"1.3rem",color:"#0d47a1",display:"flex",alignItems:"center"},questionIcon:{background:"#bbdefb",width:"30px",height:"30px",borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",marginRight:"10px"},optionGrid:{display:"grid",gridGap:"10px"},optionButton:(d,S,o,u)=>({background:d&&S?"linear-gradient(to right, #66bb6a, #43a047)":d&&!S?"linear-gradient(to right, #ef5350, #e53935)":o&&u&&!d?"linear-gradient(to right, #66bb6a, #43a047)":"linear-gradient(to right, #90caf9, #64b5f6)",padding:"15px",borderRadius:"10px",cursor:o?"default":"pointer",transition:"all 0.2s ease",color:d||o&&u?"white":"#37474f",fontWeight:"500",border:"2px solid transparent",transform:d?"translateY(-3px)":"translateY(0)",boxShadow:d?"0 6px 12px rgba(0,0,0,0.15)":"0 2px 5px rgba(0,0,0,0.1)"}),feedback:d=>({marginTop:"20px",padding:"15px",borderRadius:"10px",background:d?"rgba(200, 230, 201, 0.7)":"rgba(255, 205, 210, 0.7)",color:d?"#2e7d32":"#c62828",fontWeight:"500",border:`2px solid ${d?"#a5d6a7":"#ef9a9a"}`,display:"flex",alignItems:"center"}),feedbackIcon:{marginRight:"10px",fontSize:"1.5rem"},nextButton:{background:x?"linear-gradient(to right, #7e57c2, #5e35b1)":"linear-gradient(to right, #9e9e9e, #757575)",color:"white",border:"none",padding:"15px 30px",borderRadius:"10px",cursor:x?"pointer":"not-allowed",display:"block",margin:"20px auto 0",fontSize:"1.1rem",fontWeight:"bold",transition:"all 0.2s ease",boxShadow:x?"0 4px 8px rgba(0,0,0,0.2)":"none",position:"relative",zIndex:"20",marginTop:"30px",borderWidth:"3px",borderColor:"white",borderStyle:"solid",opacity:x?1:.7},resultContainer:{textAlign:"center",padding:"20px",marginBottom:"60px",position:"relative"},resultTitle:{fontSize:"2.5rem",fontWeight:"bold",marginBottom:"15px",color:"#5e35b1"},resultMessage:{fontSize:"1.2rem",marginBottom:"30px"},restartButton:{background:"linear-gradient(to right, #ff7043, #ff5722)",color:"white",border:"none",padding:"15px 30px",borderRadius:"10px",cursor:"pointer",fontSize:"1.1rem",fontWeight:"bold",transition:"all 0.2s ease",boxShadow:"0 4px 8px rgba(0,0,0,0.2)",position:"relative",zIndex:"10",marginTop:"20px",marginBottom:"15px"},categoryButton:{background:"linear-gradient(to right, #26c6da, #00acc1)",color:"white",border:"none",padding:"15px 30px",borderRadius:"10px",cursor:"pointer",fontSize:"1.1rem",fontWeight:"bold",transition:"all 0.2s ease",boxShadow:"0 4px 8px rgba(0,0,0,0.2)",position:"relative",zIndex:"10",display:"block",margin:"0 auto"},imageContainer:{maxHeight:"200px",display:"flex",justifyContent:"center",margin:"15px 0",overflow:"hidden",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},questionImage:{maxHeight:"200px",objectFit:"contain"},waterContainer:{position:"absolute",bottom:0,left:0,width:"100%",height:"10%",background:"linear-gradient(to bottom, rgba(100, 181, 246, 0.3), rgba(30, 136, 229, 0.5))",borderRadius:"0 0 20px 20px",zIndex:"0"},bubbles:{position:"absolute",width:"30px",height:"30px",backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:"50%",bottom:"5%",animation:"rise 8s infinite",zIndex:0},bubblesStyles:[{left:"10%",width:"15px",height:"15px",animationDuration:"10s",animationDelay:"0.2s"},{left:"20%",width:"20px",height:"20px",animationDuration:"7s",animationDelay:"2s"},{left:"35%",width:"25px",height:"25px",animationDuration:"9s",animationDelay:"1s"},{left:"55%",width:"15px",height:"15px",animationDuration:"8s",animationDelay:"3s"},{left:"75%",width:"20px",height:"20px",animationDuration:"11s",animationDelay:"0.5s"},{left:"90%",width:"25px",height:"25px",animationDuration:"6s",animationDelay:"1.5s"}],confetti:{position:"absolute",width:"15px",height:"15px",backgroundColor:"red",opacity:"0.7",animation:"confettiFall 5s infinite"},confettiStyles:t===100?[{top:"-10%",left:"10%",backgroundColor:"#ffeb3b",width:"10px",height:"10px",animationDelay:"0s"},{top:"-10%",left:"20%",backgroundColor:"#2196f3",width:"15px",height:"15px",animationDelay:"0.5s"},{top:"-10%",left:"30%",backgroundColor:"#f44336",width:"10px",height:"10px",animationDelay:"1s"},{top:"-10%",left:"40%",backgroundColor:"#4caf50",width:"15px",height:"15px",animationDelay:"1.5s"},{top:"-10%",left:"50%",backgroundColor:"#9c27b0",width:"10px",height:"10px",animationDelay:"2s"},{top:"-10%",left:"60%",backgroundColor:"#ff9800",width:"15px",height:"15px",animationDelay:"2.5s"},{top:"-10%",left:"70%",backgroundColor:"#e91e63",width:"10px",height:"10px",animationDelay:"3s"},{top:"-10%",left:"80%",backgroundColor:"#009688",width:"15px",height:"15px",animationDelay:"3.5s"},{top:"-10%",left:"90%",backgroundColor:"#ffeb3b",width:"10px",height:"10px",animationDelay:"4s"}]:[]};return e.jsxs("div",{style:r.container,children:[e.jsx("style",{children:`
    @keyframes rise {
      0% {
        bottom: 5%;
        opacity: 1;
      }
      100% {
        bottom: 80%;
        opacity: 0;
      }
    }
    
    @keyframes confettiFall {
      0% {
        top: -10%;
        transform: rotate(0deg);
      }
      100% {
        top: 100%;
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `}),e.jsxs("div",{style:r.gameCard,children:[e.jsx("div",{style:r.waterContainer}),r.bubblesStyles.map((d,S)=>e.jsx("div",{style:{...r.bubbles,...d}},S)),r.confettiStyles.map((d,S)=>e.jsx("div",{style:{...r.confetti,...d}},S)),e.jsx("h1",{style:r.title,children:"Game Pengukuran Volume"}),e.jsxs("div",{style:r.instruction,children:[e.jsx("div",{style:r.instructionBubble,children:"💧"}),e.jsx("p",{children:"Ayo belajar mengukur volume dengan satuan tidak baku dan satuan baku! Pilih jawaban yang benar untuk setiap soal. Setiap soal bernilai 10 poin."})]}),e.jsx("div",{style:r.progressContainer,children:e.jsx("div",{style:r.progressBar,id:"progress"})}),e.jsxs("div",{style:r.scoreContainer,children:[e.jsx("span",{style:r.scoreLabel,children:"Skor:"}),e.jsx("span",{style:r.scoreValue,children:t}),e.jsx("span",{children:"/100"})]}),b?e.jsxs("div",{style:r.resultContainer,children:[e.jsx("h2",{style:r.resultTitle,children:c.title}),e.jsx("p",{style:r.resultMessage,children:c.message}),t===100&&e.jsx("div",{style:{animation:"pulse 1s infinite",fontSize:"5rem",marginBottom:"20px"},children:"🏆"}),e.jsx("button",{onClick:P,style:r.restartButton,children:"Main Lagi"}),e.jsx("button",{onClick:$,style:r.categoryButton,children:"Kembali ke Kategori"})]}):e.jsx("div",{children:e.jsxs("div",{style:r.questionCard,children:[e.jsxs("div",{style:r.questionNumber,children:[e.jsx("span",{style:r.questionIcon,children:"Q"}),l.question.split(". ")[1]]}),e.jsxs("div",{style:r.iconContainer,children:[e.jsx("span",{children:s.icon}),e.jsx("span",{style:r.iconLabel,children:s.label})]}),e.jsx("div",{style:r.optionGrid,children:l.options.map((d,S)=>e.jsxs("div",{onClick:()=>A(S),style:r.optionButton(N===S,S===l.answer,x,S===l.answer),children:[String.fromCharCode(65+S),". ",d]},S))}),x&&e.jsxs("div",{style:r.feedback(N===l.answer),children:[e.jsx("span",{style:r.feedbackIcon,children:N===l.answer?"✅":"❌"}),l.feedback]}),e.jsx("button",{onClick:T,disabled:!x,style:r.nextButton,children:i===we.length-1?"Lihat Hasil":"Lanjut"})]})})]})]})}function pa(){const[i,n]=a.useState({screen:"game",score:0,questionIndex:0,totalAnswered:0,correctAnswers:0,completed:!1,feedback:"",showHint:!1});a.useEffect(()=>{},[]);const t=[{question:"Soal 1: Bangun datar yang memiliki 4 sisi yang sama panjang adalah?",options:["Persegi","Persegi Panjang","Segitiga","Lingkaran"],answer:"Persegi",hint:"Bangun ini memiliki 4 sisi yang sama panjang dan 4 sudut siku-siku."},{question:"Soal 2: Bangun datar yang tidak memiliki sudut adalah?",options:["Persegi","Persegi Panjang","Segitiga","Lingkaran"],answer:"Lingkaran",hint:"Bangun ini berbentuk bulat dan tidak memiliki sudut."},{question:"Soal 3: Berapa jumlah sisi yang dimiliki segitiga?",options:["1","2","3","4"],answer:"3",hint:"Nama 'segitiga' berasal dari 'segi tiga' yang berarti memiliki tiga sisi."},{question:"Soal 4: Berapa jumlah sudut pada persegi panjang?",options:["3","4","5","6"],answer:"4",hint:"Persegi panjang memiliki 4 sisi dan setiap pertemuan sisi membentuk sudut."},{question:"Soal 5: Bangun datar yang memiliki dua pasang sisi sejajar tetapi tidak sama panjang adalah?",options:["Persegi","Segitiga","Trapesium","Jajar Genjang"],answer:"Jajar Genjang",hint:"Bangun ini memiliki dua pasang sisi sejajar dan sudut-sudut berhadapan sama besar."},{question:"Soal 6: Berapa jumlah sudut dalam segitiga?",options:["90°","180°","270°","360°"],answer:"180°",hint:"Jumlah sudut dalam segitiga selalu tetap, tidak peduli bentuk segitiganya."},{question:"Soal 7: Semua sudut pada persegi besarnya adalah?",options:["30°","60°","90°","120°"],answer:"90°",hint:"Sudut 90° disebut sudut siku-siku."},{question:"Soal 8: Berapa keliling persegi dengan sisi 5 cm?",options:["10 cm","15 cm","20 cm","25 cm"],answer:"20 cm",hint:"Keliling persegi = 4 × sisi"},{question:"Soal 9: Berapa keliling persegi panjang dengan panjang 8 cm dan lebar 4 cm?",options:["16 cm","20 cm","24 cm","32 cm"],answer:"24 cm",hint:"Keliling persegi panjang = 2 × (panjang + lebar)"},{question:"Soal 10: Berapa keliling segitiga dengan sisi 5 cm, 6 cm, dan 7 cm?",options:["12 cm","15 cm","18 cm","20 cm"],answer:"18 cm",hint:"Keliling segitiga = jumlah semua sisi"},{question:"Soal 11: Berapa luas persegi dengan sisi 6 cm?",options:["12 cm²","18 cm²","24 cm²","36 cm²"],answer:"36 cm²",hint:"Luas persegi = sisi × sisi"},{question:"Soal 12: Berapa luas persegi panjang dengan panjang 9 cm dan lebar 5 cm?",options:["14 cm²","28 cm²","45 cm²","54 cm²"],answer:"45 cm²",hint:"Luas persegi panjang = panjang × lebar"},{question:"Soal 13: Berapa luas segitiga dengan alas 8 cm dan tinggi 6 cm?",options:["14 cm²","24 cm²","48 cm²","64 cm²"],answer:"24 cm²",hint:"Luas segitiga = ½ × alas × tinggi"},{question:"Soal 14: Berapa luas lingkaran dengan jari-jari 3 cm? (π = 3.14)",options:["9.42 cm²","18.84 cm²","28.26 cm²","56.52 cm²"],answer:"28.26 cm²",hint:"Luas lingkaran = π × jari-jari × jari-jari"},{question:"Soal 15: Andi akan membuat bingkai foto berbentuk persegi panjang. Jika panjangnya 25 cm dan lebarnya 15 cm, berapa panjang kayu yang diperlukan untuk membuat bingkai?",options:["40 cm","65 cm","80 cm","100 cm"],answer:"80 cm",hint:"Kayu diperlukan untuk membuat keliling bingkai: 2 × (panjang + lebar)"}],m=g=>{const w=t[i.questionIndex];g===w.answer?(n({...i,score:i.score+10,totalAnswered:i.totalAnswered+1,correctAnswers:i.correctAnswers+1,feedback:"Benar! 🎉",showHint:!1}),setTimeout(()=>{i.questionIndex<t.length-1?n(f=>({...f,questionIndex:f.questionIndex+1,feedback:"",showHint:!1})):n(f=>({...f,screen:"result",completed:!0}))},1e3)):n({...i,totalAnswered:i.totalAnswered+1,feedback:"Jawaban salah! 😢",showHint:!0})},x=()=>{i.questionIndex<t.length-1?n(g=>({...g,questionIndex:g.questionIndex+1,feedback:"",showHint:!1})):n(g=>({...g,screen:"result",completed:!0}))},v=()=>{n({...i,showHint:!0})},N=()=>i.totalAnswered===0?0:Math.round(i.correctAnswers/i.totalAnswered*100),j=g=>g>=90?"A":g>=80?"B":g>=70?"C":g>=60?"D":"E",b=()=>{switch(i.screen){case"game":const g=t[i.questionIndex];return e.jsxs("div",{className:"flex flex-col p-6 bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("span",{className:"bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm",children:[i.questionIndex+1,"/",t.length]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("span",{className:"font-semibold",children:["Skor: ",i.score]})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:g.question}),i.feedback&&e.jsx("div",{className:`p-2 rounded-md mb-2 ${i.feedback.includes("Benar")?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:i.feedback}),i.showHint&&e.jsxs("div",{className:"p-3 bg-yellow-100 text-yellow-800 rounded-md mb-3",children:[e.jsx("span",{className:"font-bold",children:"Petunjuk:"})," ",g.hint]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:g.options.map((q,A)=>e.jsx("button",{onClick:()=>m(q),className:"py-3 px-4 bg-blue-50 text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition duration-200 text-left",children:q},A))}),e.jsxs("div",{className:"flex justify-between",children:[!i.showHint&&e.jsx("button",{onClick:v,className:"py-2 px-4 bg-yellow-100 text-yellow-700 font-medium rounded-lg hover:bg-yellow-200 transition duration-200",children:"Tampilkan Petunjuk"}),i.feedback&&i.feedback.includes("salah")&&e.jsx("button",{onClick:x,className:"py-2 px-4 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition duration-200",children:"Lanjut ke Soal Berikutnya"})]})]});case"result":const w=N(),f=j(w);return e.jsxs("div",{className:"flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Selesai! 🎉"}),e.jsxs("div",{className:"mb-6 w-full",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-lg",children:"Nilai:"}),e.jsxs("span",{className:"text-2xl font-bold",children:[w,"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-4 mb-4",children:e.jsx("div",{className:`h-4 rounded-full ${w>=80?"bg-green-500":w>=60?"bg-yellow-500":"bg-red-500"}`,style:{width:`${w}%`}})}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{children:"Grade:"}),e.jsx("span",{className:`text-xl font-bold py-1 px-3 rounded-full ${f==="A"?"bg-green-100 text-green-800":f==="B"?"bg-blue-100 text-blue-800":f==="C"?"bg-yellow-100 text-yellow-800":f==="D"?"bg-orange-100 text-orange-800":"bg-red-100 text-red-800"}`,children:f})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Skor Total"}),e.jsx("p",{className:"text-xl font-bold",children:i.score})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Jawaban Benar"}),e.jsxs("p",{className:"text-xl font-bold",children:[i.correctAnswers," / ",i.totalAnswered]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg mb-6 w-full",children:[e.jsx("h2",{className:"font-bold text-lg mb-2",children:"Yang sudah kamu pelajari:"}),e.jsxs("ul",{className:"text-left",children:[e.jsx("li",{className:"mb-1",children:"• Mengenal berbagai bangun datar"}),e.jsx("li",{className:"mb-1",children:"• Sifat-sifat bangun datar"}),e.jsx("li",{className:"mb-1",children:"• Menghitung keliling bangun datar"}),e.jsx("li",{className:"mb-1",children:"• Menghitung luas bangun datar"}),e.jsx("li",{children:"• Menyelesaikan masalah sehari-hari"})]})]}),e.jsx("div",{className:"flex w-full justify-start mb-4",children:e.jsx("button",{onClick:()=>window.history.back(),className:"bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200",children:"← Kembali"})}),e.jsx("button",{onClick:()=>window.location.reload(),className:"py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300",children:"Main Lagi"})]});default:return null}};return e.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4",children:e.jsx("div",{className:"w-full max-w-md",children:b()})})}const ie=[{id:1,type:"table",question:"Berikut adalah tabel jumlah murid yang mengikuti ekstrakurikuler. Berapa jumlah murid yang mengikuti kegiatan Basket?",tableData:[["Kegiatan","Jumlah Murid"],["Futsal","15"],["Basket","12"],["Pramuka","18"],["Paduan Suara","10"]],answers:["15","12","18","10"],correctIndex:1},{id:2,type:"pictogram",question:"Setiap gambar bendera mewakili 5 murid. Berapa murid yang menyukai warna merah?",pictogram:[{label:"Merah",countIcon:4},{label:"Biru",countIcon:2},{label:"Hijau",countIcon:3}],iconUrl:"https://cdn-icons-png.flaticon.com/512/197/197484.png",answers:["15","25","20","10"],correctIndex:2},{id:3,type:"table",question:"Berapa total murid yang mengikuti pelajaran tambahan dari tabel di bawah?",tableData:[["Hari","Jumlah Murid"],["Senin","10"],["Rabu","8"],["Jumat","12"]],answers:["32","30","28","25"],correctIndex:1},{id:4,type:"pictogram",question:"Setiap gambar bola mewakili 3 murid yang suka olahraga. Berapa banyak murid yang suka sepak bola?",pictogram:[{label:"Sepak Bola",countIcon:7},{label:"Bola Basket",countIcon:4},{label:"Bola Voli",countIcon:3}],iconUrl:"https://cdn-icons-png.flaticon.com/512/2101/2101669.png",answers:["21","18","14","10"],correctIndex:0},{id:5,type:"table",question:"Dari tabel berikut, berapa murid yang membawa bekal pada hari Kamis?",tableData:[["Hari","Jumlah Murid"],["Senin","11"],["Selasa","9"],["Rabu","10"],["Kamis","13"],["Jumat","12"]],answers:["9","10","13","12"],correctIndex:2},{id:6,type:"pictogram",question:"Setiap ikon buku mewakili 2 murid yang menyukai membaca. Berapa murid yang suka novel?",pictogram:[{label:"Novel",countIcon:9},{label:"Komik",countIcon:6},{label:"Ensiklopedia",countIcon:3}],iconUrl:"https://cdn-icons-png.flaticon.com/512/29/29302.png",answers:["18","12","20","15"],correctIndex:0},{id:7,type:"bar-chart",question:"Perhatikan diagram batang berikut. Berapa murid yang suka buah apel?",barChartData:[{label:"Apel",value:18},{label:"Jeruk",value:13},{label:"Mangga",value:20},{label:"Pisang",value:15}],answers:["18","20","15","13"],correctIndex:0},{id:8,type:"bar-chart",question:"Berapa murid yang suka matematika dari diagram batang berikut?",barChartData:[{label:"Matematika",value:20},{label:"Bahasa Indonesia",value:15},{label:"IPA",value:18},{label:"IPS",value:12}],answers:["20","15","18","12"],correctIndex:0},{id:9,type:"bar-chart",question:"Perhatikan diagram batang ini dan pilih jumlah murid yang suka menggambar.",barChartData:[{label:"Menggambar",value:16},{label:"Bersepeda",value:14},{label:"Membaca",value:19},{label:"Menulis",value:12}],answers:["16","14","19","12"],correctIndex:0},{id:10,type:"bar-chart",question:"Berapa murid yang suka olahraga renang menurut diagram batang di bawah?",barChartData:[{label:"Renang",value:22},{label:"Lari",value:18},{label:"Sepak Bola",value:19},{label:"Bulutangkis",value:15}],answers:["22","18","19","15"],correctIndex:0}];function ha(){const[i,n]=a.useState(0),[t,m]=a.useState(0),[x,v]=a.useState(null),[N,j]=a.useState(!1),[b,g]=a.useState(!1),w=se(),f=ie[i];Qe.useEffect(()=>{const c=s=>{s.key==="Escape"&&b&&(g(!1),n(ie.length))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[b,ie.length]);const q=f.barChartData?Math.max(...f.barChartData.map(c=>c.value)):0;function A(c){N||(v(c),j(!0),c===f.correctIndex&&m(s=>s+10))}function T(){v(null),j(!1),i+1<ie.length?n(i+1):g(!0)}function P(){n(0),m(0),v(null),j(!1),g(!1)}function $(){g(!1),w("/category4_bab6")}const y=c=>e.jsxs("table",{className:"data-table",role:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:c[0].map((s,r)=>e.jsx("th",{children:s},r))})}),e.jsx("tbody",{children:c.slice(1).map((s,r)=>e.jsx("tr",{children:s.map((h,d)=>e.jsx("td",{children:h},d))},r))})]}),B=(c,s)=>e.jsxs(e.Fragment,{children:[c.map(({label:r,countIcon:h},d)=>e.jsxs("div",{className:"pictogram-row",children:[e.jsx("div",{className:"pictogram-icon",style:{backgroundImage:`url(${s})`},title:r,"aria-label":r}),e.jsxs("span",{children:[" x ",h]}),e.jsx("span",{style:{fontWeight:700,marginLeft:12},children:r})]},d)),e.jsx("p",{style:{fontStyle:"italic",fontSize:"0.9rem",marginTop:12},children:"Setiap simbol mewakili sejumlah murid, kalikan jumlah simbol dengan angka tersebut."})]}),l=c=>e.jsx("div",{className:"bar-chart",children:c.map(({label:s,value:r},h)=>{const d=r/q*100;return e.jsxs("div",{className:"bar-container",children:[e.jsx("div",{className:"bar-label",children:s}),e.jsxs("div",{className:"bar",style:{width:`${d}%`},"aria-label":`${r} murid`,"data-value":r,children:[r," murid"]})]},h)})});return i===ie.length?e.jsxs("div",{className:"game-container",role:"main","aria-label":"Hasil permainan bentuk penyajian data",children:[e.jsx("h1",{children:"Permainan Selesai!"}),e.jsxs("p",{className:"score-board","aria-live":"polite",children:["Skor akhir kamu adalah ",t," dari ",ie.length*10," poin!"]})," ",e.jsx("button",{className:"restart-btn",onClick:P,children:"Main Lagi"}),e.jsx("button",{className:"back-btn",onClick:$,children:"Kembali ke Kategori"})]}):e.jsxs("div",{className:"game-container",role:"main","aria-label":"Game Penyajian Data: Tabel dan Diagram",children:[e.jsx("h1",{children:"Game Penyajian Data: Tabel dan Diagram"}),e.jsxs("div",{className:"score-board","aria-live":"polite",children:["Skor: ",t]}),e.jsxs("div",{className:"question-number",children:["Soal ",i+1," dari ",ie.length]}),e.jsx("div",{className:"question-text",children:f.question}),e.jsxs("div",{className:"question-extra",children:[f.type==="table"&&y(f.tableData),f.type==="pictogram"&&B(f.pictogram,f.iconUrl),f.type==="bar-chart"&&l(f.barChartData)]}),e.jsx("ul",{className:"answers",role:"list",children:f.answers.map((c,s)=>{let r="answer";return N&&(s===f.correctIndex?r+=" correct":x===s&&s!==f.correctIndex&&(r+=" wrong")),x===s&&(r+=" selected"),e.jsx("li",{className:r,role:"button",tabIndex:0,"aria-pressed":x===s,onClick:()=>A(s),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),A(s))},children:c},s)})}),e.jsx("button",{className:"next-btn",disabled:!N,onClick:T,children:i+1===ie.length?"Lihat Hasil":"Lanjutkan"}),e.jsx("button",{className:"restart-btn",style:{display:"none"},onClick:P,children:"Main Lagi"}),b&&e.jsx("div",{className:"result-popup-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"result-title",children:e.jsxs("div",{className:"result-popup",children:[e.jsx("h2",{id:"result-title",children:"Hasil Akhir!"}),e.jsxs("div",{className:"result-score",children:[e.jsx("span",{className:"score-number",children:t}),e.jsxs("span",{className:"score-total",children:["/",ie.length*10]})]}),e.jsx("div",{className:"result-message",children:t===ie.length*10?"Hebat! Kamu mendapat nilai sempurna!":t>=ie.length*7?"Bagus! Kamu menguasai materi ini dengan baik.":t>=ie.length*5?"Cukup baik! Teruslah berlatih.":"Jangan menyerah! Coba lagi untuk hasil yang lebih baik."}),e.jsxs("div",{className:"result-buttons",children:[e.jsx("button",{className:"result-btn restart",onClick:P,children:"Main Lagi"}),e.jsx("button",{className:"result-btn back",onClick:$,children:"Kembali ke Kategori"})]})]})})]})}export{da as A,la as D,ra as F,sa as G,na as K,ca as M,Ue as P,ga as V,Ve as a,Xe as b,Ze as c,ea as d,aa as e,ta as f,ia as g,oa as h,ua as i,ma as j,pa as k,ha as l};
