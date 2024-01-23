import {Router} from "express";
import transaction_routes from "./transaction_routes.ts";

const router = Router();

router.use("/transaction", transaction_routes);

router.get("/", async (req, res) => {
    res.json({
        message: "Welcome to Transaction Handler's api."
    });
});

export default router;