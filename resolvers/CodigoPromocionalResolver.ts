import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { CodigoPromocional } from "../models/CodigoPromocional";
import { GraphQLError } from "graphql";
require("dotenv").config({ path: ".env.local" });

const API_URL = process.env.API_CAMPANHA_URL;

@Resolver()
export class CodigoPromocionalResolver {
  @Query(() => CodigoPromocional)
  async getCodigoPromocional(@Arg("bin") bin: string) {
    try {
      const response = await axios.get(`${API_URL}bin/${bin}`);
      const codigo: CodigoPromocional = {
        id: response.data.id,
        codigoPromocional: response.data.codigoPromocional,
        numeroMesesBonificacao: response.data.numeroMesesBonificacao,
        descricaoProduto: response.data.descricaoProduto,
      };
      return codigo;
    } catch (error) {
      throw new GraphQLError(
        `Erro ao buscar codigo promocional: ${error}`
      );
    }
  }
}
