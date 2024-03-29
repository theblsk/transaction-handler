import {Router} from "express";
import transaction_routes from "./transaction_routes.ts";
import payout_routes from "./payout_routes.ts";
import report_routes from "./report_routes.ts";

const router = Router();

router.use("/transaction", transaction_routes);
router.use("/payout", payout_routes);
router.use("/report", report_routes);

router.get("/", async (req, res) => {
    res.json({
        message: "Welcome to Transaction Handler's api."
    });
});

export default router;