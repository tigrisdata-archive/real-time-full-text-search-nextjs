import {
  Field,
  PrimaryKey,
  SearchField,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("products")
export class Product {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
  id!: number;

  @SearchField()
  @Field()
  name: string;

  @Field()
  price: number;

  @SearchField({ sort: true })
  @Field()
  star: number;

  @SearchField()
  @Field()
  tag: string;

  @Field()
  image: string;
}
