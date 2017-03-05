import {ReduceStore} from 'flux/utils';
import dispatcher from '../dispatcher';

class DashboardStore extends ReduceStore {
  getInitialState() {
    return {
      notes: [], // ノート一覧
      selectedNoteId: null, // 選択しているノートのid
    };
  }

  reduce(state, action){
    switch (action.type) {
      case 'note/create':
        return Object.assign({}, state, {
          notes: [action.note, ...this.state.notes],
          selectedNoteId: action.note.id,
        });

      default:
        // 対応しないtypeのときは元のstateを返す
        return state;
    }
  }
}
