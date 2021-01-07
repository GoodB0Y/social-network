import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { loadImages, initialState } from './imagesSlice';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

describe('slice Test', () => {
  const initialValues = initialState;
  const store = mockStore(initialValues);
  beforeEach(() => {
    store.clearActions();
  });
  test('it should fetch images from the server', () => {
    const answer = [
      {
        id: 117,
        url: 'string',
        description: 'Я и моя сраная кошка',
        persistDateTime: '2020-10-27T09:14:37.43294',
      },
      {
        id: 119,
        url: 'string',
        description: 'Я и моя сраная кошка 2',
        persistDateTime: '2020-10-27T09:14:37.43294',
      },
    ];
    mock.onGet('api/v2/images').reply(200, { response: answer });
    store.dispatch(loadImages({ userId: 10, limit: 5, offset: 0 })).then(() => {
      const expectedActions = [
        {
          type: loadImages.pending.type,
        },
        {
          type: loadImages.fulfilled.type,
          payload: answer,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getState()).toEqual({ ...initialValues, images: answer });
    });
  });
});
