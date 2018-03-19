import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RestaurantService {
 private baseURL="https://developers.zomato.com/api/v2.1/search?entity_id=";
 private endurl  ="&entity_type=city&q=";
 private apikey  ="&apikey=69356ad3b4004acc1d25c297342a041a";
 private searchdata={};
 constructor(private http: HttpClient) { }
  
 getRestaurants (query :String) {
    return this.http.get(this.baseURL+query+this.endurl+query+this.apikey)
      
      
  }
}