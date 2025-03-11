const {
    AddCustomer,
    GetAllcustomer ,
    GetSinglecustomer,
  DeleteRecord,
  GetAllcustomerByPage

 } = require("../Controller/Customer")
const express = require("express")

const router = express.Router()

router.post('/customer', AddCustomer)

router.get("/customer", GetAllcustomer)

router.get("/customerbypage", GetAllcustomerByPage)

router.get("/customer/:id",GetSinglecustomer)

router.delete("/customer/:id",DeleteRecord)





module.exports = router