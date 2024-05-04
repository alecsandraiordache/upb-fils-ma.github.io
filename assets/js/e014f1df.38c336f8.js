"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7816],{79256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=r(17624),i=r(4552);const n={},d="House Alarm",a={id:"project/2024/mihai.smarandache/index",title:"House Alarm",description:"A house alarm system combining motion detection, proximity monitoring and event logging.",source:"@site/docs/project/2024/mihai.smarandache/index.md",sourceDirName:"project/2024/mihai.smarandache",slug:"/project/2024/mihai.smarandache/",permalink:"/docs/project/2024/mihai.smarandache/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/mihai.smarandache/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Summer Hat",permalink:"/docs/project/2024/kaan.ugur/"},next:{title:"Automated Window Blinds",permalink:"/docs/project/2024/naomi.lita/"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"house-alarm",children:"House Alarm"}),"\n",(0,s.jsx)(t.p,{children:"A house alarm system combining motion detection, proximity monitoring and event logging."}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Author"}),": Smarandache Mihai ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-Mihai1803",children:"https://github.com/UPB-FILS-MA/project-Mihai1803"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"A house alarm system triggered by motion detection and proximity monitoring. It includes the following features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Detection of motion presence using a motion sensor"}),"\n",(0,s.jsx)(t.li,{children:"Proximity monitoring using a distance sensor mounted on a servomotor rotating 180 degrees"}),"\n",(0,s.jsx)(t.li,{children:"Activation of a buzzer alarm when motion is detected and the presence is close enough"}),"\n",(0,s.jsx)(t.li,{children:"Deactivation of the buzzer alarm by entering a code using a keypad"}),"\n",(0,s.jsx)(t.li,{children:"Displaying the entered code on an LCD screen"}),"\n",(0,s.jsx)(t.li,{children:"Logging of detection events to a MicroSD card"}),"\n",(0,s.jsx)(t.li,{children:"Automatic shutoff of the buzzer alarm if the code is not entered within 1 minute"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"I chose this as my first embedded project because it allows me to put into practice the skills and knowledge that I have gained throughout this course. Implementing a house alarm system involves integrating various components such as motion sensors, distance sensors, keypad input, and the LCD display, thus allowing me to apply concepts ranging from hardware interfacing to software development."}),"\n",(0,s.jsx)(t.p,{children:"Moreover, this project presents a real-life application that can be scaled and potentially benefit others by enhancing security measures in homes."}),"\n",(0,s.jsx)(t.p,{children:"Overall, this project not only consolidates my learning but also offers a solution to a practical problem."}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.p,{children:"The project has the following architecture:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Raspberry Pi Pico:"})," The Pico has the role of connecting all the components between them"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LCD:"})," Connected to the Pico via I2C, the LCD provides an interface for displaying system statuses, messages and inputs"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Motion and Distance Sensors:"})," These sensors detect motion and proximity separately. They provide input to the pico about potential intruders"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Servormotor:"})," The servormotor is controlled by the Pico through PWM and it serves as a platform for mounting the distance sensor so that it can rotate 180\xb0"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Buzzer:"})," Controlled by PWM, the buzzer is triggered when motion is detected in proximity to the sensors. It acts as an audible alarm"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Keypad and Push Button:"})," The keypad allows the user to input a code to disarm the alarm. Aditionally, a stop button provides a manual override to stop the alarm if necessary"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"MicroSD Card:"})," Used for data logging and storage, the MicroSD card records system events, sensor reading and alarm triggers"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Block Diagram",src:r(4644).c+"",width:"1074",height:"708"})}),"\n",(0,s.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,s.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,s.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,s.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(t.p,{children:"Detail in a few words the hardware used."}),"\n",(0,s.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Kicad Schematic",src:r(8984).c+"",width:"973",height:"669"})}),"\n",(0,s.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Device"}),(0,s.jsx)(t.th,{children:"Usage"}),(0,s.jsx)(t.th,{children:"Price"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,s.jsx)(t.td,{children:"The microcontroller"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://components101.com/sites/default/files/component_datasheet/HC%20SR501%20PIR%20Sensor%20Datasheet.pdf",children:"PIR HC-SR501"})}),(0,s.jsx)(t.td,{children:"Motion Sensor"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-pir/106-modul-senzor-pir-hc-sr501.html?search_query=pir+senzo&results=40",children:"6 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.handsontec.com/dataspecs/HC-SR04-Ultrasonic.pdf",children:"HC-SR04"})}),(0,s.jsx)(t.td,{children:"Distance Sensor"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-ultrasonici/2328-senzor-ultrasonic-de-distana-hc-sr04-compatibil-33-v-i-5-v.html?search_query=senzor+de+distant&results=206",children:"15 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://robojax.com/learn/arduino/robojax-servo-sg90_datasheet.pdf",children:"SG90 180\xb0"})}),(0,s.jsx)(t.td,{children:"Servomotor"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/motoare-servomotoare/2261-micro-servo-motor-sg90-180.html?search_query=SG90&results=12",children:"12 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.waveshare.com/datasheet/LCD_en_PDF/LCD1602.pdf",children:"1602 LCD"})}),(0,s.jsx)(t.td,{children:"LCD Display"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/optoelectronice-lcd-uri/62-lcd-1602-cu-interfata-i2c-si-backlight-galben-verde.html?search_query=lcd&results=206",children:"15 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://cdn.sparkfun.com/assets/f/f/a/5/0/DS-16038.pdf",children:"Keypad"})}),(0,s.jsx)(t.td,{children:"Keypad"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-atingere/470-tastatura-matriceala-4x4-cu-conector-pin-de-tip-mama.html?search_query=keypad&results=5",children:"7 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MicroSD Module"}),(0,s.jsx)(t.td,{children:"MicroSD Card Slot Module"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/memories/1516-microsd-card-slot-module.html",children:"5 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Activ Buzzer"}),(0,s.jsx)(t.td,{children:"Buzzer"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/audio-buzzere/635-buzzer-activ-de-3-v.html?search_query=buzzer&results=61",children:"1.5 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Push Button"}),(0,s.jsx)(t.td,{children:"Button"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/butoane-i-comutatoare/1119-buton-6x6x6.html?search_query=buton&results=222",children:"1 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Jumper Wires"}),(0,s.jsx)(t.td,{children:"Connecting components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/884-set-fire-tata-tata-40p-10-cm.html?search_query=set+fire&results=110",children:"7 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Breadboard"}),(0,s.jsx)(t.td,{children:"Project board"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/prototipare-breadboard-uri/8-breadboard-830-points.html?search_query=breadboard&results=145",children:"10 RON"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Library"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-rp",children:"embassy-rp"})}),(0,s.jsx)(t.td,{children:"RP2040 pheripherals"}),(0,s.jsx)(t.td,{children:"Used for accesing the pheripherals of the microcontroller"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-time",children:"embassy-time"})}),(0,s.jsx)(t.td,{children:"Time Library"}),(0,s.jsx)(t.td,{children:"Used for creating timeouts and delays"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-futures",children:"embassy-futures"})}),(0,s.jsx)(t.td,{children:"Futures library"}),(0,s.jsx)(t.td,{children:"Used for asynchronous development"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-sync",children:"embassy-sync"})}),(0,s.jsx)(t.td,{children:"Synchronization primitives"}),(0,s.jsx)(t.td,{children:"Used for syncronizing asynchronous tasks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-embedded-hal",children:"embassy-embedded-hal"})}),(0,s.jsx)(t.td,{children:"I2C and SPI busses for embedded hal implemented in embassy"}),(0,s.jsx)(t.td,{children:"Used to create a SPI bus for the MicroSD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/rust-embedded/heapless",children:"heapless"})}),(0,s.jsx)(t.td,{children:"Data structures that don\u2019t require dynamic memory allocation"}),(0,s.jsx)(t.td,{children:"Using Strings from this library"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/mjhouse/ag-lcd",children:"ag-lcd"})}),(0,s.jsx)(t.td,{children:"Display library"}),(0,s.jsx)(t.td,{children:"Used for writing to the display"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/rust-embedded-community/embedded-sdmmc-rs",children:"embedded-sdmmc-rs"})}),(0,s.jsx)(t.td,{children:"SD Card library"}),(0,s.jsx)(t.td,{children:"Used for writing to the MicroSD"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://howtomechatronics.com/projects/arduino-security-alarm-system-project/",children:"https://howtomechatronics.com/projects/arduino-security-alarm-system-project/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.instructables.com/Arduino-Motion-Sensing-Alarm/",children:"https://www.instructables.com/Arduino-Motion-Sensing-Alarm/"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4644:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/block_diagram-82efbf84a46654f028e0d4b455e08a91.png"},8984:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/kicad_schematic-f223e0301428c87d5c780ff361f0cca5.png"},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>d});var s=r(11504);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);