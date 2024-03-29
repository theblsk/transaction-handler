import { Router } from "express";
import TransactionService from "../Services/transaction_service.ts";
import Transaction, { type TransactionModel } from "../Models/Transaction.ts";
import ReportService from "../Services/report_service.ts";

const router = Router();

const dataService = new TransactionService();
const reportService = new ReportService();

router.get("/", async (req, res) => {
  try {
    const data = await dataService.getAll();
    return res.status(200).json({
      message: "Connection Successful",
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error happened");
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body as TransactionModel;
    const newData = await dataService.create(data); 
    await reportService.updateOnTransactionCreation(data, newData.id)
    return res.status(201).json({
      message: "Data created",
      data: newData,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("An error happened");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const data = await dataService.getById(id);
  return res.status(200).json({
    message: "Data found",
    data,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedData = await dataService.update(id, data);
  return res.status(200).json({
    message: "Data updated",
    data: updatedData,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedData = await dataService.delete(id);
  return res.status(200).json({
    message: "Data deleted",
    data: deletedData,
  });
});

export default router;
