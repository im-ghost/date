interface PeculiarDate {
   readonly date:Date,
   hrs:number,
   mins:number,
   secs:number,
   day:number,
   getTime:string,
   days:string[],
   dys:string[],
   months:string[],
   mons:Array<string>,
   _date:number,
   year:number,
   mon:number,
   getDat:object,
   all:any[],
   longDate:string,
   longDateF:string,
   shortDateF:string,
   shortDate:string
   
}
type Option = "y"|"m"|"all";
type Full = true | false;
const PeculiarDate: PeculiarDate = {

date : new Date(),
get hrs (){ 
return Number(this.date.getHours())

},
get mins(){ 
return Number(this.date.getMinutes())

},
get secs():number{
   return Number(this.date.getSeconds());
   
   },
get day (){ return Number(this.date.getDay())

},
get _date(){ 
return Number(this.date.getDate())

},
get year(){ 
return Number(this.date.getFullYear())

},
get mon(){ return Number(this.date.getMonth())

},
months:[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
],
mons:[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
],
days:[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
],
dys:[
"Sun",
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"
],
get getTime(){
   let hr:number|string =this.hrs
   let min:number|string =(this.mins).toString();
   
    hr = Number(hr);
   const isPm = hr > 12 ? "pm" : "am";
   hr = hr > 12 ? hr-12 : hr;
   min.length<1? `0${min}` : min;
   hr = hr.toString();
   hr = hr.length<1 ? `0${hr}` : hr;
   return `${hr}:${min} ${isPm}`
},
get getDat(){
   let date = this._date;
   let dateS:string= date.toString();
   if(dateS.endsWith("1")){
      dateS=`${date}st`
   }
   else if(dateS.endsWith("2")){
      dateS=`${date}nd`
   }
   else if(dateS.endsWith("3")){
      dateS=`${date}rd`
   }
   else{
      dateS=`${date}th`
   }
   let day:string = this.days[this.day];
   let dy:string = this.dys[this.day];
   let mon:string = this.months[this.mon];
   let month:string = this.months[this.mon];
   const nearS:string = `${dy}, ${dateS} of ${mon}`;
   const nearF:string = `${day}, ${dateS} of ${month}`;
   const farS:string = `${dy}, ${dateS} of ${mon},${this.year}`;
   const farF:string = `${day}, ${dateS} of ${month},${this.year}`;
   return {
      farS,
      farF,
      nearS,
      nearF
   }
   
},
get all(){
   return Object.values(this.getDat)
},
get longDate(){
   return this.all[0]
},
get longDateF(){
   return this.all[1]
},
get shortDate(){
   return this.all[2]
},
get shortDateF(){
   return this.all[3]
}
}
export default PeculiarDate




















