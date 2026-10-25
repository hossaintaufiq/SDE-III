import { Router } from "express";
import { createProductSchema } from "./product.validation";
import { createProduct,
    getProductById,
    getProducts, 
    deleteProduct,
    DuplicateProductError
 } from "./product.service";
import { ZodError } from "zod";


const router = Router();  

router.get("/", (_req, res) => {
  return res.status(200).json({
    data: getProducts(),
  });
});

router.post("/", (req,res,next)=> {
    try{
        const input = createProductSchema.parse(req.body);
        const product = createProduct(input);

        return res.status(201).json({
            data:product, 
        }); 
        
    }catch(error){ 
        
       return next(error);
    }
 
})

router.get("/:id", (req,res)=> {
    const product= getProductById(req.params.id);

    if(!product){
        return res.status(404).json({
            error:{
                code: "PRODUCT_NOT_FOUND",
                message: 'product not found', 
            }
        })
    }
    return res.status(200).json({
        data:product, 
    })

})

router.delete("/:id", (req,res)=> {
    const deleted =deleteProduct(req.params.id);

    if(!deleted){
        return res.status(404).json({
            error: {
                code: "PRODUCT_NOT_FOUND",
                message: "product not found",
            }
        })

    }
    return res.status(204).send(); 
})

export default router; 
