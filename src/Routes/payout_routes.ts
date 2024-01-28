import { Router } from "express";
import PayoutService from '../Services/payout_service';

const router = Router();

const dataService = new PayoutService();

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
  const data = req.body;

  const newData = await dataService.create(data);
  return res.status(201).json({
    message: "Data created",
    data: newData,
  });
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
