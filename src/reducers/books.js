import { v4 as uuidv4 } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';
import * as actions from '../actions/booksActions';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 3,
  },
  wordsPerSentence: {
    max: 15,
    min: 6,
  },
});

export default function reducer(state = [], action) {
  if (action.type === actions.CREATE_BOOK) {
    return [
      ...state,
      {
        id: uuidv4().slice(0, 5),
        title: action.payload.title,
        description: lorem.generateParagraphs(1),
        category: action.payload.category,
      },
    ];
  }
  if (action.type === actions.REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
}
