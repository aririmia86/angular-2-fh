import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats:Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
      ref => {
        return ref.orderBy('fecha', 'desc')
          .limit(5);
      }
  );
    return this.itemsCollection.valueChanges()
      .map((mensajes:Mensaje[]) => {
        this.chats = [];
        for (let mensaje of mensajes) {
            this.chats.unshift(mensaje);
        }
      });
  }

  agregarMensaje(texto:string) {
    let nuevo:Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add(nuevo);
  }

}
