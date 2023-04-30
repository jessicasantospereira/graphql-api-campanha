import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CodigoPromocional{
    @Field()
    id: string;
    @Field()
    codigoPromocional: string;
    @Field()
    numeroMesesBonificacao: string;
    @Field()
    descricaoProduto: string;
}