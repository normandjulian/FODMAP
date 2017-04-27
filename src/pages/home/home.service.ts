import { Injectable } from '@angular/core';
/*
  Generated class for the HomeServiceTs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeService {
  public list: any = {
    'A': [
      {
        name: 'Abricot',
        description: 'à consommer bien mûrs, 2 maximum',
        code: 'warning',
        category: 'fruit'
      },{
        name: 'Abricot sec',
        description: 'à consommer bien mûrs, 2 maximum',
        code: 'danger',
        category: 'fruit'
      }, {
        name: 'Ail',
        description: 'faire macérer dans de l\'huile',
        code: 'danger',
        category: ''
      }, {
        name: 'Artichaut',
        description: 'ne pas manger le coeur',
        code: 'danger',
        category: ''
      }, {
        name: 'Asperge',
        description: 'ne manger que quelques pointes, pas les tiges',
        code: 'warning',
        category: ''
      }, {
        name: 'Aubergine',
        code: 'danger',
        category: ''
      }, {
        name: 'Avocat',
        code: 'warning',
        category: ''
      }, {
        name: 'Ananas',
        code: 'good',
        category: 'fruit'
      }
    ],
    'B': [
      {
        name: 'Banane',
        code: 'good',
        category: 'fruit',
        description: 'à consommer bien mûre'
      }, {
        name: 'Betterave',
        code: 'warning',
        category: '',
        description: 'à consommer cuite uniquement'
      }, {
        name: 'Bière',
        code: 'danger',
        category: ''
      }, {
        name: 'Blé',
        code: 'danger',
        category: ''
      }, {
        name: 'Boissons « diététiques » pour sportifs',
        code: 'danger',
        category: ''
      }, {
        name: 'Biscottes',
        code: 'good',
        category: ''
      }
    ],
    'C': [
      {
        name: 'Cerise',
        description: 'Éviter aussi les confitures et clafoutis',
        code: 'warning',
        category: 'fruit'
      }, {
        name: 'Champignon',
        code: 'danger',
        category: ''
      }, {
        name: 'Chewing-gums et sucreries diverses',
        danger: true
      }, {
        name: 'Chou-fleur',
        description: 'à ne consommer que cuit dans 2 eaux',
        code: 'warning',
        category: ''
      }, {
        name: 'Coing',
        code: 'warning',
        category: 'fruit'
      }, {
        name: 'Citron',
        code: 'good',
        category: 'fruit'
      }, {
        name: 'Cassis',
        code: 'good',
        category: 'fruit'
      }, {
        name: 'Clémentine',
        code: 'good',
        category: 'fruit'
      }, {
        name: 'Choux',
        code: 'danger',
        category: ''
      }, {
        name: 'Chicorée',
        code: 'danger',
        category: ''
      }, {
        name: 'Carotte',
        code: 'good',
        category: ''
      }, {
        name: 'Courgette',
        code: 'good',
        category: ''
      }, {
        name: 'Coeur de palmier',
        code: 'good',
        category: ''
      }, {
        name: 'Céléri',
        code: 'good',
        category: ''
      }, {
        name: 'Comcombre',
        code: 'good',
        category: ''
      }, {
        name: 'Courge',
        code: 'good',
        category: ''
      }, {
        name: 'Crème dessert',
        code: 'danger',
        category: ''
      }, {
        name: 'Crème fraîche',
        code: 'danger',
        category: ''
      }, {
        name: 'Crème glacée',
        code: 'danger',
        category: ''
      }, {
        name: 'Compté',
        code: 'good',
        category: ''
      }
    ]
  };

  constructor() {
    console.log('Hello HomeServiceTs Provider');
  }

  get_list() {
    return this.list;
  }

  get_empty_list() {
    return {
      'A': [],
      'B': [],
      'C': []
    };
  }

  get_fruits() {
    let fruits = this.get_empty_list();

    for (let alpha in this.list) {
      for (let aliment of this.list[alpha]) {
        if (aliment.category === 'fruit') {
          fruits[alpha].push(aliment);
        };
      }
    }

    return fruits;
  }
}
