import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("products")
export class Products {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
  id!: number;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  star: number;

  @Field()
  tag: string;

  @Field()
  image: string
}
