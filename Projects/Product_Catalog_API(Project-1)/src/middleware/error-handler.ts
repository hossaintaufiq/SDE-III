
import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { DuplicateProductError } from "../modules/Products/product.service";

export const errorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid product data",
        details: error.issues,
      },
    });
    return;
  }

  if (error instanceof DuplicateProductError) {
    res.status(409).json({
      error: {
        code: "DUPLICATE_PRODUCT",
        message: error.message,
      },
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred",
    },
  });
};
