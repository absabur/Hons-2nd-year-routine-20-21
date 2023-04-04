const table = document.querySelector("table");
const main = document.querySelector(".main");
const cap = document.querySelector(".cap");
const details = document.querySelector("#details");
const img = details.querySelector(".img");
const para = details.querySelector(".para");
const backL = details.querySelector(".back-l");
const backR = details.querySelector(".back-r");
const color = document.querySelector(".color-change");
const p = document.querySelectorAll("p");
const landscape = document.querySelector(".landscape");
const colorSec = document.querySelector(".color-sec");
const dates = document.querySelector(".dates");
const time = document.querySelector(".time");


const ah = table.querySelector(".ah");
const mh = table.querySelector(".mh");
const ri = table.querySelector(".ri");
const arj = table.querySelector(".arj");
const ns = table.querySelector(".ns");
const np = table.querySelector(".np");
const am = table.querySelector(".am");
const ak = table.querySelector(".ak");
const rk = table.querySelector(".rk");
const ts = table.querySelector(".ts");
const fm = table.querySelector(".fm");
const mr= table.querySelector(".mr");
const tt = table.querySelector(".tt");
const ai = table.querySelector(".ai");
const ap = table.querySelector(".ap");
const ahck = table.querySelector(".ahck");
const khih = table.querySelector(".khih");

let day;
let room;
let period;

const display = (image, sub, code, day, period, name, number, email) => {
    day = day[0].toUpperCase() + day.slice(1).toLowerCase();
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    img.innerHTML = `<img src="images/${image}.jpg" alt="">`;
    para.innerHTML = `
    <b>Teacher name  :</b> ${name}<br>
    <b>Teacher Mobile :</b> <a style="color:black; background-color:skyblue;border-radius:5px; padding:5px;" href="tel:${number}">${number}</a><br>
    <b>Teacher Email  :</b> <a style="color:black; background-color:skyblue;border-radius:5px; padding:5px;" href="mailto:${email}">${email}</a><br>
    <b>Subject Name  :</b> ${sub}<br>
    <b>Subject Code  :</b> ${code}<br>
    <b>Day           :</b> ${day}<br>
    <b>Class Duration:</b> (${period})<br>
    <b style="background-color:red; padding:5px; border-radius:5px; font-size:14px;";>[বি: দ্র: জরুরি প্রয়োজন ছাড়া ফোন দেওয়া নিষেধ।]<b>
    `
}

ah.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ah", "Ordinary Differential Equations", "223703", "Sunday", "11:15 AM - 12:00 PM", "Md. Aynul Habib", "01737469911", "aynul.habib.du@gmail.com");
})
mh.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("mh", "Calculus-II", "223701", "Sunday", "12:00 PM - 12:45 PM", "Md. Mahtab Hossain Mondal", "01720252779", "mahtabmath.bogra@gmail.com");
})
ri.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ri", "Ordinary Differential Equations", "223703", "Monday", "11:15 AM - 12:00 PM", "Md. Rafiqul Islam", "01712554536", "rafiqulmaths24031970@gmail.com");
})
arj.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("arj", "Computer Techniques Programming with Fortran", "223705", "Monday", "12:00 PM - 12:45 PM", "Md. Arifur Rahman Jewel", "01764196929", "mirjewel@gmail.com");
})
ns.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ns", "Ordinary Differential Equations", "223703", "Tuesday", "09:45 AM - 10:30 AM", "Nasrin Sultana", "01716695719", "nasrinsultanamaths@gmail.com");
})
np.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("np", "Calculus-II", "223701", "Tuesday", "10:30 AM - 11:15 AM", "Nirmal Chandra Paul", "01731809580", "n/a");
})
am.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("am", "Calculus-II", "223701", "Wednesday", "10:30 AM - 11:15 AM", "Md. Alam Mondal", "01712210113", "alammondal.bd@gmail.com");
})
ak.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ak", "Computer Techniques Programming with Fortran", "223705", "Wednesday", "11:15 AM - 12:00 PM", "Md. Abul Kalam Asad", "01716390242", "asadmath.bogra@gmail.com");
})

rk.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("rk", "Non Credit English(Compulsory)", "221109", "Sunday", "12:45 PM - 01:30 PM", "Md. Rezaul Karim", "n/a", "n/a");
})


ts.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ts", "Non Credit English(Compulsory)", "221109", "Monday", "12:45 PM - 01:30 PM", "Md. Tipu Sultan", "n/a", "n/a");
})

fm.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("fm", "Non Credit English(Compulsory)", "221109", "Tuesday", "12:45 PM - 01:30 PM", "Fakhrul", "n/a", "n/a");
})

