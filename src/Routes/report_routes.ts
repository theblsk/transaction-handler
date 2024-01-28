import { Router } from "express";
import ReportService from "../Services/report_service";

const router = Router();
const dataService = new ReportService();

router.get("/", async (req, res) => {
  try {
    const data = await dataService.getAll();
    return res.status(200).json({
      message: "Connection Successful",
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("An error happened");
  }
});

export default router;
