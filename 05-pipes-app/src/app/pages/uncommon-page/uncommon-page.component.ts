import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page.component',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }
    this.client.set(client1)
  }

  // I18n Plural
  clients = signal(['Maria', 'Pedro', 'Fernando','Melissa']);
  clientsMap= signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': ' tenemos un par de clientes esperando',
    other : 'tenemos # clientes esperando'
  });
  deleteClient(){
    this.clients.update((prev)=>prev.slice(1));
  }

  // KeyValuePipe
  profile = {
    name : 'Fernando',
    age : 36,
    address : 'Ottawa, Canadá'
  }


}