mr.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("mr", "Non Credit English(Compulsory)", "221109", "Wednesday", "12:45 PM - 01:30 PM", "Saju", "n/a", "n/a");
})

tt.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("tt", "Non Credit English(Compulsory)", "221109", "Thursday", "12:45 PM - 01:30 PM", "Tania", "01718859246", "n/a");
})

ap.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ap", "Physics-III(Electricity and Modern Physics)", "222707", "Tuesday", "11:15 AM - 12:00 PM", "Anamika Paul", "n/a", "n/a");
})

ai.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ai", "Physics-III(Electricity and Modern Physics)", "222707", "Monday", "10:30 AM - 11:15 AM", "Aminul Islam", "n/a", "n/a");
})

ahck.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ahck", "Method of Statistics", "223609", "Monday", "01:30 PM - 02:15 PM", "Aminul/Kamrul", "n/a", "n/a");
})

khih.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("khih", "Method of Statistics", "223609", "Wednesday", "12:00 PM - 12:45 PM", "Ibrahim Hossain / Kamrul", "n/a", "n/a");
})



backL.addEventListener("click",() => {
    location.reload();
})

backR.addEventListener("click",() => {
    location.reload();
})

const colorArr = ["white","#00203FFF","#606060FF","#101820FF","#1235CA9F","#603F83FF","#FAD0C9FF","#990011FF","#190090FF","#600083FF","#FA00C9FF","#998811FF","#CBCE91FF","#FCF951FF","black","#ADEFD1FF","#D6ED17FF","#FEE715FF","#A2A2A1FF","#C7D3D4FF","#6E6E6DFF","#FCF6F5FF","#76528BFF","#422057FF"]
const bgColorArr = ["black","#ADEFD1FF","#D6ED17FF","#FEE715FF","#A233A1FF","#C7D3D4FF","#6E6E6DFF","#FCF6F5FF","#76558BFF","#427757FF","white","#00203FFF","#76528BFF","#422057FF","white","#00203FFF","#606060FF","#101820FF","#195190FF","#603F83FF","#FAD0C9FF","#990011FF","#CBCE91FF","#FCF951FF"]

let refreshColor = localStorage.getItem("Lcolor");
let refreshBgColor = localStorage.getItem("Lbgcolor");
main.style.color = refreshColor;
para.style.color = refreshColor;
backL.style.color = refreshColor;
backR.style.color = refreshColor;
details.style.color = refreshColor;
cap.style.backgroundColor = refreshBgColor;
details.style.color = refreshBgColor;
details.style.backgroundColor = refreshBgColor;
for (let i = 0 ; i<p.length ; i++){
    p[i].style.backgroundColor = refreshBgColor;
}

let x=0; 
color.addEventListener("click",function(){
    main.style.color = `${colorArr[x]}`;
    para.style.color = `${colorArr[x]}`;
    backL.style.color = `${colorArr[x]}`;
    backR.style.color = `${colorArr[x]}`;
    cap.style.backgroundColor = `${bgColorArr[x]}`;
    details.style.color = `${colorArr[x]}`;
    details.style.backgroundColor = `${bgColorArr[x]}`;
    for (let i = 0 ; i<p.length ; i++){
        p[i].style.backgroundColor = `${bgColorArr[x]}`;
    }
    localStorage.clear(); 
    localStorage.setItem("Lcolor", colorArr[x]);
    localStorage.setItem("Lbgcolor", bgColorArr[x]);
    x++;
    if(x>=colorArr.length){
        x = 0;
    }
})

landscape.addEventListener("click",function(){
    if (landscape.textContent == "Potrait"){
        landscape.innerHTML = "Landscape";
        table.classList.add("default");
    }
    else{
        landscape.innerHTML = "Potrait";
        table.classList.remove("default");
    }
})


// =============================================
// date time

const showTime = () =>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = "";
    let bar = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    

    if(hours>=12){
        amPm = " PM";
    }else{
        amPm = " AM";
    }
    hours = formatHour(hours);
    hours = formate(hours);
    minutes = formate(minutes);
    seconds = formate(seconds);
    bar = formate(bar);
    month = formate(month);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthName = months[date.getMonth()];

    dates.textContent = bar + " " + monthName + " " + year + ", " +day;
    time.textContent = hours + ":" + minutes + ":" + seconds + amPm;
}

const formate = (val) =>{
    if(val < 10){
        val = "0"+ val;
    }
    return val;
}
const formatHour = (val) =>{
    if(val>12){
        let extra = val - 12;
        val = extra;
    }else if(val == 0){
        val = 12;
    }
    return val;
}

showTime();
setInterval(showTime,1000);

