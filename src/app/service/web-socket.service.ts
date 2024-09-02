import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | null = null;
  private messageSubject = new Subject<any>();
  public messages$ = this.messageSubject.asObservable();

  constructor(private authService: AuthService) {
    this.connect();
  }

  private connect() {
    // const token = localStorage.getItem('authToken');
    this.socket = new WebSocket(`ws://localhost:7096`); 

    this.socket.onopen = (event) => {
      console.log('WebSocket connection opened:', event);
    };

    this.socket.onmessage = (event) => {
      this.messageSubject.next(event.data);
      console.log('WebSocket message received:', event.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error observed:', error);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
      // Optionally, you can attempt to reconnect here
    };
  }

  sendMessage(message: string) {
    if (this.socket?.readyState == WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not open. Ready state is:', this.socket?.readyState); 
    }
  }
}