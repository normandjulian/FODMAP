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
      }, {
        name: 'Abricot sec',
        description: 'à consommer bien mûrs, 2 maximum',
        code: 'danger',
        category: 'fruit'
      }, {
        name: 'Ail',
        description: 'faire macérer dans de l\'huile',
        code: 'danger',
        category: 'vegetable'
      }, {
        name: 'Artichaut',
        description: 'ne pas manger le coeur',
        code: 'danger',
        category: 'vegetable'
      }, {
        name: 'Asperge',
        description: 'ne manger que quelques pointes, pas les tiges',
        code: 'warning',
        category: 'vegetable'
      }, {
        name: 'Aubergine',
        code: 'danger',
        category: 'vegetable'
      }, {
        name: 'Avocat',
        code: 'warning',
        category: 'fruit'
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
        category: 'vegetable',
        description: 'à consommer cuite uniquement'
      }, {
        name: 'Bière',
        code: 'danger',
        category: 'drink'
      }, {
        name: 'Blé',
        code: 'danger',
        category: 'feculent'
      }, {
        name: 'Boissons « diététiques » pour sportifs',
        code: 'danger',
        category: 'drink'
      }, {
        name: 'Biscottes',
        code: 'good',
        category: 'feculent'
      }, {
        name: 'Boulgour',
        code: 'danger',
        category: 'feculent'
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
        category: 'vegetable'
      }, {
        name: 'Chewing-gums et sucreries diverses',
        danger: true
      }, {
        name: 'Chou-fleur',
        description: 'à ne consommer que cuit dans 2 eaux',
        code: 'warning',
        category: 'vegetable'
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
        category: 'vegetable'
      }, {
        name: 'Chicorée',
        code: 'danger',
        category: ''
      }, {
        name: 'Carotte',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Courgette',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Coeur de palmier',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Céléri',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Comcombre',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Courge',
        code: 'good',
        category: 'vegetable'
      }, {
        name: 'Crème dessert',
        code: 'danger',
        category: 'milky'
      }, {
        name: 'Crème fraîche',
        code: 'danger',
        category: 'milky'
      }, {
        name: 'Crème glacée',
        code: 'danger',
        category: 'milky'
      }, {
        name: 'Comté',
        code: 'good',
        category: 'milky'
      }
    ],
    'D': [
      {
        name: 'Dattes sèche',
        code: 'danger',
        category: 'fruit',
        description: ''
      }
    ],
    'E': [
      {
        name: 'Échalote',
        code: 'warning',
        category: 'vegetable',
        description: 'À ne consommer qu\'en très petites quantités'
      }, {
        name: 'Endive',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Emmental',
        code: 'good',
        category: 'milky',
        description: ''
      }, {
        name: 'Épeautre',
        code: 'good',
        category: 'feculent',
        description: ''
      }
    ],
    'F': [
      {
        name: 'Figue sèche',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Fraise',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Framboise',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Fruit de la passion',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Fenouil',
        code: 'warning',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Fève',
        code: 'warning',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Flageolet',
        code: 'danger',
        category: 'leguminous',
        description: ''
      },{
        name: 'Fromage blanc',
        code: 'danger',
        category: 'milky',
        description: ''
      }, {
        name: 'Fromage fondu',
        code: 'warning',
        category: 'milky',
        description: ''
      }, {
        name: 'Fromage affiné',
        code: 'milky',
        category: 'good',
        description: ''
      }, {
        name: 'Fromage frais',
        code: 'danger',
        category: 'milky',
        description: ''
      }
    ],
    'G': [
      {
        name: 'Groseille',
        code: 'warning',
        category: 'fruit',
        description: ''
      }, {
        name: 'Grenade',
        code: 'warning',
        category: 'fruit',
        description: ''
      }
    ],
    'H': [
      {
        name: 'Haricot vert',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Haricot sec',
        code: 'danger',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Haricot rouge',
        code: 'danger',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Haricot blanc',
        code: 'danger',
        category: 'leguminous',
        description: ''
      }
    ],
    'I': [],
    'J': [],
    'K': [],
    'L': [
      {
        name: 'Litch',
        code: 'warning',
        category: 'fruit',
        description: ''
      }, {
        name: 'Laitue',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Lentille verte',
        code: 'warning',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Lentille corail',
        code: 'good',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Lait',
        code: 'danger',
        category: 'milky',
        description: ''
      }
    ],
    'M': [
      {
        name: 'Mangue',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Mûre',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Myrtille',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Melon',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Mâche',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Mais',
        code: 'warning',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Muesli',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Millet',
        code: 'good',
        category: 'feculent',
        description: ''
      }
    ],
    'N': [
      {
        name: 'Nectarine',
        code: 'good',
        category: 'fruit',
        description: ''
      }
    ],
    'O': [
      {
        name: 'Orange',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Oignon',
        code: 'danger',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Oseille',
        code: 'danger',
        category: 'vegetable',
        description: ''
      }
    ],
    'P': [
      {
        name: 'Pêche',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Poire',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Pomme',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Prune',
        code: 'danger',
        category: 'fruit',
        description: ''
      }, {
        name: 'Pastèque',
        code: 'warning',
        category: 'fruit',
        description: ''
      }, {
        name: 'Pamplemousse',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Pissenlit',
        code: 'danger',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Poivron vert',
        code: 'danger',
        category: 'vegetable',
        description: ''
      },
      {
        name: 'Panais',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Poivron rouge',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Potiron',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Pousse d\'Epinard',
        code: 'good',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Pois chiche',
        code: 'danger',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Pois cassé',
        code: 'danger',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Petit pois',
        code: 'warning',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Petit suisse',
        code: 'warning',
        category: 'milky',
        description: ''
      }, {
        name: 'Pain complêt',
        code: 'danger',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pattes complêtes',
        code: 'danger',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pain aux céréales',
        code: 'warning',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pain aux graines',
        code: 'warning',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pumpernickel',
        code: 'warning',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pita',
        code: 'warning',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pâtes japonaises',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pâtes 100 % sarrasin',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pâtes sans gluten',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Pommes de terre',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Polenta',
        code: 'good',
        category: 'feculent',
        description: ''
      }
    ],
    'Q': [
      {
          name: 'Quinoa',
          code: 'good',
          category: 'feculent',
          description: ''
        }
    ],
    'R': [
      {
        name: 'Raisin',
        code: 'warning',
        category: 'fruit',
        description: ''
      }, {
        name: 'Rhubarbe',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Radis',
        code: 'good',
        category: 'fruit',
        description: ''
      }, {
        name: 'Riz complet',
        code: 'danger',
        category: 'feculent',
        description: ''
      }, {
        name: 'Riz semi-complet',
        code: 'warning',
        category: 'feculent',
        description: ''
      }, {
        name: 'Riz blanc',
        code: 'good',
        category: 'feculent',
        description: ''
      }, {
        name: 'Riz basmati',
        code: 'good',
        category: 'feculent',
        description: ''
      }
    ],
    'S': [
      {
        name: 'Salsifis',
        code: 'danger',
        category: 'vegetable',
        description: ''
      }, {
        name: 'Soja',
        code: 'warning',
        category: 'leguminous',
        description: ''
      }, {
        name: 'Seigle',
        code: 'danger',
        category: 'feculent',
        description: ''
      }, {
        name: 'Sodas',
        code: 'danger',
        category: 'other',
        description: ''
      }
    ],
    'T': [
      {
        name: 'Topinambour',
        code: 'danger',
        category: 'vegetable',
        description: ''
      }
    ],
    'U': [],
    'V': [],
    'W': [],
    'X': [],
    'Y': [
      {
        name: 'Yaourt',
        code: 'warning',
        category: 'milky',
        description: ''
      }
    ],
    'Z': []
  };

  constructor() { }

  get_list() {
    return this.list;
  }

  get_empty_list() {
    return {
      'A': [],
      'B': [],
      'C': [],
      'D': [],
      'E': [],
      'F': [],
      'G': [],
      'H': [],
      'I': [],
      'J': [],
      'K': [],
      'L': [],
      'M': [],
      'N': [],
      'O': [],
      'P': [],
      'Q': [],
      'R': [],
      'S': [],
      'T': [],
      'U': [],
      'V': [],
      'W': [],
      'X': [],
      'Y': [],
      'Z': []
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

  get_vegetables() {
    let vegetables = this.get_empty_list();

    for (let alpha in this.list) {
      for (let aliment of this.list[alpha]) {
        if (aliment.category === 'vegetable') {
          vegetables[alpha].push(aliment);
        };
      }
    }

    return vegetables;
  };

  get_leguminous() {
    let leguminous = this.get_empty_list();

    for (let alpha in this.list) {
      for (let aliment of this.list[alpha]) {
        if (aliment.category === 'leguminous') {
          leguminous[alpha].push(aliment);
        };
      }
    }

    return leguminous;
  };

  get_milky() {
    let milky = this.get_empty_list();

    for (let alpha in this.list) {
      for (let aliment of this.list[alpha]) {
        if (aliment.category === 'milky') {
          milky[alpha].push(aliment);
        };
      }
    }

    return milky;
  }

  get_feculents() {
    let feculents = this.get_empty_list();

    for (let alpha in this.list) {
      for (let aliment of this.list[alpha]) {
        if (aliment.category === 'feculent') {
          feculents[alpha].push(aliment);
        };
      }
    }

    return feculents;
  }
}
