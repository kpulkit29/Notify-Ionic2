import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Service {
   key:string="LN5X5rtpVpfNscyPZXkIfchrG673";
  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }
  getPost(){
  return this.http.get("http://cricapi.com/api/cricket?apikey="+this.key).map(res=>res.json());
}
getPost2(id)
{
  return this.http.get("http://cricapi.com/api/cricketScore?apikey="+this.key+"&unique_id="+id).map(res=>res.json());
}


}
