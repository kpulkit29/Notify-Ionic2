import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import * as moment from "moment";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Service } from "../../providers/service";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notifyTime:any;
  days:any[]=[];
  notifications:any[]=[];
  time:number;
  mins:number;
  constructor(public navCtrl: NavController,public note:LocalNotifications,public alertCtrl:AlertController,public serve:Service) {
   
    this.notifyTime=moment(new Date()).format();
    this.time=(new Date()).getHours();
    this.mins=(new Date()).getMinutes();
    this.days = [
            {title: 'Monday', dayCode: 1, checked: false},
            {title: 'Tuesday', dayCode: 2, checked: false},
            {title: 'Wednesday', dayCode: 3, checked: false},
            {title: 'Thursday', dayCode: 4, checked: false},
            {title: 'Friday', dayCode: 5, checked: false},
            {title: 'Saturday', dayCode: 6, checked: false},
            {title: 'Sunday', dayCode: 0, checked: false}
        ];
  }
   time_change(time){
     this.time=time.hour;
     this.mins=time.minute;
   }
  addNote(){
       let currDate=new Date();
       let currDay=currDate.getDay();
       //for all checked days
       for(let day of this.days){
         if(day.checked){
             var firstnote=new Date();
             console.log(firstnote);
             var daydiff=day.dayCode-currDay;
             if(daydiff<0){
               daydiff+=7;// for days of next week
             }
             firstnote.setHours(firstnote.getHours()+(24*daydiff));
             firstnote.setHours(this.time);
             firstnote.setMinutes(this.mins);
             console.log(this.mins);
                let notification = {
                id: day.dayCode,
                title: 'Hey!',
                text: 'Ionic notification',
                at: firstnote,
                every: 'week',
                led:"FFFFFF"
            };
 
            this.notifications.push(notification);
         console.log(this.notifications[0].at);
         
         this.note.cancelAll().then(()=>{
           this.note.schedule(this.notifications);
           this.notifications=[];
           let alert = this.alertCtrl.create({
                title: 'Done',
                buttons: ['Ok']
            });
 
            alert.present();
         });
         this.note.hasPermission().then(data=>{
           console.log(data);
         })
       }
       }
  }
  cancel(){

  }
  
}
