import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Service } from "../../providers/service";
import { HomePage } from "../home/home";
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class Score {
  matches:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public serve:Service) {
     this.serve.getPost().subscribe(doc=>{
    for(var i=0;i<doc.data.length;i++){
      this.matches.push(doc.data[i]);
    }
    console.log(this.matches);
  });
  var task=setInterval(()=>{console.log("yes did it");},2000)
  }
  get_score(id){
   this.navCtrl.push(HomePage,{uid:id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Score');
  }

}
