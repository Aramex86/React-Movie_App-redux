import {Dispatch} from 'react';
import {ThunkAction} from 'redux-thunk';
import {getLangsApi} from '../../../Api/Api';
import {LangsType} from '../../../Types/Types';
import {AppStateType} from '../store';

const GET_LANGS = 'GET_LANGS';
const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
const LANG_SELECTED = 'LANG_SELECTED';

const initialState = {
  languages: [] as Array<LangsType>,
  translations: [] as Array<string>,
  // langSlected: null as LangsType | null,
};

type initialStateType = typeof initialState;

type ActionsTypes = GetLangsType | GetTranslationsType /* | LangSelectedType */;

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const langsReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case GET_LANGS: {
      return {
        ...state,
        languages: action.languages,
      };
    }
    case GET_TRANSLATIONS: {
      return {
        ...state,
        translations: action.translations,
      };
    }

    // case LANG_SELECTED: {
    //   return {
    //     ...state,
    //     langSlected: action.langSlected,
    //   };
    // }
    default:
      return state;
  }
};

type GetLangsType = {
  type: typeof GET_LANGS;
  languages: Array<LangsType>;
};

export const getLangs = (languages: Array<LangsType>): GetLangsType => {
  return {type: GET_LANGS, languages};
};

type GetTranslationsType = {
  type: typeof GET_TRANSLATIONS;
  translations: Array<string>;
};
export const getTranslations = (
  translations: Array<string>
): GetTranslationsType => {
  return {type: GET_TRANSLATIONS, translations};
};

// type LangSelectedType = {
//   type: typeof LANG_SELECTED;
//   langSlected: LangsType;
// };

// export const getLangSelected = (langSlected: LangsType): LangSelectedType => {
//   return {type: LANG_SELECTED, langSlected};
// };

export const requestLangs = (): ThunkType => async (dispatch: DispatchType) => {
  const res = await getLangsApi.getLangs();
  dispatch(getLangs(res));
};
export const requestTranslations = (): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getLangsApi.getTranslations();
  dispatch(getTranslations(res));
};


export default langsReducer;
