import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class BackgroundModule extends Module {

  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    divContainer.addEventListener('click', function () {
      divContainer.style.backgroundColor = 'rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')';
    });

    document.body.append(divContainer);
  }

}