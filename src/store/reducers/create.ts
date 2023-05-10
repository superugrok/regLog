import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICreateReducer } from "@Types/store/create";
import { getLocalTime } from "@Utils/getLocalTime";
import { ICharsList } from "components/enter/login";

const initialState: ICreateReducer = {
  apparence: {
    // Причёска
    hair: "Стандарт",
    hairColor: "1",
    // Глаза
    eyes: -1,
    eyesColor: "Зеленый",
    // Брови
    brows: "Стандарт",
    browsHeight: -1,
    browsWidth: -1,
    browsColor: "1",
    browsTp: -1,
    // Нос и переносица
    noseWidth: -1,
    noseHeight: -1,
    noseLength: -1,
    noseBridge: -1, // Кончик носа
    noseTip: -1, // Тип переносицы
    noseBridgeShift: -1, // Сдвиг переносицы
    // Черты лица
    cboneHeight: -1, // Высота скул
    cboneWidth: -1, // Ширина скул
    cheekWidth: -1, // Ширина щёк
    jawWidth: -1, // Ширина челюсти
    chinLength: -1, // Длина подобродка
    chinWidth: -1, // Ширина подбородка
    chinPos: -1, // Положение подбородка
    chinShape: -1, // Форма подбородка
    neckWidth: -1, // Ширина шеи
    // Губы
    lips: -1, // Тип губ
    lipsColor: "1",
    pomada: "Стандарт",
    pomadaTp: -1,
    // Борода
    beard: "Стандарт",
    beardColor: "1",
    beardTp: -1,
    // Приметы
    faceColor: "1",
    faceColorTp: -1,
    hairGrud: "Стандарт",
    hairGrudColor: "1",
    hairGrudTp: -1,
    older: "Стандарт",
    olderTp: -1,
    deffects: "Стандарт",
    deffectsTp: -1,
    // Особенности
    cosmetics: "Стандарт",
    cosmeticsTp: -1,
    rumyan: "Стандарт",
    rumyanColor: "1",
    rumyanTp: -1,
    zagar: "Стандарт",
    zagarTp: -1,
    rodinki: "Стандарт",
    rodinkiTp: -1,
  },
};

export const createReducer = createSlice({
  name: "CREATE",
  initialState,
  reducers: {
    CHANGE_VALUE(state, action: PayloadAction<any>) {
      state.apparence[action.payload.type] = action.payload.value;
    },
  },
});
