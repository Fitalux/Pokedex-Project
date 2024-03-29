import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";

export const removePokmenon = createAsyncThunk(
  "pokemon/remove",
  async ({ id }: { id: string }) => {
    try {
      console.log({ id });
      await deleteDoc(doc(pokemonListRef, id));
      return { id };
    } catch (err) {
      console.log(err);
    }
  }
);
