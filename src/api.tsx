import axios from "axios";

export const getBoardData = async () => {
  try {
    const boardData = await axios.get("api/game/start");
    return boardData.data;
  } catch (error) {
    throw error;
  }
};
