import { Router } from "express";
import TransactionService from "../Services/transaction_service.ts";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dataService = new TransactionService();
    await dataService.createMany([
      {
        transactionDate: new Date(),
        transactionType: "debit",
      },
      {
        transactionDate: new Date(),
        transactionType: "credit",
      },
    ]);
    const data = await dataService.getAll();
    res.json({
      message: "Connection Successful",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error happened");
  }
});

export default router;
