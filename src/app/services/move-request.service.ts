import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MoveRequest {
  id?: number;
  name: string;
  oldAddress: string;
  newAddress: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoveRequestService {
  private apiUrl = 'http://localhost:8080/api/move-requests';

  constructor(private http: HttpClient) {}

  getAllMoveRequests(): Observable<MoveRequest[]> {
    return this.http.get<MoveRequest[]>(this.apiUrl);
  }

  createMoveRequest(moveRequest: MoveRequest): Observable<MoveRequest> {
    return this.http.post<MoveRequest>(this.apiUrl, moveRequest);
  }
}
