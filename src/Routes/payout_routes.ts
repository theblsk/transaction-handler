import { Router } from "express";
import PayoutService from "../Services/payout_service";
import ReportService from "../Services/report_service";
import type { PayoutModel } from "../Models/Payout";

const router = Router();

const dataService = new PayoutService();
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
    res.status(500).send("An error happened");
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body as PayoutModel;
    const newData = await dataService.create(data);
    await reportService.updateOnPayoutCreation(data, newData.id);
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
