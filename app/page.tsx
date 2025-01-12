"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import Jumbotron from "./components/Jumbotron"; // Import the Jumbotron component

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiClient.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const imageUrls = products.map((product) => product.imageUrl); // Extract product images

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Jumbotron Section */}
      <Jumbotron
        images={products.map((product) => product.imageUrl)} // Map product images
        shopName="ImageBase Shop"
      />

      {/* Product List */}
      <ImageGallery products={products} />
    </main>
  );
}
