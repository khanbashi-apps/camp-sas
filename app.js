/* CAMP SAS — كامب ساس · إدارة سكن المخيم */
const VERSION='v1.0';
const LOGO='icons/logo.png';
const LS='campsas_data_v1';
/* ---------- نسخة الجوال (IPA / APK عبر Capacitor) ---------- */
const isNative=!!(window.Capacitor&&typeof window.Capacitor.isNativePlatform==='function'&&window.Capacitor.isNativePlatform());
const nativeReady=new Promise(res=>{if(!isNative)return res();const sc=document.createElement('script');sc.src='capacitor.js';sc.onload=()=>res();sc.onerror=()=>res();document.head.appendChild(sc)});
const NP=name=>{if(!isNative)return null;const C=window.Capacitor,P=C.Plugins||{};if(P[name])return P[name];try{const cx=window.capacitorExports;if(cx&&cx.registerPlugin)return cx.registerPlugin(name)}catch(e){}try{if(C.registerPlugin)return C.registerPlugin(name)}catch(e){}return null};
const OCC={1:['#DC2626','#FFFFFF'],2:['#F59E0B','#1F2937'],3:['#15803D','#FFFFFF']};
const DEFN={ar:['أ','ب','ج','د','هـ','و'],en:['A','B','C','D','E','F']};
const I={
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
 bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16V11a6 6 0 1112 0v5l2 2H4z"/><path d="M10 21h4"/></svg>',
 rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M9 5v14M15 5v14"/></svg>',
 share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 4v11M7 9l5-5 5 5M5 15v4h14v-4"/></svg>',
 gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
 plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 6l-6 6 6 6"/></svg>',
 chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
 close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z"/></svg>',
 user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/><path d="M19 3v4M17 5h4"/></svg>',
 sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z"/></svg>',
 auto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 000 18z" fill="currentColor"/></svg>'
};
const T={
ar:{app:'كامب ساس',appSub:'إدارة سكن المخيم',shareFail:'تعذّرت المشاركة',noRooms:'لا توجد غرف بعد. ابدأ بإضافة أول غرفة.',backupNote:'البيانات محفوظة في هذا الجهاز. خذ نسخة احتياطية بانتظام واحفظها في الملفات أو أرسلها لنفسك.',demo:'تحميل بيانات تجريبية',wipe:'مسح كل البيانات',demoNeedsEmpty:'البيانات التجريبية تُحمّل فقط عندما يكون التطبيق فارغاً',demoLoaded:'تم تحميل بيانات تجريبية',notifs:'التنبيهات',notifWeb:'التنبيهات داخل التطبيق تعمل هنا. التنبيه على شاشة القفل والتطبيق مغلق متوفر في نسخة الآيفون والأندرويد.',notifNote:'يصلك تنبيه بعد ساعتين من تسجيل البلاغ، ثم كل يوم في الوقت الذي تختاره حتى تضغط «تم التنفيذ».',on:'تشغيل',off:'إيقاف',dailyAt:'وقت التنبيه اليومي',testNotif:'تنبيه تجريبي',allowNotif:'اسمح بالتنبيهات من إعدادات الجوال ← كامب ساس',notifTitle:'بلاغ لم يُنفّذ',notifBody:'اضغط «تم التنفيذ» عند الانتهاء',testBody:'تنبيه تجريبي: التنبيهات تعمل ✓',testSoon:'سيصلك تنبيه بعد 5 ثوانٍ',search:'ابحث: رقم الغرفة 10/2 أو الرقم الوظيفي أو الاسم',free:'أسرّة شاغرة',residents:'الساكنون',openRep:'بلاغات مفتوحة',room:'غرفة',addRoom:'إضافة غرفة',nRooms:'الغرف',nReports:'البلاغات',nExport:'تصدير',nSettings:'الإعدادات',shift:'الشفت',bed:'السرير',empId:'الرقم الوظيفي',phone:'الهاتف',company:'الشركة',since:'الدخول',name:'اسم الموظف',call:'اتصال',edit:'تعديل',move:'نقل',out:'خروج',addIn:'إضافة في الشفت',available:'متاحة',maint:'صيانة / مغلقة',maintS:'صيانة',reports:'البلاغات',newReport:'بلاغ جديد',reportPh:'اكتب المشكلة، مثل: المكيف لا يبرد',addReport:'إضافة البلاغ',done:'تم التنفيذ',doneAt:'نُفّذ',openT:'مفتوحة',doneT:'منفذة',logT:'السجل',noOpen:'لا توجد بلاغات',notes:'ملاحظات الغرفة',notesPh:'ملاحظات عامة عن الغرفة',save:'حفظ',cancel:'إلغاء',required:'الاسم والرقم الوظيفي مطلوبان',dupe:'هذا الرقم الوظيفي مسجّل في',moveHere:'انقله إلى هنا',moveTo:'نقل إلى',target:'الغرفة',full:'الشفت ممتلئ في هذه الغرفة',confirmOut:'تأكيد خروج',yes:'نعم، خروج',roomNo:'رقم الغرفة',unitsN:'عدد الأقسام',wholeRoom:'غرفة كاملة',oneUnit:'قسم واحد',unitNo:'رقم القسم',beds6:'كل غرفة: {n} شفتات × 3 أسرّة',exists:'موجود مسبقاً',deleteUnit:'حذف هذه الغرفة',deleteOnlyEmpty:'لا يمكن الحذف وفيها ساكنون',deleted:'تم الحذف',saved:'تم الحفظ',which:'أي الغرف؟',all:'كل الغرف',oneRoom:'غرفة معيّنة',pickSelf:'أختار بنفسي',format:'الصيغة',excel:'Excel',excelH:'جدول مرتب',pdf:'PDF',pdfH:'للطباعة',img:'صور',imgH:'بأعلى دقة',sheetPer:'ورقة لكل غرفة',oneTable:'جدول واحد',pngEach:'صور PNG منفصلة',zipAll:'ملف ZIP واحد',pngNote:'كل غرفة صورة PNG بدقة عالية. مع أكثر من غرفة يطلب منك حفظ كل صورة على حدة.',zipNote:'كل الصور داخل ملف ZIP واحد بنفس الدقة العالية.',exportN:'تصدير',rooms_:'غرف',noSel:'اختر غرفة واحدة على الأقل',noDl:'التنزيل غير متاح في هذا العرض',preparing:'جارٍ التجهيز…',vacant:'شاغر',lang:'اللغة',theme:'المظهر',tAuto:'تلقائي',tLight:'نهاري',tDark:'ليلي',shiftNames:'الشفتات',backup:'نسخة احتياطية',dlBackup:'تنزيل نسخة احتياطية',restore:'استرجاع من ملف',restored:'تم الاسترجاع',badFile:'الملف غير صالح',reset:'إعادة البيانات التجريبية',resetQ:'سيتم مسح كل البيانات الحالية. متأكد؟',resetYes:'نعم، امسح',protoNote:'نموذج تجريبي: البيانات محفوظة في هذا الجهاز فقط. خذ نسخة احتياطية قبل إدخال بيانات حقيقية.',legend:'الألوان لكل شفت (3 أسرّة):',l0:'فارغ',l1:'شخص',l2:'شخصان',l3:'مكتمل',youHave:'لديك',openReps:'بلاغات مفتوحة — اضغط للعرض',noResults:'لا توجد نتائج',lIn:'دخول',lOut:'خروج',lMove:'نقل',lRep:'بلاغ',lDone:'تنفيذ',lMaint:'صيانة',lOpen:'متاحة',movedTo:'إلى',shareRoom:'مشاركة الغرفة',exported:'تم التصدير',declined:'تم الإلغاء',addUnit:'إضافة قسم',of:'من',total:'الإجمالي',addShift:'إضافة شفت',removeShift:'حذف آخر شفت',cantRemove:'لا يمكن حذف شفت فيه ساكنون',shiftAdded:'تمت إضافة الشفت',shiftN:'الشفت',home:'الرئيسية',checkIn:'تسكين موظف',checkInS:'خطوة بخطوة',findEmp:'بحث',findEmpS:'برقم الغرفة أو الموظف',roomsS:'كل الغرف وحالتها',repS:'مفتوحة الآن',expS:'Excel · PDF · صور',setS:'اللغة والمظهر والشفتات',step1:'اختر الغرفة',step2:'اختر القسم',step3:'اختر الشفت',stepOf:'الخطوة {a} من 3',freeN:'شاغر',noFree:'ممتلئ',sections:'الأقسام',tapHint:'اضغط على أي خانة لفتحها',totalRow:'المجموع',bedsFree:'أسرّة شاغرة',sec:'قسم',page:'صفحة'},
en:{app:'CAMP SAS',appSub:'Camp accommodation',shareFail:'Could not share',noRooms:'No rooms yet. Start by adding the first room.',backupNote:'Data is stored on this device. Take a backup regularly and keep it in Files or send it to yourself.',demo:'Load sample data',wipe:'Erase all data',demoNeedsEmpty:'Sample data loads only when the app is empty',demoLoaded:'Sample data loaded',notifs:'Notifications',notifWeb:'In-app alerts work here. Lock-screen alerts while the app is closed are in the iPhone and Android apps.',notifNote:'You get an alert 2 hours after a report is logged, then daily at the time you choose until you tap Done.',on:'On',off:'Off',dailyAt:'Daily alert time',testNotif:'Test alert',allowNotif:'Allow notifications in phone Settings → CAMP SAS',notifTitle:'Open report',notifBody:'Tap Done when finished',testBody:'Test alert: notifications work ✓',testSoon:'You will get an alert in 5 seconds',search:'Search: room 10/2, employee ID or name',free:'Free beds',residents:'Residents',openRep:'Open reports',room:'Room',addRoom:'Add room',nRooms:'Rooms',nReports:'Reports',nExport:'Export',nSettings:'Settings',shift:'Shift',bed:'Bed',empId:'Employee ID',phone:'Phone',company:'Company',since:'Since',name:'Employee name',call:'Call',edit:'Edit',move:'Move',out:'Check out',addIn:'Add to shift',available:'Available',maint:'Maintenance / closed',maintS:'Maint.',reports:'Reports',newReport:'New report',reportPh:'Describe the issue, e.g. AC not cooling',addReport:'Add report',done:'Done',doneAt:'Done',openT:'Open',doneT:'Done',logT:'Log',noOpen:'No reports',notes:'Room notes',notesPh:'General notes about the room',save:'Save',cancel:'Cancel',required:'Name and employee ID are required',dupe:'This employee ID is already in',moveHere:'Move here',moveTo:'Move to',target:'Room',full:'That shift is full in this room',confirmOut:'Check out',yes:'Yes, check out',roomNo:'Room number',unitsN:'Sections',wholeRoom:'Whole room',oneUnit:'One section',unitNo:'Section no.',beds6:'Each room: {n} shifts × 3 beds',exists:'already exists',deleteUnit:'Delete this room',deleteOnlyEmpty:'Cannot delete while occupied',deleted:'Deleted',saved:'Saved',which:'Which rooms?',all:'All rooms',oneRoom:'One room',pickSelf:'Pick',format:'Format',excel:'Excel',excelH:'Tidy table',pdf:'PDF',pdfH:'To print',img:'Images',imgH:'Highest quality',sheetPer:'Sheet per room',oneTable:'One table',pngEach:'Separate PNG images',zipAll:'One ZIP file',pngNote:'Each room as a high-resolution PNG. With several rooms you confirm each image.',zipNote:'All images in one ZIP at the same high resolution.',exportN:'Export',rooms_:'rooms',noSel:'Pick at least one room',noDl:'Downloads are not available in this view',preparing:'Preparing…',vacant:'Vacant',lang:'Language',theme:'Appearance',tAuto:'Auto',tLight:'Light',tDark:'Dark',shiftNames:'Shifts',backup:'Backup',dlBackup:'Download backup',restore:'Restore from file',restored:'Restored',badFile:'Invalid file',reset:'Reset sample data',resetQ:'All current data will be erased. Sure?',resetYes:'Yes, erase',protoNote:'Prototype: data is stored on this device only. Take a backup before entering real data.',legend:'Colors per shift (3 beds):',l0:'Empty',l1:'1 person',l2:'2 people',l3:'Full',youHave:'You have',openReps:'open reports — tap to view',noResults:'No results',lIn:'Check-in',lOut:'Check-out',lMove:'Move',lRep:'Report',lDone:'Done',lMaint:'Maintenance',lOpen:'Available',movedTo:'to',shareRoom:'Share room',exported:'Exported',declined:'Cancelled',addUnit:'Add section',of:'of',total:'Total',addShift:'Add shift',removeShift:'Remove last shift',cantRemove:'Cannot remove a shift that has residents',shiftAdded:'Shift added',shiftN:'Shift',home:'Home',checkIn:'Check in',checkInS:'Step by step',findEmp:'Search',findEmpS:'By room or employee',roomsS:'All rooms and status',repS:'Open now',expS:'Excel · PDF · Images',setS:'Language, theme, shifts',step1:'Choose the room',step2:'Choose the section',step3:'Choose the shift',stepOf:'Step {a} of 3',freeN:'free',noFree:'Full',sections:'Sections',tapHint:'Tap any cell to open it',totalRow:'Total',bedsFree:'free beds',sec:'section',page:'page'}
};
let S,ui={view:'home',from:'home',unit:null,group:null,q:'',repTab:'open',wz:{step:1,g:null,id:null},exp:{scope:'all',group:null,sel:{},fmt:'xlsx',layout:'sheet',img:'png'}};
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t=k=>(T[S.lang]||T.ar)[k]??k;
const now=()=>new Date().toISOString();
const daysAgo=d=>new Date(Date.now()-d*864e5).toISOString();
function fmtDate(iso){try{return new Intl.DateTimeFormat(S.lang==='ar'?'ar-OM-u-nu-latn':'en-GB',{day:'numeric',month:'short'}).format(new Date(iso))}catch(e){return String(iso).slice(0,10)}}
function nS(){return (S.shiftNames.ar||[]).length||2}
function shiftName(i){const n=(S.shiftNames&&S.shiftNames[S.lang])||DEFN[S.lang];return n[i]||DEFN[S.lang][i]||String(i+1)}
function sortKey(id){const [g,u]=id.split('/');return [parseFloat(g)||0,g,parseFloat(u)||0]}
function cmpIds(a,b){const x=sortKey(a),y=sortKey(b);return x[0]-y[0]||String(x[1]).localeCompare(String(y[1]))||x[2]-y[2]}
function unitIds(){return Object.keys(S.units).sort(cmpIds)}
function groups(){const m={};unitIds().forEach(id=>{const g=S.units[id].group;(m[g]=m[g]||[]).push(id)});return Object.keys(m).sort((a,b)=>cmpIds(a+'/0',b+'/0')).map(g=>({g,ids:m[g]}))}
function cnt(u){return u.beds.map(s=>s.filter(Boolean).length)}
function total(u){return cnt(u).reduce((a,b)=>a+b,0)}
function capOf(u){return u.beds.length*3}
function freeOf(u){return u.maint?0:capOf(u)-total(u)}
function lvl(u){if(u.maint)return ['#78716C','#FFFFFF'];const tt=total(u),c=capOf(u);if(tt===0)return ['var(--empty)','var(--emptyInk)'];if(tt===c)return ['#15803D','#FFFFFF'];if(tt*3<=c)return ['#DC2626','#FFFFFF'];return ['#F59E0B','#1F2937']}
function gStats(ids){let u=0,c=0,f=0;ids.forEach(id=>{const x=S.units[id];if(!x.maint){c+=capOf(x);u+=total(x)}});return {u,c,f:c-u}}
function openReps(id){return S.reports.filter(r=>r.status==='open'&&(!id||r.unit===id))}
function gReps(g){return S.reports.filter(r=>r.status==='open'&&S.units[r.unit]&&S.units[r.unit].group===g).length}
function newUnit(g,n){return {group:String(g),no:String(n),maint:false,notes:'',beds:Array.from({length:(S&&S.shiftNames?nS():2)},()=>[null,null,null])}}
function log(type,text){S.log.unshift({t:now(),type,text});if(S.log.length>300)S.log.length=300}
function persist(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}nativeAfterSave()}
/* في نسخة الجوال نحفظ نسخة ثانية من البيانات في ملفات التطبيق حتى لا تضيع */
let mirrorT=0;
function nativeAfterSave(){if(!isNative)return;clearTimeout(mirrorT);mirrorT=setTimeout(async()=>{await nativeReady;const fs=NP('Filesystem');if(fs){try{await fs.writeFile({path:'campsas-data.json',data:JSON.stringify(S),directory:'DATA',encoding:'utf8'})}catch(e){}}scheduleNotis()},600)}
async function nativeRestore(){const fs=NP('Filesystem');if(!fs||Object.keys(S.units).length)return false;try{const r=await fs.readFile({path:'campsas-data.json',directory:'DATA',encoding:'utf8'});const j=JSON.parse(r.data);if(j&&j.units&&Object.keys(j.units).length){S=j;mig();try{localStorage.setItem(LS,r.data)}catch(e){}return true}}catch(e){}return false}
function tagStyle(n){if(!n)return 'background:var(--empty);color:var(--emptyInk);border:1.5px dashed var(--emptyLine)';const c=OCC[n];return 'background:'+c[0]+';color:'+c[1]}
function sample(){
 const names=['سالم بن خميس','محمد بن علي','ناصر بن سعيد','يوسف بن حمد','خالد بن راشد','حمد بن سالم','راشد بن ناصر','علي بن سيف','سعيد بن مبارك','مازن بن هلال','فهد بن عبدالله','أحمد بن جمعة','عمر بن خلفان','بدر بن سليمان','هلال بن محمد','طارق بن علي','سيف بن حمود','ماجد بن سالم','حسن بن يوسف','عبدالله بن خميس','زاهر بن سعيد','منذر بن ناصر','جمال بن راشد','وليد بن عيسى','إبراهيم بن سالم','عيسى بن حمد','مبارك بن علي','حمود بن سيف','سليمان بن ناصر','خلفان بن محمد','جمعة بن راشد','عادل بن سالم','نبيل بن خالد','فيصل بن علي','قيس بن حمد','رائد بن سعيد','مهند بن ناصر','أنور بن خميس','صالح بن مبارك','ثامر بن هلال','حارث بن سالم','غسان بن علي','لؤي بن حمد','نزار بن سعيد','باسل بن ناصر','كمال بن راشد','مروان بن سيف','عامر بن خلفان','هيثم بن سالم','ياسر بن علي','زياد بن حمد','شهاب بن سعيد','بلال بن ناصر','معاذ بن خميس','أيمن بن مبارك','حسام بن هلال','رامي بن سالم','سامي بن علي','وائل بن حمد','نادر بن سعيد','إياد بن ناصر','جابر بن راشد','ضياء بن سيف','عزان بن خلفان','عصام بن سالم','لطفي بن علي','مالك بن حمد','نصر بن سعيد','هادي بن ناصر','يحيى بن خميس','مسعود بن علي','حميد بن سالم','سالم بن راشد','علي بن مبارك'];
 const pat={'10':[[3,3],[2,3],[1,0]],'11':[[3,3],[3,3],[3,2]],'12':[[0,0],[2,1],[3,3]],'13':[[1,2],[0,0],[3,3]],'14':[[2,2],[3,1],[3,3]],'15':[[3,3],[1,1],[2,3]]};
 const comps=['شركة الحفر','شركة الخدمات','مقاول الصيانة'];
 const st={v:5,lang:'ar',theme:'auto',shiftNames:{ar:['أ','ب'],en:['A','B']},units:{},reports:[],log:[]};
 let k=0,emp=40100;
 Object.entries(pat).forEach(([g,us])=>us.forEach((c,i)=>{const u={group:g,no:String(i+1),maint:false,notes:'',beds:[[null,null,null],[null,null,null]]};c.forEach((n,s)=>{for(let b=0;b<n;b++){u.beds[s][b]={name:names[k%names.length],empId:String(emp+=37),phone:'9'+String(1000000+((k*7919)%8999999)).slice(0,7),company:comps[k%3],since:daysAgo((k*3)%40+1)};k++}});st.units[g+'/'+(i+1)]=u}));
 st.units['13/2'].maint=true;st.units['13/2'].notes='تسرب ماء من السقف';
 st.reports=[{id:'r1',unit:'10/3',text:'المكيف لا يبرد',status:'open',createdAt:daysAgo(2)},{id:'r2',unit:'12/2',text:'الثلاجة تحتاج صيانة',status:'open',createdAt:daysAgo(1)},{id:'r3',unit:'14/1',text:'نقص بطانيتين',status:'done',createdAt:daysAgo(6),doneAt:daysAgo(5)}];
 st.log=[{t:daysAgo(1),type:'rep',text:'12/2 — الثلاجة تحتاج صيانة'},{t:daysAgo(2),type:'rep',text:'10/3 — المكيف لا يبرد'},{t:daysAgo(5),type:'done',text:'14/1 — نقص بطانيتين'}];
 return st;
}
function blank(){return {v:1,lang:'ar',theme:'auto',shiftNames:{ar:['أ','ب'],en:['A','B']},units:{},reports:[],log:[],notify:true,notifyHour:8}}
function load(){try{const r=localStorage.getItem(LS);if(r){const p=JSON.parse(r);if(p&&p.units)return p}}catch(e){}return blank()}
S=load();
function mig(){if(S.notify===undefined)S.notify=true;if(!S.notifyHour)S.notifyHour=8;S.shiftNames=S.shiftNames||{ar:['أ','ب'],en:['A','B']};S.log=S.log||[];S.reports=S.reports||[];const n=nS();Object.values(S.units).forEach(u=>{while(u.beds.length<n)u.beds.push([null,null,null])})}
mig();
const mq=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
function applyTheme(){const d=S.theme==='dark'||(S.theme==='auto'&&mq&&mq.matches);document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.lang=S.lang;document.documentElement.dir=S.lang==='ar'?'rtl':'ltr'}
if(mq){try{mq.addEventListener('change',render)}catch(e){mq.addListener&&mq.addListener(render)}}
let tt;function toast(m){const el=$('#toast');el.innerHTML='<div class="toast">'+esc(m)+'</div>';clearTimeout(tt);tt=setTimeout(()=>el.innerHTML='',2600)}
function modal(title,body){$('#modal').innerHTML='<div class="modal" data-act="mclose-bg"><div class="sheet" role="dialog" aria-modal="true"><h3><span>'+esc(title)+'</span><button class="ibtn" data-act="mclose" aria-label="'+esc(t('cancel'))+'">'+I.close+'</button></h3>'+body+'</div></div>'}
function closeModal(){$('#modal').innerHTML=''}
function stats(){let used=0,cap=0;Object.values(S.units).forEach(u=>{if(!u.maint){cap+=capOf(u);used+=total(u)}});return {free:cap-used,res:used,rep:openReps().length}}
function legend(){return '<div class="legend"><span>'+esc(t('legend'))+'</span><span><i style="background:var(--empty);border:1px dashed var(--emptyLine)"></i>'+esc(t('l0'))+'</span><span><i style="background:#DC2626"></i>'+esc(t('l1'))+'</span><span><i style="background:#F59E0B"></i>'+esc(t('l2'))+'</span><span><i style="background:#15803D"></i>'+esc(t('l3'))+'</span><span><i style="background:#78716C"></i>'+esc(t('maintS'))+'</span></div>'}
function sumHtml(){const st=stats();return (st.rep?'<button class="banner" data-act="nav" data-v="reports">'+I.bell+'<span>'+esc(t('youHave'))+' '+st.rep+' '+esc(t('openReps'))+'</span></button>':'')+'<div class="sum"><div><span>'+esc(t('free'))+'</span><b>'+st.free+'</b></div><div><span>'+esc(t('residents'))+'</span><b>'+st.res+'</b></div><div><span>'+esc(t('openRep'))+'</span><b style="color:'+(st.rep?'var(--brand)':'inherit')+'">'+st.rep+'</b></div></div>'}
function topBar(){const st=stats();return '<div class="top"><div class="logo" aria-hidden="true"><img src="'+LOGO+'" alt=""><div class="strip"><span class="g"></span><span class="c">CAMP</span></div></div><div class="brand"><b>'+esc(t('app'))+'</b><span>'+esc(t('appSub'))+' · '+VERSION+'</span></div><button class="ibtn" data-act="cycleTheme" aria-label="'+esc(t('theme'))+'">'+(S.theme==='dark'?I.moon:S.theme==='light'?I.sun:I.auto)+'</button><button class="ibtn" data-act="toggleLang" aria-label="'+esc(t('lang'))+'">'+(S.lang==='ar'?'EN':'ع')+'</button><button class="ibtn" data-act="nav" data-v="reports" aria-label="'+esc(t('reports'))+'">'+I.bell+(st.rep?'<span class="badge">'+st.rep+'</span>':'')+'</button></div>'}
function subBar(title,extra){return '<div class="bar"><button class="ibtn" data-act="back" aria-label="back">'+I.back+'</button><h1>'+esc(title)+'</h1>'+(extra||'')+'<button class="ibtn" data-act="nav" data-v="home" aria-label="'+esc(t('home'))+'">'+I.home+'</button>'+'</div>'}
/* search (shared) */
function searchHtml(q){
 const ql=q.toLowerCase(),out=[];
 unitIds().forEach(id=>{const u=S.units[id];if(id===q||u.group===q)out.push('<button class="res" data-act="open" data-id="'+esc(id)+'"><span class="box" style="background:'+lvl(u)[0]+';color:'+lvl(u)[1]+'">'+esc(id)+'</span><span class="info"><b>'+esc(t('room')+' '+id)+'</b><span>'+cnt(u).map((n,s)=>esc(shiftName(s))+' '+n+'/3').join(' · ')+'</span></span></button>')});
 unitIds().forEach(id=>S.units[id].beds.forEach((sh,s)=>sh.forEach((p,b)=>{if(!p)return;if(p.empId.includes(q)||p.name.toLowerCase().includes(ql)||(p.phone||'').replace(/\s/g,'').includes(q.replace(/\s/g,''))){out.push('<button class="res" data-act="open" data-id="'+esc(id)+'" data-s="'+s+'"><span class="box">'+esc(id)+'</span><span class="info"><b>'+esc(p.name)+'</b><span>'+esc(p.empId)+' · '+esc(t('shift'))+' '+esc(shiftName(s))+' · '+esc(t('bed'))+' '+(b+1)+'</span></span></button>')}})));
 return out.length?'<div class="results">'+out.slice(0,60).join('')+'</div>':'<div class="empty-msg">'+esc(t('noResults'))+'</div>'
}
function searchBox(){return '<div class="search">'+I.search+'<input id="q" type="search" autocomplete="off" placeholder="'+esc(t('search'))+'" value="'+esc(ui.q)+'" aria-label="'+esc(t('search'))+'"></div>'}
/* ===== concept 1: tasks ===== */
function vTasksHome(){
 const st=stats();
 const tile=(act,v,ic,col,title,sub,badge,wide)=>'<button class="mtile'+(wide?' wide':'')+'" data-act="'+act+'" data-v="'+v+'"><span class="ic" style="background:'+col[0]+';color:'+col[1]+'">'+ic+'</span><span class="txt" style="display:flex;flex-direction:column;gap:4px"><b>'+esc(title)+'</b><span>'+esc(sub)+'</span></span>'+(badge?'<span class="badge" style="top:12px;inset-inline-end:12px">'+badge+'</span>':'')+'</button>';
 return topBar()+sumHtml()+'<div class="menu">'+
  tile('wizard','','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/><path d="M19 3v4M17 5h4"/></svg>',['#15803D','#fff'],t('checkIn'),t('checkInS')+' · '+st.free+' '+t('bedsFree'),0,true)+
  tile('nav','search',I.search,['#E0E7FF','#1E3A8A'],t('findEmp'),t('findEmpS'))+
  tile('nav','rooms',I.rooms,['#FDECEC','#B91C1C'],t('nRooms'),t('roomsS'))+
  tile('nav','reports',I.bell,['#FDF3E3','#7C4A03'],t('nReports'),st.rep+' '+t('repS'),st.rep)+
  tile('nav','export',I.share,['#E7F3EA','#1E5B2C'],t('nExport'),t('expS'))+
  tile('nav','settings',I.gear,['var(--soft)','var(--ink)'],t('nSettings'),t('setS'),0,true)+
 '</div>';
}
function vSearch(){return subBar(t('findEmp'))+searchBox()+'<div id="list">'+(ui.q.trim()?searchHtml(ui.q.trim()):'')+'</div>'}
function vTasksRooms(){
 return subBar(t('nRooms'),'<button class="ibtn" data-act="addRoom" aria-label="'+esc(t('addRoom'))+'">'+I.plus+'</button>')+'<button class=\"btn block\" style=\"margin-bottom:14px\" data-act=\"addRoom\">+ '+esc(t('addRoom'))+'</button>'+(groups().length?'':'<div class=\"empty-msg\">'+esc(t('noRooms'))+'</div>')+groups().map(({g,ids})=>{const s=gStats(ids);return '<div class="sechead">'+esc(t('room'))+' '+esc(g)+' · '+s.u+' '+esc(t('of'))+' '+s.c+'</div><div class="ilist">'+ids.map(unitRow).join('')+'</div>'}).join('')+legend();
}
function vWizard(){
 const w=ui.wz,stp='<div class="steps">'+[1,2,3].map(i=>'<span class="'+(i<=w.step?'on':'')+'"></span>').join('')+'</div>';
 let h=subBar(t('checkIn'))+stp+'<p class="qsub">'+esc(t('stepOf').replace('{a}',w.step))+'</p>';
 if(w.step===1&&!groups().length)return h+'<div class="card" style="text-align:center;padding:24px"><p style="margin:0 0 14px">'+esc(t('noRooms'))+'</p><button class="btn" data-act="addRoom">+ '+esc(t('addRoom'))+'</button></div>';
 if(w.step===1){h+='<p class="qtitle">'+esc(t('step1'))+'</p><div class="choices">'+groups().map(({g,ids})=>{const s=gStats(ids);return '<button class="choice" data-act="wz1" data-g="'+esc(g)+'"'+(s.f?'':' disabled')+'><b>'+esc(t('room'))+' '+esc(g)+'</b><span class="fr" style="'+(s.f?'background:var(--okBg);color:var(--okInk)':'background:var(--soft);color:var(--muted)')+'">'+(s.f?s.f+' '+esc(t('freeN')):esc(t('noFree')))+'</span></button>'}).join('')+'</div>'}
 if(w.step===2){h+='<p class="qtitle">'+esc(t('step2'))+' · '+esc(t('room'))+' '+esc(w.g)+'</p><div class="choices">'+unitIds().filter(id=>S.units[id].group===w.g).map(id=>{const u=S.units[id],f=freeOf(u);return '<button class="choice" data-act="wz2" data-id="'+esc(id)+'"'+(f?'':' disabled')+'><b>'+esc(id)+'</b><span>'+(u.maint?esc(t('maintS')):cnt(u).map((n,s)=>esc(shiftName(s))+' '+n+'/3').join(' · '))+'</span><span class="fr" style="'+(f?'background:var(--okBg);color:var(--okInk)':'background:var(--soft);color:var(--muted)')+'">'+(f?f+' '+esc(t('freeN')):esc(u.maint?t('maintS'):t('noFree')))+'</span></button>'}).join('')+'</div>'}
 if(w.step===3){const u=S.units[w.id];h+='<p class="qtitle">'+esc(t('step3'))+' · '+esc(w.id)+'</p><div class="choices">'+cnt(u).map((n,s)=>'<button class="choice" data-act="wz3" data-s="'+s+'"'+(n<3?'':' disabled')+'><b>'+esc(t('shift'))+' '+esc(shiftName(s))+'</b><span class="fr" style="'+tagStyle(n)+'">'+n+'/3</span><span>'+(3-n)+' '+esc(t('freeN'))+'</span></button>').join('')+'</div>'}
 return h;
}
/* ===== concept 3: lists ===== */
function miniBar(u){if(u.maint)return '<span class="mbar"><i style="background:#78716C"></i></span>';return '<span class="mbar">'+cnt(u).map(n=>'<i style="background:'+(n?OCC[n][0]:'var(--empty)')+'"></i>').join('')+'</span>'}
function unitRow(id){const u=S.units[id],[bg,ink]=lvl(u),r=openReps(id).length;return '<button class="irow" data-act="open" data-id="'+esc(id)+'"><span class="lead" style="background:'+bg+';color:'+ink+'">'+esc(id)+'</span><span class="mid"><b>'+esc(t('room'))+' '+esc(id)+'</b><span class="shp">'+(u.maint?'<span style="background:#78716C;color:#fff">'+esc(t('maintS'))+'</span>':cnt(u).map((n,s)=>'<span style="'+tagStyle(n)+'">'+esc(shiftName(s))+' '+n+'/3</span>').join(''))+'</span></span>'+(r?'<span class="rp" dir="ltr">! '+r+'</span>':'')+'<span class="chev">'+I.chev+'</span></button>'}
/* ===== shared: unit ===== */
function repHtml(r){const open=r.status==='open';return '<div class="rep"><button class="un" data-act="open" data-id="'+esc(r.unit)+'">'+esc(r.unit)+'</button><div class="tx"><b>'+esc(r.text)+'</b><span>'+esc(fmtDate(r.createdAt))+(open?'':' · '+esc(t('doneAt'))+' '+esc(fmtDate(r.doneAt)))+'</span></div>'+(open?'<button class="btn sm ok" data-act="repDone" data-rid="'+esc(r.id)+'">'+esc(t('done'))+'</button>':'<span class="pill" style="background:var(--okBg);color:var(--okInk)">✓</span>')+'</div>'}
function vUnit(){
 const id=ui.unit,u=S.units[id];if(!u){ui.view='home';return views.home()}
 const c=cnt(u),tt=total(u);
 let h=subBar(t('room')+' '+id,'<button class="ibtn" data-act="shareUnit" aria-label="'+esc(t('shareRoom'))+'">'+I.share+'</button>');
 h+='<div class="hero"><div><div class="sub">'+esc(t('room'))+' '+esc(u.group)+' · '+esc(t('total'))+'</div><div class="num">'+tt+'<span style="font-size:20px;color:var(--muted)"> / '+capOf(u)+'</span></div></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">'+c.map((n,s)=>'<span class="pill" style="'+tagStyle(n)+'">'+esc(shiftName(s))+' '+n+'/3</span>').join('')+'</div></div>';
 h+='<div class="seg"><button class="'+(u.maint?'':'on')+'" data-act="maint" data-on="0">'+esc(t('available'))+'</button><button class="'+(u.maint?'on':'')+'" data-act="maint" data-on="1">'+esc(t('maint'))+'</button></div>';
 c.forEach((n,s)=>{
  h+='<div class="shift" id="sh'+s+'"><div class="shead"><span class="tag" style="'+tagStyle(n)+'">'+esc(shiftName(s))+'</span><b>'+esc(t('shift'))+' '+esc(shiftName(s))+'</b><span style="color:var(--muted);font-size:13px">'+n+'/3</span></div><div class="slots">';
  u.beds[s].forEach((p,b)=>{
   if(p)h+='<div class="slot"><span class="bed">'+esc(t('bed'))+' '+(b+1)+'</span><span class="nm">'+esc(p.name)+'</span><div class="meta"><span>'+esc(t('empId'))+' <b>'+esc(p.empId)+'</b></span>'+(p.phone?'<span>'+esc(t('phone'))+' <b dir="ltr">'+esc(p.phone)+'</b></span>':'')+(p.company?'<span>'+esc(t('company'))+' <b>'+esc(p.company)+'</b></span>':'')+'<span>'+esc(t('since'))+' <b>'+esc(fmtDate(p.since))+'</b></span></div><div class="acts">'+(p.phone?'<a href="tel:'+esc(p.phone.replace(/\s/g,''))+'">'+esc(t('call'))+'</a>':'<button disabled style="opacity:.4">'+esc(t('call'))+'</button>')+'<button data-act="edit" data-s="'+s+'" data-b="'+b+'">'+esc(t('edit'))+'</button><button data-act="move" data-s="'+s+'" data-b="'+b+'">'+esc(t('move'))+'</button><button class="bad" data-act="out" data-s="'+s+'" data-b="'+b+'">'+esc(t('out'))+'</button></div></div>';
   else h+='<button class="slot add" data-act="edit" data-s="'+s+'" data-b="'+b+'">+ '+esc(t('addIn'))+' '+esc(shiftName(s))+' · '+esc(t('bed'))+' '+(b+1)+'</button>';
  });
  h+='</div></div>';
 });
 const reps=S.reports.filter(r=>r.unit===id).sort((a,b)=>(a.status===b.status?b.createdAt.localeCompare(a.createdAt):a.status==='open'?-1:1));
 h+='<div class="card"><h2>'+esc(t('reports'))+'</h2>'+reps.slice(0,8).map(repHtml).join('')+'<label class="f" style="margin:10px 0 8px">'+esc(t('newReport'))+'<textarea id="repText" placeholder="'+esc(t('reportPh'))+'"></textarea></label><button class="btn block" data-act="addReport">'+esc(t('addReport'))+'</button></div>';
 h+='<div class="card"><label class="f" style="margin:0">'+esc(t('notes'))+'<textarea id="notes" placeholder="'+esc(t('notesPh'))+'">'+esc(u.notes)+'</textarea></label></div>';
 h+='<button class="btn danger block" data-act="delUnit">'+esc(t('deleteUnit'))+'</button>';
 return h;
}
function vReports(){
 let h=subBar(t('reports'))+'<div class="seg">'+[['open','openT'],['done','doneT'],['log','logT']].map(([k,l])=>'<button class="'+(ui.repTab===k?'on':'')+'" data-act="repTab" data-k="'+k+'">'+esc(t(l))+(k==='open'&&openReps().length?' ('+openReps().length+')':'')+'</button>').join('')+'</div><div class="card">';
 if(ui.repTab==='log'){const col={in:'#15803D',out:'#DC2626',move:'#2563EB',rep:'#C8312D',done:'#15803D',maint:'#78716C',open:'#15803D'};h+=S.log.length?S.log.slice(0,100).map(l=>'<div class="log"><span class="d" style="background:'+(col[l.type]||'#999')+'"></span><span style="flex:1">'+esc(t({in:'lIn',out:'lOut',move:'lMove',rep:'lRep',done:'lDone',maint:'lMaint',open:'lOpen'}[l.type]||''))+' · '+esc(l.text)+'</span><span class="tm">'+esc(fmtDate(l.t))+'</span></div>').join(''):'<div class="empty-msg">—</div>'}
 else{const list=S.reports.filter(r=>r.status===ui.repTab).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));h+=list.length?list.map(repHtml).join(''):'<div class="empty-msg">'+esc(t('noOpen'))+'</div>'}
 return h+'</div>';
}
function expIds(){const e=ui.exp;if(e.scope==='all')return unitIds();if(e.scope==='group')return unitIds().filter(id=>S.units[id].group===e.group);return unitIds().filter(id=>e.sel[id])}
function vExport(){
 const e=ui.exp,gs=groups();if(!e.group&&gs.length)e.group=gs[0].g;
 let h=subBar(t('nExport'))+'<div class="card"><h2>1 · '+esc(t('which'))+'</h2><div class="seg">'+[['all','all'],['group','oneRoom'],['pick','pickSelf']].map(([k,l])=>'<button class="'+(e.scope===k?'on':'')+'" data-act="expScope" data-k="'+k+'">'+esc(t(l))+'</button>').join('')+'</div>';
 if(e.scope==='group')h+='<select id="expGroup" aria-label="'+esc(t('room'))+'">'+gs.map(x=>'<option value="'+esc(x.g)+'"'+(x.g===e.group?' selected':'')+'>'+esc(t('room'))+' '+esc(x.g)+'</option>').join('')+'</select>';
 if(e.scope==='pick')h+='<div class="pick">'+unitIds().map(id=>'<button class="'+(e.sel[id]?'on':'')+'" data-act="expToggle" data-id="'+esc(id)+'" aria-pressed="'+(e.sel[id]?'true':'false')+'">'+esc(id)+'</button>').join('')+'</div>';
 h+='</div><div class="card"><h2>2 · '+esc(t('format'))+'</h2><div class="fmts">'+[['xlsx','excel','excelH'],['pdf','pdf','pdfH'],['img','img','imgH']].map(([k,l,hh])=>'<button class="'+(e.fmt===k?'on':'')+'" data-act="expFmt" data-k="'+k+'"><b>'+esc(t(l))+'</b><span>'+esc(t(hh))+'</span></button>').join('')+'</div>';
 if(e.fmt==='xlsx')h+='<div class="seg" style="margin:10px 0 0">'+[['sheet','sheetPer'],['one','oneTable']].map(([k,l])=>'<button class="'+(e.layout===k?'on':'')+'" data-act="expLayout" data-k="'+k+'">'+esc(t(l))+'</button>').join('')+'</div>';
 if(e.fmt==='img')h+='<div class="seg" style="margin:10px 0 6px">'+[['png','pngEach'],['zip','zipAll']].map(([k,l])=>'<button class="'+(e.img===k?'on':'')+'" data-act="expImg" data-k="'+k+'">'+esc(t(l))+'</button>').join('')+'</div><p style="margin:0;font-size:12px;color:var(--muted);line-height:1.7">'+esc(t(e.img==='png'?'pngNote':'zipNote'))+'</p>';
 h+='</div><button class="btn block" data-act="expRun">'+esc(t('exportN'))+' '+expIds().length+' '+esc(t('rooms_'))+' — '+esc(e.fmt==='img'?(e.img==='png'?'PNG':'ZIP'):t({xlsx:'excel',pdf:'pdf'}[e.fmt]))+'</button>';
 return h;
}
function vSettings(){
 const sn=S.shiftNames[S.lang]||DEFN[S.lang].slice(0,nS());
 return subBar(t('nSettings'))+
 '<div class="card"><h2>'+esc(t('lang'))+'</h2><div class="seg" style="margin:0"><button class="'+(S.lang==='ar'?'on':'')+'" data-act="lang" data-k="ar">العربية</button><button class="'+(S.lang==='en'?'on':'')+'" data-act="lang" data-k="en">English</button></div></div>'+
 '<div class="card"><h2>'+esc(t('theme'))+'</h2><div class="seg" style="margin:0">'+[['auto','tAuto'],['light','tLight'],['dark','tDark']].map(([k,l])=>'<button class="'+(S.theme===k?'on':'')+'" data-act="theme" data-k="'+k+'">'+esc(t(l))+'</button>').join('')+'</div></div>'+
 '<div class="card"><h2>'+esc(t('shiftNames'))+'</h2>'+sn.map((v,i)=>'<div class="shrow"><span class="n">'+esc(t('shiftN'))+' '+(i+1)+'</span><input class="inp" id="sn'+i+'" value="'+esc(v)+'" aria-label="'+esc(t('shiftN'))+' '+(i+1)+'" maxlength="12"></div>').join('')+'<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px"><button class="btn sm" data-act="saveShifts">'+esc(t('save'))+'</button>'+(sn.length<6?'<button class="btn sm ghost" data-act="addShift">+ '+esc(t('addShift'))+'</button>':'')+(sn.length>1?'<button class="btn sm danger" data-act="rmShift">'+esc(t('removeShift'))+'</button>':'')+'</div></div>'+
 notifCard()+'<div class="card"><h2>'+esc(t('backup'))+'</h2><p style="margin:0 0 10px;font-size:13px;color:var(--muted);line-height:1.7">'+esc(t('backupNote'))+'</p><div style="display:flex;flex-wrap:wrap;gap:8px"><button class="btn sm" data-act="backup">'+esc(t('dlBackup'))+'</button><label class="btn sm ghost" style="display:flex;align-items:center;cursor:pointer">'+esc(t('restore'))+'<input id="restore" type="file" accept=".json,application/json" style="display:none"></label><button class="btn sm ghost" data-act="demo">'+esc(t('demo'))+'</button><button class="btn sm danger" data-act="reset">'+esc(t('wipe'))+'</button></div></div><p style="text-align:center;font-size:12px;color:var(--muted)">CAMP SAS · '+VERSION+'</p>';
}
const views={
 home:vTasksHome,
 search:vSearch,rooms:vTasksRooms,wizard:vWizard,unit:vUnit,reports:vReports,export:vExport,settings:vSettings
};
function render(){
 applyTheme();
 const v=ui.view;
 $('#app').innerHTML=(views[v]||views.home)();
 document.title=S.lang==='ar'?'كامب ساس · CAMP SAS':'CAMP SAS';
}
function go(v,extra){Object.assign(ui,{view:v},extra||{});render();window.scrollTo(0,0)}
function commit(msg){persist();render();if(msg)toast(msg)}
function backTarget(){if(ui.view==='unit')return ui.from||'home';if(ui.view==='wizard'&&ui.wz.step>1){ui.wz.step--;return 'wizard'}return 'home'}
/* person form */
function findEmp(emp){for(const id of unitIds()){const u=S.units[id];for(let s=0;s<u.beds.length;s++)for(let b=0;b<3;b++){const p=u.beds[s][b];if(p&&p.empId===emp)return {id,s,b,p}}}return null}
function personForm(s,b,dupe){
 const u=S.units[ui.unit],p=u.beds[s][b]||{},v=dupe?dupe.vals:p;
 let body='<label class="f">'+esc(t('name'))+'<input class="inp" id="pName" value="'+esc(v.name)+'" autocomplete="off"></label><div class="row2"><label class="f">'+esc(t('empId'))+'<input class="inp" id="pEmp" inputmode="numeric" value="'+esc(v.empId)+'" autocomplete="off"></label><label class="f">'+esc(t('phone'))+'<input class="inp" id="pPhone" type="tel" dir="ltr" value="'+esc(v.phone)+'" autocomplete="off"></label></div><label class="f">'+esc(t('company'))+'<input class="inp" id="pComp" value="'+esc(v.company)+'" autocomplete="off"></label>';
 if(dupe)body+='<div class="warn"><span>'+esc(t('dupe'))+' <b>'+esc(dupe.hit.id)+'</b> — '+esc(dupe.hit.p.name)+' ('+esc(t('shift'))+' '+esc(shiftName(dupe.hit.s))+')</span><button class="btn sm" data-act="moveHere" data-s="'+s+'" data-b="'+b+'">'+esc(t('moveHere'))+'</button></div>';
 body+='<button class="btn block" data-act="savePerson" data-s="'+s+'" data-b="'+b+'">'+esc(t('save'))+'</button>';
 modal(t('room')+' '+ui.unit+' · '+t('shift')+' '+shiftName(s)+' · '+t('bed')+' '+(b+1),body);
}
function formVals(){return {name:$('#pName').value.trim(),empId:$('#pEmp').value.trim(),phone:$('#pPhone').value.trim(),company:$('#pComp').value.trim()}}
function afterSave(){if(ui.view==='wizard'){ui.from='home';ui.view='unit';ui.wz={step:1,g:null,id:null}}closeModal();commit(t('saved'))}
function savePerson(s,b){
 const vals=formVals();if(!vals.name||!vals.empId){toast(t('required'));return}
 const u=S.units[ui.unit],cur=u.beds[s][b],hit=findEmp(vals.empId);
 if(hit&&!(hit.id===ui.unit&&hit.s===s&&hit.b===b)){personForm(s,b,{vals,hit});return}
 u.beds[s][b]=Object.assign({},cur||{since:now()},vals);
 if(!cur)log('in',vals.name+' → '+ui.unit+' ('+shiftName(s)+')');
 afterSave();
}
function moveHere(s,b){
 const vals=formVals(),hit=findEmp(vals.empId);if(!hit)return;
 S.units[hit.id].beds[hit.s][hit.b]=null;
 const p=Object.assign({},hit.p);['name','phone','company'].forEach(k=>{if(vals[k])p[k]=vals[k]});
 S.units[ui.unit].beds[s][b]=p;log('move',p.name+': '+hit.id+' '+t('movedTo')+' '+ui.unit);afterSave();
}
function moveForm(s,b){
 const p=S.units[ui.unit].beds[s][b];
 const opts=unitIds().filter(id=>!S.units[id].maint).map(id=>'<option value="'+esc(id)+'"'+(id===ui.unit?' selected':'')+'>'+esc(id)+' ('+cnt(S.units[id]).map((n,i)=>shiftName(i)+' '+n+'/3').join(' · ')+')</option>').join('');
 ui.mvShift=s;
 modal(t('moveTo')+' — '+p.name,'<label class="f">'+esc(t('target'))+'<select id="mvU">'+opts+'</select></label><div class="seg" id="mvS" style="flex-wrap:wrap">'+S.units[ui.unit].beds.map((_,i)=>'<button class="'+(i===s?'on':'')+'" data-act="mvShift" data-k="'+i+'">'+esc(t('shift'))+' '+esc(shiftName(i))+'</button>').join('')+'</div><button class="btn block" data-act="doMove" data-s="'+s+'" data-b="'+b+'">'+esc(t('move'))+'</button>');
}
function doMove(s,b){
 const to=$('#mvU').value,ts=ui.mvShift,u=S.units[ui.unit],p=u.beds[s][b],tu=S.units[to];
 const fb=(tu.beds[ts]||[]).findIndex(x=>!x);if(fb<0){toast(t('full'));return}
 u.beds[s][b]=null;tu.beds[ts][fb]=p;log('move',p.name+': '+ui.unit+' '+t('movedTo')+' '+to+' ('+shiftName(ts)+')');closeModal();commit(t('saved'));
}
/* add room */
function addRoomForm(g){
 ui.addMode=g?'one':'whole';
 const nextNo=g?String(Math.max(0,...unitIds().filter(id=>S.units[id].group===g).map(id=>parseInt(S.units[id].no)||0))+1):'';
 modal(t('addRoom'),'<div class="seg" id="amSeg">'+addSeg()+'</div><div class="row2"><label class="f">'+esc(t('roomNo'))+'<input class="inp" id="aG" inputmode="numeric" value="'+esc(g||'')+'" autocomplete="off"></label><label class="f" id="aSecL">'+esc(ui.addMode==='whole'?t('unitsN'):t('unitNo'))+'<input class="inp" id="aN" inputmode="numeric" value="'+esc(ui.addMode==='whole'?'3':nextNo)+'"></label></div><div id="aPrev" class="pick" style="margin-bottom:8px"></div><p style="font-size:13px;color:var(--muted);margin:0 0 12px">'+esc(t('beds6').replace('{n}',nS()))+'</p><button class="btn block" data-act="saveRoom">'+esc(t('save'))+'</button>');
 addPrev();
}
function addSeg(){return [['whole','wholeRoom'],['one','oneUnit']].map(([k,l])=>'<button class="'+(ui.addMode===k?'on':'')+'" data-act="addMode" data-k="'+k+'">'+esc(t(l))+'</button>').join('')}
function addIdsPreview(){const g=(($('#aG')||{}).value||'').trim(),n=parseInt(($('#aN')||{}).value)||0;if(!g)return [];if(ui.addMode==='whole')return Array.from({length:Math.min(Math.max(n,0),12)},(_,i)=>g+'/'+(i+1));return n?[g+'/'+n]:[]}
function addPrev(){const el=$('#aPrev');if(!el)return;el.innerHTML=addIdsPreview().map(id=>'<button class="'+(S.units[id]?'':'on')+'" tabindex="-1" style="pointer-events:none">'+esc(id)+(S.units[id]?' ✕':'')+'</button>').join('')}
function saveRoom(){const ids=addIdsPreview();if(!ids.length)return;const ex=ids.filter(id=>S.units[id]);if(ex.length===ids.length){toast(ex.join('، ')+' '+t('exists'));return}ids.forEach(id=>{if(!S.units[id]){const [g,n]=id.split('/');S.units[id]=newUnit(g,n)}});closeModal();commit(t('saved')+(ex.length?' ('+ex.join('، ')+' '+t('exists')+')':''))}
/* export */
function rowsFor(ids){const H=[t('room'),t('shift'),t('bed'),t('name'),t('empId'),t('phone'),t('company'),t('since')];const rows=[];ids.forEach(id=>{S.units[id].beds.forEach((sh,s)=>sh.forEach((p,b)=>rows.push([id,shiftName(s),b+1,p?p.name:t('vacant'),p?p.empId:'',p?p.phone:'',p?p.company||'':'',p?fmtDate(p.since):''])))});return {H,rows}}
function loadScript(src){return new Promise((res,rej)=>{if(document.querySelector('script[src="'+src+'"]'))return res();const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
function blobToDataURL(b){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(b)})}
/* مشاركة/حفظ ملف أو أكثر: في الجوال عبر قائمة المشاركة، وفي المتصفح عبر المشاركة أو التنزيل */
async function shareFiles(items){
 items=items.map(x=>({name:x.name.replace(/[\/:*?"<>|]/g,'-'),blob:x.blob instanceof Blob?x.blob:new Blob([x.blob])}));
 if(isNative){await nativeReady;const fs=NP('Filesystem'),sh=NP('Share');if(fs&&sh){try{const uris=[];for(const x of items){const b64=(await blobToDataURL(x.blob)).split(',')[1];const w=await fs.writeFile({path:x.name,data:b64,directory:'CACHE'});uris.push(w.uri)}await sh.share({title:items[0].name,files:uris});return true}catch(e){if(/cancel/i.test(String(e&&(e.message||e))))return false;toast(t('shareFail'));return false}}}
 try{if(window.claude&&typeof claude.use==='function'){const dl=await claude.use('downloads');if(dl){for(const x of items){try{await dl.save({filename:x.name,data:x.blob})}catch(e){if(e&&e.code==='declined')return false}}return true}}}catch(e){}
 const files=items.map(x=>new File([x.blob],x.name,{type:x.blob.type||'application/octet-stream'}));
 if(navigator.canShare&&navigator.canShare({files})){try{await navigator.share({files});return true}catch(e){if(e.name==='AbortError')return false}}
 for(const x of items){try{const url=URL.createObjectURL(x.blob);const a=document.createElement('a');a.href=url;a.download=x.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000)}catch(e){toast(t('shareFail'));return false}await new Promise(r=>setTimeout(r,350))}
 return true;
}
async function saveFile(filename,data,quiet){const ok=await shareFiles([{name:filename,blob:data instanceof Blob?data:new Blob([data],{type:filename.endsWith('.json')?'application/json':'application/octet-stream'})}]);if(ok&&!quiet)toast(t('exported'));return ok}
function cardHtml(id){
 const u=S.units[id],c=cnt(u),rtl=S.lang==='ar';
 let h='<div dir="'+(rtl?'rtl':'ltr')+'" style="padding:36px;display:flex;flex-direction:column;gap:20px;font-family:Almarai,sans-serif"><div style="display:flex;align-items:center;gap:16px;border-bottom:4px solid #D33834;padding-bottom:14px"><img src="'+LOGO+'" style="height:52px"><div style="flex:1"><div style="font-weight:800;font-size:28px">'+esc(t('room'))+' '+esc(id)+'</div><div style="font-size:15px;color:#57534E;margin-top:4px">CAMP SAS · '+esc(t('app'))+' · '+esc(fmtDate(now()))+'</div></div><div style="font-weight:800;font-size:32px">'+total(u)+'/'+capOf(u)+'</div></div>';
 c.forEach((n,s)=>{h+='<div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="min-width:36px;height:36px;padding:0 10px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;'+(n?'background:'+OCC[n][0]+';color:'+OCC[n][1]:'background:#ECE8E1;color:#44403C')+'">'+esc(shiftName(s))+'</span><span style="font-weight:700;font-size:18px">'+esc(t('shift'))+' '+esc(shiftName(s))+' — '+n+'/3</span></div><table style="width:100%;border-collapse:collapse;font-size:17px;table-layout:fixed"><colgroup><col style="width:9%"><col style="width:31%"><col style="width:18%"><col style="width:20%"><col style="width:22%"></colgroup><tr style="background:#F3EFEA">'+[[t('bed'),'center'],[t('name'),'start'],[t('empId'),'center'],[t('phone'),'center'],[t('company'),'start']].map(x=>'<th style="padding:12px 10px;text-align:'+x[1]+';font-weight:700">'+esc(x[0])+'</th>').join('')+'</tr>'+u.beds[s].map((p,b)=>'<tr style="border-bottom:1px solid #E6E1DA"><td style="padding:12px 10px;text-align:center">'+(b+1)+'</td><td style="padding:12px 10px;font-weight:700;text-align:start;'+(p?'':'color:#9A948C;font-weight:400')+'">'+esc(p?p.name:t('vacant'))+'</td><td style="padding:12px 10px;text-align:center"><bdi dir="ltr">'+esc(p?p.empId:'—')+'</bdi></td><td style="padding:12px 10px;text-align:center"><bdi dir="ltr">'+esc(p&&p.phone?p.phone:'—')+'</bdi></td><td style="padding:12px 10px;text-align:start">'+esc(p&&p.company?p.company:'')+'</td></tr>').join('')+'</table></div>'});
 const reps=openReps(id);if(reps.length)h+='<div style="background:#FDECEC;color:#991B1B;border-radius:12px;padding:12px 14px;font-size:16px"><b>'+esc(t('openRep'))+':</b> '+reps.map(r=>esc(r.text)).join(' · ')+'</div>';
 return h+'</div>';
}
async function snap(id){
 const el=$('#render');el.innerHTML=cardHtml(id);
 try{if(document.fonts){await document.fonts.load('400 16px Almarai');await document.fonts.load('700 16px Almarai');await document.fonts.load('800 16px Almarai');await document.fonts.ready}}catch(e){}
 await new Promise(r=>setTimeout(r,80));
 const w=el.offsetWidth,h=el.offsetHeight,scale=Math.max(2,Math.min(4,Math.sqrt(15500000/(w*h))));
 return html2canvas(el,{scale,backgroundColor:'#ffffff',logging:false,useCORS:true,onclone:d=>{const r=d.getElementById('render');if(r)r.style.left='0'}});
}
function toBlob(cv){return new Promise(r=>cv.toBlob(r,'image/png'))}
async function runExport(){
 const ids=expIds();if(!ids.length){toast(t('noSel'));return}
 const fmt=ui.exp.fmt,stamp=new Date().toISOString().slice(0,10);
 const base='CAMP-SAS_'+(ids.length===1?ids[0].replace('/','-'):stamp);
 toast(t('preparing'));
 try{
  if(fmt==='xlsx'){
   await loadScript('lib/xlsx.bundle.js');const styled=true
   const F='Almarai',bd={top:{style:'thin',color:{rgb:'D6D0C8'}},bottom:{style:'thin',color:{rgb:'D6D0C8'}},left:{style:'thin',color:{rgb:'D6D0C8'}},right:{style:'thin',color:{rgb:'D6D0C8'}}};
   const rtl=S.lang==='ar',al={horizontal:rtl?'right':'left',vertical:'center',readingOrder:rtl?2:1},ctr={horizontal:'center',vertical:'center'};
   const mk=(title,ids2)=>{const {H,rows}=rowsFor(ids2);const aoa=title?[[title],H,...rows]:[H,...rows];const ws=XLSX.utils.aoa_to_sheet(aoa);ws['!cols']=[{wch:10},{wch:8},{wch:7},{wch:26},{wch:15},{wch:14},{wch:18},{wch:12}];
    if(styled){const hr=title?1:0;Object.keys(ws).forEach(k=>{if(k[0]==='!')return;const r=XLSX.utils.decode_cell(k).r;const cell=ws[k];if(title&&r===0)cell.s={font:{name:F,sz:16,bold:true,color:{rgb:'A12D2E'}},alignment:al};else if(r===hr){const c=XLSX.utils.decode_cell(k).c;cell.s={font:{name:F,sz:12,bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'C8312D'}},alignment:[0,1,2,4,5,7].includes(c)?ctr:al,border:bd}}else{const c=XLSX.utils.decode_cell(k).c;const vac=rows[r-hr-1]&&!rows[r-hr-1][4];cell.s={font:{name:F,sz:12,bold:c===3&&!vac,color:{rgb:vac?'9A948C':'1F2937'}},alignment:[0,1,2,4,5,7].includes(c)?ctr:al,border:bd,fill:(r-hr)%2===0?{fgColor:{rgb:'F7F4F0'}}:undefined};if(c===4||c===5){cell.t='s';cell.v=String(cell.v)}}});if(title)ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:7}}];ws['!rows']=[{hpt:title?28:22}]}
    return ws};
   const wb=XLSX.utils.book_new();
   if(ui.exp.layout==='sheet')ids.forEach(id=>XLSX.utils.book_append_sheet(wb,mk('CAMP SAS — '+t('room')+' '+id,[id]),id.replace('/','-').slice(0,31)));
   else XLSX.utils.book_append_sheet(wb,mk('CAMP SAS — '+fmtDate(now()),ids),'Rooms');
   wb.Workbook={Views:[{RTL:rtl}]};
   const buf=XLSX.write(wb,{bookType:'xlsx',type:'array'});
   await saveFile(base+'.xlsx',new Blob([buf]));
  }else{
   await loadScript('lib/html2canvas.min.js');
   if(fmt==='pdf'){
    await loadScript('lib/jspdf.umd.min.js');
    const pdf=new jspdf.jsPDF({unit:'mm',format:'a4',compress:true});
    for(let i=0;i<ids.length;i++){const cv=await snap(ids[i]);let w=190,h=cv.height*w/cv.width;if(h>277){w=w*277/h;h=277}if(i)pdf.addPage();pdf.addImage(cv,'PNG',(210-w)/2,10,w,h,undefined,'FAST')}
    await saveFile(base+'.pdf',pdf.output('blob'));
   }else if(ui.exp.img==='zip'){
    await loadScript('lib/jszip.min.js');
    const zip=new JSZip();for(const id of ids){const cv=await snap(id);zip.file('CAMP-SAS_'+id.replace('/','-')+'.png',await toBlob(cv))}
    await saveFile(base+'_images.zip',await zip.generateAsync({type:'blob'}));
   }else{
    const items=[];for(const id of ids){const cv=await snap(id);items.push({name:'CAMP-SAS_'+id.replace('/','-')+'.png',blob:await toBlob(cv)})}
    if(await shareFiles(items))toast(t('exported')+' ('+items.length+')');
   }
  }
 }catch(e){toast('Error: '+(e&&e.message||e))}
 finally{$('#render').innerHTML=''}
}
/* events */
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-act]');if(!el)return;
 const a=el.dataset.act,d=el.dataset;
 if(a==='mclose-bg'&&e.target!==el)return;
 switch(a){
  case'nav':ui.q='';go(d.v);break;
  case'back':{const v=backTarget();go(v);break}
  case'open':{closeModal();const from=ui.view==='unit'?ui.from:ui.view;go('unit',{unit:d.id,from});if(d.s!==undefined){const el2=document.getElementById('sh'+d.s);if(el2)el2.scrollIntoView({block:'start'})}break}
  case'group':go('group',{group:d.g});break;
  case'gtab':ui.group=d.g;render();break;
  case'wizard':ui.wz={step:1,g:null,id:null};go('wizard');break;
  case'wz1':ui.wz.g=d.g;ui.wz.step=2;go('wizard');break;
  case'wz2':ui.wz.id=d.id;ui.wz.step=3;go('wizard');break;
  case'wz3':{const s=+d.s,u=S.units[ui.wz.id],b=u.beds[s].findIndex(x=>!x);if(b<0){toast(t('full'));break}ui.unit=ui.wz.id;personForm(s,b);break}
  case'cycleTheme':S.theme={auto:'light',light:'dark',dark:'auto'}[S.theme]||'auto';commit(t({auto:'tAuto',light:'tLight',dark:'tDark'}[S.theme]));break;
  case'toggleLang':S.lang=S.lang==='ar'?'en':'ar';commit();break;
  case'lang':S.lang=d.k;commit();break;
  case'theme':S.theme=d.k;commit();break;
  case'mclose':case'mclose-bg':closeModal();break;
  case'edit':personForm(+d.s,+d.b);break;
  case'savePerson':savePerson(+d.s,+d.b);break;
  case'moveHere':moveHere(+d.s,+d.b);break;
  case'move':moveForm(+d.s,+d.b);break;
  case'mvShift':ui.mvShift=+d.k;$('#mvS').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===ui.mvShift));break;
  case'doMove':doMove(+d.s,+d.b);break;
  case'out':{const p=S.units[ui.unit].beds[+d.s][+d.b];modal(t('confirmOut'),'<p style="margin:0 0 16px;font-size:16px">'+esc(p.name)+' — '+esc(ui.unit)+' · '+esc(t('shift'))+' '+esc(shiftName(+d.s))+'</p><div class="row2"><button class="btn ghost" data-act="mclose">'+esc(t('cancel'))+'</button><button class="btn danger" data-act="doOut" data-s="'+d.s+'" data-b="'+d.b+'">'+esc(t('yes'))+'</button></div>');break}
  case'doOut':{const u=S.units[ui.unit],p=u.beds[+d.s][+d.b];u.beds[+d.s][+d.b]=null;log('out',p.name+' ← '+ui.unit);closeModal();commit(t('saved'));break}
  case'maint':{const u=S.units[ui.unit],on=d.on==='1';if(u.maint!==on){u.maint=on;log(on?'maint':'open',ui.unit);commit()}break}
  case'addReport':{const tx=$('#repText').value.trim();if(!tx){$('#repText').focus();return}S.reports.push({id:'r'+Date.now(),unit:ui.unit,text:tx,status:'open',createdAt:now()});log('rep',ui.unit+' — '+tx);commit(t('saved'));if(isNative&&S.notify)ensureNotifyPermission();break}
  case'repDone':{if(markDone(d.rid))commit(t('done')+' ✓');break}
  case'repTab':ui.repTab=d.k;render();break;
  case'delUnit':{const u=S.units[ui.unit];if(total(u)){toast(t('deleteOnlyEmpty'));return}delete S.units[ui.unit];S.reports=S.reports.filter(r=>r.unit!==ui.unit);ui.view=ui.from==='unit'?'home':(ui.from||'home');commit(t('deleted'));break}
  case'shareUnit':ui.exp.scope='pick';ui.exp.sel={[ui.unit]:true};ui.exp.fmt='img';go('export');break;
  case'addRoom':addRoomForm();break;
  case'addUnitTo':addRoomForm(d.g);break;
  case'addMode':ui.addMode=d.k;$('#amSeg').innerHTML=addSeg();$('#aSecL').firstChild.textContent=ui.addMode==='whole'?t('unitsN'):t('unitNo');$('#aN').value=ui.addMode==='whole'?'3':'1';addPrev();break;
  case'saveRoom':saveRoom();break;
  case'expScope':ui.exp.scope=d.k;render();break;
  case'expToggle':ui.exp.sel[d.id]=!ui.exp.sel[d.id];if(!ui.exp.sel[d.id])delete ui.exp.sel[d.id];render();break;
  case'expFmt':ui.exp.fmt=d.k;render();break;
  case'expLayout':ui.exp.layout=d.k;render();break;
  case'expImg':ui.exp.img=d.k;render();break;
  case'expRun':runExport();break;
  case'saveShifts':{const n=nS(),v=[];for(let i=0;i<n;i++){const x=$('#sn'+i).value.trim();if(!x){$('#sn'+i).focus();return}v.push(x)}S.shiftNames[S.lang]=v;commit(t('saved'));break}
  case'addShift':{const n=nS();if(n>=6)break;['ar','en'].forEach(l=>{S.shiftNames[l]=(S.shiftNames[l]||DEFN[l].slice(0,n)).concat([DEFN[l][n]])});Object.values(S.units).forEach(u=>{while(u.beds.length<n+1)u.beds.push([null,null,null])});commit(t('shiftAdded'));break}
  case'rmShift':{const n=nS();if(n<=1)break;if(Object.values(S.units).some(u=>(u.beds[n-1]||[]).some(Boolean))){toast(t('cantRemove'));break}['ar','en'].forEach(l=>{S.shiftNames[l]=(S.shiftNames[l]||DEFN[l]).slice(0,n-1)});Object.values(S.units).forEach(u=>{u.beds=u.beds.slice(0,n-1)});commit(t('deleted'));break}
  case'backup':saveFile('CAMP-SAS_backup_'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(S,null,1));break;
  case'reset':modal(t('wipe'),'<p style="margin:0 0 16px">'+esc(t('resetQ'))+'</p><div class="row2"><button class="btn ghost" data-act="mclose">'+esc(t('cancel'))+'</button><button class="btn danger" data-act="doReset">'+esc(t('resetYes'))+'</button></div>');break;
  case'doReset':{const l=S.lang,th=S.theme,sn=S.shiftNames;S=blank();S.lang=l;S.theme=th;S.shiftNames=sn;mig();closeModal();if(isNative){nativeReady.then(()=>{const fs=NP('Filesystem');if(fs)fs.deleteFile({path:'campsas-data.json',directory:'DATA'}).catch(()=>{})})}persist();go('home');break}
  case'demo':{if(Object.keys(S.units).length){toast(t('demoNeedsEmpty'));break}const l=S.lang,th=S.theme;S=sample();S.lang=l;S.theme=th;mig();persist();go('home');toast(t('demoLoaded'));break}
  case'notifyOn':S.notify=d.k==='1';if(S.notify)ensureNotifyPermission().then(ok=>{if(!ok)toast(t('allowNotif'))});commit();break;
  case'notifyHour':S.notifyHour=+d.k;commit(t('saved'));break;
  case'testNotif':testNotification();break;
 }
});
document.addEventListener('input',e=>{
 if(e.target.id==='q'){ui.q=e.target.value;const L=$('#list');if(!L)return;if(ui.view==='search'){L.innerHTML=ui.q.trim()?searchHtml(ui.q.trim()):''}}
 if(e.target.id==='aG'||e.target.id==='aN')addPrev();
});
document.addEventListener('change',e=>{
 if(e.target.id==='notes'){const u=S.units[ui.unit];if(u){u.notes=e.target.value;persist();toast(t('saved'))}}
 if(e.target.id==='expGroup'){ui.exp.group=e.target.value;render()}
 if(e.target.id==='restore'&&e.target.files[0]){const fr=new FileReader();fr.onload=()=>{try{const p=JSON.parse(fr.result);if(!p||!p.units||!p.reports)throw 0;S=p;S.log=S.log||[];S.shiftNames=S.shiftNames||{ar:['أ','ب'],en:['A','B']};commit(t('restored'))}catch(x){toast(t('badFile'))}};fr.readAsText(e.target.files[0])}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal').innerHTML)closeModal()});
function markDone(id){const r=S.reports.find(x=>x.id===id);if(!r||r.status!=='open')return false;r.status='done';r.doneAt=now();log('done',r.unit+' — '+r.text);return true}
function notifCard(){
 if(!isNative)return '<div class="card"><h2>'+esc(t('notifs'))+'</h2><p style="margin:0;font-size:13px;color:var(--muted);line-height:1.7">'+esc(t('notifWeb'))+'</p></div>';
 const hours=[6,7,8,9,10,12,14,16,18,20];
 return '<div class="card"><h2>'+esc(t('notifs'))+'</h2><p style="margin:0 0 10px;font-size:13px;color:var(--muted);line-height:1.7">'+esc(t('notifNote'))+'</p><div class="seg"><button class="'+(S.notify?'on':'')+'" data-act="notifyOn" data-k="1">'+esc(t('on'))+'</button><button class="'+(S.notify?'':'on')+'" data-act="notifyOn" data-k="0">'+esc(t('off'))+'</button></div>'+(S.notify?'<p style="margin:0 0 8px;font-size:13px;color:var(--muted)">'+esc(t('dailyAt'))+'</p><div class="pick" style="grid-template-columns:repeat(5,minmax(0,1fr));margin-bottom:10px">'+hours.map(h=>'<button class="'+(S.notifyHour===h?'on':'')+'" data-act="notifyHour" data-k="'+h+'">'+String(h).padStart(2,'0')+':00</button>').join('')+'</div><button class="btn sm ghost" data-act="testNotif">'+esc(t('testNotif'))+'</button>':'')+'</div>';
}
/* ---------- تنبيهات البلاغات (نسخة الجوال): تصل حتى والتطبيق مغلق، وتتكرر يومياً حتى تضغط «تم التنفيذ» ---------- */
async function ensureNotifyPermission(){await nativeReady;const LN=NP('LocalNotifications');if(!LN)return false;try{let p=await LN.checkPermissions();if(p.display!=='granted')p=await LN.requestPermissions();return p.display==='granted'}catch(e){return false}}
function buildNotis(){
 const nowD=new Date(),H=S.notifyHour||8,out=[],open=openReps().sort((a,b)=>a.createdAt.localeCompare(b.createdAt));
 const at=(d0,add)=>{const x=new Date(d0);x.setDate(x.getDate()+add);x.setHours(H,0,0,0);return x};
 open.forEach(r=>{
  const c=new Date(r.createdAt),soon=new Date(c.getTime()+2*3600e3);
  if(soon>nowD)out.push({t:soon,r});
  for(let i=0;i<14;i++){const x=at(nowD,i);if(x>nowD&&x>soon)out.push({t:x,r})}
 });
 out.sort((a,b)=>a.t-b.t);
 return out.slice(0,60).map((n,i)=>({id:i+1,title:t('notifTitle')+' · '+t('room')+' '+n.r.unit,body:n.r.text+' — '+t('notifBody'),schedule:{at:n.t,allowWhileIdle:true},actionTypeId:'REPORT',extra:{rid:n.r.id,unit:n.r.unit},interruptionLevel:'timeSensitive',badge:open.length}));
}
let notiBusy=Promise.resolve();
function scheduleNotis(){
 if(!isNative)return Promise.resolve();
 notiBusy=notiBusy.then(async()=>{await nativeReady;const LN=NP('LocalNotifications');if(!LN)return;
  try{const pend=await LN.getPending();const old=(pend&&pend.notifications||[]).filter(n=>n.id!==999);if(old.length)await LN.cancel({notifications:old.map(n=>({id:n.id}))});
   if(!S.notify)return;const p=await LN.checkPermissions();if(p.display!=='granted')return;const items=buildNotis();if(items.length)await LN.schedule({notifications:items})}catch(e){console.warn('notifications',e)}});
 return notiBusy;
}
async function testNotification(){const ok=await ensureNotifyPermission();if(!ok)return toast(t('allowNotif'));try{await NP('LocalNotifications').schedule({notifications:[{id:999,title:'CAMP SAS',body:t('testBody'),schedule:{at:new Date(Date.now()+5000),allowWhileIdle:true},interruptionLevel:'timeSensitive'}]});toast(t('testSoon'))}catch(e){toast(t('shareFail'))}}
async function nativeInit(){
 await nativeReady;if(!isNative)return;
 if(await nativeRestore())render();
 const LN=NP('LocalNotifications');
 if(LN){
  try{await LN.registerActionTypes({types:[{id:'REPORT',actions:[{id:'done',title:t('done')+' ✓',foreground:true}]}]})}catch(e){}
  try{LN.addListener('localNotificationActionPerformed',ev=>{const x=ev&&ev.notification&&ev.notification.extra;if(!x||!x.rid)return;if(ev.actionId==='done'){if(markDone(x.rid)){persist();toast(t('done')+' ✓')}}if(S.units[x.unit]){closeModal();go('unit',{unit:x.unit,from:'home'})}else render()})}catch(e){}
  try{await LN.removeAllDeliveredNotifications()}catch(e){}
  if(S.notify&&openReps().length)ensureNotifyPermission();
 }
 scheduleNotis();
}
render();
nativeInit();
