import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API;

export const request = async () => {
  try {
    const response = await axios.get(`${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro na requisição: ${error}`);
  }
};
