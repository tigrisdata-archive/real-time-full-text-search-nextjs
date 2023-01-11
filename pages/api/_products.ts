export type Product = {
  name: string;
  price: number;
  star: number;
  tag: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Winter Sweater",
    price: 60.0,
    star: 3,
    tag: "sale",
    image:
      "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Denim Dresses",
    price: 70.7,
    star: 4,
    tag: "out of stock",
    image:
      "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Empire Waist Dresses",
    price: 90.0,
    star: 5,
    tag: "new",
    image:
      "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Pinafore Dresses",
    price: 60.0,
    star: 5,
    tag: "new",
    image:
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Vintage Pinafore Dress",
    price: 84.0,
    star: 5,
    tag: "sale",
    image:
      "https://hellbunny.com/media/catalog/product/h/l/hlb40006-wonder-years-pinafore-dress-mustard-01_1_1.jpg?width=700&height=700&store=default&image-type=image",
  },
  {
    name: "Martin Black Dress",
    price: 70.9,
    star: 5,
    tag: "sale",
    image:
      "https://cdn-img.prettylittlething.com/2/0/b/f/20bf613769d11f84592c7f290f9c10aaca50d345_CLQ3250_1.JPG?imwidth=300",
  },
  {
    name: "Linen pinafore dress",
    price: 70.0,
    star: 3,
    tag: "new",
    image:
      "http://cdn.shopify.com/s/files/1/0313/1572/2378/products/linen-pinafore-dress-no-32-in-emmeline-check-pyne-and-smith-3.jpg?v=1651860592",
  },
  {
    name: "Pinafore Mini Dress",
    price: 90.0,
    star: 5,
    tag: "new",
    image:
      "https://www.lulus.com/images/product/xlarge/9585181_1968196.jpg?w=375&hdpi=1",
  },
];
