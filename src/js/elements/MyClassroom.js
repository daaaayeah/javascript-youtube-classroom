import CustomElement from '../abstract/CustomElement';
import { addEvent, $ } from '../utils';
import TEMPLATE from '../templates';

class MyClassroom extends CustomElement {
  template() {
    return TEMPLATE.MY_CLASSROOM;
  }

  setEvent() {
    addEvent({
      component: this,
      eventType: 'click',
      selector: '#search-modal-button',
      callback: this.showSearchModal,
    });
  }

  showSearchModal() {
    $('.modal-container').classList.remove('hide');
  }
}

customElements.define('my-classroom', MyClassroom);

export default MyClassroom;
