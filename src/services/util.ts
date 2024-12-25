import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
numeral.locale('en-gb');

const util = {
    format:{
        date:(date:any)=>{
            return moment(date).format('DD-MM-YYYY');
        },
        datetime:(date:any)=>{
            return moment(date).format('DD MMM, YYYY h:mm:ss a');
        },
        durationUntilNow:(seconds:any)=>{
            let year = Math.floor(seconds/31536000);
            seconds = seconds % 31536000;
            let minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            let hour = Math.floor(minute / 60);
            minute = minute % 60;
            let day = Math.floor(hour / 24);
            hour = hour % 24;
            let str = '';
            str += (year>0)?year.toString().padStart(2,'0')+'Y ':'';
            str += (day>0)?day.toString().padStart(2,'0')+'D ':'';
            str += (hour>0)?hour.toString().padStart(2,'0')+':':'00:';
            str += (minute>0)?minute.toString().padStart(2,'0')+':':'00:';
            str += (seconds>0)?seconds.toString().padStart(2,'0')+'':'00';
            return str
        },
        seconds:(seconds:any)=>{
            let year = Math.floor(seconds/31536000);
            seconds = seconds % 31536000;
            let minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            let hour = Math.floor(minute / 60);
            minute = minute % 60;
            let day = Math.floor(hour / 24);
            hour = hour % 24;
            let str = '';
            str += (year>0)?year.toString().padStart(2,'0')+'Y ':'';
            str += (day>0)?day.toString().padStart(2,'0')+'D ':'';
            str += (hour>0)?hour.toString().padStart(2,'0')+':':'00:';
            str += (minute>0)?minute.toString().padStart(2,'0')+':':'00:';
            str += (seconds>0)?seconds.toString().padStart(2,'0')+'':'00';
            return str
        },
        time:(date:any)=>{
            return moment(date).format('h:mm:ss a');
        },
        currency:(val:any)=>{
            return numeral( val ).format('$0,0.00');
        }
    },
    date:{
        today:()=>{
            return moment().format('YYYY-MM-DD');
        },
        oneMonthAhead:()=>{
            return moment().add(30, 'days').format('YYYY-MM-DD');
        }
    }
}

export default util;