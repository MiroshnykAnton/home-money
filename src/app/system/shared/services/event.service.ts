import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseApi } from "src/app/shared/core/base-api";
import { WFMEvent } from "../models/event.model";

@Injectable()
export class EventsService extends BaseApi {
  constructor(public override http: HttpClient) {
    super(http);
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.post('events', event);
  }

  getEvents() : Observable<WFMEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.get(`events/${id}`);
  }


}