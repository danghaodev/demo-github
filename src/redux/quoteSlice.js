import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { random, round } from "mathjs";

export const getQuoteAnsync = createAsyncThunk(
  "quote/getQuoteAnsync",
  async () => {
    const resp = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    if (resp.ok) {
      let quotes = await resp.json();
      return quotes;
    }
  }
);

function getIndex(arr) {
  return round(random() * arr.length);
}
function getRandomColor() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexArr[getIndex(hexArr)];
  }
  return hex;
}

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    color: "#008000",
    content:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steeve Job",
    quoteData: [],
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = getRandomColor();
    },
    changeQuote: (state, action) => {
      let index = getIndex(state.quoteData);
      if (!index) {
        return state;
      } else {
        state.content = state.quoteData[index].quote;
        state.author = state.quoteData[index].author;
        state.color = getRandomColor();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuoteAnsync.fulfilled, (state, action) => {
      return { ...state, quoteData: action.payload.quotes };
    });
  },
});

export default quoteSlice.reducer;
export const { changeColor, changeQuote } = quoteSlice.actions;
