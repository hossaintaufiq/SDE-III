import express from "express";
import productRoutes from "./modules/Products/product.routes";
import { errorHandler } from "./middleware/error-handler";

const app = express();

app.use(express.json());
app.use(errorHandler); // Register the error handler middleware

app.get("/health", (_req, res) => {
  return res.status(200).json({
    status: "success",
    message: "API is healthy",
    service: "Product Catalog API",
  });
});

app.use("/api/products", productRoutes);

export default app;